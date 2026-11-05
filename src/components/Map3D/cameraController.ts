import * as THREE from 'three';
import { latLngToWorld, getTerrainElevation } from './geoUtils';
import { TourStop } from '../../data/toursData';

export interface CameraState {
  currentEye: THREE.Vector3;
  targetEye: THREE.Vector3;
  currentLookAt: THREE.Vector3;
  targetLookAt: THREE.Vector3;
  isFlying: boolean;
}

export class CameraChoreographer {
  private camera: THREE.PerspectiveCamera;
  private state: CameraState;
  private isUserInteracting = false;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;

    // Initial overview position: Looking across Odisha from the Bay of Bengal
    const defaultEye = new THREE.Vector3(25, 65, 75);
    const defaultLookAt = new THREE.Vector3(0, 0, 0);

    this.state = {
      currentEye: defaultEye.clone(),
      targetEye: defaultEye.clone(),
      currentLookAt: defaultLookAt.clone(),
      targetLookAt: defaultLookAt.clone(),
      isFlying: false,
    };

    this.camera.position.copy(defaultEye);
    this.camera.lookAt(defaultLookAt);
  }

  /**
   * Resets camera to bird's-eye regional overview
   */
  public resetToOverview() {
    this.state.targetEye.set(10, 68, 70);
    this.state.targetLookAt.set(0, 0, -2);
    this.state.isFlying = true;
  }

  /**
   * Smoothly flies camera to focus on a specific heritage place
   */
  public flyToPlace(lat: number, lng: number, distance = 24) {
    const { x, z } = latLngToWorld(lat, lng);
    const groundY = Math.max(0.1, getTerrainElevation(x, z));

    // Scenic offset (camera positioned slightly south-east and above target)
    this.state.targetLookAt.set(x, groundY + 1.5, z);
    this.state.targetEye.set(
      x + distance * 0.5,
      groundY + distance * 0.65,
      z + distance * 0.8
    );
    this.state.isFlying = true;
  }

  /**
   * Flies camera to a guided tour stop waypoint with custom pitch and heading
   */
  public flyToTourStop(stop: TourStop) {
    const { x, z } = latLngToWorld(stop.targetLat, stop.targetLng);
    const groundY = Math.max(0.1, getTerrainElevation(x, z));

    const dist = stop.cameraElevation;
    const radHeading = (stop.headingDeg * Math.PI) / 180;
    const radPitch = (stop.pitchAngleDeg * Math.PI) / 180;

    const eyeX = x + Math.sin(radHeading) * Math.cos(radPitch) * dist;
    const eyeY = groundY + Math.sin(radPitch) * dist;
    const eyeZ = z + Math.cos(radHeading) * Math.cos(radPitch) * dist;

    this.state.targetLookAt.set(x, groundY + 1.5, z);
    this.state.targetEye.set(eyeX, Math.max(groundY + 4, eyeY), eyeZ);
    this.state.isFlying = true;
  }

  /**
   * Called every frame in RAF loop to smoothly interpolate camera motion
   */
  public update(delta: number) {
    if (this.isUserInteracting) return;

    // Exponential smoothing factor
    const damping = Math.min(1, delta * 3.2);

    this.state.currentEye.lerp(this.state.targetEye, damping);
    this.state.currentLookAt.lerp(this.state.targetLookAt, damping);

    this.camera.position.copy(this.state.currentEye);
    this.camera.lookAt(this.state.currentLookAt);

    // Stop flying flag when close to target
    if (
      this.state.currentEye.distanceTo(this.state.targetEye) < 0.1 &&
      this.state.currentLookAt.distanceTo(this.state.targetLookAt) < 0.1
    ) {
      this.state.isFlying = false;
    }
  }

  /**
   * Handles user orbit / drag gestures
   */
  public handleUserOrbit(deltaX: number, deltaY: number) {
    this.state.isFlying = false;
    const offset = this.camera.position.clone().sub(this.state.currentLookAt);

    // Spherical coordinates rotation
    const spherical = new THREE.Spherical().setFromVector3(offset);
    spherical.theta -= deltaX * 0.005;
    spherical.phi = Math.max(0.15, Math.min(Math.PI / 2 - 0.05, spherical.phi - deltaY * 0.005));

    offset.setFromSpherical(spherical);
    this.camera.position.copy(this.state.currentLookAt).add(offset);
    this.camera.lookAt(this.state.currentLookAt);

    this.state.currentEye.copy(this.camera.position);
    this.state.targetEye.copy(this.camera.position);
  }

  /**
   * Handles user zoom
   */
  public handleUserZoom(zoomDelta: number) {
    this.state.isFlying = false;
    const offset = this.camera.position.clone().sub(this.state.currentLookAt);
    const currentDist = offset.length();
    const newDist = Math.max(12, Math.min(160, currentDist + zoomDelta));

    offset.setLength(newDist);
    this.camera.position.copy(this.state.currentLookAt).add(offset);

    this.state.currentEye.copy(this.camera.position);
    this.state.targetEye.copy(this.camera.position);
  }

  /**
   * Handles user pan
   */
  public handleUserPan(panX: number, panY: number) {
    this.state.isFlying = false;
    const panVector = new THREE.Vector3(-panX * 0.08, 0, panY * 0.08);
    this.camera.position.add(panVector);
    this.state.currentLookAt.add(panVector);
    this.state.currentEye.copy(this.camera.position);
    this.state.targetEye.copy(this.camera.position);
    this.state.targetLookAt.copy(this.state.currentLookAt);
  }

  public setUserInteracting(interacting: boolean) {
    this.isUserInteracting = interacting;
  }
}

import React from 'react';

/**
 * Authentic Odisha state map outline logo component,
 * traced with precision from the official GIS silhouette.
 */
export default function OdishaLogo({
  className = 'w-8 h-8',
  color = '#F59E0B',
}: {
  className?: string;
  color?: string;
}) {
  const pathData =
    'M 74 4 L 77.6 6 L 82.2 9 L 86.2 13 L 90.1 16.5 L 92.4 17.2 L 95.6 20.2 L 91.1 23.7 L 86.1 32.3 L 87.9 38.8 L 86.5 42.1 L 85.1 45.8 L 85.1 46.9 L 79.8 53.3 L 77.9 54.6 L 71.9 56.8 L 66.7 59 L 66.8 57 L 62.4 57.5 L 60.3 62 L 62.2 60.7 L 64.5 59.9 L 62.4 62.3 L 58.9 66 L 53.2 70.4 L 52 72.3 L 49.1 74.8 L 46.5 76.7 L 39.9 72.6 L 38.1 70.6 L 35.6 71.5 L 34.6 73.2 L 33.6 74.5 L 31.3 77.8 L 28.6 80.2 L 28.6 83.1 L 25 83.7 L 23.3 86.2 L 20.7 82.2 L 17.9 87.5 L 17.5 91 L 12.3 92.1 L 7.2 95.4 L 4 95.4 L 5.3 90.8 L 9.3 84.6 L 12.2 80.5 L 13.5 78.2 L 16.5 72.4 L 15.4 65.8 L 13.6 61 L 12.1 56.1 L 13.2 52.4 L 17.7 55.9 L 22 56.3 L 23.7 55.5 L 19.1 52.2 L 19.1 46.3 L 18.5 40.4 L 21.3 35.5 L 24.7 31 L 31.2 31.2 L 33.3 27.4 L 34.9 21.3 L 36.9 17.6 L 37.2 12.1 L 43.8 6.6 L 44.8 5.7 L 48.6 8.2 L 52.9 6.4 L 57.5 6 L 59.8 9.3 L 61.2 13.8 L 64.7 11.9 L 69.3 13.8 L 70.1 15.2 L 73.1 10.3 L 72.9 5.5 Z';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Odisha state outline"
    >
      <path
        d={pathData}
        fill={color}
        fillOpacity="0.22"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

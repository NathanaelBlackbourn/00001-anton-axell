import colors from '@/styles/variables/colors.module.scss';
import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='16' cy='16' r='16' fill={colors.colorYellow} />
      </svg>
    ),
    size
  );
}

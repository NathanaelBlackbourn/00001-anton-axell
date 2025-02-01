'use client';

import { useDraftModeEnvironment } from 'next-sanity/hooks';
import BlurCell from '../BlurCell/BlurCell';
import classes from './DisableDraftMode.module.scss';

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  if (environment !== 'live' && environment !== 'unknown') {
    return null;
  }

  return (
    <BlurCell
      as="a"
      href="/api/draft-mode/disable"
      className={classes['anchor']}
    >
      Disable Draft Mode
    </BlurCell>
  );
}

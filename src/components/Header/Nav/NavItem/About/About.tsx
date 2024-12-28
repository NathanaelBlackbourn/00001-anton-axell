'use client';

import { HEADER_QUERYResult } from '@/sanity/types';
import NavItem from '../NavItem';
import classes from './About.module.scss';
import SanityImage from '@/components/SanityImage/SanityImage';
import { useState } from 'react';

interface AboutProps {
  aboutData: HEADER_QUERYResult['about'];
}

const About = ({ aboutData }: AboutProps) => {
  const [isLoadingReady, setIsLoadingReady] = useState(false);

  return (
    <NavItem label="About" setLoadingReady={setIsLoadingReady}>
      {aboutData?.image?.asset && (
        <SanityImage
          asset={aboutData.image.asset}
          className={classes['sanity-image']}
          isLoadingReady={isLoadingReady}
        />
      )}
      {aboutData?.text && <p className={classes['text']}>{aboutData.text}</p>}
    </NavItem>
  );
};

export default About;

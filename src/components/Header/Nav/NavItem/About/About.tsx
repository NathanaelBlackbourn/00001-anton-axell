'use client';

import SanityImage from '@/components/SanityImage/SanityImage';
import { HEADER_QUERYResult } from '@/sanity/types';
import { useState } from 'react';
import NavItem from '../NavItem';
import classes from './About.module.scss';

interface AboutProps {
  aboutData: HEADER_QUERYResult['about'];
}

const About = ({ aboutData }: AboutProps) => {
  const [isLoadingReady, setIsLoadingReady] = useState(false);

  return (
    <NavItem label="About" setLoadingReady={setIsLoadingReady}>
      {aboutData?.image?._ref && (
        <SanityImage
          image={aboutData.image}
          className={classes['sanity-image']}
          isLoadingReady={isLoadingReady}
        />
      )}
      {aboutData?.text && <p className={classes['text']}>{aboutData.text}</p>}
    </NavItem>
  );
};

export default About;

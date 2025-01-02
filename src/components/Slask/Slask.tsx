'use client';

import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import SlaskBlock from './SlaskBlock/SlaskBlock';

interface SlaskProps {
  slask: NonNullable<HOME_PAGE_QUERYResult>['slask'];
}

const Slask = ({ slask }: SlaskProps) => {
  return slask
    ? slask.map((slaskBlock, i) => <SlaskBlock {...slaskBlock} key={i} />)
    : null;
};

export default Slask;

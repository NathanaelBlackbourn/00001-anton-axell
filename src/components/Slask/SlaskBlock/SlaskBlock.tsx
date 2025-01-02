'use client';

import { useEffect, useRef } from 'react';
import classes from './SlaskBlock.module.scss';
import SlaskItem from '../SlaskItem/SlaskItem';
import { ArrayElement } from '@/types';
import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import { createHeadTrigger } from './scrollTriggers';

type SlaskBlockProps = ArrayElement<
  NonNullable<NonNullable<HOME_PAGE_QUERYResult>['slask']>
>;

const SlaskBlock = ({ body, head }: SlaskBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger =
      headRef.current &&
      containerRef.current &&
      createHeadTrigger(headRef.current, containerRef.current);

    return () => {
      trigger && trigger.kill();
    };
  }, [headRef, containerRef]);

  return (
    <div className={classes['container']} ref={containerRef}>
      {head && (
        <div className={classes['head']} ref={headRef}>
          {head?.map((slaskItem, i) => (
            <SlaskItem {...slaskItem} i={i} key={i} variant="head" />
          ))}
        </div>
      )}
      {body && (
        <div className={classes['body']}>
          {body?.map((slaskItem, i) => (
            <SlaskItem {...slaskItem} i={i} key={i} variant="body" />
          ))}
        </div>
      )}
    </div>
  );
};

export default SlaskBlock;
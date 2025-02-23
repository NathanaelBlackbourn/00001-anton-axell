import SanityImage from '@/components/SanityImage/SanityImage';
import { HOME_PAGE_QUERYResult } from '@/sanity/types';
import { ArrayElement } from '@/types';
import { ReactNode } from 'react';
import classes from './SlaskItem.module.scss';

type SlaskItemResult = ArrayElement<
  NonNullable<
    ArrayElement<
      NonNullable<NonNullable<HOME_PAGE_QUERYResult>['slask']>
    >['body']
  >
>;

type SlaskItemProps = SlaskItemResult & {
  i: number;
  variant: 'head' | 'body';
};

const SlaskItem = ({
  _type,
  image,
  colStart,
  colEnd,
  i,
  variant,
}: SlaskItemProps) => {
  const resolveComponent = () => {
    let content: ReactNode | null = null;

    switch (_type) {
      case 'slaskImg':
        content = image?._ref && (
          <SanityImage image={image} className={classes['media']} log={variant === 'body'}/>
        );

        return (
          <div
            style={{
              ['--lg-col-pos' as string]: `${colStart} / ${colEnd}`,
            }}
            className={classes[`media-wrapper-${variant}`]}
            key={i}
          >
            {content}
          </div>
        );
    }
  };

  return resolveComponent();
};

export default SlaskItem;

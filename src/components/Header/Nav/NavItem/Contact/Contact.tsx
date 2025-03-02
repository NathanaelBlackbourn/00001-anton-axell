import { HEADER_QUERYResult } from '@/sanity/types';
import NavItem from '../NavItem';
import classes from './Contact.module.scss';
interface ContactProps {
  contactData: HEADER_QUERYResult['contact'];
  isTransparent?: boolean;
}

const Contact = ({ contactData, isTransparent }: ContactProps) => {
  return (
    <NavItem label='Contact' isTransparent={isTransparent}>
      <div className={classes['contact-container']}>
        <p>
          <a
            className={classes['contact-link']}
            href={`tel:${contactData?.phone}`}
          >
            {contactData?.phone}
          </a>
        </p>
        <p>
          <a
            className={classes['contact-link']}
            href={`mailto:${contactData?.email}`}
          >
            {contactData?.email}
          </a>
        </p>
      </div>
    </NavItem>
  );
};

export default Contact;

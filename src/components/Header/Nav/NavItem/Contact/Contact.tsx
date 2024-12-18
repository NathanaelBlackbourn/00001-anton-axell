import { HEADER_QUERYResult } from '@/sanity/types';
import classes from './Contact.module.scss';
import NavItem from '../NavItem';
interface ContactProps {
  contactData: HEADER_QUERYResult['contact'];
}

const Contact = ({ contactData }: ContactProps) => {
  return (
    <NavItem label="Contact">
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

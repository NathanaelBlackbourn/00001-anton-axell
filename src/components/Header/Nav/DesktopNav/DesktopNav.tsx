import { HEADER_QUERYResult } from "@/sanity/types";
import About from "../NavItem/About/About";
import Contact from "../NavItem/Contact/Contact";
import classes from "./DesktopNav.module.scss";

interface DesktopNavProps {
  about: HEADER_QUERYResult["about"];
  contact: HEADER_QUERYResult["contact"];
}

const DesktopNav = ({ about, contact }: DesktopNavProps) => {
  return (
    <>
      <div className={classes["col-1"]}>
        <About aboutData={about} />
        {/* <Contact contactData={headerData.contact} /> */}
      </div>
      <div className={classes["col-2"]}>
        <Contact contactData={contact} />
        {/* <NavItem label="Projects">
          <></>
        </NavItem>
        <NavItem label="Texts">
          <></>
        </NavItem> */}
      </div>
    </>
  );
};

export default DesktopNav;

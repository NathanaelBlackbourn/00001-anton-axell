import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const registerGSAPPlugins = () => {
  gsap.registerPlugin(ScrollTrigger);
};

export default registerGSAPPlugins;

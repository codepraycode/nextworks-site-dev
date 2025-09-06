import {
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  ServerIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Operational Efficiency Solutions",
  desc: "NextWorks helps organizations minimize risks and mitigate high costs through technology solutions that optimize operations and reduce overhead.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Cost Reduction",
      desc: "Implement solutions that reduce operational expenses and improve ROI",
      icon: <ChartBarIcon />,
    },
    {
      title: "Risk Mitigation",
      desc: "Advanced security and surveillance systems to protect your assets",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Future-Proof Technology",
      desc: "Durable, scalable solutions that grow with your business needs",
      icon: <CogIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Industry-Specific Expertise",
  desc: "With experience across aviation, healthcare, education, and manufacturing, we understand the unique technology challenges of different sectors.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Aviation Sector Solutions",
      desc: "Specialized IT infrastructure for airlines and aviation services",
      icon: <ServerIcon />,
    },
    {
      title: "Healthcare Technology",
      desc: "Secure systems for healthcare institutions and medical facilities",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Educational Infrastructure",
      desc: "Campus-wide networking and collaboration tools for educational institutions",
      icon: <UserGroupIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

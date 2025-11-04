import { BenefitProps } from "@/types";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    CpuChipIcon,
    HomeModernIcon,
    CodeBracketIcon,
    AcademicCapIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";

const benefitOneImg = "/img/benefit-one.png";
const benefitTwoImg = "/img/benefit-two.png";
const benefitThreeImg = "/img/benefit-three.png";




export const benefitOne: BenefitProps = {
    title: "AI Integration & Smart Automation",
    desc: "Transform your business with intelligent systems that learn, adapt, and optimize operations automatically.",
    image: benefitOneImg,
    bullets: [
        {
            title: "AI-Powered Solutions",
            desc: "Machine learning and AI systems that automate complex processes and provide intelligent insights",
            icon: <CpuChipIcon />,
        },
        {
            title: "Smart Office & Home Automation",
            desc: "Complete automation solutions for lighting, climate control, security, and energy management",
            icon: <HomeModernIcon />,
        },
        {
            title: "Intelligent Process Optimization",
            desc: "AI-driven analytics that identify inefficiencies and recommend optimizations in real-time",
            icon: <ArrowPathIcon />,
        },
    ],
};

export const benefitTwo: BenefitProps = {
    title: "Software Development & ICT Infrastructure",
    desc: "Custom software solutions and robust ICT infrastructure designed to scale with your business needs.",
    image: benefitTwoImg,
    bullets: [
        {
            title: "Custom Software Development",
            desc: "Tailored applications and platforms built to solve your unique business challenges",
            icon: <CodeBracketIcon />,
        },
        {
            title: "Enterprise ICT Solutions",
            desc: "Comprehensive network infrastructure, cloud services, and cybersecurity systems",
            icon: <ServerIcon />,
        },
        {
            title: "Advanced Security Systems",
            desc: "Multi-layered security solutions protecting both physical and digital assets",
            icon: <ShieldCheckIcon />,
        },
    ],
};

export const benefitThree: BenefitProps = {
    title: "Tech Education & Talent Development",
    desc: "Bridging the skills gap by nurturing the next generation of technology innovators and professionals.",
    image: benefitThreeImg,
    bullets: [
        {
            title: "Hands-On Training Programs",
            desc: "Practical training in software development, AI, robotics, and emerging technologies",
            icon: <AcademicCapIcon />,
        },
        {
            title: "Robotics & STEM Education",
            desc: "Comprehensive programs introducing students to robotics, automation, and engineering principles",
            icon: <Cog8ToothIcon />,
        },
        {
            title: "Industry Mentorship",
            desc: "Direct mentorship from experienced professionals working on real-world projects",
            icon: <CloudArrowUpIcon />,
        },
    ],
};

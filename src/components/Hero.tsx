import Image from "next/image";
import { Container } from "@/components/Container";
import { Fragment } from "react";

export const Hero = () => {
    return (
        <Fragment>
            <Container className="flex flex-wrap items-center min-h-[90vh] mt-10">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl">
                        {/* Animated badge */}
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full darkk:bg-blue-900/30 darkk:text-blue-400 animate-fade-in">
                            <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full animate-pulse"></span>
                            Transforming Businesses Since 2010
                        </div>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight darkk:text-white animate-slide-up">
                            Intelligent Technology{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Solutions
                            </span>{" "}
                            for a Smarter Future
                        </h1>

                        <p className="py-6 text-lg leading-relaxed text-gray-600 lg:text-xl xl:text-2xl darkk:text-gray-300 animate-slide-up animation-delay-200">
                            NextWorks delivers cutting-edge{" "}
                            <span className="font-semibold text-gray-800 darkk:text-white">
                                software development
                            </span>
                            ,{" "}
                            <span className="font-semibold text-gray-800 darkk:text-white">
                                AI integration
                            </span>
                            , and{" "}
                            <span className="font-semibold text-gray-800 darkk:text-white">
                                smart automation
                            </span>
                            . We&apos;re committed to developing the next generation
                            of tech talent through education and mentorship.
                        </p>

                        <div className="flex flex-col items-start space-y-4 sm:space-x-6 sm:space-y-0 sm:items-center sm:flex-row animate-slide-up animation-delay-400">
                            <a
                                href="#ai-solutions"
                                className="group relative px-8 py-4 text-lg font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="relative z-10">
                                    Explore Solutions
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <a
                                href="#education"
                                className="group px-8 py-4 text-lg font-semibold text-center text-gray-800 bg-transparent border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 darkk:border-gray-600 darkk:text-white darkk:hover:border-blue-400 darkk:hover:text-blue-400"
                            >
                                <span className="flex items-center">
                                    Learn & Grow
                                    <svg
                                        className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-in animation-delay-600">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-800 lg:text-3xl darkk:text-white">
                                    13+
                                </div>
                                <div className="text-sm text-gray-600 darkk:text-gray-400">
                                    Years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-800 lg:text-3xl darkk:text-white">
                                    200+
                                </div>
                                <div className="text-sm text-gray-600 darkk:text-gray-400">
                                    Clients Served
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-800 lg:text-3xl darkk:text-white">
                                    50+
                                </div>
                                <div className="text-sm text-gray-600 darkk:text-gray-400">
                                    Tech Talents Trained
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SVG Illustration Section */}
                <div className="flex items-center justify-center w-full lg:w-1/2 mt-12 lg:mt-0">
                    <div className="relative w-full max-w-lg">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-6 scale-105 opacity-10"></div>

                        {/* Main SVG Illustration */}
                        <div className="relative group">
                            <TechIllustration />

                            {/* Floating elements */}
                            <div className="absolute top-4 left-4 bg-white darkk:bg-gray-800 rounded-lg p-3 shadow-lg animate-float">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-700 darkk:text-gray-300">
                                        AI Powered
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-4 right-4 bg-white darkk:bg-gray-800 rounded-lg p-3 shadow-lg animate-float animation-delay-1000">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-700 darkk:text-gray-300">
                                        Smart Automation
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Trusted By Section */}
            <Container className="">
                <div className="flex flex-col justify-center">
                    <div className="text-lg text-center text-gray-600 darkk:text-gray-300 mb-12 animate-fade-in">
                        Trusted by leading organizations and educational
                        institutions across Africa
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                        {[
                            {
                                component: <BritishAirwaysLogo />,
                                name: "British Airways",
                            },
                            { component: <LufthansaLogo />, name: "Lufthansa" },
                            {
                                component: <ReckittBenckiserLogo />,
                                name: "Reckitt Benckiser",
                            },
                            {
                                component: <GalaxyBackboneLogo />,
                                name: "Galaxy Backbone",
                            },
                            {
                                component: <UniversityLogo />,
                                name: "University Partners",
                            },
                            {
                                component: <TechEducationLogo />,
                                name: "Tech Education",
                            },
                        ].map((client, index) => (
                            <div
                                key={client.name}
                                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                                title={client.name}
                            >
                                {client.component}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

// Main Technology Illustration SVG
function TechIllustration() {
    return (
        <svg
            viewBox="0 0 600 500"
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background Circle */}
            <circle
                cx="300"
                cy="250"
                r="200"
                fill="url(#gradientBg)"
                opacity="0.1"
            />

            {/* Central Brain/AI Symbol */}
            <g
                className="group-hover:scale-110 transition-transform duration-300"
                transform="translate(300, 200)"
            >
                {/* Brain outline */}
                <path
                    d="M -40 -30 Q -60 0 -40 30 Q 0 50 40 30 Q 60 0 40 -30 Q 0 -50 -40 -30"
                    fill="url(#brainGradient)"
                    stroke="#3B82F6"
                    strokeWidth="2"
                />
                {/* Neural connections */}
                <path
                    d="M -20 -10 L 20 -10 M -15 0 L 15 0 M -20 10 L 20 10"
                    stroke="#1D4ED8"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle
                    cx="-25"
                    cy="-20"
                    r="3"
                    fill="#60A5FA"
                    className="animate-pulse"
                />
                <circle
                    cx="25"
                    cy="-20"
                    r="3"
                    fill="#60A5FA"
                    className="animate-pulse"
                />
                <circle
                    cx="-20"
                    cy="20"
                    r="3"
                    fill="#60A5FA"
                    className="animate-pulse animation-delay-500"
                />
                <circle
                    cx="20"
                    cy="20"
                    r="3"
                    fill="#60A5FA"
                    className="animate-pulse animation-delay-500"
                />
            </g>

            {/* Software Development - Code Brackets */}
            <g
                transform="translate(150, 100)"
                className="group-hover:translate-x-2 transition-transform duration-700"
            >
                <rect
                    x="-25"
                    y="-20"
                    width="50"
                    height="40"
                    rx="8"
                    fill="white"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    className="darkk:fill-gray-800 darkk:stroke-gray-700"
                />
                <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="monospace"
                    fontSize="14"
                    fill="#3B82F6"
                    className="font-bold"
                >
                    {`{ }`}
                </text>
                <path
                    d="M -30 -25 L -40 -35 M -30 25 L -40 35 M 30 -25 L 40 -35 M 30 25 L 40 35"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </g>

            {/* Smart Home/Office - Building */}
            <g
                transform="translate(450, 350)"
                className="group-hover:-translate-y-2 transition-transform duration-700"
            >
                <rect
                    x="-30"
                    y="-40"
                    width="60"
                    height="40"
                    fill="white"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                    className="darkk:fill-gray-800 darkk:stroke-gray-700"
                />
                <rect
                    x="-25"
                    y="-35"
                    width="50"
                    height="30"
                    fill="#F3F4F6"
                    className="darkk:fill-gray-700"
                />
                {/* Windows */}
                <rect
                    x="-20"
                    y="-30"
                    width="8"
                    height="8"
                    fill="#60A5FA"
                    opacity="0.7"
                />
                <rect
                    x="-5"
                    y="-30"
                    width="8"
                    height="8"
                    fill="#60A5FA"
                    opacity="0.7"
                />
                <rect
                    x="10"
                    y="-30"
                    width="8"
                    height="8"
                    fill="#60A5FA"
                    opacity="0.7"
                />
                <rect
                    x="-20"
                    y="-15"
                    width="8"
                    height="8"
                    fill="#60A5FA"
                    opacity="0.7"
                />
                <rect
                    x="-5"
                    y="-15"
                    width="8"
                    height="8"
                    fill="#60A5FA"
                    opacity="0.7"
                />
                <rect
                    x="10"
                    y="-15"
                    width="8"
                    height="8"
                    fill="#60A5FA"
                    opacity="0.7"
                />
                {/* Roof */}
                <path
                    d="M -35 -40 L 0 -55 L 35 -40"
                    fill="#EF4444"
                    stroke="#DC2626"
                    strokeWidth="2"
                />
            </g>

            {/* Education - Graduation Cap */}
            <g
                transform="translate(150, 350)"
                className="group-hover:rotate-12 transition-transform duration-700"
            >
                <path
                    d="M -30 -10 L 30 -10 L 20 10 L -20 10 Z"
                    fill="#10B981"
                    stroke="#059669"
                    strokeWidth="2"
                />
                <path
                    d="M -25 10 Q 0 15 25 10"
                    stroke="#059669"
                    strokeWidth="2"
                    fill="none"
                />
                <path
                    d="M 0 -10 L 0 -25 M -10 -15 L 10 -15"
                    stroke="#059669"
                    strokeWidth="2"
                />
                <circle
                    cx="0"
                    cy="-30"
                    r="8"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="2"
                />
            </g>

            {/* Robotics/Automation - Robot */}
            <g
                transform="translate(450, 100)"
                className="group-hover:scale-110 transition-transform duration-700"
            >
                {/* Body */}
                <rect
                    x="-20"
                    y="-15"
                    width="40"
                    height="30"
                    rx="5"
                    fill="#6B7280"
                    stroke="#4B5563"
                    strokeWidth="2"
                />
                {/* Head */}
                <rect
                    x="-15"
                    y="-30"
                    width="30"
                    height="15"
                    rx="3"
                    fill="#9CA3AF"
                    stroke="#6B7280"
                    strokeWidth="2"
                />
                {/* Eyes */}
                <circle
                    cx="-8"
                    cy="-25"
                    r="3"
                    fill="#3B82F6"
                    className="animate-pulse"
                />
                <circle
                    cx="8"
                    cy="-25"
                    r="3"
                    fill="#3B82F6"
                    className="animate-pulse"
                />
                {/* Antenna */}
                <path
                    d="M 0 -30 L 0 -40 M -3 -40 L 3 -40"
                    stroke="#EF4444"
                    strokeWidth="2"
                />
                {/* Arms */}
                <rect
                    x="-25"
                    y="-10"
                    width="5"
                    height="12"
                    rx="2"
                    fill="#6B7280"
                />
                <rect
                    x="20"
                    y="-10"
                    width="5"
                    height="12"
                    rx="2"
                    fill="#6B7280"
                />
            </g>

            {/* Connecting Lines */}
            <g
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.6"
            >
                <path d="M 300 200 L 180 100 M 300 200 L 420 100 M 300 200 L 180 350 M 300 200 L 420 350" />
            </g>

            {/* Floating particles */}
            <circle
                cx="100"
                cy="200"
                r="2"
                fill="#3B82F6"
                className="animate-float"
            >
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </circle>
            <circle
                cx="500"
                cy="150"
                r="2"
                fill="#10B981"
                className="animate-float animation-delay-1000"
            >
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </circle>
            <circle
                cx="200"
                cy="400"
                r="2"
                fill="#F59E0B"
                className="animate-float animation-delay-500"
            >
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </circle>
            <circle
                cx="400"
                cy="400"
                r="2"
                fill="#EF4444"
                className="animate-float animation-delay-1500"
            >
                <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                />
            </circle>

            {/* Gradients */}
            <defs>
                <linearGradient
                    id="gradientBg"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient
                    id="brainGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="#DBEAFE" />
                    <stop offset="100%" stopColor="#E0E7FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Enhanced logo components (keep the same as before)
function BritishAirwaysLogo() {
    return (
        <svg
            width="120"
            height="36"
            viewBox="0 0 120 36"
            fill="currentColor"
            className="text-gray-700 darkk:text-gray-300"
        >
            <path d="M60 18C60 8.06 52.94 1 43 1S26 8.06 26 18s7.06 17 17 17 17-7.06 17-17zM43 31c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
            <path d="M96 18c0-9.94-7.06-17-17-17S62 8.06 62 18s7.06 17 17 17 17-7.06 17-17zM79 31c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
            <path d="M43 14c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM79 14c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
        </svg>
    );
}

function LufthansaLogo() {
    return (
        <svg
            width="120"
            height="36"
            viewBox="0 0 120 36"
            fill="currentColor"
            className="text-gray-700 darkk:text-gray-300"
        >
            <path d="M12 8h96v4H12zM12 16h96v4H12zM12 24h96v4H12z" />
            <circle cx="28" cy="18" r="6" fill="#1A365D" />
            <circle cx="92" cy="18" r="6" fill="#1A365D" />
        </svg>
    );
}

function ReckittBenckiserLogo() {
    return (
        <svg
            width="120"
            height="36"
            viewBox="0 0 120 36"
            fill="currentColor"
            className="text-gray-700 darkk:text-gray-300"
        >
            <path d="M22 8h76v4H22zM22 16h76v4H22zM22 24h76v4H22z" />
            <rect x="32" y="12" width="12" height="12" rx="2" fill="#2563EB" />
            <rect x="72" y="12" width="12" height="12" rx="2" fill="#2563EB" />
        </svg>
    );
}

function GalaxyBackboneLogo() {
    return (
        <svg
            width="120"
            height="36"
            viewBox="0 0 120 36"
            fill="currentColor"
            className="text-gray-700 darkk:text-gray-300"
        >
            <circle cx="22" cy="18" r="5" fill="#7C3AED" />
            <circle cx="42" cy="18" r="5" fill="#7C3AED" />
            <circle cx="62" cy="18" r="5" fill="#7C3AED" />
            <circle cx="82" cy="18" r="5" fill="#7C3AED" />
            <path d="M22 13h60v10H22z" opacity="0.3" />
        </svg>
    );
}

function UniversityLogo() {
    return (
        <svg
            width="120"
            height="36"
            viewBox="0 0 120 36"
            fill="currentColor"
            className="text-gray-700 darkk:text-gray-300"
        >
            <path d="M32 8h56v4H32zM32 16h56v4H32zM32 24h56v4H32z" />
            <path
                d="M42 8v20M52 8v20M62 8v20M72 8v20"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}

function TechEducationLogo() {
    return (
        <svg
            width="120"
            height="36"
            viewBox="0 0 120 36"
            fill="currentColor"
            className="text-gray-700 darkk:text-gray-300"
        >
            <path d="M27 10l32 16-32 16-32-16z" fill="#059669" />
            <path
                d="M59 25v10M37 17v16M49 20v13"
                stroke="white"
                strokeWidth="2"
            />
            <circle cx="69" cy="30" r="3" fill="white" />
        </svg>
    );
}

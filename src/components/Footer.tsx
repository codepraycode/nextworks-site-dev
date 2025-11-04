"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const navigation = [
        { name: "AI Solutions", href: "#ai-solutions" },
        { name: "Software Development", href: "#software-development" },
        { name: "Education", href: "#education" },
        { name: "Showcase", href: "#showcase" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    const services = [
        {
            name: "AI Integration",
            description: "Smart automation & machine learning",
        },
        {
            name: "Software Development",
            description: "Custom applications & platforms",
        },
        {
            name: "Smart Automation",
            description: "Office & home automation systems",
        },
        {
            name: "ICT Infrastructure",
            description: "Network & security solutions",
        },
        {
            name: "Tech Education",
            description: "Training & talent development",
        },
    ];

    const legal = [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Service Level Agreement", href: "/sla" },
        { name: "Cookie Policy", href: "/cookies" },
    ];

    const contactInfo = [
        {
            label: "Phone",
            value: "+234 (0) 808 024 0366",
            href: "tel:+2348080240366",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
            ),
        },
        {
            label: "Email",
            value: "info@nextworks.com.ng",
            href: "mailto:info@nextworks.com.ng",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            label: "Address",
            value: "8 Kehinde Akamo, Off Michael Adekoya Road, Ilupeju Lagos",
            icon: (
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 darkk:from-gray-900 darkk:to-blue-900/20 border-t border-gray-200 darkk:border-gray-800">
            <Container>
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 pt-16 pb-12 mx-auto lg:grid-cols-4">
                    {/* Company Info & Contact */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <Image
                                    src="/img/logo.svg"
                                    alt="NextWorks Limited"
                                    width="48"
                                    height="48"
                                    className="w-12 h-12"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 darkk:text-white">
                                    NextWorks
                                </h2>
                                <p className="text-sm text-gray-600 darkk:text-gray-400">
                                    Intelligent Technology Solutions
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 darkk:text-gray-300 max-w-xl leading-relaxed">
                            NextWorks delivers cutting-edge software
                            development, AI integration, smart automation, and
                            comprehensive ICT infrastructure solutions. We
                            empower organizations to thrive in the digital age
                            while nurturing the next generation of tech talent.
                        </p>

                        {/* Contact Information */}
                        <div className="mt-8 space-y-4">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 text-blue-600 darkk:text-blue-400 mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-gray-700 darkk:text-gray-300 hover:text-blue-600 darkk:hover:text-blue-400 transition-colors duration-300"
                                            >
                                                <span className="font-semibold">
                                                    {item.label}:
                                                </span>{" "}
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-700 darkk:text-gray-300">
                                                <span className="font-semibold">
                                                    {item.label}:
                                                </span>{" "}
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="mt-8">
                            <h3 className="font-semibold text-gray-900 darkk:text-white mb-4">
                                Follow Our Journey
                            </h3>
                            <div className="flex space-x-4">
                                {[
                                    {
                                        name: "LinkedIn",
                                        href: "https://linkedin.com/company/nextworks",
                                        icon: <Linkedin />,
                                    },
                                    {
                                        name: "Twitter",
                                        href: "https://twitter.com/nextworksng",
                                        icon: <Twitter />,
                                    },
                                    {
                                        name: "Facebook",
                                        href: "https://facebook.com/nextworksng",
                                        icon: <Facebook />,
                                    },
                                    {
                                        name: "Instagram",
                                        href: "https://instagram.com/nextworksng",
                                        icon: <Instagram />,
                                    },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white darkk:bg-gray-800 rounded-xl border border-gray-200 darkk:border-gray-700 text-gray-600 darkk:text-gray-400 hover:text-blue-600 darkk:hover:text-blue-400 hover:border-blue-300 darkk:hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 darkk:text-white mb-6">
                            Quick Navigation
                        </h3>
                        <div className="space-y-3">
                            {navigation.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left text-gray-700 darkk:text-gray-300 hover:text-blue-600 darkk:hover:text-blue-400 transition-colors duration-300 py-2 font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 darkk:text-white mb-6">
                            Our Services
                        </h3>
                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <div key={index} className="group">
                                    <h4 className="font-medium text-gray-900 darkk:text-white group-hover:text-blue-600 darkk:group-hover:text-blue-400 transition-colors duration-300">
                                        {service.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 darkk:text-gray-400 mt-1">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legal & Bottom Section */}
                <div className="border-t border-gray-200 darkk:border-gray-800 py-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Legal Links */}
                        <div className="flex flex-wrap gap-6">
                            {legal.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-sm text-gray-600 darkk:text-gray-400 hover:text-blue-600 darkk:hover:text-blue-400 transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Company Registration */}
                        <div className="bg-white darkk:bg-gray-800 rounded-xl p-4 border border-gray-200 darkk:border-gray-700 shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-100 darkk:bg-green-900 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-green-600 darkk:text-green-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 darkk:text-white">
                                        RC Number: 488002
                                    </p>
                                    <p className="text-xs text-gray-600 darkk:text-gray-400">
                                        Registered with CAC, Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 darkk:text-gray-400">
                            Copyright © {new Date().getFullYear()} NextWorks
                            Limited. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500 darkk:text-gray-500 mt-2">
                            Transforming businesses through intelligent
                            technology since 2018
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

// Social Media Icons (Enhanced with consistent styling)
const Twitter = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
);

const Facebook = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
);

const Instagram = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
    </svg>
);

const Linkedin = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
    </svg>
);

"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { ContactInfo, SocialMedia } from "@/data/contacts";

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
                        <ContactInfo/>

                        {/* Social Media */}
                        <SocialMedia/>
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

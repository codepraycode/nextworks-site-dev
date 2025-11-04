import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
    const navigation = [
        { name: "Services", href: "/services" },
        { name: "Solutions", href: "/solutions" },
        { name: "Industries", href: "/industries" },
        { name: "About Us", href: "/about" },
        { name: "Our Clients", href: "/clients" },
        { name: "Contact", href: "/contact" },
    ];

    const legal = [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Service Level Agreement", href: "/sla" },
    ];

    const contactInfo = [
        {
            label: "Phone",
            value: "+234 (0) 808 024 0366",
            href: "tel:+2348080240366",
        },
        {
            label: "Email",
            value: "info@nextworks.com.ng",
            href: "mailto:info@nextworks.com.ng",
        },
        {
            label: "Address",
            value: "8 Kehinde Akamo, Off Michael Adekoya Road, Ilupeju Lagos",
        },
    ];

    return (
        <div className="relative bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="grid  grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-200 dark:border-gray-800 lg:grid-cols-5">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div>
                            <Link
                                href="/"
                                className="flex items-center space-x-2 text-2xl font-semibold text-blue-600 dark:text-white"
                            >
                                <Image
                                    src="/img/logo.svg"
                                    alt="NextWorks Limited"
                                    width="40"
                                    height="40"
                                    className="w-10 h-10"
                                />
                                <span>NextWorks</span>
                            </Link>
                        </div>

                        <div className="max-w-md mt-4 text-gray-600 dark:text-gray-400">
                            NextWorks Limited provides cutting-edge ICT
                            infrastructure, power solutions, and automation
                            systems that drive operational efficiency and
                            profitability for organizations across industries in
                            Africa.
                        </div>

                        {/* Contact Information */}
                        <div className="mt-6 space-y-2">
                            {contactInfo.map((item, index) =>
                                item.href ? (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="block text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <span className="font-medium">
                                            {item.label}:
                                        </span>{" "}
                                        {item.value}
                                    </a>
                                ) : (
                                    <p
                                        key={index}
                                        className="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        <span className="font-medium">
                                            {item.label}:
                                        </span>{" "}
                                        {item.value}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            Quick Links
                        </h3>
                        <div className="flex flex-wrap w-full mt-4 -ml-3 lg:ml-0">
                            {navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="w-full px-4 py-2 text-gray-600 rounded-md dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            Legal
                        </h3>
                        <div className="flex flex-wrap w-full mt-4 -ml-3 lg:ml-0">
                            {legal.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="w-full px-4 py-2 text-gray-600 rounded-md dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Media & Certification */}
                    <div className="">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            Connect With Us
                        </h3>
                        <div className="flex mt-4 space-x-4 text-gray-600 dark:text-gray-400">
                            <a
                                href="https://linkedin.com/company/nextworks"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-white"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin />
                            </a>
                            <a
                                href="https://twitter.com/nextworksng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-white"
                            >
                                <span className="sr-only">Twitter</span>
                                <Twitter />
                            </a>
                            <a
                                href="https://facebook.com/nextworksng"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-white"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook />
                            </a>
                        </div>

                        {/* Company Registration */}
                        <div className="mt-6 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                <strong>RC Number:</strong> 488002
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Registered with Corporate Affairs Commission,
                                Nigeria
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                    Copyright © {new Date().getFullYear()} NextWorks Limited.
                    All rights reserved. | Providing innovative ICT solutions
                    across Africa since 2018.
                </div>
            </Container>
        </div>
    );
}

// Social media icons remain the same...
const Twitter = ({ size = 24 }) => (
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

const Facebook = ({ size = 24 }) => (
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

const Instagram = ({ size = 24 }) => (
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

const Linkedin = ({ size = 24 }) => (
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

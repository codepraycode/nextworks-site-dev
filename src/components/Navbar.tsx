"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Fragment, useId, useState, useEffect, useMemo } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navigation = useMemo(
        () => [
            { name: "Services", href: "#ai-solutions", id: "ai-solutions" },
            {
                name: "Solutions",
                href: "#software-development",
                id: "software-development",
            },
            { name: "Education", href: "#education", id: "education" },
            { name: "Showcase", href: "#showcase", id: "showcase" },
            { name: "Testimonials", href: "#testimonials", id: "testimonials" },
            { name: "FAQ", href: "#faq", id: "faq" },
        ],
        []
    );

    const key = useId();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Find which section is currently in view
            const sections = navigation.map((item) => item.id);
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }

            // Check if we're at the top (home section)
            if (scrollPosition < 100) {
                setActiveSection("home");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navigation]);

    const scrollToSection = (href: string, sectionId: string) => {
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

            // Set active section immediately for better UX
            setActiveSection(sectionId);
        }
    };

    const isActive = (sectionId: string) => {
        return activeSection === sectionId;
    };

    return (
        <div
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 darkk:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 darkk:border-gray-800"
                    : "bg-white darkk:bg-gray-900"
            }`}
        >
            <nav className="container relative flex flex-wrap items-center justify-between p-4 py-7 mx-auto lg:justify-between xl:px-1">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center space-x-3 group"
                    onClick={() => setActiveSection("home")}
                >
                    <div className="relative">
                        <Image
                            src="/img/logo.svg"
                            width="40"
                            alt="NextWorks"
                            height="40"
                            className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 darkk:text-white lg:text-2xl transition-colors duration-300">
                        NextWorks
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:space-x-1">
                    <ul className="items-center justify-end flex-1 pt-0 list-none lg:flex">
                        {navigation.map((item, index) => (
                            <li className="nav__item" key={index}>
                                <button
                                    onClick={() =>
                                        scrollToSection(item.href, item.id)
                                    }
                                    className={`inline-block px-4 py-2 text-sm font-medium no-underline rounded-md transition-all duration-300 relative group ${
                                        isActive(item.id)
                                            ? "text-blue-600 darkk:text-blue-400 bg-blue-50 darkk:bg-blue-900/20 font-semibold shadow-sm"
                                            : "text-gray-700 darkk:text-gray-200 hover:text-blue-600 darkk:hover:text-blue-400 hover:bg-blue-50 darkk:hover:bg-blue-900/20"
                                    }`}
                                >
                                    {item.name}

                                    {/* Active indicator */}
                                    {isActive(item.id) && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 darkk:bg-blue-400 rounded-full"></div>
                                    )}

                                    {/* Hover effect */}
                                    {/* <div
                                        className={`absolute inset-0 rounded-md transition-all duration-300 ${
                                            isActive(item.id)
                                                ? "bg-blue-900 darkk:bg-blue-900/20"
                                                : "group-hover:bg-blue-50 darkk:group-hover:bg-blue-900/20"
                                        }`}
                                    ></div> */}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Buttons */}
                    <div className="flex items-center gap-3 ml-6">
                        <button
                            onClick={() =>
                                scrollToSection("#contact", "contact")
                            }
                            className={`px-6 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                                isActive("contact")
                                    ? "bg-gradient-to-r from-blue-700 to-purple-700 scale-105 shadow-xl"
                                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            }`}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <Disclosure>
                    {({ open }) => (
                        <Fragment key={key}>
                            <div className="flex items-center gap-3 lg:hidden">
                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="p-2 text-gray-500 rounded-md hover:text-blue-600 focus:text-blue-600 focus:bg-blue-100 focus:outline-none darkk:text-gray-300 darkk:focus:bg-gray-800 transition-colors duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current transition-transform duration-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>
                            </div>

                            {/* Mobile Menu Panel */}
                            <Disclosure.Panel className="flex flex-col w-full mt-4 lg:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border border-gray-200 rounded-lg shadow-xl darkk:bg-gray-800 darkk:border-gray-700">
                                    {navigation.map((item, index) => (
                                        <Disclosure.Button
                                            key={index}
                                            as="button"
                                            onClick={() =>
                                                scrollToSection(
                                                    item.href,
                                                    item.id
                                                )
                                            }
                                            className={`block w-full px-4 py-3 text-base font-medium text-left rounded-lg transition-all duration-300 relative ${
                                                isActive(item.id)
                                                    ? "text-blue-600 darkk:text-blue-400 bg-blue-50 darkk:bg-blue-900/20 font-semibold border-l-4 border-blue-600 darkk:border-blue-400"
                                                    : "text-gray-700 darkk:text-gray-200 hover:text-blue-600 darkk:hover:text-blue-400 hover:bg-blue-50 darkk:hover:bg-blue-900/20"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                {item.name}
                                                {isActive(item.id) && (
                                                    <div className="w-2 h-2 bg-blue-600 darkk:bg-blue-400 rounded-full animate-pulse"></div>
                                                )}
                                            </div>
                                        </Disclosure.Button>
                                    ))}

                                    {/* Mobile CTA Button */}
                                    <div className="px-4 py-3 border-t border-gray-200 darkk:border-gray-700">
                                        <Disclosure.Button
                                            as="button"
                                            onClick={() =>
                                                scrollToSection(
                                                    "#contact",
                                                    "contact"
                                                )
                                            }
                                            className={`w-full px-4 py-3 text-base font-semibold text-center text-white rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                                isActive("contact")
                                                    ? "bg-gradient-to-r from-blue-700 to-purple-700 scale-105 shadow-xl"
                                                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                            }`}
                                        >
                                            Contact Us
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </Fragment>
                    )}
                </Disclosure>
            </nav>
        </div>
    );
};

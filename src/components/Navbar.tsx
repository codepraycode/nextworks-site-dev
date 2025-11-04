"use client";
import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Fragment, useId, useState, useEffect } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { name: "Services", href: "#ai-solutions" },
        { name: "Solutions", href: "#software-development" },
        { name: "Education", href: "#education" },
        { name: "Showcase", href: "#showcase" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    const key = useId();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // Adjust based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
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
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative">
                        <Image
                            src="/img/logo.svg"
                            width="40"
                            alt="NextWorks"
                            height="40"
                            className="w-8 h-8 lg:w-10 lg:h-10"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 darkk:text-white lg:text-2xl">
                        NextWorks
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:space-x-1">
                    <ul className="items-center justify-end flex-1 pt-0 list-none lg:flex">
                        {navigation.map((item, index) => (
                            <li className="nav__item" key={index}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 no-underline rounded-md transition-all duration-300 darkk:text-gray-200 hover:text-blue-600 darkk:hover:text-blue-400 hover:bg-blue-50 darkk:hover:bg-blue-900/20 focus:outline-none focus:bg-blue-50 darkk:focus:bg-blue-900/20"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA Buttons */}
                    <div className="flex items-center gap-3 ml-6">
                        {/* <ThemeChanger /> */}
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                                {/* <ThemeChanger /> */}
                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="p-2 text-gray-500 rounded-md hover:text-blue-600 focus:text-blue-600 focus:bg-blue-100 focus:outline-none darkk:text-gray-300 darkk:focus:bg-gray-800"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current"
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
                                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border border-gray-200 rounded-lg shadow-lg darkk:bg-gray-800 darkk:border-gray-700">
                                    {navigation.map((item, index) => (
                                        <Disclosure.Button
                                            key={index}
                                            as="button"
                                            onClick={() =>
                                                scrollToSection(item.href)
                                            }
                                            className="block w-full px-4 py-3 text-base font-medium text-left text-gray-700 rounded-lg transition-all duration-300 darkk:text-gray-200 hover:text-blue-600 darkk:hover:text-blue-400 hover:bg-blue-50 darkk:hover:bg-blue-900/20 focus:outline-none focus:bg-blue-50 darkk:focus:bg-blue-900/20"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}

                                    {/* Mobile CTA Button */}
                                    <div className="px-4 py-3 border-t border-gray-200 darkk:border-gray-700">
                                        <Disclosure.Button
                                            as="button"
                                            onClick={() =>
                                                scrollToSection("#contact")
                                            }
                                            className="w-full px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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

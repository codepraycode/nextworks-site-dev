"use client";
import React, { Fragment, useState } from "react";
import { Container } from "@/components/Container";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import {
    ChevronUpIcon,
    MagnifyingGlassIcon,
    BookOpenIcon,
    CodeBracketIcon,
    CpuChipIcon,
    HomeModernIcon,
    ShieldCheckIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";

export const Faq = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = {
        all: {
            name: "All Questions",
            icon: BookOpenIcon,
            count: faqdata.length,
        },
        services: {
            name: "Services",
            icon: CodeBracketIcon,
            count: faqdata.filter((item) => item.category === "services")
                .length,
        },
        ai: {
            name: "AI & Automation",
            icon: CpuChipIcon,
            count: faqdata.filter((item) => item.category === "ai").length,
        },
        education: {
            name: "Education",
            icon: AcademicCapIcon,
            count: faqdata.filter((item) => item.category === "education")
                .length,
        },
        support: {
            name: "Support",
            icon: ShieldCheckIcon,
            count: faqdata.filter((item) => item.category === "support").length,
        },
    };

    const filteredFaqs = faqdata.filter((item) => {
        const matchesSearch =
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            activeCategory === "all" || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container>
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 darkk:text-white mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 darkk:text-gray-300 max-w-3xl mx-auto">
                    Find quick answers to common questions about our services,
                    programs, and how we can help transform your business with
                    technology.
                </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search questions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-6 py-4 text-lg border border-gray-200 darkk:border-gray-700 rounded-2xl bg-white darkk:bg-gray-800 text-gray-900 darkk:text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm("")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 darkk:hover:text-gray-300 transition-colors"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.entries(categories).map(([key, category]) => {
                    const IconComponent = category.icon;
                    return (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                activeCategory === key
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 transform scale-105"
                                    : "bg-white darkk:bg-gray-800 text-gray-700 darkk:text-gray-300 border border-gray-200 darkk:border-gray-700 hover:border-blue-300 darkk:hover:border-blue-600 hover:shadow-md"
                            }`}
                        >
                            <IconComponent className="w-5 h-5" />
                            {category.name}
                            <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                    activeCategory === key
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 darkk:bg-gray-700 text-gray-600 darkk:text-gray-400"
                                }`}
                            >
                                {category.count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto">
                {filteredFaqs.length === 0 ? (
                    <div className="text-center py-16">
                        <BookOpenIcon className="w-16 h-16 text-gray-300 darkk:text-gray-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-500 darkk:text-gray-400 mb-2">
                            No questions found
                        </h3>
                        <p className="text-gray-500 darkk:text-gray-400">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredFaqs.map((item, index) => (
                            <Disclosure
                                key={item.id}
                                as="div"
                                className="group"
                            >
                                {({ open }) => (
                                    <div className="bg-white darkk:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 darkk:border-gray-700 overflow-hidden">
                                        <DisclosureButton className="flex items-center justify-between w-full px-8 py-6 text-left transition-all duration-300 hover:bg-gray-50 darkk:hover:bg-gray-750">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                        open
                                                            ? "bg-blue-100 darkk:bg-blue-900/30 text-blue-600 darkk:text-blue-400"
                                                            : "bg-gray-100 darkk:bg-gray-700 text-gray-500 darkk:text-gray-400"
                                                    }`}
                                                >
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 darkk:text-white pr-8">
                                                        {item.question}
                                                    </h3>
                                                    <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 darkk:bg-blue-900/30 darkk:text-blue-400">
                                                        {
                                                            categories[
                                                                item.category as keyof typeof categories
                                                            ].name
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronUpIcon
                                                className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                                                    open
                                                        ? "transform rotate-180 text-blue-600"
                                                        : "text-gray-400 group-hover:text-gray-600 darkk:group-hover:text-gray-300"
                                                }`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel
                                            className="px-8 pb-6 text-gray-600 darkk:text-gray-300 transition-all duration-300"
                                            as="div"
                                        >
                                            <div className="pl-16 border-l-2 border-blue-200 darkk:border-blue-800">
                                                <p className="text-lg leading-relaxed">
                                                    {item.answer}
                                                </p>
                                                {item.additionalInfo && (
                                                    <div className="mt-4 p-4 bg-blue-50 darkk:bg-blue-900/20 rounded-lg border border-blue-100 darkk:border-blue-800">
                                                        <p className="text-blue-700 darkk:text-blue-300 text-sm">
                                                            {
                                                                item.additionalInfo
                                                            }
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </DisclosurePanel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                )}
            </div>

            {/* Contact CTA */}
            <div className="max-w-2xl mx-auto mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 darkk:from-blue-900/20 darkk:to-purple-900/20 rounded-2xl p-8 border border-blue-100 darkk:border-blue-800">
                    <h3 className="text-2xl font-bold text-gray-900 darkk:text-white mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 darkk:text-gray-300 mb-6 text-lg">
                        Our team is here to help you get the answers you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Contact Our Team
                        </button>
                        {/* <button className="px-8 py-3 border-2 border-gray-300 darkk:border-gray-600 text-gray-700 darkk:text-gray-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 darkk:hover:border-blue-400 darkk:hover:text-blue-400 transition-all duration-300">
                            Schedule a Demo
                        </button> */}
                    </div>
                </div>
            </div>
        </Container>
    );
};

// Enhanced FAQ data with categories and icons
const faqdata = [
    {
        id: 1,
        question: "What technology services does NextWorks provide?",
        answer: "We offer comprehensive services including custom software development, AI and machine learning integration, smart office/home automation, ICT infrastructure, cybersecurity, robotics solutions, and technology education programs.",
        category: "services",
        icon: <CodeBracketIcon className="w-6 h-6" />,
        additionalInfo:
            "All our services include consultation, implementation, and ongoing support.",
    },
    {
        id: 2,
        question: "Do you offer educational programs for students?",
        answer: "Yes, we run extensive training programs in software development, AI, robotics, and STEM education. These include hands-on projects, industry mentorship, and opportunities to work on real-world technology solutions.",
        category: "education",
        icon: <AcademicCapIcon className="w-6 h-6" />,
        additionalInfo:
            "Our programs are designed for both beginners and advanced learners.",
    },
    {
        id: 3,
        question: "How do you approach AI integration projects?",
        answer: "We start with a thorough analysis of your business processes, identify automation opportunities, develop custom AI models, and implement seamless integration with your existing systems, followed by training and ongoing optimization.",
        category: "ai",
        icon: <CpuChipIcon className="w-6 h-6" />,
        additionalInfo:
            "Typical AI integration projects take 4-12 weeks depending on complexity.",
    },
    {
        id: 4,
        question: "Can you develop custom software for specific industries?",
        answer: "Absolutely. We have experience across multiple sectors including healthcare, education, aviation, real estate, and manufacturing. Our solutions are tailored to address industry-specific challenges and opportunities.",
        category: "services",
        icon: <CodeBracketIcon className="w-6 h-6" />,
        additionalInfo:
            "We conduct industry-specific research to ensure compliance and best practices.",
    },
    {
        id: 5,
        question: "What makes your smart automation solutions different?",
        answer: "Our solutions combine IoT devices, AI algorithms, and user behavior analysis to create truly intelligent environments that learn and adapt to user preferences while optimizing energy usage and operational efficiency.",
        category: "ai",
        icon: <HomeModernIcon className="w-6 h-6" />,
        additionalInfo:
            "Most clients see 30-50% reduction in operational costs within 6 months.",
    },
    {
        id: 6,
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and continuous optimization to ensure your systems remain cutting-edge and secure.",
        category: "support",
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        additionalInfo:
            "Our average response time for critical issues is under 15 minutes.",
    },
    {
        id: 7,
        question: "How can students or graduates join your training programs?",
        answer: "We regularly announce training cohorts through our website and partner educational institutions. Applicants undergo a selection process to identify motivated individuals with passion for technology and innovation.",
        category: "education",
        icon: <AcademicCapIcon className="w-6 h-6" />,
        additionalInfo:
            "Scholarships and flexible payment options are available for qualified candidates.",
    },
    {
        id: 8,
        question: "What industries have you worked with?",
        answer: "We've successfully delivered solutions for aviation, healthcare, education, manufacturing, logistics, government sectors, and real estate. Our diverse experience allows us to bring cross-industry best practices to every project.",
        category: "services",
        icon: <CodeBracketIcon className="w-6 h-6" />,
        additionalInfo:
            "We maintain long-term partnerships with 85% of our clients.",
    },
    {
        id: 9,
        question: "How long does a typical software development project take?",
        answer: "Project timelines vary based on complexity, but most custom software projects range from 8-24 weeks. We follow agile methodologies with 2-week sprints, providing regular demos and opportunities for feedback.",
        category: "services",
        icon: <CodeBracketIcon className="w-6 h-6" />,
        additionalInfo:
            "We provide detailed project timelines and milestones during the initial consultation.",
    },
    {
        id: 10,
        question: "Do you offer cybersecurity services?",
        answer: "Yes, we provide comprehensive cybersecurity solutions including network security, data protection, access control systems, and security awareness training. We conduct regular security audits and penetration testing.",
        category: "support",
        icon: <ShieldCheckIcon className="w-6 h-6" />,
        additionalInfo:
            "Our security solutions are compliant with international standards including ISO 27001.",
    },
];

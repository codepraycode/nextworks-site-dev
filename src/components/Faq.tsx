"use client";
import React, { Fragment } from "react";
import { Container } from "@/components/Container";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
    return (
        <Container className="!p-0">
            <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
                {faqdata.map((item, index) => (
                    <div key={item.question} className="mb-5">
                        <Disclosure>
                            {({ open }) => (
                                <Fragment>
                                    <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                                        <span>{item.question}</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open
                                                    ? "transform rotate-180"
                                                    : ""
                                            } w-5 h-5 text-indigo-500`}
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                                        {item.answer}
                                    </DisclosurePanel>
                                </Fragment>
                            )}
                        </Disclosure>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const faqdata = [
    {
        question: "What technology services does NextWorks provide?",
        answer: "We offer comprehensive services including custom software development, AI and machine learning integration, smart office/home automation, ICT infrastructure, cybersecurity, robotics solutions, and technology education programs.",
    },
    {
        question: "Do you offer educational programs for students?",
        answer: "Yes, we run extensive training programs in software development, AI, robotics, and STEM education. These include hands-on projects, industry mentorship, and opportunities to work on real-world technology solutions.",
    },
    {
        question: "How do you approach AI integration projects?",
        answer: "We start with a thorough analysis of your business processes, identify automation opportunities, develop custom AI models, and implement seamless integration with your existing systems, followed by training and ongoing optimization.",
    },
    {
        question: "Can you develop custom software for specific industries?",
        answer: "Absolutely. We have experience across multiple sectors including healthcare, education, aviation, real estate, and manufacturing. Our solutions are tailored to address industry-specific challenges and opportunities.",
    },
    {
        question: "What makes your smart automation solutions different?",
        answer: "Our solutions combine IoT devices, AI algorithms, and user behavior analysis to create truly intelligent environments that learn and adapt to user preferences while optimizing energy usage and operational efficiency.",
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and continuous optimization to ensure your systems remain cutting-edge and secure.",
    },
    {
        question: "How can students or graduates join your training programs?",
        answer: "We regularly announce training cohorts through our website and partner educational institutions. Applicants undergo a selection process to identify motivated individuals with passion for technology and innovation.",
    },
];

"use client";
import React, { Fragment } from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
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
                        open ? "transform rotate-180" : ""
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
}


const faqdata = [
    {
        question: "What industries does NextWorks serve?",
        answer: "We serve a diverse range of industries including aviation, healthcare, education, manufacturing, logistics, and government sectors. Our solutions are tailored to meet the specific needs of each industry.",
    },
    {
        question: "How long does a typical implementation take?",
        answer: "Implementation timelines vary based on project complexity, but most network infrastructure projects are completed within 4-8 weeks. Smaller solutions like document management systems can often be deployed in 2-3 weeks.",
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support and maintenance packages including 24/7 monitoring, regular system updates, and emergency response services to ensure your systems operate optimally.",
    },
    {
        question: "Can NextWorks integrate with our existing systems?",
        answer: "Absolutely. We specialize in seamless integration with existing infrastructure without requiring expensive customizations. Our solutions are designed to work with your current systems.",
    },
    {
        question: "What makes your security solutions different?",
        answer: "Our security solutions combine advanced IP surveillance, access control systems, and network security protocols tailored to African business environments. We focus on both physical and digital security integration.",
    },
    {
        question: "Do you offer training for our staff?",
        answer: "Yes, we provide customized training programs for both technical staff and end-users to ensure your team can effectively use and maintain the solutions we implement.",
    },
];
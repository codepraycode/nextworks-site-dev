"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { contactInfo, SocialMedia } from "@/data/contacts";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                service: "",
                message: "",
            });
        }, 1500);
    };

    const services = [
        "AI Integration & Automation",
        "Custom Software Development",
        "Smart Office Solutions",
        "ICT Infrastructure",
        "Tech Education & Training",
        "Cybersecurity Solutions",
        "Consultation & Advisory",
        "Other",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark::from-gray-900 dark::to-blue-900/20 pt-32">
            <Container>
                {/* Header Section */}
                <SectionTitle
                    preTitle="Get In Touch"
                    title="Let's Build Your Intelligent Future Together"
                    align="center"
                >
                    Ready to transform your business with cutting-edge
                    technology? Our team is here to discuss your project and
                    provide the perfect solution for your needs.
                </SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark::bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark::border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark::text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark::bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark::text-blue-400">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 dark::text-white">
                                                {item.label}
                                            </h4>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-gray-600 dark::text-gray-300 hover:text-blue-600 dark::hover:text-blue-400 transition-colors duration-300 block mt-1"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600 dark::text-gray-300 mt-1 whitespace-pre-line">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <SocialMedia/>
                        </div>

                        {/* Quick Response Card */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                            <h4 className="font-bold text-lg mb-2">
                                Quick Response
                            </h4>
                            <p className="text-blue-100 text-sm mb-4">
                                We typically respond to inquiries within 2 hours
                                during business hours.
                            </p>
                            <div className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                                Available now
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark::bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark::border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark::text-white mb-2">
                                Send us a Message
                            </h3>
                            <p className="text-gray-600 dark::text-gray-300 mb-8">
                                Fill out the form below and our team will get
                                back to you as soon as possible.
                            </p>

                            {submitStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-50 dark::bg-green-900/20 border border-green-200 dark::border-green-800 rounded-lg">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-600 dark::text-green-400 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <p className="text-green-800 dark::text-green-300 font-medium">
                                            Thank you! Your message has been
                                            sent successfully. We&apos;ll get back to
                                            you within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 dark::text-gray-300 mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark::border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark::bg-gray-700 dark::text-white transition-colors duration-300"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark::text-gray-300 mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark::border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark::bg-gray-700 dark::text-white transition-colors duration-300"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-medium text-gray-700 dark::text-gray-300 mb-2"
                                        >
                                            Company / Organization
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark::border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark::bg-gray-700 dark::text-white transition-colors duration-300"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-medium text-gray-700 dark::text-gray-300 mb-2"
                                        >
                                            Service Interest *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark::border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark::bg-gray-700 dark::text-white transition-colors duration-300"
                                        >
                                            <option value="">
                                                Select a service
                                            </option>
                                            {services.map((service, index) => (
                                                <option
                                                    key={index}
                                                    value={service}
                                                >
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark::text-gray-300 mb-2"
                                    >
                                        Project Details / Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark::border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark::bg-gray-700 dark::text-white transition-colors duration-300 resize-none"
                                        placeholder="Tell us about your project, requirements, or any questions you have..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                                        isSubmitting
                                            ? "opacity-70 cursor-not-allowed"
                                            : "hover:from-blue-700 hover:to-purple-700"
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending Message...
                                        </div>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <SectionTitle
                        preTitle="Common Questions"
                        title="Quick Answers"
                        align="center"
                    >
                        Find quick answers to frequently asked questions about
                        our services and process.
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                        {[
                            {
                                question:
                                    "How quickly do you respond to inquiries?",
                                answer: "We typically respond within 2 hours during business hours and within 24 hours maximum.",
                            },
                            {
                                question: "Do you offer free consultations?",
                                answer: "Yes, we offer free initial consultations to understand your needs and propose the right solution.",
                            },
                            {
                                question: "What industries do you serve?",
                                answer: "We serve diverse industries including healthcare, education, aviation, real estate, manufacturing, and more.",
                            },
                            {
                                question: "Do you provide ongoing support?",
                                answer: "Yes, we offer comprehensive support and maintenance packages for all our solutions.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white dark::bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark::border-gray-700"
                            >
                                <h4 className="font-semibold text-gray-900 dark::text-white mb-2">
                                    {faq.question}
                                </h4>
                                <p className="text-gray-600 dark::text-gray-300 text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

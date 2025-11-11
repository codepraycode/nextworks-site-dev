import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
    return (
        <Container>
            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl transition-all duration-500">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
                    <div
                        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
                        style={{ animationDelay: "2s" }}
                    ></div>
                </div>

                {/* Main content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-8 py-12 lg:px-16 lg:py-16">
                    {/* Text content */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold">
                                Free Consultation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                            Ready to Build Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Intelligent Future
                            </span>
                            ?
                        </h2>

                        {/* Description */}
                        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                            Join other forward-thinking organizations that trust
                            NextWorks to transform their technology landscape
                            while developing the next generation of tech talent.
                        </p>

                        {/* Trust indicators */}
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-green-600"
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
                                </div>
                                <span className="font-semibold">
                                    No Commitment Required
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <span className="font-semibold">
                                    Secure & Confidential
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
                        {/* Primary CTA */}
                        <a
                            href="/contact"
                            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg px-8 py-4 lg:px-10 lg:py-5 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 min-w-[200px] text-center shadow-lg"
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Button content */}
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                <span>Start Your Project</span>
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                            </div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-shine transition-all duration-1000"></div>
                            </div>
                        </a>

                        {/* Secondary CTA */}
                        {/* <a
                            href="/education"
                            className="group relative bg-white border-2 border-gray-300 text-gray-800 font-bold text-lg px-8 py-4 lg:px-10 lg:py-5 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 min-w-[200px] text-center"
                        >
                            <div className="flex items-center justify-center gap-3">
                                <span>Explore Learning</span>
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                        </a> */}

                        {/* Trust text */}
                        <div className="text-center lg:text-left pt-4 lg:pt-6">
                            <p className="text-gray-500 text-sm font-medium">
                                ⭐️ Trusted by organizations across Africa
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-float shadow-lg"></div>
                <div
                    className="absolute bottom-8 left-8 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-float shadow-lg"
                    style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                    className="absolute top-12 left-12 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float shadow-lg"
                    style={{ animationDelay: "2.5s" }}
                ></div>
            </div>
        </Container>
    );
};

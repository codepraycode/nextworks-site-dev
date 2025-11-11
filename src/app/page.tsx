import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo, benefitThree } from "@/data/benefits";

export default function Home() {
    return (
        <div className="space-y-20 lg:space-y-32">
            <section id="home">
                <Hero />
            </section>

            <section id="about" className="scroll-mt-20">
                <Container>
                    <SectionTitle
                        preTitle="Next-Generation Technology Solutions"
                        title="Transforming Businesses with Intelligent Technology"
                    >
                        NextWorks is a premier technology partner delivering
                        cutting-edge software development, AI integration, smart
                        automation, and ICT infrastructure solutions. We empower
                        organizations to thrive in the digital age while
                        nurturing the next generation of tech talent through our
                        educational initiatives.
                    </SectionTitle>
                </Container>
            </section>

            <section id="ai-solutions" className="scroll-mt-20">
                <Benefits data={benefitOne} />
            </section>

            <section id="software-development" className="scroll-mt-20">
                <Benefits imgPos="right" data={benefitTwo} />
            </section>

            <section id="education" className="scroll-mt-20">
                <Benefits data={benefitThree} />
            </section>

            <section
                id="showcase"
                className="scroll-mt-20 py-20"
            >
                <Container>
                    <SectionTitle
                        preTitle="Innovation in Action"
                        title="See Our Smart Solutions"
                        align="center"
                    >
                        Experience how NextWorks transforms ordinary spaces into
                        intelligent environments. From AI-powered offices to
                        automated smart homes, discover how our innovative
                        solutions create seamless, efficient, and secure digital
                        experiences.
                    </SectionTitle>

                    {/* Interactive Showcase Grid */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Smart Office Card */}
                        <div className="group relative bg-white darkk:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 darkk:border-gray-700 hover:border-blue-200 darkk:hover:border-blue-600">
                            <div className="absolute top-6 right-6 w-12 h-12 bg-blue-100 darkk:bg-blue-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    className="w-6 h-6 text-blue-600 darkk:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 darkk:text-white mb-4">
                                Smart Office Solutions
                            </h3>
                            <p className="text-gray-600 darkk:text-gray-300 mb-6">
                                AI-driven workspace optimization, automated
                                climate control, intelligent lighting, and
                                seamless collaboration tools that boost
                                productivity by 40%.
                            </p>

                            <div className="flex items-center text-blue-600 darkk:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                View Case Study
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Smart Home Card */}
                        <div className="group relative bg-white darkk:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 darkk:border-gray-700 hover:border-green-200 darkk:hover:border-green-600">
                            <div className="absolute top-6 right-6 w-12 h-12 bg-green-100 darkk:bg-green-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    className="w-6 h-6 text-green-600 darkk:text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 darkk:text-white mb-4">
                                Smart Home Automation
                            </h3>
                            <p className="text-gray-600 darkk:text-gray-300 mb-6">
                                Complete home automation systems with voice
                                control, security integration, energy
                                management, and personalized comfort settings.
                            </p>

                            <div className="flex items-center text-green-600 darkk:text-green-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Explore Features
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* AI Integration Card */}
                        <div className="group relative bg-white darkk:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 darkk:border-gray-700 hover:border-purple-200 darkk:hover:border-purple-600">
                            <div className="absolute top-6 right-6 w-12 h-12 bg-purple-100 darkk:bg-purple-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    className="w-6 h-6 text-purple-600 darkk:text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 darkk:text-white mb-4">
                                AI Integration
                            </h3>
                            <p className="text-gray-600 darkk:text-gray-300 mb-6">
                                Machine learning algorithms, predictive
                                analytics, and intelligent automation that
                                transform business processes and
                                decision-making.
                            </p>

                            <div className="flex items-center text-purple-600 darkk:text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                See AI in Action
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Video Placeholder with Enhanced Design */}
                    {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1 shadow-2xl">
                        <div className="bg-white darkk:bg-gray-800 rounded-xl p-8 text-center">
                            <div className="max-w-4xl mx-auto">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 darkk:from-blue-900 darkk:to-purple-900 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-10 h-10 text-blue-600 darkk:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 darkk:text-white mb-4">
                                    Watch Our Solutions in Action
                                </h3>
                                <p className="text-gray-600 darkk:text-gray-300 mb-8 text-lg">
                                    See how NextWorks transformed a traditional
                                    office into a cutting-edge smart workspace,
                                    achieving 45% energy savings and 30%
                                    productivity improvement.
                                </p>
                                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    <svg
                                        className="w-6 h-6 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                    </svg>
                                    Play Demo Video
                                </button>
                            </div>
                        </div>
                    </div> */}
                </Container>
            </section>

            <section
                id="testimonials"
                className="scroll-mt-20 py-20 bg-gray-50 darkk:bg-gray-900"
            >
                <Container>
                    <SectionTitle
                        preTitle="Success Stories"
                        title="Trusted by Industry Leaders & Future Innovators"
                        align="center"
                    >
                        From global enterprises to educational institutions and
                        aspiring tech professionals, NextWorks builds lasting
                        partnerships through exceptional service delivery and
                        transformative technology solutions that drive real
                        results.
                    </SectionTitle>

                    {/* Enhanced Testimonials Section */}
                    <div className="mt-16">
                        <Testimonials />
                    </div>

                    {/* Additional Success Metrics */}
                    {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white darkk:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-blue-600 darkk:text-blue-400 mb-2">
                                98%
                            </div>
                            <div className="text-gray-600 darkk:text-gray-300 font-medium">
                                Client Satisfaction
                            </div>
                        </div>
                        <div className="bg-white darkk:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-green-600 darkk:text-green-400 mb-2">
                                45%
                            </div>
                            <div className="text-gray-600 darkk:text-gray-300 font-medium">
                                Average Efficiency Gain
                            </div>
                        </div>
                        <div className="bg-white darkk:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-purple-600 darkk:text-purple-400 mb-2">
                                200+
                            </div>
                            <div className="text-gray-600 darkk:text-gray-300 font-medium">
                                Projects Delivered
                            </div>
                        </div>
                        <div className="bg-white darkk:bg-gray-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-orange-600 darkk:text-orange-400 mb-2">
                                50+
                            </div>
                            <div className="text-gray-600 darkk:text-gray-300 font-medium">
                                Tech Talents Trained
                            </div>
                        </div>
                    </div> */}

                    {/* Client Logos Carousel */}
                </Container>
            </section>

            <section id="faq" className="scroll-mt-20">
                <Container>
                    <SectionTitle
                        preTitle="Get Answers"
                        title="Frequently Asked Questions"
                    >
                        Learn more about our comprehensive technology services,
                        implementation process, and educational programs. Our
                        team is ready to help you navigate your digital
                        transformation journey.
                    </SectionTitle>
                </Container>

                <Faq />
            </section>

            <section id="contact" className="scroll-mt-20">
                <Cta />
            </section>
        </div>
    );
}

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

            <section id="showcase" className="scroll-mt-20">
                <Container>
                    <SectionTitle
                        preTitle="Innovation in Action"
                        title="See Our Smart Solutions"
                    >
                        Experience how NextWorks transforms ordinary spaces into
                        intelligent environments. From AI-powered offices to
                        automated smart homes, discover how our innovative
                        solutions create seamless, efficient, and secure digital
                        experiences.
                    </SectionTitle>
                </Container>

                {/* <Video videoId="fZ0D0cnR88E" /> */}
            </section>

            <section id="testimonials" className="scroll-mt-20">
                <Container>
                    <SectionTitle
                        preTitle="Success Stories"
                        title="Trusted by Industry Leaders & Future Innovators"
                    >
                        From global enterprises to educational institutions and
                        aspiring tech professionals, NextWorks builds lasting
                        partnerships through exceptional service delivery and
                        transformative technology solutions that drive real
                        results.
                    </SectionTitle>
                </Container>

                <div className="mt-16">
                    <Testimonials />
                </div>
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

                <div className="mt-16">
                    <Faq />
                </div>
            </section>

            <section id="contact" className="scroll-mt-20">
                <Cta />
            </section>
        </div>
    );
}

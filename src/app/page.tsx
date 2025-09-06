import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
    return (
        <Container>
            <Hero />

            <SectionTitle
                preTitle="Our Value Proposition"
                title="Why Partner with NextWorks"
            >
                With over a decade of experience, NextWorks delivers innovative
                technology solutions that drive operational efficiency, reduce
                costs, and maximize ROI for organizations across diverse
                industries in Africa.
            </SectionTitle>

            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />

            <SectionTitle
                preTitle="Technology Showcase"
                title="See Our Solutions in Action"
            >
                Discover how NextWorks&apos; cutting-edge ICT infrastructure,
                security systems, and collaboration solutions transform business
                operations and create tangible value for our clients across
                various sectors.
            </SectionTitle>

            {/* <Video videoId="fZ0D0cnR88E" /> */}

            <SectionTitle
                preTitle="Client Success Stories"
                title="Trusted by Leading Organizations"
            >
                NextWorks takes pride in serving prestigious clients including
                British Airways, Lufthansa, Reckitt Benckiser, and leading
                educational institutions across Nigeria, building long-term
                partnerships based on exceptional service delivery.
            </SectionTitle>

            <Testimonials />

            <SectionTitle
                preTitle="Expert Insights"
                title="Frequently Asked Questions"
            >
                Find answers to common questions about our ICT solutions,
                implementation process, and support services. Our team is ready
                to address your specific technology challenges.
            </SectionTitle>

            <Faq />
            <Cta />
        </Container>
    );
}
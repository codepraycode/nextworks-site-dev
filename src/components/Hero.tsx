import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { Fragment } from "react";

export const Hero = () => {
    return (
        <Fragment>
            <Container className="flex flex-wrap ">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Transforming Business Through Technology
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            NextWorks provides cutting-edge ICT infrastructure,
                            power solutions, and automation systems that drive
                            operational efficiency and profitability for
                            organizations across industries.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <a
                                href="#services"
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Our Services
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 text-lg font-medium text-center text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="NextWorks IT Solutions"
                            loading="eager"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col justify-center">
                    <div className="text-xl text-center text-gray-700 dark:text-white">
                        Trusted by <span className="text-blue-600">200+</span>{" "}
                        customers across Africa
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
                        <div className="pt-2 text-gray-400 dark:text-gray-400">
                            <BritishAirwaysLogo />
                        </div>
                        <div className="text-gray-400 dark:text-gray-400">
                            <LufthansaLogo />
                        </div>
                        <div className="text-gray-400 dark:text-gray-400">
                            <ReckittBenckiserLogo />
                        </div>
                        <div className="pt-1 text-gray-400 dark:text-gray-400">
                            <GalaxyBackboneLogo />
                        </div>
                        <div className="pt-2 text-gray-400 dark:text-gray-400">
                            <UniversityLogo />
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

// Custom logos for NextWorks clients
function BritishAirwaysLogo() {
    return (
        <svg width="110" height="33" viewBox="0 0 110 33" fill="currentColor">
            <path d="M55 16.5C55 7.4 47.6 0 38.5 0S22 7.4 22 16.5 29.4 33 38.5 33 55 25.6 55 16.5zM38.5 27c-5.8 0-10.5-4.7-10.5-10.5S32.7 6 38.5 6 49 10.7 49 16.5 44.3 27 38.5 27z" />
            <path d="M88 16.5C88 7.4 80.6 0 71.5 0S55 7.4 55 16.5 62.4 33 71.5 33 88 25.6 88 16.5zM71.5 27c-5.8 0-10.5-4.7-10.5-10.5S65.7 6 71.5 6 82 10.7 82 16.5 77.3 27 71.5 27z" />
            <path d="M38.5 12c2.5 0 4.5 2 4.5 4.5S41 21 38.5 21 34 19 34 16.5s2-4.5 4.5-4.5zM71.5 12c2.5 0 4.5 2 4.5 4.5S74 21 71.5 21 67 19 67 16.5s2-4.5 4.5-4.5z" />
        </svg>
    );
}

function LufthansaLogo() {
    return (
        <svg width="110" height="33" viewBox="0 0 110 33" fill="currentColor">
            <path d="M10 6h90v4H10zM10 14h90v4H10zM10 22h90v4H10z" />
            <circle cx="25" cy="16" r="6" />
            <circle cx="85" cy="16" r="6" />
        </svg>
    );
}

function ReckittBenckiserLogo() {
    return (
        <svg width="110" height="33" viewBox="0 0 110 33" fill="currentColor">
            <path d="M20 6h70v4H20zM20 14h70v4H20zM20 22h70v4H20z" />
            <rect x="30" y="10" width="10" height="10" rx="2" />
            <rect x="70" y="10" width="10" height="10" rx="2" />
        </svg>
    );
}

function GalaxyBackboneLogo() {
    return (
        <svg width="110" height="33" viewBox="0 0 110 33" fill="currentColor">
            <circle cx="20" cy="16" r="5" />
            <circle cx="40" cy="16" r="5" />
            <circle cx="60" cy="16" r="5" />
            <circle cx="80" cy="16" r="5" />
            <path d="M20 11h60v10H20z" opacity="0.5" />
        </svg>
    );
}

function UniversityLogo() {
    return (
        <svg width="110" height="33" viewBox="0 0 110 33" fill="currentColor">
            <path d="M30 6h50v4H30zM30 14h50v4H30zM30 22h50v4H30z" />
            <path
                d="M40 6v20M50 6v20M60 6v20M70 6v20"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}

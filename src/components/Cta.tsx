import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
    return (
        <Container>
            <div className="flex flex-wrap items-center justify-between w-full max-w-7xl gap-5 mx-auto text-white bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-medium lg:text-3xl">
                        Ready to Build Your Intelligent Future?
                    </h2>
                    <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
                        Whether you need cutting-edge technology solutions or
                        want to develop your tech skills, NextWorks is your
                        partner in innovation and growth.
                    </p>
                </div>
                <div className="flex flex-col gap-3 flex-shrink-0 w-full text-center lg:w-auto lg:flex-row">
                    <a
                        href="/contact"
                        className="inline-block py-3 text-lg font-medium text-center text-blue-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100 transition-colors"
                    >
                        Start Your Project
                    </a>
                    <a
                        href="/education"
                        className="inline-block py-3 text-lg font-medium text-center text-white bg-transparent border-2 border-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        Explore Learning
                    </a>
                </div>
            </div>
        </Container>
    );
};

import Image from "next/image";
import React, { Fragment } from "react";
import { Container } from "@/components/Container";
import testimonialsData from "@/data/testimonials.json";

interface Testimonial {
    id: number;
    content: string;
    name: string;
    title: string;
    image: string;
}

export const Testimonials = () => {
    const testimonials: Testimonial[] = testimonialsData.testimonials;

    return (
        <Container>
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full">
                        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                            <div
                                className="text-2xl leading-normal"
                                dangerouslySetInnerHTML={{
                                    __html: testimonial.content.replace(
                                        /<Mark>(.*?)<\/Mark>/g,
                                        '<mark class="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">$1</mark>'
                                    ),
                                }}
                            />
                            <Avatar
                                image={testimonial.image}
                                name={testimonial.name}
                                title={testimonial.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

interface AvatarProps {
    image: string;
    name: string;
    title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
    return (
        <div className="flex items-center mt-8 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <Image
                    src={props.image}
                    width="56"
                    height="56"
                    alt={`Avatar of ${props.name}`}
                    className="object-cover"
                />
            </div>
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">
                    {props.title}
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
    preTitle?: string;
    title?: string;
    align?: "left" | "center" | "right";
    children?: React.ReactNode;
    className?: string;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
    const {
        preTitle,
        title,
        align = "center",
        children,
        className = "",
        maxWidth = "2xl",
    } = props;

    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-6xl",
    };

    return (
        <Container className={`${className}`}>
            <div
                className={`flex flex-col ${alignmentClasses[align]} mx-auto ${maxWidthClasses[maxWidth]}`}
            >
                {/* Pre-title with decorative element */}
                {preTitle && (
                    <div className="relative mb-3">
                        <div className="flex items-center gap-3">
                            {align === "center" && (
                                <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-transparent to-indigo-300/60"></div>
                            )}
                            <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase darkk:text-indigo-400">
                                {preTitle}
                            </span>
                            {align === "center" && (
                                <div className="hidden sm:block w-8 h-px bg-gradient-to-l from-transparent to-indigo-300/60"></div>
                            )}
                        </div>
                        {/* Decorative dot for left/right alignments */}
                        {(align === "left" || align === "right") && (
                            <div
                                className={`absolute top-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full ${
                                    align === "left" ? "-left-6" : "-right-6"
                                }`}
                            ></div>
                        )}
                    </div>
                )}

                {/* Main title with gradient support */}
                {title && (
                    <h2
                        className={`
            text-3xl font-bold leading-tight tracking-tight 
            lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight
            bg-gradient-to-br from-gray-900 to-gray-700 darkk:from-white darkk:to-gray-300 
            bg-clip-text text-transparent
            ${preTitle ? "mt-2" : "mt-0"}
          `}
                    >
                        {title}
                    </h2>
                )}

                {/* Description with better typography */}
                {children && (
                    <div
                        className={`
            mt-6 text-lg leading-relaxed text-gray-600 
            lg:text-xl lg:leading-relaxed 
            darkk:text-gray-400
            ${title ? "pt-4" : "pt-0"}
            relative
          `}
                    >
                        {/* Decorative border for description */}
                        {title && align === "center" && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </Container>
    );
};

// Optional: A more compact variant for tighter layouts
export const CompactSectionTitle = (props: Readonly<SectionTitleProps>) => {
    return (
        <SectionTitle
            {...props}
            className={`${props.className} mb-8`}
            maxWidth="lg"
        />
    );
};

// Optional: A hero variant for main page headings
export const HeroSectionTitle = (props: Readonly<SectionTitleProps>) => {
    const { preTitle, title, children, align = "center" } = props;

    return (
        <>
            <div
                className={`flex flex-col ${
                    align === "center"
                        ? "items-center text-center"
                        : "items-start text-left"
                } max-w-4xl mx-auto`}
            >
                {/* Enhanced pre-title for hero sections */}
                {preTitle && (
                    <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100 darkk:bg-indigo-900/20 darkk:text-indigo-400 darkk:border-indigo-800/30">
                        <span className="w-2 h-2 mr-2 bg-indigo-500 rounded-full animate-pulse"></span>
                        {preTitle}
                    </div>
                )}

                {/* Hero title with larger size */}
                {title && (
                    <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight bg-gradient-to-br from-gray-900 to-gray-700 darkk:from-white darkk:to-gray-300 bg-clip-text text-transparent">
                        {title}
                    </h1>
                )}

                {/* Hero description */}
                {children && (
                    <div className="mt-8 text-xl leading-relaxed text-gray-600 lg:text-2xl lg:leading-relaxed darkk:text-gray-400 max-w-3xl">
                        {children}
                    </div>
                )}
            </div>
        </>
    );
};

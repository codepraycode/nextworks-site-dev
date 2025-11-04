export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface BenefitProps {
    title: string;
    desc: string;
    image: string;
    bullets: {
        title: string;
        desc: string;
        icon: JSX.Element;
    }[];
}

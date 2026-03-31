export interface StatEntry {
    value: string;
    label: string;
}

export interface Availability {
    location: string;
    timezone: string;
    status: string;
    remote: boolean;
}

export interface Testimonial {
    text: string;
    name: string;
    initials: string;
    role: string;
    summaryDescription: string;
    linkedinUrl: string;
}

export interface AboutData {
    about: string;
    quote?: string;
    imageSource: string;
    stats?: StatEntry[];
    availability?: Availability;
    testimonials?: Testimonial[];
}

export interface ExperienceItem {
    title: string;
    subtitle: string;
    dateText: string;
    workType?: string;
    promoted?: boolean;
    promotionNote?: string;
    techStack?: string[];
    workDescription: string[];
}

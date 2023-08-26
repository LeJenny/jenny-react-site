interface Header {
    homepage?: string;
    title?: string;
}

interface Social {
    linkedin?: string;
    github?: string;
}

interface About {
    name?: string;
    role?: string;
    description?: string;
    resume?: string;
    social?: Social;
}

interface Project {
    name: string;
    description: string;
    stack: string[];
    sourceCode: string;
    livePreview: string;
}

interface Contact {
    email?: string;
}

const header: Header = {
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'JS.',
};

const about: About = {
    name: 'John Smith',
    role: 'Front End Engineer',
    description:
        'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
    resume: 'https://example.com',
    social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
    },
};

const projects: Project[] = [
    // ... (keep this part the same as your original code)
];

const skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    // ... (keep this part the same as your original code)
];

const contact: Contact = {
    email: 'johnsmith@mail.com',
};

export { header, about, projects, skills, contact };
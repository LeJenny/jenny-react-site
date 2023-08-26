interface Header {
    homepage: string;
    title: string;
}

interface Social {
    linkedin: string;
    github: string;
}

interface About {
    name: 'Jenny Le';
    role: string;
    description: string;
    resume: string;
    social: Social;
}

interface Project {
    name: string;
    description: string;
    stack: string[];
    sourceCode: string;
    livePreview: string;
}

interface Contact {
    email: string;
}

const header: Header = {
    homepage: 'https://github.com/LeJenny',
    title: 'JL.',
};

const about: About = {
    name: 'Jenny Le',
    role: 'Software Engineer & Aspiring Product/Program Manager',
    description:
        'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
    resume: 'https://example.com',
    social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
    },
};

const projects: Project[] = [
    {
        name: 'Project 1',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Project 2',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Project 3',
        description:
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
];

const skills: string[] = [
    'Java',
    'Python',
    'C++',
    'C#',
    'React',
    'TypeScript',
    'Vite',
    'TailwindCSS',
    'SASS',
    'Material UI',
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'R',
    'LaTeX',
    'MATLAB',
    'Git',
    'Data Structures & Algorithms',
    'Object-Oriented Design',
];

const techSkills: string[] = [
    'Figma',
    'Microsoft 365',
    'Microsoft Planner',
    'Google Suite',
    'Google Analytics',
    'Adobe Suite',
    'Windows OS & Server',
    'Linux',
    'Ubuntu',
    'IT',
    'Cyber Security',
];

const vocationalSkills: string[] = [
    'Agile',
    'JIRA',
    'Leadership',
    'Product, Program & Project Management',
    'Solutions Architecture',
    'Teamwork & Collaboration',
    'Presenting',
    'Public Speaking'
];

const contact: Contact = {
    email: 'lejennyk@gmail.com',
};

export { header, about, projects, skills, contact };
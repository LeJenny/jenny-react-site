interface Header {
    homepage: string;
    title: string;
}

interface Social {
    linkedin: string;
    github: string;
}

interface About {
    name: string;
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
    role: 'Software Engineer & Aspiring Product Manager',
    description:
        'I\'m a Computer Science student in my last year at San Jose State University with interests in technology, engineering, finance, and business. I\'ve had rigorous internship/project experience in Software Engineering (data engineering, web development, AI, and cloud) and extensive leadership experience in academic clubs and organizations. My ideal role would be any product/program management and software engineering position. Make yourself at home and feel free to peruse my page to your heart\'s content! <3',
    resume: 'https://example.com',
    social: {
        linkedin: 'https://linkedin.com/in/jennykle',
        github: 'https://github.com/LeJenny',
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
    'Tailwind CSS',
    'Material UI',
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'R',
    'LaTeX',
    'MATLAB',
    'Git',
];

const techSkills: string[] = [
    'Figma',
    'UML',
    'UI/UX',
    'Adobe Suite',
    'Microsoft 365',
    'Google Suite',
    'SOLIDWORKS',
    'AutoCAD & Fusion 360',
    'Windows OS & Server',
    'Linux',
    'Ubuntu',
    'IT & Cyber Security',
];

const vocationalSkills: string[] = [
    'Agile',
    'JIRA',
    'Leadership',
    'Product, Program & Project Management',
    'Solutions Architecture',
    'Teamwork & Collaboration',
    'Presentations',
    'Public Speaking'
];

const contact: Contact = {
    email: 'lejennyk@gmail.com',
};

export { header, about, projects, skills, techSkills, vocationalSkills, contact };
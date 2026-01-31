// =====================================================
// PORTFOLIO DATA - EDIT THIS FILE TO ADD YOUR DETAILS
// =====================================================

export const portfolioData = {
    // ===================
    // PERSONAL INFORMATION
    // ===================
    personal: {
        name: "Karthik P",                    // 👈 Your full name
        title: "Computer Science Student",         // 👈 Your title/role
        tagline: "Passionate developer building innovative solutions", // 👈 Short tagline

        // Contact Details
        email: "itskp2004@gmail.com",           // 👈 Your email
        phone: "+91 7012041942",                   // 👈 Your phone number
        location: "Pathanamthitta, Kerala, India",          // 👈 Your location

        // Profile Image - Place your image in the 'public' folder
        profileImage: import.meta.env.BASE_URL + "profile.jpeg",              // 👈 Path to your profile image

        // Resume - Place your resume PDF in the 'public' folder
        resumeLink: import.meta.env.BASE_URL + "resume.pdf",                 // 👈 Path to your resume

        // Social Links
        social: {
            github: "https://github.com/karthikp-04",        // 👈 GitHub URL
            linkedin: "https://linkedin.com/in/karthik-p-38659b352", // 👈 LinkedIn URL
            twitter: "https://twitter.com/itskp2004",                                      // 👈 Twitter URL (optional)
            leetcode: "https://leetcode.com/u/karthik_010_/",                                     // 👈 LeetCode URL (optional)
        }
    },

    // ===================
    // ABOUT ME SECTION
    // ===================
    aboutMe: `
    I'm a Computer Science student passionate about software development and AI/ML. I enjoy building full-stack web applications with React and Node.js while exploring machine learning with TensorFlow and PyTorch.

    I love solving complex problems—whether it's writing clean code or training neural networks. Currently seeking opportunities to work on projects that combine software engineering with AI.
  `,

    // ===================
    // SKILLS SECTION
    // ===================
    skills: {
        languages: [
            "JavaScript",
            "Python",
            "Java",
            "C",
            "HTML/CSS",
            "SQL"
        ], // 👈 Add your programming languages

        frameworks: [
            "React",
            "Node.js",
            "Next.js",
            "TensorFlow",
            "PyTorch",
            "scikit-learn",
            "Tailwind CSS"
        ], // 👈 Add frameworks you know

        tools: [
            "Git & GitHub",
            "VS Code",
            "Docker",
            "MongoDB",
            "MySQL",
            "Postman"
        ], // 👈 Add tools you use

        other: [
            "Problem Solving",
            "Data Structures",
            "Algorithms",
            "Machine Learning",
            "Agile/Scrum"
        ] // 👈 Add other skills (soft skills, concepts, etc.)
    },

    // ===================
    // PROJECTS SECTION
    // ===================
    projects: [
        {
            title: "Portfolio",                           // 👈 Project title
            description: "A clean, minimalist portfolio website designed to showcase my skills, projects, and certifications. Built with React and Vite for a fast, responsive experience.",
            techStack: ["React", "Vite", "CSS"],        // 👈 Technologies used
            liveLink: "https://karthikp-04.github.io/portfolio/",              // 👈 Live demo URL (or "" if none)
            githubLink: "https://github.com/karthikp-04/portfolio", // 👈 GitHub repo URL
            image: import.meta.env.BASE_URL + "project1.png"                             // 👈 Project screenshot (place in public folder)
        },
        {
            title: "MARINA",
            description: "This edge computing project intelligently schedules tasks in vehicular fog networks using LSTM predictions to anticipate vehicle movements and Pareto optimization to select cost-effective tasks. It bridges real SUMO traffic simulations with a Java scheduler that maximizes local processing while meeting deadlines through adaptive resource allocation.",
            techStack: ["Python", "Java", "SUMO+TAPAS", "TensorFlow"],
            liveLink: "",
            githubLink: "https://github.com/karthikp-04/MARINA",
            image: import.meta.env.BASE_URL + "project2.png"
        },
        {
            title: "Project Name 3",
            description: "Third project description. Highlight any interesting technical challenges you overcame.",
            techStack: ["Java", "Spring Boot", "MySQL"],
            liveLink: "https://project3-demo.com",
            githubLink: "https://github.com/username/project3",
            image: import.meta.env.BASE_URL + "project3.png"
        }
        // 👈 Add more projects by copying the object structure above
    ],

    // ===================
    // CERTIFICATIONS SECTION
    // ===================
    certifications: [
        {
            name: "IBM AI Engineering Professional Certificate",              // 👈 Certificate name
            issuer: "Coursera",          // 👈 Who issued it
            date: "January 2026",                      // 👈 When you got it
            credentialLink: "https://www.coursera.org/account/accomplishments/specialization/FROOOVPDZI5R" // 👈 Verification link (or "")
        },
        {
            name: "Machine Learning with Python",
            issuer: "Coursera",
            date: "December 2025",
            credentialLink: "https://www.coursera.org/account/accomplishments/verify/OQC37PTLTCCI"
        }
        // 👈 Add more certifications by copying the object structure above
    ],

    // ===================
    // EDUCATION SECTION
    // ===================
    education: [
        {
            institution: "Amrita Vishwa Vidyapeetham",                          // 👈 College/University name
            degree: "Bachelor of Technology in Computer Science",    // 👈 Degree name
            duration: "2023 - 2027",                                 // 👈 Start - End year
            location: "Coimbatore, Tamil Nadu",                                 // 👈 Location
            gpa: "7.13 / 10",                                         // 👈 GPA/CGPA (optional, "" to hide)
            coursework: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Web Development",
                "Operating Systems",
                "Machine Learning"
            ] // 👈 Relevant courses (optional, [] to hide)
        },
        {
            institution: "St Marys School",
            degree: "Higher Secondary (12th Grade)",
            duration: "2021 - 2023",
            location: "Pathanapuram, Kollam, Kerala",
            gpa: "87%"
        }
        // 👈 Add more education entries by copying the object structure above
    ]
};

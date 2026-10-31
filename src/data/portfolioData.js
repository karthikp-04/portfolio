// =====================================================
// PORTFOLIO DATA - SYNCHRONIZED WITH RESUME & GITHUB
// =====================================================

export const portfolioData = {
    // ===================
    // PERSONAL INFORMATION
    // ===================
    personal: {
        name: "Karthik P",
        title: "Computer Science & Engineering Student",
        status: "Open to Software Engineering & Data Roles",
        tagline: "Specializing in Data Engineering, AI/ML, and Full-Stack Backend Systems",

        // Contact Details
        email: "itskp2004@gmail.com",
        phone: "+91 7012041942",
        location: "Pathanamthitta, Kerala, India",

        // Profile Image
        profileImage: import.meta.env.BASE_URL + "profile.jpeg",

        // Resume PDF
        resumeLink: import.meta.env.BASE_URL + "resume.pdf",

        // Social Links
        social: {
            github: "https://github.com/karthikp-04",
            linkedin: "https://linkedin.com/in/karthik-p-38659b352",
            twitter: "https://twitter.com/itskp2004",
            leetcode: "https://leetcode.com/u/karthik_010_/",
        }
    },

    // ===================
    // ABOUT ME SECTION
    // ===================
    aboutMe: `
    I am a Computer Science & Engineering undergraduate at Amrita Vishwa Vidyapeetham with a passion for Data Engineering, Distributed Systems, Machine Learning, and Scalable Backend Architectures.

    Experienced in building LLM agents with LangGraph & RAG, real-time analytics platforms, edge computing schedulers, and secure full-stack applications using Python, Java, Spring Boot, FastAPI, React, and PySpark.

    Always enthusiastic about solving complex engineering challenges—whether it is architecting stateful conversational AI, training neural networks and Graph Convolutional Networks, or deploying resilient microservices with Docker.
  `,

    // ===================
    // SKILLS SECTION (Grouped as per Resume)
    // ===================
    skillCategories: [
        {
            title: "Programming Languages",
            icon: "💻",
            items: ["Python", "Java", "SQL", "C", "C++", "JavaScript"]
        },
        {
            title: "Data Engineering & Big Data",
            icon: "⚡",
            items: ["Apache Hadoop", "Apache HBase", "Apache Pig", "PySpark", "ETL Concepts", "Data Processing"]
        },
        {
            title: "AI & Machine Learning",
            icon: "🧠",
            items: ["PyTorch", "TensorFlow", "Keras", "LangGraph", "RAG Systems", "FAISS", "OpenCV", "Deep Learning", "LLMs"]
        },
        {
            title: "Backend & APIs",
            icon: "🚀",
            items: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "Microservices"]
        },
        {
            title: "Databases",
            icon: "🗄️",
            items: ["PostgreSQL", "MySQL", "Relational Database Design", "SQL Queries"]
        },
        {
            title: "Python Libraries & Analytics",
            icon: "📊",
            items: ["Pandas", "NumPy", "Statsmodels", "Scikit-Learn"]
        },
        {
            title: "Tools & Technologies",
            icon: "🛠️",
            items: ["Git", "GitHub", "Docker", "Docker Compose", "React.js", "Next.js", "Postman", "Linux"]
        }
    ],

    // Backward compatibility for existing skill structure
    skills: {
        languages: ["Python", "Java", "SQL", "C", "C++", "JavaScript"],
        frameworks: ["Spring Boot", "FastAPI", "LangGraph", "Node.js", "React.js", "Next.js", "PyTorch", "TensorFlow"],
        tools: ["Docker", "Docker Compose", "Git & GitHub", "PostgreSQL", "MySQL", "Apache Hadoop", "PySpark"],
        other: ["Pandas", "NumPy", "Statsmodels", "RAG Systems", "OpenCV", "REST APIs"]
    },

    // ===================
    // PROJECTS SECTION (Curated from GitHub & Resume)
    // ===================
    projects: [
        {
            title: "StockSense AI — Hybrid Stock Predictor",
            type: "Individual Project",
            description: "A full-stack financial market prediction platform integrating live stock data through yfinance with FinBERT news sentiment analysis. Employs a dynamic weighted approach (70% news sentiment / 30% technical indicators like RSI and MACD) delivering real-time BUY/SELL/HOLD signals through a FastAPI backend and interactive React dashboard.",
            techStack: ["Python", "FastAPI", "FinBERT", "yfinance", "React", "NumPy", "Pandas", "Recharts"],
            liveLink: "",
            githubLink: "https://github.com/karthikp-04/Stock-Price-Predictor-with-News-Sentiment",
            image: import.meta.env.BASE_URL + "project1.png"
        },
        {
            title: "LeadGraph: AI-Powered Social-to-Lead Agent",
            type: "Individual Project",
            description: "An intelligent conversational AI agent built with LangGraph for stateful multi-turn routing and dynamic intent classification. Incorporates Retrieval-Augmented Generation (RAG) using a FAISS vector store to answer domain questions accurately, and executes structured tool calling for automated lead qualification and CRM capture.",
            techStack: ["Python", "LangGraph", "RAG", "FAISS", "LLMs", "Tool Calling", "Vector DB"],
            liveLink: "",
            githubLink: "https://github.com/karthikp-04/LeadGraph-AI-Powered-Social-to-Lead-Agent",
            image: ""
        },
        {
            title: "Secure Prescription Management Platform",
            type: "Individual Project",
            description: "Developed a full-stack prescription management platform using Spring Boot REST APIs and PostgreSQL for structured medical records. Implemented Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC), and containerized the complete stack using Docker Compose for reproducible production deployment.",
            techStack: ["React", "Spring Boot", "PostgreSQL", "Docker", "Docker Compose", "REST APIs", "MFA / RBAC"],
            liveLink: "",
            githubLink: "https://github.com/karthikp-04/secure-prescription",
            image: ""
        },
        {
            title: "Satellite Image Change Detection",
            type: "Deep Learning Project",
            description: "A computer vision and deep learning project for detecting changes across bi-temporal satellite images. Implemented and benchmarked U-Net encoder-decoder CNNs alongside BIT (Binary Change Detection with Image Transformers using ResNet + Transformer decoders) across standard remote sensing benchmarks (LEVIR-CD, OSCD).",
            techStack: ["Python", "PyTorch", "Transformers", "U-Net", "ResNet", "Computer Vision", "OpenCV"],
            liveLink: "",
            githubLink: "https://github.com/karthikp-04/Satellite-Image-Change-Detection",
            image: ""
        },
        {
            title: "MARINA — Vehicular Edge Computing",
            type: "Group Project",
            description: "Designed and implemented an intelligent vehicular edge computing system using LSTM-based mobility prediction models to anticipate vehicle movement patterns and enable proactive task scheduling. Optimized computational workload allocation between mobile vehicles and roadside base stations with Pareto optimization to minimize latency and execution cost.",
            techStack: ["Java", "Python", "TensorFlow", "LSTM", "Pareto Optimization", "SUMO+TAPAS", "Edge Computing"],
            liveLink: "",
            githubLink: "https://github.com/karthikp-04/MARINA",
            image: import.meta.env.BASE_URL + "project2.png"
        },
        {
            title: "Impact of Weather on Retail Sales",
            type: "Analytics Project",
            description: "Integrated 2014–2018 grocery sales data with real-world meteorological records to examine consumer buying shifts during weather events. Utilized exploratory data analysis, hypothesis testing, and Ordinary Least Squares (OLS) regression, presenting the findings on an interactive Chart.js dashboard.",
            techStack: ["Python", "Pandas", "Statsmodels", "Chart.js", "OLS Regression", "EDA", "Hypothesis Testing"],
            liveLink: "https://karthikp-04.github.io/BA-Winter_25-26_Team-8_Insight_Architects/dashboard/",
            githubLink: "https://github.com/karthikp-04/BA-Winter_25-26_Team-8_Insight_Architects",
            image: import.meta.env.BASE_URL + "project3.png"
        }
    ],

    // ===================
    // CERTIFICATIONS SECTION
    // ===================
    certifications: [
        {
            name: "IBM AI Engineering Professional Certificate",
            issuer: "Coursera (IBM)",
            date: "January 2026",
            description: "13-course series covering Machine Learning, Deep Learning, Generative AI, LLMs, and RAG systems.",
            credentialLink: "https://www.coursera.org/account/accomplishments/specialization/FROOOVPDZI5R"
        },
        {
            name: "Machine Learning with Python",
            issuer: "Coursera",
            date: "December 2025",
            description: "Applied machine learning fundamentals, predictive modeling, classification, regression, and clustering algorithms.",
            credentialLink: "https://www.coursera.org/account/accomplishments/verify/OQC37PTLTCCI"
        }
    ],

    // ===================
    // EDUCATION SECTION (All Levels from Resume)
    // ===================
    education: [
        {
            institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
            degree: "B.Tech Computer Science & Engineering",
            duration: "2023 - 2027",
            location: "Coimbatore, Tamil Nadu",
            gpa: "CGPA: 7.11",
            coursework: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Big Data Engineering",
                "Operating Systems",
                "Machine Learning",
                "Computer Networks"
            ]
        },
        {
            institution: "St. Mary's Residential School, Pathanapuram, Kollam",
            degree: "Higher Secondary School, ISC (Science with Computer Science)",
            duration: "2022 - 2023",
            location: "Pathanapuram, Kollam, Kerala",
            gpa: "86%",
            coursework: [
                "Computer Science (Java, OOP, Data Structures)",
                "Mathematics",
                "Physics",
                "Chemistry"
            ]
        },
        {
            institution: "St. Mary's Residential School, Pathanapuram, Kollam",
            degree: "Secondary School, ICSE",
            duration: "2020 - 2021",
            location: "Pathanapuram, Kollam, Kerala",
            gpa: "96.2%"
        }
    ]
};

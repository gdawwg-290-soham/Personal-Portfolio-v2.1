import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

export const headerLinks = [
    { id:1, label:"01.", text:"About", link:"about"},
    { id:2, label:"02.", text:"Experience", link:"experience"},
    { id:3, label:"03.", text:"Projects", link:"projects"},
    { id:4, label:"04.", text:"Contact Me", link:"contact"},
] as const;

export const socialLinks = [
    { id:1, title:"GitHub",icon:FiGithub, link:"https://github.com/gdawwg-290-soham"},
    { id:2, title:"LinkedIn",icon:FiLinkedin, link:"https://www.linkedin.com/in/soham-ghosh-6a5202223/"},
    { id:3, title:"Twitter",icon:FiTwitter, link:"https://x.com/SGHOSH94064117"},
    { id:4, title:"Instagram",icon:FiInstagram, link:"https://www.instagram.com/soham_18_ghosh/"},
] as const;

export const experienceList = [
    {
        id:1, 
        title:"Web Development and Design Intern", 
        subtitle:"@ The Sparks Foundation", 
        period:"June 2024 - July 2024",
        text:"Developed Web Applications: Implemented Razorpay Integrated Payment Gateway, enhancing transaction processing efficiency, reducing payment errors by 50%, and boosting transaction rates by 25%",
        text2:"Deployed Razorpay APIs for Creating orders and paying for it using UPI, wallet and 5+ more ways with HTML, CSS(Tailwind), Node.js.",
        text3:"Best practices: Followed coding standards and best practices, ensuring maintainable and scalable code.",
    },
    {
        id:2, 
        title:"Managed Network Expert", 
        subtitle:"@ Chegg India Pvt. Ltd.", 
        period:"October 2022 - September 2023", 
        text:"Solved complex applied mathematics problems for higher secondary school and college-level students in Electrical Engineering.",
        text2:"Strategically implemented solutions by identifying patterns and techniques to yield answers of Calculus problems primarily.",
        text3:"Completed 90+ problems and received recommendations from Subject Matter Experts.",
    },
    {
        id:3, 
        title:"Core Team Member",
        subtitle:"@ Fresources DTU", 
        period:"August 2022 - Present", 
        text:"Coordinated with DTU peers to upload detailed subject content for various branches and batches.",
        text2:"Improved website engagement rates by 35% and reducing student inquiry response time by 50%.",
        text3:"Demonstrated leadership and communication skills as part of a team of 10 members, overseeing all aspects of 4 subjects over the course of 2.5 years.",
    },
] as const;

export const projectShowcase = [
    {
        id:1,
        title:"Investra",
        preview:"https://investra-soham.vercel.app/",
        source:"https://github.com/gdawwg-290-soham/Investra---Your-Ultimate-Investopedia",
        imgSrc:"https://res.cloudinary.com/dnq8wocop/image/upload/v1723052251/Screenshot_2024-08-07_230700_jwrlfp.png",
        stack:["Next","Tailwind CSS","Framer-Motion", "Vercel"],
        stackStyle: "items-start justify-start",
        text:"Investment guidelines for starters as an encyclopedia and mobile friendly design. The main focus is to organize, prioritize, and collaborate on tasks seamlessly with this intuitive solution on trading platforms and get the best user experience possible.",
    },
    {
        id:2,
        title:"React Chat App",
        preview:"https://react-fire-base-chat-app.vercel.app/",
        source:"https://github.com/gdawwg-290-soham/React-FireBase-Chat-App",
        imgSrc:"https://res.cloudinary.com/dnq8wocop/image/upload/v1723051768/Screenshot_2024-08-07_225815_eiqjsn.png",
        stack:["CSS","React","Firebase", "Vercel"],
        stackStyle: "items-end justify-end",
        text:"React real-time chat application utilizing Firebase to enable real-time communication between 100’s of users, providing an interactive chat experience. FirebaseAuth to create users, Firebase Storage to upload images, FirestoreDB to fetch and retrieve real-time data.",
    },
    {
        id:3,
        title:"Shortn.AI",
        preview:"https://shortn-ai.vercel.app/",
        source:"https://github.com/gdawwg-290-soham/Shortn.AI",
        imgSrc:"https://res.cloudinary.com/dnq8wocop/image/upload/v1723042912/Shortn-ai_buaade.png",
        stack:["React","TypeScript","Tailwind CSS","Redux","RapidAPI", "Vercel"],
        stackStyle: "items-start justify-start",
        text:"Welcome to VanLife, your go-to platform for renting vans and exploring the open road. This React-based website offers a seamless experience for both renters and hosts. Users can navigate through requiress authentication process so that user's can enjoy.",
    },
    {
        id:4,
        title:"Movie Watchlist",
        preview:"https://movie-ten-alpha.vercel.app/",
        source:"https://github.com/gdawwg-290-soham/Movie-WatchList-v1.3",
        imgSrc:"https://res.cloudinary.com/dplqrjsty/image/upload/v1705050812/w256fuh9lpbh0tjbnqpq.png",
        stack:["React","TypeScript","Tailwind","React-Router","Vercel"],
        stackStyle: "items-end justify-end",
        text:"Searching app with minamalystic design, where you can find your favourite movie, also you get to search seemlessly and flawlessly, accross a collection of movies and if you don't have time, you can save them for later by adding them to your collection.",
    },
    
];

export const noteworthProjects = [
    {
        id:1,
        title:"PowerBI Portfolio",
        preview:"https://app.powerbi.com/groups/me/reports/628cebfe-cb6f-41cb-82a8-5344063e70e8/63a3f0b4651ea06128e7?experience=power-bi&bookmarkGuid=2221bf101707a7ba10d0",
        source:"https://github.com/gdawwg-290-soham/Power_BI_Portfolio_Project",
        stack:["PowerBI"],
        text:" Data Gathering and Preparation: The project begins with data collection, focusing on relevant datasets that will be used for analysis. Data Analysis: Various data analysis techniques are employed to extract meaningful insights from the dataset. The use of DAX (Data Analysis Expressions) is highlighted for creating calculated columns and measures. Visualization: The core of the project involves creating interactive and insightful dashboards using Power BI.",
    },
    {
        id:2,
        title:"Todo Application",
        preview:"https://todolist-gdawwg.netlify.app/",
        source:"https://github.com/gdawwg-290-soham/ToDoList-App",
        stack:["HTML","CSS","Javasript","Netlify"],
        text:"This is a simple yet effective To-Do List Application built with HTML, CSS, and JavaScript. It allows you to manage your tasks and stay organized. You can add, edit, mark as completed, and delete tasks effortlessly.This to-do list application supports voice command for adding tasks effortlessly.",
    },
    {
        id:3,
        title:"Student Performance Analysis",
        preview:"",
        source:"https://github.com/gdawwg-290-soham/Student_Performance_Analysis",
        stack:["Matplotlib","Pandas","Numpy","Seaborn"],
        text:"Perform comprehensive data analysis and visualization on student performance data, identifying correlations and dependencies to enable data-informed decisions for educational institutions.",
    },
    {
        id:4,
        title:"Simple Weather App",
        preview:"https://weather-appjs-soham-ghoshs-projects-da4a7ab5.vercel.app/",
        source:"https://github.com/gdawwg-290-soham/weather-app.js",
        stack:["HTML","CSS","Javascript","Vercel"],
        text:"A basic Javascript Weather App to check out learning fundamentals. This app shows Windspeed in Km/h and %age Humidity alongside Temperature.",
    },
    
    
];
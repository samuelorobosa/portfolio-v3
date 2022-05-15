import { v4 as uuidv4 } from 'uuid';

export const resumeData = {
        name: "Samuel",
        surname: "Amagbakhen",
        role: "Frontend Developer",
        description: "A creative, ambitious, and self-motivated frontend developer with a passion for creating things that live and breathe on the web. I can work with popular front-end technologies, utilizing and these tools to deliver a pixel-perfect design and user-centered implementation with proper documentation of my implementation.",
        toolsData: [
            {
                id: uuidv4(),
                title: "Core Technologies",
               data: ["HTML/CSS/SCSS", "JavaScript(ES6+)"]
            },
            {
                id: uuidv4(),
                title: "Libraries and Frameworks",
                data: ["Bootstrap", "ReactJS", "jQuery", "TailwindCSS", "Laravel Blade Templates","GSAP", "Framer Motion"]
            },
            {
                id: uuidv4(),
                title: "Tools and Platforms",
                data: ["Git/GitHub/BitBucket", "PhpStorm", "Jira", "WordPress", "Vercel", "Netlify", "Confluence"]
            },
            {
                id: uuidv4(),
                title: "Design",
                data: ["Figma","InVision"]
            },
        ],
        experience: [
            {
                jobTitle: "Frontend Developer",
                company: "Edo State Skills Development Agency",
                startDate: "May 2021",
                endDate:  "July 2021", //leave blank if still working
                workDone: [
                    "Implemented component-based coding pattern using ReactJs in order to improve page speed and load time",
                    "Designed and implemented promotional landing pages to boost marketing for the government programs ensuring a wide reach",
                    "Designed and implemented promotional landing pages to boost marketing for the government programs ensuring a wide reach"
                ]
            },
            {
                jobTitle: "Frontend Developer[Intern]",
                company: "HNG Internship",
                startDate: "May 2020",
                endDate:  "August 2020", //leave blank if still working
                workDone: [
                    "Collaborated closely with the Front End team to deliver pixel-perfect landing pages from Figma Designs which were compiled and sold as themes on ThemeForest",
                    "Developed and maintained websites utilizing HTML5, CSS 3, Bootstrap 4, JavaScript, jQuery, AJAX, and PHP to learn how to send and receive data between client and server",
                ]
            }
        ]
}

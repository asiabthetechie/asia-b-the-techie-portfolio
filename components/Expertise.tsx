"use client";
import React from 'react'
import PageHeader from './ui/PageHeader'
import ExpertiseCard from './ui/ExpertiseCard'
import { CgFigma } from "react-icons/cg";
import { SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiSass, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiLaravel, SiAstro, SiNodedotjs, SiCsharp, SiDotnet, SiPhp, SiPython, SiApollographql, SiDocker, SiKubernetes, SiAmazonaws, SiTerraform, SiMongodb, SiMicrosoftazure, SiSnowflake, SiRedis, SiApacheairflow, SiApachespark, SiTableau, SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular } from "react-icons/fa6";


const expertise = [
    {
        id: 1,
        title: "UX & UI Design",
        description: "I turn ideas and visions into digital products by researching, forming concise visual design guidelines, outlining the information architecture, and aggregating responsive prototypes and components.",
        tools: [
            {
                id: 1,
                toolName: "Figma",
                designation: "The industry standard collaborative design tool",
                icon: <CgFigma className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "Blender",
                designation: "A open-source tool for creating 3D assets",
                icon: <SiBlender className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "Adobe Photoshop",
                designation: "The industry standard photo editor and raster graphics software",
                icon: <SiAdobephotoshop className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "Adobe Illustrator",
                designation: "A vector graphics editor that's part of the Adobe Creative Suite",
                icon: <SiAdobeillustrator className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "Adobe After Effects",
                designation: "A industry standard motion graphics and visual effects tool",
                icon: <SiAdobeaftereffects className='w-8 h-8 mx-auto'/>
            }
        ]
    },
    {
        id: 2,
        title: "Front End Development",
        description: "I craft captivating, interactive web experiences by implementing modern design aesthetics, optimizing user engagement, and capitalizing on the latest front-end technologies for the appropriate projects. ",
        tools: [
            {
                id: 1,
                toolName: "HTML5",
                designation: "The markup language for web pages",
                icon: <SiHtml5 className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "CSS3",
                designation: "The stylesheet language for web design",
                icon: <SiCss3 className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "SASS",
                designation: "The standard preprocessor scripting language",
                icon: <SiSass className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "TailwindCSS",
                designation: "The current standard CSS framework",
                icon: <SiTailwindcss className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "JavaScript",
                designation: "A core programming language for building web page behavior",
                icon: <SiJavascript className='w-7 h-7 mx-auto'/>
            },
            {
                id: 6,
                toolName: "TypeScript",
                designation: "The working developer's JavaScript",
                icon: <SiTypescript className='w-7 h-7 mx-auto'/>
            }, 
            {
                id: 7,
                toolName: "React & React Native",
                designation: "The front-end library for creating responsive user interfaces for various devices",
                icon: <SiReact className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Angular",
                designation: "A Typescript-based framework developed by Google",
                icon: <FaAngular className='w-10 h-10 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Laravel",
                designation: "A PHP web framework for building web apps",
                icon: <SiLaravel className='w-8 h-8 mx-auto'/>
            },
            {
                id: 10,
                toolName: "Astro",
                designation: "A web framework for building content-driven websites",
                icon: <SiAstro className='w-8 h-8 mx-auto'/>
            }
        ]
    },
    {
        id: 3,
        title: "Back End Development",
        description: "I build robust, scalable back-end systems architecting secure APIs, optimizing database interactions, and ensuring seamless integration with front-end technologies for enhanced performance and reliability. ",
        tools: [
            {
                id: 1,
                toolName: "Node.js",
                designation: "A tool used to write JavaScript for command line tools and server-side scripts",
                icon: <SiNodedotjs className='w-8 h-8 mx-auto'/>
            },
            {
                id: 2,
                toolName: "C#",
                designation: "A general purpose programming language developed by Microsoft",
                icon: <SiCsharp className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: ".NET",
                designation: "A framework for creating and running software apps written in C#",
                icon: <SiDotnet className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "PHP",
                designation: "A general-purpose scripting language for dynamic web development",
                icon: <SiPhp className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "Python",
                designation: "A high-level language for automation, databases, and machine learning",
                icon: <SiPython className='w-8 h-8 mx-auto'/>
            },
            {
                id: 6,
                toolName: "Apollo GraphQL",
                designation: "A tool for managing local and remote data with GraphQL",
                icon: <SiApollographql className='w-8 h-8 mx-auto'/>
            },
            {
                id: 7,
                toolName: "Dockers",
                designation: "A containerization platform for virtualized app containers",
                icon: <SiDocker className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Kubernetes",
                designation: "A container orchestration system for automatic deployment and scaling",
                icon: <SiKubernetes className='w-8 h-8 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Amazon Web Services",
                designation: "A collection of various cloud computing services from Amazon",
                icon: <SiAmazonaws className='w-8 h-8 mx-auto'/>
            },
            {
                id: 10,
                toolName: "Terraform",
                designation: "A tool for automating various infrastructure tasks",
                icon: <SiTerraform className='w-8 h-8 mx-auto'/>
            },
        ]
    },
    {
        id: 4,
        title: "Database Engineering",
        description: "I design and optimize high-performance databases by implementing efficient data structures, ensuring database integrity, and enabling storage solutions to power dynamic and data-driven applications.",
        tools: [
            {
                id: 1,
                toolName: "PostgreSQL",
                designation: "A popular relational database maangement system",
                icon: <BiLogoPostgresql className='w-10 h-10 mx-auto'/>

            },
            {
                id: 2,
                toolName: "MongoDB",
                designation: "A popular NoSQL database that utilizes JSON-like documents",
                icon: <SiMongodb className='w-8 h-8 mx-auto'/>
            },
            {
                id: 3,
                toolName: "Azure",
                designation: "Microsoft's public cloud platform providing infrastructure and database services",
                icon: <SiMicrosoftazure className='w-8 h-8 mx-auto'/>
            },
            {
                id: 4,
                toolName: "Snowflake",
                designation: "A platform enabling data storage, processing, and analytic solutions",
                icon: <SiSnowflake className='w-8 h-8 mx-auto'/>
            },
            {
                id: 5,
                toolName: "Redis",
                designation: "A NoSQL key-value database used for storage of complex data types",
                icon: <SiRedis className='w-8 h-8 mx-auto'/>
            },
            {
                id: 6,
                toolName: "Apache Airflow",
                designation: "An automation tool to programmatically schedule and monitor workflows",
                icon: <SiApacheairflow className='w-8 h-8 mx-auto'/>
            },
            {
                id: 7,
                toolName: "Apache Spark",
                designation: "A distributed data processing engine for data analytics and machine learning",
                icon: <SiApachespark className='w-8 h-8 mx-auto'/>
            },
            {
                id: 8,
                toolName: "Tableau",
                designation: "A business intelligence and analytics software for visualizing data",
                icon: <SiTableau className='w-8 h-8 mx-auto'/>
            },
            {
                id: 9,
                toolName: "Elasticsearch",
                designation: "A search and analytics engine for structured and unstructured data",
                icon: <SiElasticsearch className='w-8 h-8 mx-auto'/>
            },
        ]
    }
]

const Expertise = () => {
  return (
    <div id="expertise" className='mt-32'>
        <PageHeader title="Expertise"/>
        <div className='flex flex-col gap-12'>
            <ExpertiseCard 
                id={expertise[0].id}
                title={expertise[0].title}
                description={expertise[0].description}
                tools={expertise[0].tools}
            />
            <ExpertiseCard 
                id={expertise[1].id}
                title={expertise[1].title}
                description={expertise[1].description}
                tools={expertise[1].tools}
            />
            <ExpertiseCard 
                id={expertise[2].id}
                title={expertise[2].title}
                description={expertise[2].description}
                tools={expertise[2].tools}
            />
            <ExpertiseCard 
                id={expertise[3].id}
                title={expertise[3].title}
                description={expertise[3].description}
                tools={expertise[3].tools}
            />
        </div>
    </div>
  )
}

export default Expertise
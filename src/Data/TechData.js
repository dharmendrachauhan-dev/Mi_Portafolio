import js from '../assets/icon/js.png'
import nodejs from '../assets/icon/nodejs.png'
import express from '../assets/icon/express.png'
import reactjs from '../assets/icon/react.png'
import tailwindcss from '../assets/icon/tailwindcss.png'
import postegresql from '../assets/icon/postgresql.png'
import mongodb from '../assets/icon/mongodb.png'
import cicd from '../assets/icon/cicd.png'
import github from '../assets/icon/github.png'
import openai from '../assets/icon/openai.png'
import vscode from '../assets/icon/vs_code.png'
import postman from '../assets/icon/postman.png'

const TechData = {
    web: [
        {
            name:'Javascript',
            details: 'A web development language',
            image: js
        },
        {
            name:'NodeJS',
            details: 'JavaScript Run-time Engine',
            image: nodejs
        },
        {
            name:'Express JS',
            details: 'Web Framework for Node.js',
            image: express
        },
        {
            name:'ReactJS',
            details: 'A JavaScript Library',
            image: reactjs
        },
        {
            name:'Tailwind CSS',
            details: 'CSS Framework',
            image: tailwindcss
        },
    ],
    tools: [
        {
            name:'Git & GitHub',
            details: 'Version Control',
            image: github
        },
        {
            name:'VS Code',
            details: 'Code Editor',
            image: vscode
        },
        {
            name:'Postman',
            details: 'API Testing',
            image: postman
        },
        {
            name:'OpenAI',
            details: 'LLM',
            image: openai
        },
    ],
    database: [
        {
            name:'PostgreSQL',
            details: 'Relational DB',
            image: postegresql
        },
        {
            name:'MongoDB',
            details: 'NoSQL DB',
            image: mongodb
        }
    ],
    devops: [
        {
            name:'CI/CD',
            details: 'CI/CD with Github Actions',
            image: cicd
        }
    ]
}

export default  TechData

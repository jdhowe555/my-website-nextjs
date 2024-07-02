import React from 'react'
import Dot from "@/components/Dot";
import GitHubLogo from "@/components/GitHubLogo";
import TypeJs from "@/components/TypeJs";
import LinkedinLogo from "@/components/LinkedinLogo";

const generalInfo = {
    name: 'Jeff Howe',
    schooling: [
    {
        name: 'Western Michigan University',
        location: 'Kalamazoo, MI'
    }],
    degrees: ['BS in Computer Engineering', 'Minor in Computer Science', 'Minor in Math'],
    description: 'Skilled Software Developer with 5 years of experience in designing and implementing scalable applications using C#, Javascript, and SQL. Proficient in DevOps practices.' +
                 ' Passionate about learning new technologies and solving complex problems to enhance software performance and user experience.'
}

let jobRoles = [
    {
        name: 'Northwestern University',
        jobTitle: 'Full Stack Software Developer',
        yearStart: '2022',
        yearEnd: 'Present',
        currentRole: true,
        descriptions: [
            'Working with a small team of people to rebuild faculty and staff websites.',
            'I collaborate directly with clients to turn their ideas into functional websites while leading the development of projects.',
            'Fast-paced startup environment, highly collaborative meetings with customers twice a week with many emails, and always learning what best works for our needs.',
            'Employing modern design principles, I create visually appealing UIs that are also optimized for displaying large quantities of data.'
        ],
        languages: ['C#', 'javaScript', 'jQuery', 'SQL', 'TailwindCss', 'HTML'],
        technology: ['Splunk', 'Microsoft Graph', 'Microsoft Identity', '.NET', 'Oracle', 'IronSoftware', 'TinyMCE']
    },
    {
        name: 'UST',
        jobTitle: 'Software Developer',
        yearStart: '2019',
        yearEnd: '2022',
        currentRole: false,
        descriptions: [
            'Worked with a team of people at Blue Cross Blue Shield (BCBSA) to develop a system called PEX (Provider Engagement Exchange).',
            'Leading support and providing help with development on an Agile 2-week sprint.' +
            'Worked with 30+ companies on the PEX project to ensure that the system is fully tested before being deployed into our production environment.'
        ],
        languages: ['Java', 'javaScript', 'jQuery', 'SQL', 'HTML'],
        technology: ['SpringBoot']
    }
]

const sortedJobTitles = [...jobRoles].sort((a, b) => parseInt(a.yearStart) - parseInt(b.yearStart)).map(m => m.jobTitle);

export default function Resume() {
    return (
        <div className="flex w-full min-w-screen justify-center min-h-[calc(100vh_-_4rem)]">
            <div className="flex flex-col md:flex-row gap-4 py-24">
                <header id="general" className="flex flex-col gap-3 sticky w-80">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{generalInfo.name}</h1>
                    <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        <TypeJs strings={sortedJobTitles}></TypeJs>
                    </h2>
                    <ul>{generalInfo.schooling.map((school, i) => (
                        <li key={i}>
                            <div className="flex flex-col gap-.5">
                                <span>{school.name}</span>
                                <span>{school.location}</span>
                            </div>
                        </li>
                    ))}</ul>
                    <ul className="mt-1 max-w-xs leading-normal">
                        {generalInfo.degrees.map(((degree, i) => (
                            <li key={i} className="">{degree}</li>
                        )))}
                    </ul>
                    <div className="flex flex-row gap-2 mt-auto">
                        <GitHubLogo></GitHubLogo>
                        <LinkedinLogo></LinkedinLogo>
                    </div>
                </header>
                <div className="flex flex-col gap-10 w-[40rem]">
                    <section id="about">
                        <p className="p-4">{generalInfo.description}</p>
                    </section>
                    <section id="job-roles" className="flex flex-col gap-10">
                        {jobRoles.map((role) => (
                            <div key={role.name}
                                 className="rounded hover:bg-slate-700/50 transition motion-reduce:transition-none">
                                <div className="flex flex-row gap-7 p-4">
                                    <div className="flex flex-row gap-x-2 min-w-36 w-36 max-w-36">
                                        <p>{role.yearStart}</p>
                                        <p>-</p>
                                        <p>{role.yearEnd}</p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-row gap-2 items-center">
                                            {role.jobTitle} <Dot size={4} color="bg-blue-500"/> {role.name}
                                        </div>
                                        <ol className="list-disc ml-10 w-96">
                                            {role.descriptions.map((description, i) => (
                                                <li key={i}>
                                                    <p className="text-sm leading-normal">{description}</p>
                                                </li>
                                            ))}
                                        </ol>
                                        <ul className="flex flex-row gap-x-1.5 gap-y-2">
                                            {role.languages.map((language, i) => (
                                                <li key={i}>
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium leading-5">{language}</div>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="flex flex-row flex-wrap gap-x-1.5 gap-y-2">
                                            {role.technology.map((language, i) => (
                                                <li key={i}>
                                                    <div
                                                        className="flex items-center rounded-full bg-sky-400/10 text-sky-300 px-3 py-1 text-xs font-medium leading-5">{language}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}

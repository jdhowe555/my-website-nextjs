import React from 'react'
import Dot from "@/components/Dot";
import GitHubLogo from "@/components/GitHubLogo";
import TypeJs from "@/components/TypeJs";
import LinkedinLogo from "@/components/LinkedinLogo";
import {getResumeData} from '@/lib/GetResumeData'


export async function getServerSideProps() {
    return await getResumeData();
}


export default function Resume({data}) {
    const { generalInfo, jobRoles = [] } = data;
    const sortedJobTitles = [...jobRoles].sort((a, b) => parseInt(a.yearStart) - parseInt(b.yearStart)).map(m => m.jobTitle);

    return (
        <div className="flex w-full md:min-w-screen md:justify-center min-h-[calc(100vh_-_4rem)]">
            <div className="flex flex-col md:flex-row gap-4 py-24">
                <header id="general" className="md:flex md:flex-col md:gap-3 md:w-80 grid grid-cols-2 sticky px-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                            {generalInfo.name}
                        </h1>
                        <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                            <TypeJs strings={sortedJobTitles}></TypeJs>
                        </h2>
                        <div className="flex flex-row gap-2 mt-auto md:hidden">
                            <GitHubLogo></GitHubLogo>
                            <LinkedinLogo></LinkedinLogo>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:h-full">
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
                        <div className="md:flex flex-row gap-2 mt-auto hidden">
                            <GitHubLogo></GitHubLogo>
                            <LinkedinLogo></LinkedinLogo>
                        </div>
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

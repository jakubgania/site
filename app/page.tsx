import Image from "next/image";
import Link from "next/link";

import {
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaGlobe
} from "react-icons/fa6"

// import {
//   RiArrowDropRightLine
// } from "react-icons/ri"

// import {
//   BsStars
// } from "react-icons/bs"

export default function Home() {
  const projects = [
    { name: "weather-app", path: "/example-path4" },
    { name: "github-trending-repositories", path: "/example-path-3" },
    { name: "fastapi-graphql", path: "/example-path-2" },
    { name: "api-rest-to-graphql-github", path: "/example-path" },
    { name: "leetcode-solutions", path: "/ltc" },
    { name: "nextjs-templates", path: "/nxjstml" },
    { name: "one-page-templates", path: "/opt" }
  ]

  const youtube = [
    { name: "Building a simple iOS app with SwiftUI - iOS 18 | Swift 6 | Xcode 16", url: "https://www.youtube.com/watch?v=7vBpn-DLwYc" },
    { name: "Implementation of Portfolio Website for Software Developer with Next.js and Tailwind CSS, Dark Theme", url: "https://www.youtube.com/watch?v=ZT4U0yjCZkE" },
    { name: "Implementation of a simple website and then refactoring - Next.js, Tailwind CSS, Visual Studio Code", url: "https://www.youtube.com/watch?v=4MqGGWeZMuo" },
    { name: "Implementation of a component that looks like a code editor with Next.js and Tailwind CSS", url: "https://www.youtube.com/watch?v=FTuskRr_8Uo" },
    { name: "Implementation of delaminating layers with spatial shift - CSS/HTML - typing sound", url: "https://www.youtube.com/watch?v=wDMuy3QxsQM" },
    { name: "Programming, Software, Technology - Video About My Passion", url: "https://www.youtube.com/watch?v=GwVr0BPPRv8" },
    { name: "Swift Playgrounds 4 - Blu's Adventure - Solutions", url: "https://www.youtube.com/watch?v=ex61i4A4fpo" },
    { name: "Swift Playgrounds 4 - Learn to Code 2 - Solutions", url: "https://www.youtube.com/watch?v=R8XpPDDkENM" },
    { name: "Swift Playgrounds 4 - Learn to Code 1 - Solutions", url: "https://www.youtube.com/watch?v=UnqKdFrXhgg" },
    { name: "My personal website - project presentation (next, beta version)", url: "https://www.youtube.com/watch?v=hIfDGzQcyIE" },
    { name: "Nuxt.js and AWS - part of the process of compiling and deploying my website to the cloud", url: "https://www.youtube.com/watch?v=4tWUifWr6bs" },
    { name: "My personal website (next, new version) - project presentation | early stage", url: "https://www.youtube.com/watch?v=T7tEwwrS2GI" },
    { name: "Business website - project presentation", url: "https://www.youtube.com/watch?v=zprQkKsVTfc" },
    { name: "My personal website - project presentation", url: "https://www.youtube.com/watch?v=dkRybOUt3Rg" },
    { name: "Computing Cluster - BEM in WCSS", url: "https://www.youtube.com/watch?v=for1ayFZD5g" }
  ]

  const tags = [
    "TypeScript",
    "TailwindCSS",
    "TypeORM",
    "Vue.js",
    "Vuetify.js",
    "Vitest",
    "Next.js",
    "Nest.js",
    "Flask",
    "FastAPI",
    "Docker",
    "Selenium",
    "Playwright",
    "PostgreSQL",
    "Swift",
    "SwiftUI"
  ]

  const software = [
    "Visual Studio Code",
    "Xcode",
    "Final Cut Pro",
    "Pixelmator Pro",
    "Postman",
    "DBeaver",
    "Ollama"
  ]

  const links = [
    { icon: <FaXTwitter />, title: "X", url: "https://x.com/jakubgania" },
    { icon: <FaGithub />, title: "GitHub", url: "https://github.com/jakubgania" },
    { icon: <FaLinkedinIn />, title: "LinkedIn", url: "https://www.linkedin.com/in/jakubgania/" },
    { icon: <FaYoutube />, title: "YouTube", url: "https://www.youtube.com/@JakubGaniaSoftware/videos" },
    // { icon: <FaGlobe />, title: "Credly", url: "https://www.credly.com/users/jakub-gania" },
    // { icon: <BsStars />, title: "NeuronScale", url: "https://neuronscale.com" }
  ]

  return (
    <div className="content-wrapper flex flex-col gap-16">
      <div className="flex gap-6 items-center mt-16">
        <div>
          <Image
            src="/me.jpg"
            width={92}
            height={92}
            quality={100}
            alt="My photo"
            className="rounded-full"
          />  
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            Jakub Gania
          </div>
          <div className="text-base md:text-lg tracking-tigh font-medium">
            SWE & Creator -  MSc in Computer Science
          </div>
        </div>
      </div>
      <div className="text-base md:text-lg font-medium">
        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">software engineer</span> who creates various projects, likes to learn new things and discover new technologies. I enjoy creating content on youtube and taking photos in my free time. I share my thoughts on <a href="https://x.com/jakubgania" target="_blank" className="text-blue-500">X</a> and <a href="https://linkedin.com/in/jakubgania" target="_blank" className="text-blue-500"> LinkedIn</a>
      </div>
      <div className="flex flex-row gap-2 bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
        {links.map((link) =>(
          <div key={link.title} className="text-base md:text-lg font-medium">
            <a href={link.url} target="_blank">
              {link.title}
            </a>
          </div>
        ))}
      </div>
      <div className="text-base md:text-lg font-medium">
        I work at <a href="https://www.simpl.de/en/" target="_blank" className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">SIMPL</a>, a German startup based in Dortmund, where I help enhance our SaaS product for optimizing service and maintenance operations, driving efficiency and increasing after-sales revenue.
      </div>
      <div className="text-base md:text-lg font-medium">
        I hold a Master’s degree in Computer Science from a university in Poland and have also completed postgraduate studies in cloud technologies. My primary focus is on TypeScript, along with frameworks and tools like Next.js, Nest.js, Vue.js, TailwindCSS, TypeORM, and Vitest. I also have experience with Docker, Flask, FastAPI, Selenium, Playwright, PostgreSQL, Swift, and SwiftUI.
      </div>
      {/* <LinkButton path="/" title="about" /> */}
      <div>
        {/* <h2 className="text-2xl md:text-3xl font-bold">
          technologies
        </h2> */}
        <div className="py-8">
          <div className="text-base md:text-lg font-medium">
            I use various technologies in my daily work and experiment with many of them in my own projects:
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 relative">
          {tags.map((tag) => (
            <div key={tag} className="py-1 pr-4 group relative">
              <span className="text-base md:text-lg font-medium cursor-default">{tag}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h2 className="text-2xl md:text-3xl font-bold">
          software
        </h2>
        <div className="py-8">
          <div className="text-base md:text-lg font-medium">
            applications and programs that I use
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 relative">
          {software.map((app) => (
            <div key={app} className="py-1 pr-4 group relative">
              <span className="text-base md:text-lg text-slate-400 font-medium cursor-default">{app}</span>
            </div>
          ))}
        </div>
      </div> */}
      {/* <LinkButton path="/" title="all programs" /> */}
      {/* <div>
        <div className="grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
          {links.map((link) => (
            <div key={link.title}>
              <a href={link.url} target="_blank" className="w-full flex items-center text-slate-400 text-lg bg-slate-50 rounded-lg p-3">
                <section className="flex flex-row items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="w-10">
                      <span>{link.icon}</span>
                    </div>
                    <span className="text-base md:text-lg">{link.title}</span>
                  </div>
                  <div>
                    <RiArrowDropRightLine className="ml-auto w-6 h-6" />
                  </div>
                </section>
              </a>
            </div>
          ))}
        </div>
        <ul className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.title} className="">
              <a href={link.url} target="_blank" className="flex text-xl bg-slate-100 rounded-2xl p-3 w-full">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div>
        <h2 className="text-3xl font-bold">
          photos & concepts
        </h2>
        <div className="py-8">
          <div className="text-xl">
            example description
          </div>
        </div>
      </div> */}
      <div>
        {/* <h2 className="text-2xl md:text-3xl font-bold">
          projects
        </h2> */}
        <div className="py-8">
          <div className="text-base md:text-lg font-medium">
            some of my open source projects
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6 font-medium">
          {projects.map((project) => (
            <li key={project.path} className="text-base md:text-lg text-blue-500 pb-2">{project.name}</li>
          ))}
        </ul>
        <div className="py-8">
          <div className="text-base md:text-lg font-medium">
            a place where I gather knowledge about artificial intelligence, machine learning, deep learning and cloud technologies. It is still in a phase of intensive development
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6">
          <li className="text-base md:text-lg text-blue-500 font-medium">
            <a href="https://neuronscale.com" target="_blank">neuronscale.com</a>
          </li>
        </ul>
      </div>
      {/* <LinkButton path="/projects" title="all projects" /> */}
      <div>
        {/* <h2 className="text-2xl md:text-3xl font-bold">
          youtube
        </h2> */}
        <div className="pb-8">
          <div className="text-base md:text-lg font-medium">
            91 subscribers • 44 videos • 11,240 views
          </div>
        </div>
        <div className="pb-8">
          <div className="text-base md:text-lg font-medium">
            most often I create videos in which I show my projects, but sometimes they are just casual videos in which I show how I program something, I think that YouTube is a great place to commemorate your projects which you can analyze or show to another person at any time
          </div>
        </div>
        <div className="pb-8">
          <div className="text-base md:text-lg font-medium">
            some of my videos:
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-5">
          {youtube.map((video) => (
            <li key={video.url} className="text-base md:text-lg font-medium text-blue-500 tracking-tight pb-2 md:pb-4 relative group">
              <a href={video.url} target="_blank">
                {video.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <LinkButton path="/youtube" title="all videos" /> */}
    </div>
  );
}

interface LinkButtonProps {
  path: string,
  title: string
}

function LinkButton({ path, title } : LinkButtonProps) {

  return (
    <div className="flex justify-end">
      <Link href={path} className="bg-black text-white text-sm font-medium rounded-lg py-1 px-4">
        {title}
      </Link>
    </div>
  )
}

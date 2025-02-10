import Image from "next/image";
import Link from "next/link";

import igmh from '../public/dg-1-square.jpg'

import {
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaGlobe
} from "react-icons/fa6"

import {
  RiArrowDropRightLine
} from "react-icons/ri"

import {
  BsStars
} from "react-icons/bs"

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
    // { name: "I'm back. A little update and plans", url: "https://www.youtube.com/watch?v=7vFMPdGNQwk" },
    { name: "Implementation of Portfolio Website for Software Developer with Next.js and Tailwind CSS, Dark Theme", url: "https://www.youtube.com/watch?v=ZT4U0yjCZkE" },
    { name: "Implementation of a simple website and then refactoring - Next.js, Tailwind CSS, Visual Studio Code", url: "https://www.youtube.com/watch?v=4MqGGWeZMuo" },
    { name: "Implementation of a component that looks like a code editor with Next.js and Tailwind CSS", url: "https://www.youtube.com/watch?v=FTuskRr_8Uo" },
    // { name: "Implementation of a component that looks like a code editor | HTML, CSS, JS", url: "https://www.youtube.com/watch?v=uZ13aqBU7hg" },
    // { name: "My 4th anniversary of YouTube channel - a short summary in numbers", url: "https://www.youtube.com/watch?v=XVN5dQZlPZ4" },
    // { name: "Maintenance + Logistics & Automation - Trade Show For Industry - Dortmund 2023", url: "https://www.youtube.com/watch?v=pu5xhH7o3Jk" },
    { name: "Implementation of delaminating layers with spatial shift - CSS/HTML - typing sound", url: "https://www.youtube.com/watch?v=wDMuy3QxsQM" },
    // { name: "study with me - preparation for the AWS exam - with background music - synth / retro / chill", url: "https://www.youtube.com/watch?v=QmyDaga_c_I" },
    // { name: "study with me - preparation for the AWS exam - with background music - synth / retro / chill", url: "https://www.youtube.com/watch?v=tbSsO9Uq8w8" },
    // { name: "study with me - preparation for the AWS exam - with background music - lofi", url: "https://www.youtube.com/watch?v=nVh9cWILAKg" },
    // { name: "study with me - preparation for the AWS exam - with background music - lofi", url: "https://www.youtube.com/watch?v=Hxqfmz6hAYE" },
    // { name: "study with me - preparation for the AWS exam - with background music - lofi", url: "https://www.youtube.com/watch?v=CdLNx_jzieo" },
    // { name: "study with me - preparation for the AWS exam - with background music - retrowave", url: "https://www.youtube.com/watch?v=jw8f0p7goR8" },
    // { name: "study with me - preparation for the AWS exam - with background music - synthwave", url: "https://www.youtube.com/watch?v=NIgB5kbKMMY" },
    // { name: "Coding At Night | Software Development | Synthwave Background Music", url: "https://www.youtube.com/watch?v=lu0C-zhv-Fo" },
    // { name: "Coding At Night | Software Development | NoCopyrightSounds Background Music", url: "https://www.youtube.com/watch?v=BJXS5k7QhmA" },
    // { name: "Coding At Night | Software Development | Ambient Background Music", url: "https://www.youtube.com/watch?v=DMFowSlryIs" },
    // { name: "Coding At Night | Software Development | Retro Synthwave Background Music", url: "https://www.youtube.com/watch?v=cZJysM16vLI" },
    // { name: "Coding At Night | Software Development | Dark Synthwave", url: "https://www.youtube.com/watch?v=wlW5ek4nkyc" },
    // { name: "Coding At Night | Software Development | NoCopyrightSounds", url: "https://www.youtube.com/watch?v=Au98DdLJsNo" },
    // { name: "Coding At Night | Software Development | Synthwave", url: "https://www.youtube.com/watch?v=fZa65-0OWJc" },
    // { name: "Coding At Night | Software Development | Synthwave", url: "https://www.youtube.com/watch?v=rFzsAjVST4Q" },
    // { name: "Coding At Night | Software Development | Dark Synthwave", url: "https://www.youtube.com/watch?v=eyLWNVLH4Ho" },
    // { name: "Coding At Night | Software Development | LoFi", url: "https://www.youtube.com/watch?v=gdLgWXwG7HQ" },
    // { name: "Coding At Night | Software Development | Synthwave", url: "https://www.youtube.com/watch?v=WT1KqhQeGiE" },
    // { name: "Coding At Night | Software Development | Lo-Fi", url: "https://www.youtube.com/watch?v=iLAK-ltFHHk" },
    // { name: "MY YEAR 2022 - Last look", url: "https://www.youtube.com/watch?v=QfMTBTg1r3A" },
    { name: "Programming, Software, Technology - Video About My Passion", url: "https://www.youtube.com/watch?v=GwVr0BPPRv8" },
    { name: "Swift Playgrounds 4 - Blu's Adventure - Solutions", url: "https://www.youtube.com/watch?v=ex61i4A4fpo" },
    { name: "Swift Playgrounds 4 - Learn to Code 2 - Solutions", url: "https://www.youtube.com/watch?v=R8XpPDDkENM" },
    { name: "Swift Playgrounds 4 - Learn to Code 1 - Solutions", url: "https://www.youtube.com/watch?v=UnqKdFrXhgg" },
    // { name: "My personal website - project presentation on mobile device (next, beta version)", url: "https://www.youtube.com/watch?v=tutAoirvVHo" },
    // { name: "A lazy day", url: "https://www.youtube.com/watch?v=PwY07_665cA" },
    { name: "My personal website - project presentation (next, beta version)", url: "https://www.youtube.com/watch?v=hIfDGzQcyIE" },
    // { name: "Coding Timelapse | 2", url: "https://www.youtube.com/watch?v=rfmA2pMaD4Y" },
    // { name: "Coding Timelapse | 1", url: "https://www.youtube.com/watch?v=glEcJ_92rXs" },
    // { name: "GitHub - my profile and projects | 26-11-2020", url: "https://www.youtube.com/watch?v=uVX9MfeJrEQ" },
    { name: "Nuxt.js and AWS - part of the process of compiling and deploying my website to the cloud", url: "https://www.youtube.com/watch?v=4tWUifWr6bs" },
    { name: "My personal website (next, new version) - project presentation | early stage", url: "https://www.youtube.com/watch?v=T7tEwwrS2GI" },
    { name: "Business website - project presentation", url: "https://www.youtube.com/watch?v=zprQkKsVTfc" },
    { name: "My personal website - project presentation", url: "https://www.youtube.com/watch?v=dkRybOUt3Rg" },
    { name: "Computing Cluster - BEM in WCSS", url: "https://www.youtube.com/watch?v=for1ayFZD5g" }
  ]

  const tags = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "TypeORM",
    "Vue.js",
    "Vuetify.js",
    "Vitest",
    "Next.js",
    "Nest.js",
    "Python",
    "Flask",
    "FastAPI",
    "Docker",
    "Selenium",
    "Playwright",
    "PostgreSQL",
    "SQL",
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
    { icon: <FaGlobe />, title: "Credly", url: "https://www.credly.com/users/jakub-gania" },
    // { icon: <BsStars />, title: "NeuronScale", url: "https://neuronscale.com" }
  ]

  return (
    <div className="content-wrapper flex flex-col gap-20">
      <div className="flex gap-6 items-center">
        <div>
        <Image
          src="/me.jpg"
          width={94}
          height={94}
          quality={100}
          alt="My photo"
          className="rounded-full"
        />  
        </div>
        <div>
          <div className="text-3xl font-bold tracking-tight">
            Jakub Gania
          </div>
          <div className="text-xl tracking-tight text-slate-400">
            SWE & Creator -  MSc in Computer Science
          </div>
        </div>
      </div>
      <div className="text-xl tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">software engineer</span> who creates various projects, likes to learn and discover new technologies. I enjoy creating content on youtube and taking photos in my free time. I share my thoughts on <a href="https://x.com/jakubgania" target="_blank" className="text-blue-500">X</a> and <a href="https://linkedin.com/in/jakubgania" target="_blank" className="text-blue-500"> LinkedIn</a>
      </div>
      <div className="text-xl tracking-tight">
        see what I do in other sections or read more about me on the about page
      </div>
      <LinkButton path="/" title="about" />
      <div>
        <h2 className="text-3xl font-bold">
          technologies
        </h2>
        <div className="py-8">
          <div className="text-xl">
            I experiment with different technologies
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 relative">
          {tags.map((tag) => (
            <div key={tag} className="bg-slate-50 text-slate-400 rounded-2xl py-2 px-4 group relative">
              <span className="text-xl cursor-default">{tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          software
        </h2>
        <div className="py-8">
          <div className="text-xl">
            applications and programs that I use
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 relative">
          {software.map((app) => (
            <div key={app} className="bg-slate-50 text-slate-400 rounded-2xl py-2 px-4 group relative">
              <span className="text-xl cursor-default">{app}</span>
            </div>
          ))}
        </div>
      </div>
      <LinkButton path="/" title="all programs" />
      <div>
        <h2 className="text-3xl font-bold">
          links
        </h2>
        <div className="py-8">
          <div className="text-xl">
            my social media and other websites
          </div>
        </div>
        <div className="grid flex-grow grid-cols-1 gap-4 md:grid-cols-2">
          {links.map((link) => (
            <div key={link.title} className="">
              <a href={link.url} target="_blank" className="w-full flex items-center text-slate-400 text-xl bg-slate-50 rounded-2xl p-3">
                <section className="flex flex-row items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="md:w-10">
                      <span>{link.icon}</span>
                    </div>
                    {link.title}
                  </div>
                  <div>
                    <RiArrowDropRightLine className="ml-auto w-6 h-6" />
                  </div>
                </section>
              </a>
            </div>
          ))}
        </div>
        {/* <ul className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.title} className="">
              <a href={link.url} target="_blank" className="flex text-xl bg-slate-100 rounded-2xl p-3 w-full">
                {link.title}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
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
        <h2 className="text-3xl font-bold">
          projects
        </h2>
        <div className="py-8">
          <div className="text-xl">
            some of my open source projects
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6">
          {projects.map((project) => (
            <li key={project.path} className="text-xl text-blue-500 pb-2">{project.name}</li>
          ))}
        </ul>
        <div className="py-8">
          <div className="text-xl">
            a place where I gather knowledge about artificial intelligence, machine learning, deep learning and cloud technologies. It is still in a phase of intensive development
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6">
          <li className="text-xl text-blue-500">
            <a href="https://neuronscale.com" target="_blank">neuronscale.com</a>
          </li>
        </ul>
      </div>
      <LinkButton path="/" title="all projects" />
      <div>
        <h2 className="text-3xl font-bold">
          youtube
        </h2>
        <div className="py-8">
          <div className=" text-xl text-slate-400">
            91 subscribers • 44 videos • 11,240 views
          </div>
        </div>
        <div className="pb-8">
          <div className="text-xl">
            most often I create videos in which I show my projects, but sometimes they are just casual videos in which I show how I program something, I think that YouTube is a great place to commemorate your projects which you can analyze or show to another person at any time
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6">
          {youtube.map((video) => (
            <li key={video.url} className="text-xl text-blue-500 tracking-tight pb-6 relative group">
              {/* <div className="hidden group-hover:block">
                <Image
                  src="/hqdefault.jpg"
                  width={240}
                  height={140}
                  alt="examole img"
                  className="rounded-2xl"
                />
              </div> */}
              <a href={video.url} target="_blank">
                {video.name}
              </a>
              {/* <div className="hidden absolute z-20 group-hover:block bg-white">
                <Image
                  src="/hqdefault.jpg"
                  width={240}
                  height={140}
                  alt="ptho"
                  className="rounded-2xl"
                />
              </div> */}
              {/* <div className="pt-2">
                <div className="text-black text-xl font-semibold">
                  read more
                </div>
              </div> */}
            </li>
          ))}
        </ul>
      </div>
      <LinkButton path="/youtube" title="all videos" />
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
      <Link href={path} className="bg-black text-white text-lg tracking-tight rounded-full py-1 px-4">
        {title}
      </Link>
    </div>
  )
}

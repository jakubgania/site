import Image from "next/image";

export default function Home() {
  const projects = [
    { name: "example project", path: "/example-path" },
    { name: "example project", path: "/example-path-2" },
  ]

  const youtube = [
    { name: "Building a simple iOS app with SwiftUI - iOS 18 | Swift 6 | Xcode 16", url: "https://www.youtube.com/watch?v=7vBpn-DLwYc" },
    { name: "I'm back. A little update and plans", url: "https://www.youtube.com/watch?v=7vFMPdGNQwk" },
    { name: "Implementation of Portfolio Website for Software Developer with Next.js and Tailwind CSS, Dark Theme", url: "https://www.youtube.com/watch?v=ZT4U0yjCZkE" },
    { name: "Implementation of a simple website and then refactoring - Next.js, Tailwind CSS, Visual Studio Code", url: "https://www.youtube.com/watch?v=4MqGGWeZMuo" },
    { name: "Implementation of a component that looks like a code editor with Next.js and Tailwind CSS", url: "https://www.youtube.com/watch?v=FTuskRr_8Uo" },
    { name: "Implementation of a component that looks like a code editor | HTML, CSS, JS", url: "https://www.youtube.com/watch?v=uZ13aqBU7hg" },
    { name: "My 4th anniversary of YouTube channel - a short summary in numbers", url: "https://www.youtube.com/watch?v=XVN5dQZlPZ4" },
    { name: "Maintenance + Logistics & Automation - Trade Show For Industry - Dortmund 2023", url: "https://www.youtube.com/watch?v=pu5xhH7o3Jk" },
    { name: "Implementation of delaminating layers with spatial shift - CSS/HTML - typing sound", url: "https://www.youtube.com/watch?v=wDMuy3QxsQM" },
    { name: "study with me - preparation for the AWS exam - with background music - synth / retro / chill", url: "https://www.youtube.com/watch?v=QmyDaga_c_I" },
    { name: "study with me - preparation for the AWS exam - with background music - synth / retro / chill", url: "https://www.youtube.com/watch?v=tbSsO9Uq8w8" },
    { name: "study with me - preparation for the AWS exam - with background music - lofi", url: "https://www.youtube.com/watch?v=nVh9cWILAKg" },
    { name: "study with me - preparation for the AWS exam - with background music - lofi", url: "https://www.youtube.com/watch?v=Hxqfmz6hAYE" },
    { name: "study with me - preparation for the AWS exam - with background music - lofi", url: "https://www.youtube.com/watch?v=CdLNx_jzieo" },
    { name: "study with me - preparation for the AWS exam - with background music - retrowave", url: "https://www.youtube.com/watch?v=jw8f0p7goR8" },
    { name: "study with me - preparation for the AWS exam - with background music - synthwave", url: "https://www.youtube.com/watch?v=NIgB5kbKMMY" },
    { name: "Coding At Night | Software Development | Synthwave Background Music", url: "https://www.youtube.com/watch?v=lu0C-zhv-Fo" },
    { name: "Coding At Night | Software Development | NoCopyrightSounds Background Music", url: "https://www.youtube.com/watch?v=BJXS5k7QhmA" },
    { name: "Coding At Night | Software Development | Ambient Background Music", url: "https://www.youtube.com/watch?v=DMFowSlryIs" },
    { name: "Coding At Night | Software Development | Retro Synthwave Background Music", url: "https://www.youtube.com/watch?v=cZJysM16vLI" },
    { name: "Coding At Night | Software Development | Dark Synthwave", url: "https://www.youtube.com/watch?v=wlW5ek4nkyc" },
    { name: "Coding At Night | Software Development | NoCopyrightSounds", url: "https://www.youtube.com/watch?v=Au98DdLJsNo" },
    { name: "Coding At Night | Software Development | Synthwave", url: "https://www.youtube.com/watch?v=fZa65-0OWJc" },
    { name: "Coding At Night | Software Development | Synthwave", url: "https://www.youtube.com/watch?v=rFzsAjVST4Q" },
    { name: "Coding At Night | Software Development | Dark Synthwave", url: "https://www.youtube.com/watch?v=eyLWNVLH4Ho" },
    { name: "Coding At Night | Software Development | LoFi", url: "https://www.youtube.com/watch?v=gdLgWXwG7HQ" },
    { name: "Coding At Night | Software Development | Synthwave", url: "https://www.youtube.com/watch?v=WT1KqhQeGiE" },
    { name: "Coding At Night | Software Development | Lo-Fi", url: "https://www.youtube.com/watch?v=iLAK-ltFHHk" },
    { name: "MY YEAR 2022 - Last look", url: "https://www.youtube.com/watch?v=QfMTBTg1r3A" },
    { name: "Programming, Software, Technology - Video About My Passion", url: "https://www.youtube.com/watch?v=GwVr0BPPRv8" },
    { name: "Swift Playgrounds 4 - Blu's Adventure - Solutions", url: "https://www.youtube.com/watch?v=ex61i4A4fpo" },
    { name: "Swift Playgrounds 4 - Learn to Code 2 - Solutions", url: "https://www.youtube.com/watch?v=R8XpPDDkENM" },
    { name: "Swift Playgrounds 4 - Learn to Code 1 - Solutions", url: "https://www.youtube.com/watch?v=UnqKdFrXhgg" },
    { name: "My personal website - project presentation on mobile device (next, beta version)", url: "https://www.youtube.com/watch?v=tutAoirvVHo" },
    { name: "A lazy day", url: "https://www.youtube.com/watch?v=PwY07_665cA" },
    { name: "My personal website - project presentation (next, beta version)", url: "https://www.youtube.com/watch?v=hIfDGzQcyIE" },
    { name: "Coding Timelapse | 2", url: "https://www.youtube.com/watch?v=rfmA2pMaD4Y" },
    { name: "Coding Timelapse | 1", url: "https://www.youtube.com/watch?v=glEcJ_92rXs" },
    { name: "GitHub - my profile and projects | 26-11-2020", url: "https://www.youtube.com/watch?v=uVX9MfeJrEQ" },
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
    "Next.js",
    "TailwindCSS",
    "Python",
    "Flask",
    "FastAPI",
    "Docker",
    "Selenium",
    "Playwright",
    "Swift",
    "SwiftUI"
  ]

  const links = [
    { title: "X", url: "https://x.com/jakubgania" },
    { title: "GitHub", url: "https://github.com/jakubgania" },
    { title: "LinkedIn", url: "" },
    { title: "YouTube", url: "" },
    { title: "Credly", url: "" }
  ]

  return (
    <div className="flex flex-col gap-14">
      <div className="flex gap-6 items-center">
        <div>
        <Image
          src="/me.jpg"
          width={84}
          height={84}
          quality={100}
          alt="My photo"
          className="rounded-full"
        />  
        </div>
        <div>
          <div className="text-4xl font-bold tracking-tight">
            Jakub Gania
          </div>
          <div className="text-xl text-slate-500">
            Software Enginner & Creator
          </div>
        </div>
      </div>
      <div className="text-2xl tracking-tight">
        {/* <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">software engineer</span> who likes to experiment with technologies. I add various interesting content on <a href="https://x.com/jakubgania" target="_blank" className="text-blue-500">X</a>. */}
        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">software engineer</span> who creates various projects, likes to learn and discover new technologies. I enjoy creating content on youtube and taking photos in my free time. I share my thoughts on <a href="https://x.com/jakubgania" target="_blank" className="text-blue-500">X</a> and <a href="https://linkedin.com/in/jakubgania" target="_blank" className="text-blue-500">linkedin</a>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          technologies
        </h2>
        <div className="py-8">
          <div className="font-mono text-xl">
            I experiment with different technologies
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4 relative">
          {tags.map((tag) => (
            <div key={tag} className="bg-slate-100 font-mono rounded-2xl py-2 px-4 group relative">
              <span className="text-xl text-slate-500 cursor-default">{tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          links
        </h2>
        <div className="py-8">
          <div className="font-mono text-xl">
            my social media and other websites
          </div>
        </div>
        <ul className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.title} className="">
              <a href={link.url} target="_blank" className="flex text-xl text-slate-500 bg-slate-100 rounded-2xl p-3 w-full">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          projects
        </h2>
        <div className="py-8">
          <div className="font-mono text-xl">
            some of my projects
          </div>
        </div>
        <ul className="list-disc pl-6">
        {projects.map((project) => (
          <li key={project.path} className="text-2xl text-blue-500 pb-2">{project.name}</li>
        ))}
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          youtube
        </h2>
        <div className="py-8">
          <div className="font-mono text-xl">
            91 subscribers • 44 videos • 10,800 views
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6">
          {youtube.map((video) => (
            <li key={video.url} className="text-2xl text-blue-500 tracking-tight pb-6">
              <a href={video.url} target="_blank">
                {video.name}
              </a>
              {/* <div className="pt-2">
                <div className="text-black text-xl font-semibold">
                  read more
                </div>
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

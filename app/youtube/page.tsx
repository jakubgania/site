import gm from "../../public/gm-1.png"
import Image from "next/image"

export default function YouTube() {
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
  
  return (
    <div className="flex flex-col gap-14">
      <div className="content-wrapper">
        <h2 className="text-2xl md:text-3xl font-bold">
          youtube
        </h2>
      </div>

      <Image src={gm} alt="" className="image-section" />

    </div>
  )
}
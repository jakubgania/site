import Link from "next/link"

export default function Projects() {

  const projects = [
    { name: "weather-app", path: "/projects/example", description: "Weather app built with Vue 3 + TypeScript + Vite" },
    { name: "github-trending-repositories", path: "/projects/example2", description: "example description" },
    { name: "fastapi-graphql", path: "/example-path-2", description: "example description" },
    { name: "api-rest-to-graphql-github", path: "/example-path", description: "example description" },
    { name: "leetcode-solutions", path: "/ltc", description: "My own solutions to tasks on LeetCode platform" },
    { name: "nextjs-templates", path: "/nxjstml", description: "example description" },
    { name: "one-page-templates", path: "/opt", description: "One page templates made in HTML and Tailwind CSS" }
  ]

  return (
    <div className="flex flex-col gap-14">
      <div className="content-wrapper">
        <Link href="/">
          home
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold">
          projects
        </h2>
        <div className="py-8">
          <div className="text-base md:text-xl text-slate-400">
            my projects
          </div>
        </div>
        <ul className="list-disc marker:text-black pl-6">
          {projects.map((project) => (
            <li key={project.path} className="text-base md:text-xl text-blue-500 pb-2">
              <Link href={project.path}>
                {project.name}
              </Link>
              <p className="text-black">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
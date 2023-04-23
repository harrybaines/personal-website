import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'
import Link from '@/components/Link'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mx-auto dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.filter(p => p.highlight).map(p => (
            <ProjectCard
              href={p.href}
              imgSrc={p.imgSrc}
              title={p.title}
              description={p.description}
              category={p.category}
              startDate={p.startDate}
              endDate={p.endDate}
            />
          ))}
        </div>
        <div className="mx-auto max-w-4xl">
          {projectsData
            .filter((project) => !project.highlight)
            .map((d) => (
              <div className="my-4 flex w-full flex-col items-center md:flex-row">
                <div className="w-full">
                  <a
                    className="whitespace-nowrap text-primary-900 hover:text-primary-600 dark:text-primary-100 dark:hover:text-primary-200"
                    href={d.href}
                    target="_blank"
                  >
                    <h2 className="text-md font-semibold">
                      {d.title}
                    </h2>
                  </a>
                  <p className="mt-0.5 text-sm text-primary-600 dark:text-gray-300">
                    {d.description}
                  </p>
                </div>
                <div className="flex w-full justify-start md:w-fit md:justify-end">
                  <a
                    className="whitespace-nowrap text-sm text-primary-900 hover:text-primary-600 dark:text-primary-100 dark:hover:text-primary-200"
                    href={d.href}
                    target="_blank"
                  >
                    🔗 View  →
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { RoughNotation } from 'react-rough-notation'
import { TypeAnimation } from 'react-type-animation'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="relative top-40">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mt-6 w-full md:mt-2">
              <h2 className="mb-4 text-5xl font-bold">
                Hi! I'm{' '}
                <RoughNotation
                  type="underline"
                  show={true}
                  animate={false}
                  color="#2563EB"
                  padding={-8}
                >
                  Harry
                </RoughNotation>{' '}
                👋
              </h2>
              <h2 className="mt-5 text-2xl font-semibold">
                <TypeAnimation
                  sequence={['Data Scientist / ML Engineer']}
                  wrapper="span"
                  cursor={true}
                  speed={175}
                />
              </h2>
              <p className="mt-5 text-lg font-light">
                Experienced Data Scientist and Software Engineer. Passionate about coding and
                building machine learning projects. Currently focussing on ML engineering.
              </p>
              <p className="mt-3 text-lg font-light">
                Read more about me{' '}
                <Link href="/about" className="underline">
                  here
                </Link>
                .
              </p>
              <div className="mt-8 flex space-x-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
                <SocialIcon kind="github" href={siteMetadata.github} size={8} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

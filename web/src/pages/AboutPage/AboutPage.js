import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p className="font-light">
        Ce site est créé avec pour seule intention de démontrer la puissance
        créative de Redwood! Oui, c'est très impressionant :D
      </p>
    </>
  )
}

export default AboutPage

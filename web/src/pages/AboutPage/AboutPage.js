import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          Ce site est créé avec pour seule intention de démontrer la puissance
          créative de Redwood! Oui, c'est très impressionant :D
        </p>
        <Link to={routes.home()}>Retour à la page d'accueil</Link>
      </main>
    </>
  )
}

export default AboutPage

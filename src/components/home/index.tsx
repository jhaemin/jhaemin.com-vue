import Head from 'next/head'
import JhaeminLogo from '../JhaeminLogo'
import trait from './trait.module.scss'

export type HomeProps = unknown

const Home: React.FC<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Jang Haemin</title>
      </Head>
      <div className={trait.HomeLayout}>
        <div className={trait.LogoWrapper}>
          <JhaeminLogo width="90px" />
        </div>
        <p className={trait.Paragraph}>
          <span className={trait.Introduce}>Hi, my name is Jang Haemin.</span>{' '}
          I&rsquo;m a passionate full stack developer fluent in{' '}
          <span className={trait.JavaScript}>JavaScript</span> and{' '}
          <span className={trait.TypeScript}>TypeScript</span>. I love crafting
          beautiful software and design in a modern fashion. Simplicity always
          delivers a better way, elaborateness mitigates unexpected mistakes and
          gets me closer to perfection.
        </p>

        <section className={trait.Section}>
          <h1 className={trait.SectionTitle}>Projects</h1>

          <div className={trait.Project}>
            <div className={trait.Content}>
              <h2 className={trait.SectionSubTitle}>eodiro[ədiro]</h2>
              <p className={trait.Description}>
                A guidance service for ChungAng university students. It serves
                many features like empty classrooms finder, smart lectures
                search, cafeteria menus, notice notifications and more. Now
                hundreds of CAU students are enjoying the eodiro including me!
              </p>

              <div className={trait.Technologies}>
                <span className={trait.Technology}>TypeScript</span>
                <span className={trait.Technology}>Nuxt</span>
                <span className={trait.Technology}>Vue.js</span>
                <span className={trait.Technology}>Next.js</span>
                <span className={trait.Technology}>React</span>
                <span className={trait.Technology}>React Native</span>
                <span className={trait.Technology}>Expo</span>
                <span className={trait.Technology}>Sass</span>
                <span className={trait.Technology}>PostCSS</span>
                <span className={trait.Technology}>Nginx</span>
                <span className={trait.Technology}>Node.js</span>
                <span className={trait.Technology}>Express</span>
                <span className={trait.Technology}>MySQL</span>
                <span className={trait.Technology}>Sequelize</span>
                <span className={trait.Technology}>Prisma</span>
                <span className={trait.Technology}>GraphQL</span>
              </div>
            </div>

            <div className={trait.Social}>
              <a
                href="https://github.com/payw-org/eodiro"
                target="_blank"
                rel="noreferrer"
                className={trait.IconLink}
              >
                <i className={`f7-icons ${trait.Icon}`}>logo_github</i>
              </a>
              <a
                href="https://eodiro.com"
                target="_blank"
                rel="noreferrer"
                className={trait.IconLink}
              >
                <i className={`f7-icons ${trait.Icon}`}>globe</i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={`${trait.IconLink} ${trait.NotYet}`}
              >
                <i className={`f7-icons ${trait.Icon}`}>logo_apple</i>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={`${trait.IconLink} ${trait.NotYet}`}
              >
                <i className={`f7-icons ${trait.Icon}`}>logo_android</i>
              </a>
            </div>
          </div>

          <div className={trait.Project}>
            <div className={trait.Content}>
              <h2 className={trait.SectionSubTitle}>PolToday</h2>
              <p className={trait.Description}>
                A management system for auxiliary police in Republic of Korea.
              </p>

              <div className={trait.Technologies}>
                <span className={trait.Technology}>PHP</span>
                <span className={trait.Technology}>Apache</span>
                <span className={trait.Technology}>JavaScript</span>
                <span className={trait.Technology}>MySQL</span>
              </div>
            </div>

            <div className={trait.Social}>
              <a
                href="https://github.com/jhaemin/poltoday"
                target="_blank"
                rel="noreferrer"
                className={trait.IconLink}
              >
                <i className={`f7-icons ${trait.Icon}`}>logo_github</i>
              </a>
            </div>
          </div>

          <div className={trait.Project}>
            <div className={trait.Content}>
              <h2 className={trait.SectionSubTitle}>WEBuffet</h2>
              <p className={trait.Description}>
                A chrome extension that gives you
              </p>

              <div className={trait.Technologies}>
                <span className={trait.Technology}>TypeScript</span>
                <span className={trait.Technology}>Apache</span>
                <span className={trait.Technology}>JavaScript</span>
                <span className={trait.Technology}>MySQL</span>
              </div>
            </div>

            <div className={trait.Social}>
              <a
                href="https://github.com/payw-org/webuffet"
                target="_blank"
                rel="noreferrer"
                className={trait.IconLink}
              >
                <i className={`f7-icons ${trait.Icon}`}>logo_github</i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

import React from 'react'
import { graphql, Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

export const query = graphql`
  query MyQuery {
      allMarkdownRemark {
          edges {
              node {
                  frontmatter {
                      title
                      technologies
                  }
              }
          }
      }
  }
`;

const Landing = ({data}) => (
    <Layout>
        <Helmet>
            <title>Genesis - Услуги и проекты</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Наш стек</h2>
                    </header>
                    <p> Мы используем то. Современные технологии. Ниже представлены наши проекты. Мы используем то.
                        Современные технологии. Ниже представлены наши проекты. Мы используем то. Современные
                        технологии. Ниже представлены наши проекты. Мы используем то. Современные технологии. Ниже
                        представлены наши проекты.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt=""/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h3>
                            </header>
                            <p> Такой-то проект.Используются такие-то технологии</p>
                            <h4>Технологии:</h4>
                            <ul>
                                <li>Dolor etiam magna etiam.</li>
                                <li>Sagittis lorem eleifend.</li>
                                <li>Felis dolore viverra.</li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt=""/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Проект 2</h3>
                            </header>
                            <p> Такой-то проект.Используются такие-то технологии</p>
                            <h4>Технологии:</h4>
                            <ul>
                                <li>Dolor etiam magna etiam.</li>
                                <li>Sagittis lorem eleifend.</li>
                                <li>Felis dolore viverra.</li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt=""/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Проект 3</h3>
                            </header>
                            <p> Такой-то проект.Используются такие-то технологии</p>
                            <h4>Технологии:</h4>
                            <ul>
                                <li>Dolor etiam magna etiam.</li>
                                <li>Sagittis lorem eleifend.</li>
                                <li>Felis dolore viverra.</li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
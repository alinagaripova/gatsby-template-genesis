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
      allMarkdownRemark(sort: { fields: [frontmatter___order], order: DESC }, filter: {frontmatter: {name: {eq: "project"}}}) {
          edges {
              node {
                  frontmatter{
                      title
                      technologies
                      description
                      path
                  }
              }
          }
      }
  }
`;

const Landing = ({data: { allMarkdownRemark: { edges } }}) => (
    <Layout>
        <Helmet>
            <title>Genesis - Услуги и проекты</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Услуги и проекты" description="Lorem ipsum dolor sit amet nullam consequat"/>

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
                {edges.map(edge => {
                    const projects = edge.node.frontmatter
                    return (
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic08} alt={projects.title}/>
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>{projects.title}</h3>
                                    </header>
                                    <p>{projects.description}</p>
                                    <h4>Технологии:</h4>
                                    <ul>
                                        {projects.technologies.map(technology => {
                                            return(
                                                <li>{technology}</li>
                                            )
                                        })}
                                    </ul>
                                    <ul className="actions">
                                        <li><Link to={projects.path} className="button">Подробнее</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </section>
        </div>

    </Layout>
)

export default Landing
import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link} from 'gatsby'
import Layout from '../components/layout'

import pic09 from '../assets/images/pic09.jpg'

export const query = graphql`
  query ProjectQuery($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
          frontmatter {
              path
              title
              description
              participation
              href
              statistics
              technologies
              longDesktopImg
              desktopImg
              tabletImg
              files
              phoneImg
          }
      }
  }

`;

function Generic ({data}){
    const frontmatter = data.markdownRemark.frontmatter
    console.log(frontmatter)
    return (
    <Layout>
        <Helmet>
            <title>Genesis - О нас</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <section id="two" className="spotlights">
            <section>
                <Link to="/generic" className="image">
                    <img src={pic09} alt=""/>
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3>{frontmatter.title}</h3>
                        </header>
                        <h4>Описание:</h4>
                        <p>{frontmatter.description} <br/><a href={frontmatter.href} target="_blank">{frontmatter.href}</a></p>
                        <h4>Наше участие:</h4>
                        <ul>
                            {frontmatter.participation.map(element => {
                                return (
                                    <li>{element}</li>
                                )
                            })}
                        </ul>
                        <h4>Показатели:</h4>
                        <ul>
                            {frontmatter.statistics.map(element => {
                                return (
                                    <li>{element}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    </Layout>
)}

export default Generic
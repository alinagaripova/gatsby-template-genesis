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
          group(field: frontmatter___tags) {
              fieldValue
          }
      }
  }
`;

const Landing = ({data: { allMarkdownRemark: { edges } }, pageContext, data}) => {
    const tags = data.allMarkdownRemark.group
    tags.map(tag => {
        console.log(tag)
    })
    return(
        <Layout>
            <Helmet>
                <title>Genesis - Услуги и проекты</title>
                <meta name="description" content="Landing Page"/>
            </Helmet>

            <BannerLanding title="Услуги и проекты" description="Мы используем современные технологии. Ниже представлены наши проекты."/>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Наши проекты</h2>
                        </header>
                        <h4>Фильтры</h4>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <ul>
                                    {tags.map(tag => {
                                        console.log(tag.fieldValue)
                                        return (
                                            <li><Link to={tag.fieldValue}>{tag.fieldValue}</Link></li>
                                        )
                                    })}
                                    {/*<li><Link>angular</Link></li>*/}
                                    {/*<li><Link>go</Link></li>*/}
                                    {/*<li><Link>javascript</Link></li>*/}
                                    {/*<li><Link>react</Link></li>*/}
                                    {/*<li><Link>redis</Link></li>*/}
                                    {/*<li><Link to="/projects/ruby">ruby</Link></li>*/}
                                    {/*<li><Link>ruby-on-rails</Link></li>*/}
                                    <li><Link to="/projects">все</Link></li>
                                </ul>
                            </div>
                            {/*<div className="col-6">*/}
                            {/*<div className="select-wrapper mb-5">*/}
                            {/*<select name="demo-category" id="demo-category">*/}
                            {/*<optgroup>По технологиям</optgroup>*/}
                            {/*<option value="">- Category -</option>*/}
                            {/*<option value="1">Manufacturing</option>*/}
                            {/*<option value="1">Shipping</option>*/}
                            {/*<option value="1">Administration</option>*/}
                            {/*<option value="1">Human Resources</option>*/}
                            {/*</select>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
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
}

export default Landing
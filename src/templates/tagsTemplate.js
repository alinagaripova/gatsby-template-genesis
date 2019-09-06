import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Filter from '../components/Filter'

import pic08 from '../assets/images/pic08.jpg'

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
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
`
const Tags = ({data: { allMarkdownRemark: { edges } }, pageContext, data}) => {
    const tags = data.allMarkdownRemark.group
    return(
        <Layout>
            <Helmet>
                <title>Genesis - Услуги и проекты</title>
                <meta name="description" content="Tags Page"/>
            </Helmet>

            <BannerLanding title="Услуги и проекты" description="Мы используем современные технологии. Ниже представлены наши проекты."/>

            <div id="main">
                <Filter/>
                {/*<section id="one">*/}
                    {/*<div className="inner">*/}
                        {/*<header className="major">*/}
                            {/*<h2>Наши проекты</h2>*/}
                        {/*</header>*/}
                        {/*<h4>Фильтры</h4>*/}
                        {/*<div className="grid-wrapper">*/}
                            {/*<div className="col-6">*/}
                                {/*<ul>*/}
                                    {/*{tags.map(tag => {*/}
                                        {/*console.log(tag.fieldValue)*/}
                                        {/*return (*/}
                                            {/*<li><Link to={tag.fieldValue}>{tag.fieldValue}</Link></li>*/}
                                        {/*)*/}
                                    {/*})}*/}
                                    {/*<li><Link to="/projects">все</Link></li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*/!*<div className="col-6">*!/*/}
                            {/*/!*<div className="select-wrapper mb-5">*!/*/}
                            {/*/!*<select name="demo-category" id="demo-category">*!/*/}
                            {/*/!*<optgroup>По технологиям</optgroup>*!/*/}
                            {/*/!*<option value="">- Category -</option>*!/*/}
                            {/*/!*<option value="1">Manufacturing</option>*!/*/}
                            {/*/!*<option value="1">Shipping</option>*!/*/}
                            {/*/!*<option value="1">Administration</option>*!/*/}
                            {/*/!*<option value="1">Human Resources</option>*!/*/}
                            {/*/!*</select>*!/*/}
                            {/*/!*</div>*!/*/}
                            {/*/!*</div>*!/*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}
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

export default Tags
//
// const Tags = ({ pageContext, data }) => {
//     const { tag } = pageContext
//     const { edges, totalCount } = data.allMarkdownRemark
//     const tagHeader = `${totalCount} post${
//         totalCount === 1 ? "" : "s"
//         } tagged with "${tag}"`
//
//     return (
//         <div>
//             <h1>{tagHeader}</h1>
//             <ul>
//                 {edges.map(({ node }) => {
//                     const { slug } = node.fields
//                     const { title } = node.frontmatter
//                     return (
//                         <li key={slug}>
//                             <Link to={slug}>{title}</Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//             {/*
//               This links to a page that does not yet exist.
//               We'll come back to it!
//             */}
//             <Link to="/projects">All tags</Link>
//         </div>
//     )
// }
//
// export default Tags


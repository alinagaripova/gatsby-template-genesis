import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'


export const query = graphql`
  query ArticlesQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {name: {eq: "article"}}}) {
          edges {
              node {
                  frontmatter{
                      title
                      pre
                      date(
                        formatString: "DD MMMM YYYY"
                        locale: "ru-RU")
                      description
                      path
                  }
              }
          }
      }
  }
`;

const Articles = ({data: { allMarkdownRemark: { edges } }}) => (
    <Layout>
        <Helmet>
            <title>Genesis - Новости</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Новости" description="Узнавай последние новости в IT вместе с нами"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        {edges.map(edge => {
                            const articles = edge.node.frontmatter
                            console.log()
                            return(
                                <div className="col-4">
                                    <h3>{articles.title}</h3>
                                    <p>{articles.date}</p>
                                    <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                                    <blockquote> {articles.pre}<Link to={articles.path}>..подробнее</Link></blockquote>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Articles
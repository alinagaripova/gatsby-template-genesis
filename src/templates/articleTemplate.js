import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

export const query = graphql`
  query ArticleQuery($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
          frontmatter {
              path
              title
              description
              date(
                formatString: "DD MMMM YYYY"
                locale: "ru-RU")
          }
      }
  }

`;

function Generic ({ data }){
    const frontmatter = data.markdownRemark.frontmatter
    return(
    <Layout>
        <Helmet>
            <title>Genesis - Новости</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>{frontmatter.title}</h1>
                    </header>
                    <p>{frontmatter.date}</p>

                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>{frontmatter.description}</p>
                </div>
            </section>
        </div>

    </Layout>
)}

export default Generic
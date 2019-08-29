import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

export const query = graphql`
  query ArticlesQuery {
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

const Articles = ({data: { allMarkdownRemark: { edges } }}) => (
    <Layout>
        <Helmet>
            <title>Genesis - Новости</title>
            <meta name="description" content="Landing Page"/>
        </Helmet>

        <BannerLanding title="Новости" description="Lorem ipsum dolor sit amet nullam consequat"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Последние новости</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <h3>Interdum sapien gravida</h3>
                            <blockquote>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.<a href="/">..подробнее</a></blockquote>
                        </div>
                        <div className="col-4">
                            <h3>Faucibus consequat lorem</h3>
                            <blockquote>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.<a href="/">..подробнее</a></blockquote>
                        </div>
                        <div className="col-4">
                            <h3>Accumsan montes viverra</h3>
                            <blockquote>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.<a href="/">..подробнее</a></blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Articles
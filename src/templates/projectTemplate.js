import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Genesis - О нас</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <section id="two" className="spotlights">
            {/*{edges.map(edge => {*/}
                {/*const projects = edge.node.frontmatter*/}
                // return (
                    <section>
                        <Link to="/generic" className="image">
                            <img src={pic08} alt=""/>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>title</h3>
                                </header>
                                <p>description</p>
                                <h4>Технологии:</h4>
                                <ul>
                                    {/*{projects.technologies.map(technology => {*/}
                                        {/*return(*/}
                                            <li>технологии</li>
                                    //     )
                                    // })}
                                </ul>
                            </div>
                        </div>
                    </section>
            //     )
            // })}
        </section>

    </Layout>
)

export default Generic
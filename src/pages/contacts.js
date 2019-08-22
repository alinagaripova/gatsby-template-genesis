import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Genesis - Контакты</title>
            <meta name="description" content="Generic Page"/>
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Контакты</h1>
                    </header>
                </div>
            </section>
        </div>
    </Layout>
)

export default Contact
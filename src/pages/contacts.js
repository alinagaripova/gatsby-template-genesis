import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Contact = (props) => (
    <Layout>
        <Helmet htmlAttributes={{lang: "ru"}}>
            <title>Контакты</title>
            <meta name="description" content="Эл.почта: genesis@genisis.com. Адрес : . Телефон: 000-00-00"/>
            <meta charSet="utf-8" />
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
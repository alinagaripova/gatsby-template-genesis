import React, {Component} from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends Component {

    render() {
        return (
            <Layout>
                <Helmet
                    title="Главная"
                    meta={[{ name: 'description', content: 'разработка web-проектов, консалтинговые услуги, project resque' },
                            { name: 'keywords', content: 'разработка, сайт, продвижение,консалтинговые услуги' }]}
                    htmlAttributes={{lang: "ru"}}>
                    <meta charSet="utf-8" />
                </Helmet>
                <Banner />
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>О нас</h3>
                                <p>Прочитать тут</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Наши проекты</h3>
                                <p>Прочитать тут</p>
                            </header>
                            <Link to="/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Клиенты</h3>
                                <p>Прочитать тут</p>
                            </header>
                            <Link to="/" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Новости</h3>
                                <p>Прочитать тут</p>
                            </header>
                            <Link to="/articles" className="link primary"></Link>
                        </article>
                        {/*<article style={{backgroundImage: `url(${pic05})`}}>*/}
                            {/*<header className="major">*/}
                                {/*<h3>Consequat</h3>*/}
                                {/*<p>Прочитать тут</p>*/}
                            {/*</header>*/}
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        {/*</article>*/}
                        {/*<article style={{backgroundImage: `url(${pic06})`}}>*/}
                            {/*<header className="major">*/}
                                {/*<h3>Etiam</h3>*/}
                                {/*<p>Feugiat amet tempus</p>*/}
                            {/*</header>*/}
                            {/*<Link to="/landing" className="link primary"></Link>*/}
                        {/*</article>*/}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex
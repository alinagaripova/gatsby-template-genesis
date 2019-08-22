import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Genesis</h1>
            </header>
            <div className="content">
                <p>Тут вкратце про то, что мы предлагаем.
                <br/>Тут про стек технологий: 1.вид 2.вид 3.вид</p>
                <ul className="actions">
                    <li><Link to="/landing" className="button next scrolly">Подробнее</Link></li>
                </ul>
                {/*<ul className="actions">*/}
                    {/*<li><a href="#one" className="button next scrolly">Подробнее</a></li>*/}
                {/*</ul>*/}
            </div>
        </div>
    </section>
)

export default Banner

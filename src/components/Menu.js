import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Главная</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/projects">Услуги и Проекты</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">О нас</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/articles">Новости</Link></li>
                <li><Link className="button fit" onClick={props.onToggleMenu} to="/contacts">Свяжись с нами</Link></li>
            </ul>
            {/*<ul className="actions vertical">*/}
                {/*<li><a href="#" className="button special fit">Get Started</a></li>*/}
                {/*<li><a href="#" className="button fit">Log In</a></li>*/}
            {/*</ul>*/}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu

import React from 'react'
import { StaticQuery, graphql, Link} from 'gatsby'


const Filter = () => (
    <StaticQuery query={graphql`
      query FiltersQuery {
          allMarkdownRemark(sort: { fields: [frontmatter___order], order: DESC }, filter: {frontmatter: {name: {eq: "project"}}}) {
              group(field: frontmatter___tags) {
                  fieldValue
              }
          }
      }
    `}
        render={data => {
            const tags = data.allMarkdownRemark.group
            return(
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Наши проекты</h2>
                        </header>
                        <h4>Фильтры:</h4>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                {/*<p>По технологиям:</p>*/}
                                <ul>
                                    {tags.map(tag => {
                                        return (
                                            <li><Link to={tag.fieldValue}>{tag.fieldValue}</Link></li>
                                        )
                                    })}
                                    <li><Link to="/projects">все</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}}
     />)




export default Filter
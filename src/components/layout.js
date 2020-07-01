import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      ><a name="top"></a>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  let toggle
  toggle = (
    <ThemeToggler>
  {({ theme, toggleTheme }) => (
    <label class="switch">
      <input
        type="checkbox"
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
        checked={theme === 'dark'}
      /><span class="slider round">
      </span>{' '}
      <p style= {{padding: `auto`}}>Dark mode</p>
    </label>
  )}
</ThemeToggler>
  )
  let footer
  footer = (
    <p
      style={{
        // fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </p>
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        fontFamily: `Montserrat, sans-serif`
      }}
    >
      <header>{header}{toggle}</header>
      <main>{children}</main>
      <footer>©{footer}</footer>
    </div>
  )
}

export default Layout

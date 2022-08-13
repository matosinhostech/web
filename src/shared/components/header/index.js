import React from "react"
import PropTypes from "prop-types"

const Header = () => (
  <header>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Water+Brush&display=swap" rel="stylesheet" />
    <meta name="theme-color" content="#00b7f0" />
    <script id="mcjs" dangerouslySetInnerHTML={{
      __html: `!function (c, h, i, m, p) {
        m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)
      }(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/7422bf10b779cb6ba13c8ea29/04234c9cccbc2a2e93150dc69.js");`
    }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header

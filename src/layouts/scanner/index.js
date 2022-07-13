import * as React from "react"
import Loadable from 'react-loadable';
// import Scan from "./scan"

import "./styles.scss"

import whiteLogo from "assets/images/logo-white.png"

const Scan = Loadable({
  loader: () => import('./scan'),
  loading: () => null,
});

const ScannerLayout = ({ path }) => {
  return (
    <main className="scanContainer">
      <div className="scanMain">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 0',
        }}>
          <img className="logo" src={whiteLogo} alt="logo" />
        </div>
        <Scan />
      </div>
    </main>
  )
}

export default ScannerLayout

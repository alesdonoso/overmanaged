import React from 'react'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { rhythm } from '../utils/typography'

import './index.scss'

export const Layout = ({ title, children }) => {

  return (
    <React.Fragment>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          <Header title={title} />
          <ThemeSwitch />
        </div>
        {children}
      </div>
    </React.Fragment>
  )
}

'use client'

import Link from 'next/link'
import { LogoGithub, LogoLinkedin, Mail } from 'react-ionicons'

const Sidebar = (): JSX.Element => (
  <div className = "side-container">
    <div className = "side">
      <div />
      <div className = "icons">
        <Link href="https://github.com/sterahi" target='_blank'>
          <LogoGithub color="#2ad387"/>
        </Link>
        <Link href = "https://linkedin.com/in/sterahi" target='_blank'>
          <LogoLinkedin color="#2ad387"/>
        </Link>
        <Link href="mailto:contact@sterahi.com">
          <Mail color="#2ad387"/>
        </Link>
      </div>
    </div>
  </div>
)
export default Sidebar

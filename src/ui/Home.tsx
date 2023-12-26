import React from 'react'
import { NavButton } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          What is this?
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Gamba. Copy this platform with your own branding and start earning fees on every bet.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <NavButton
            color="white"
            to="/flip"
            icon={<Icon.ExternalLink />}
          >
            Play Flip
          </NavButton>
        </div>
      </Section>
    </div>
  )
}

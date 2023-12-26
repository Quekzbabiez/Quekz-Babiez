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
          Do you want to be a degen to play coin flip?
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          Welcome to the Pond Casino. Double your money or go broke degen.
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

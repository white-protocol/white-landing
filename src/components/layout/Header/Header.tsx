import { useContext } from 'react' // useCallback, useState
// import cx from 'classnames'

import styles from './Header.module.scss'
import { socials } from '@/data/socials'
import { StateContext } from '@/state'
// import { Icon } from '@/components/kit'

function Header() {
  // const [setIsMenuOpen] = useState(false) // isMenuOpen,

  // const toggleMenu = useCallback(() => {
  //   setIsMenuOpen(state => !state)
  // }, [])

  const { openMobileMenu } = useContext(StateContext)

  return (
    <header className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <img src="/images/logo_norm.svg" alt="White" className={styles.headerLogoImage} />
        <div className={styles.headerLogoDescription}>
          <strong>White protocol</strong>
          {/* <div>Group cross-chain transfer</div> */}
        </div>
      </div>

      <ul className={styles.headerSocials} >
        {socials.map(social => (
          <li key={social.name}>
            <a href={social.link} className={styles.headerSocialLink} target="_blank" rel="noopener noreferrer" >
              {social.icon}
              <span className="visually-hidden">{social.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <button type="button" className={styles.headerBurgerButton} onClick={openMobileMenu}>
        <img src="/images/icons/menu-icon.svg" alt="Menu icon" width="24" height="24" />
      </button>

      <nav className={styles.headerActions}>
        <a href="https://white-protocol.gitbook.io/white-protocol-docs/" className={styles.headerActionButton} target="_blank" rel="noreferrer">
          Docs
        </a>
      </nav>
    </header>
  )
}

export { Header }

import cx from 'classnames'
import { useContext } from 'react'

import { StateContext } from '@/state'
import { Icon } from '@/components/kit'

function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useContext(StateContext)

  return (
    <section className={cx(
      'mobile-menu',
      isMobileMenuOpen && 'mobile-menu--opened'
    )}>
      <header className="mobile-menu__header">
        <button type="button" className="mobile-menu__close" onClick={closeMobileMenu}>
          <Icon icon="close" />
        </button>

        <a href="https://white-protocol.gitbook.io/white-protocol-docs/" className="mobile-menu__docs" target="_blank" rel="noopener noreferrer">
          <span>White protocol docs</span>
          <img src="/images/icons/external.svg" alt="External link" width="16" height="16" />
        </a>
      </header>
      <ul className="mobile-menu__socials" style={{ paddingTop: 70 }}>
        <li>
          <a className="mobile-menu__social-link" href="https://gitcoin.co/grants/4665/via-protocol" target="_blank" rel="noopener noreferrer">
            <Icon icon="gitcoin" width={24} height={24} />
            <span className="visually-hidden">Gitcoin</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://github.com/white-protocol" target="_blank" rel="noopener noreferrer">
            <Icon icon="github" width={24} height={24} />
            <span className="visually-hidden">Github</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://twitter.com/WhiteProtocol_" target="_blank" rel="noopener noreferrer">
            <Icon icon="twitter" width={24} height={24} />
            <span className="visually-hidden">Twitter</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export { MobileMenu }

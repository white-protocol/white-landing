import type { NextPage } from 'next'
import { Demo, Intro, Investors, SafetyFirst, Features, ForDevelopers, ForOrganizations, TransactionTracking } from '@/views/IndexPage'

import { Footer, Header, MobileMenu } from '@/components/layout'
import { Wallets } from '@/views/IndexPage/Wallets'
import { Shortcuts } from '@/views/IndexPage/Shortcuts'
import { Supported } from '@/views/IndexPage/Supported'
import { Ecosystem } from '@/views/IndexPage/Ecosystem'
import styles from '@/styles/Common.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <div className="all">
        <div className="limiter">
          <Header />

          <main>
            <Intro />
            {/*<Investors />*/}
            {/*<div className="h-[86px] md:h-[160px]"/>*/}
            {/*<Demo />*/}
            {/*<div className="h-[120px] md:h-[130px]"/>*/}
            {/*<SafetyFirst />*/}
            {/*<div className="h-[120px] md:h-[200px]"/>*/}
            {/*<Supported />*/}
            {/*<Features />*/}
            {/*<div className="h-[120px] md:h-[200px]"/>*/}
            {/*<Ecosystem />*/}
            {/*<div className="h-[120px] md:h-[200px]"/>*/}
            {/*<ForOrganizations />*/}
            {/*<div className="h-[120px] md:h-[200px]"/>*/}
            {/*<div className={styles.leftDot}>*/}
              {/*<Wallets />*/}
              {/*<div className="h-[120px] md:h-[184px]"/>*/}
               {/*<Shortcuts />*/}
              {/*<div className="h-[120px] md:h-[200px]"/>*/}
            {/*</div>*/}
            {/*<TransactionTracking />*/}
            {/*<div className="h-[120px] md:h-[200px]"/>*/}
            {/*<ForDevelopers />*/}
          </main>
          <Footer />
        </div>
      </div>

      <MobileMenu />
    </>
  )
}

export default Home

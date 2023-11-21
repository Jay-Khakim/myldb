import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from '../containers'
import {Cta, Brand, Navbar} from '../components'
import '../App.css'

const LandingPageScreen = () => {
  return (
    <div className='background'>
      {/* <Header/> */}
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default LandingPageScreen

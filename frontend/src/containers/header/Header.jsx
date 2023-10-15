import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT_3 Apen AI</h1>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga incidunt doloribus, dicta ea sapiente sequi quia nisi debitis fugit rem quasi. Delectus sit beatae alias repudiandae aut reiciendis. Obcaecati.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder='Your Email Address'/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" srcset="" />
        </div>

    </div>
  )
}

export default Header
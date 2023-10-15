import React from 'react'

import './whatgpt3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is MyLDB" text="In the era of digital transformation, the 'MyLDB' project emerges as a solution for bibliophiles seeking efficient management of their home libraries. This platform facilitates the organization of book collections, providing features for tracking book totals, setting reading goals, recording reading history, and managing book borrowings and lendings" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Goal-Setting and Tracking" text="'MyLDB' empowers users to set personalized reading goals and actively monitors progress, providing a unique feature not commonly found in existing platforms." />
      <Feature title="Reading History Reflection" text="The project allows users to delve into their reading history, facilitating reflection on past literary journeys. This feature enhances the user experience by fostering a sense of accomplishment and nostalgia" />
      <Feature title="Community-Driven Approach" text="While some existing solutions focus solely on cataloging, 'MyLDB' introduces a community-driven dimension. Users can efficiently manage book loans and borrowings, enabling a collaborative sharing of literary resources among the community." />
    </div>
  </div>
);

export default WhatGPT3
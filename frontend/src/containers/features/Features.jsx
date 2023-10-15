import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Efficient Home Library Management',
    text: 'Users can effortlessly organize and manage their personal libraries, reducing the time and effort required for manual cataloging.',
  },
  {
    title: 'User Engagement',
    text: 'Interactive features, such as community discussions and goal-sharing, enhance user engagement, creating a vibrant and supportive reading community',
  },
  {
    title: 'User-Friendly Interface',
    text: 'A responsive and dynamic user interface accessible on web and mobile devices ensures a seamless and intuitive experience for users of various preferences',
  },
  {
    title: 'Personalized Reading Experience',
    text: '"MyLDB" tailors the reading experience to individual preferences, providing a platform for users to curate and customize their literary adventures',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
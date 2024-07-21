// src/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

const now = 30;

const Home = () => {
  return (
    <div className="flex-container-home">
      <div className="intro">Welcome to Fitlog, &#123;User&#125;. This is your &#123;n&#125;th day of FitLog!</div>
      <div className="session-container">
        <div className="today_session">
          <div className="session-title">Today's Session:</div>
          <ul>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
          </ul>
          <Button variant="info">Record a Session!</Button>{' '}
        </div>
        <div className="recommendation">
          <div className="session-title">Fitlog's Recommendation Session:</div>
          <ul>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
            <li>&#123;Exercise_name&#125;: &#123;Length&#125;</li>
          </ul>
          <Button variant="info">Edit Preferences</Button>{' '}
        </div>
      </div>
      <div className="progress_bar">
        <ProgressBar className='bar' animated now={now} label={`${now}%`} />
      </div>
    </div>
  );
};

export default Home;

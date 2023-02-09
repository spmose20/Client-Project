import React from 'react';
import './VideoPlayer.css'
const Player = () => {
return (
<div className='video-flex'>

  <div className='video'>
    <iframe width="660" height="415" src="https://www.youtube.com/embed/sVbnwpJLCCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <div className='text-box'>
    <br></br>
    <br></br>
    <h1>Upcoming Events:</h1>
    <br></br>
    <p>February 20th: President's Day</p>
    <ul><li>The School Office will be closed. Students and staff will be off.</li></ul>
    <br></br>
    <p>March 5th: Faculty Luncheon</p>
    <ul><li>Held during lunch hours for all faculty and staff.</li></ul>
    <br></br>
    <p>March 13th-19th: Spring Break!</p>
    <ul><li>Enjoy your spring break Buffalos!</li></ul>
    <br></br>
    <p>April 17th: Beginning of Spirit Week</p>
    <ul><li>Show your school spirit this week! Themes TBD.</li></ul>
    <br></br>
    <br></br>
  </div>
 
  </div>
  )
}

export default Player;
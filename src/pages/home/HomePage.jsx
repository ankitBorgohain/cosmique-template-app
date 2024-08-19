import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  
  const tickMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="30"
      fill="white"
      className="bi bi-check-lg"
      viewBox="0 0 16 16"
    >
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
    </svg>
  );
  return (
    <main className="container">
      {/* card container starts here */}
      <div className="card-container">
        <div className="card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              className="card-icon bi bi-person-arms-up "
              viewBox="0 0 16 16"
            >
              <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
            </svg>
          </div>
          <div>
            <h1 className="card-title">Horoscope</h1>
            <p className="card-text">
              It’s official, Leo! You’re in the reality you manifested for
              yourself a long time ago. Overheard at the cosmic conference: this
              is the season to thrive, beautiful! What’s more, you’re feeling
              more connected with your intuition—with the voice of wisdom
              within. Pay attention to the messages you are receiving from the
              invisible as they are little nudges to keep moving in the
              direction of your purpose!
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <svg viewBox="0 0 24 24" className="card-icon" fill="white" height="50" width="50">
              <path d="M11.43 9.67c.04.11.07.21.07.33v5.22c0 .5-.19.98-.53 1.35l-2.79 3.05-3.4-3.4L6 15 8.8 2.86a1.114 1.114 0 012.2.25v4.96a2.08 2.08 0 00-.5-.07c-1.1 0-2 .9-2 2v3c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.55.45-1 1-1 .19 0 .35.07.5.16.12.07.21.16.3.26.03.04.06.08.08.13.02.04.04.08.05.12M2 19l4 3 1.17-1.27-3.45-3.45L2 19m16-4L15.2 2.86a1.114 1.114 0 00-2.2.25v4.96c.16-.04.33-.07.5-.07 1.1 0 2 .9 2 2v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.55-.45-1-1-1-.19 0-.35.07-.5.16-.12.07-.21.16-.29.26-.03.04-.07.08-.09.13-.02.04-.04.08-.05.12-.04.11-.07.21-.07.33v5.22c0 .5.19.98.53 1.35l2.79 3.05 3.4-3.4L18 15m2.28 2.28l-3.45 3.45L18 22l4-3-1.72-1.72z" />
            </svg>
          </div>
          <NavLink to="/poojalist"><h1 className="card-title">Book a puja now</h1></NavLink>

          <div>
            <p className="card-text">Now booking a puja is easier than ever</p>
            <p className="card-text">
              {" "}
              Just a few fingertips away, <span>Book Now</span>
            </p>
          </div>
        </div>

        <div className="card" >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              className="card-icon bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fill="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
              />
              <path
                fill="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </div>
          <div>
            <h1 className="card-title">Login</h1>
            <p className="card-text">
              It’s official, Leo! You’re in the reality you manifested for
              yourself a long time ago. Overheard at the cosmic conference: this
              is the season to thrive, beautiful! What’s more, you’re feeling
              more connected with your intuition—with the voice of wisdom
              within. Pay attention to the messages you are receiving from the
              invisible as they are little nudges to keep moving in the
              direction of your purpose!
            </p>
          </div>
        </div>

        <div className="card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              className="card-icon bi bi-person-vcard"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
            </svg>
          </div>
          <div>
            <h1 className="card-title">About</h1>
            <p className="card-text">
              It’s official, Leo! You’re in the reality you manifested for
              yourself a long time ago. Overheard at the cosmic conference: this
              is the season to thrive, beautiful! What’s more, you’re feeling
              more connected with your intuition—with the voice of wisdom
              within. Pay attention to the messages you are receiving from the
              invisible as they are little nudges to keep moving in the
              direction of your purpose!
            </p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-section-header">
          <h1>
            Check your <span>horoscope</span> now{" "}
          </h1>
        </div>
        
        <div className="info-section-contianer">
        <div className="info-feature-section">
              
              <div className="info-feature">
                {tickMark}
                Believe in your spiritual self-awarness.
                </div>
            <div className="info-feature">
              {tickMark}
              Keep your head clear.
              </div>
            <div className="info-feature">
              {tickMark}
              Open youself to spiritualism.
              </div>
            <div className="info-feature">
              {tickMark}
              Know what's coming ahead for you.
              </div>
            </div>
          
          <div className="info-section-image">
            <img src="https://img.freepik.com/free-vector/zodiac-wheel-space-background_23-2148181763.jpg?t=st=1724084135~exp=1724087735~hmac=2a8dfe5cddedfe2c6b30f3b9fa7e712123fe5cc840f8c1cd4c0e9ce0105e78a7&w=740" width={"300px"}>
            </img>
            </div>
          

          
          
            
        </div>
        
       
      </div>
    </main>
  );
}

export default HomePage;

"use client";

export default function MobileAppSection() {
  return (
    <div className="mobile-app-section">
      <div className="mobile-app-content">
        <div className="app-info">
          <div className="app-text">
            <h2>Take your therapy sessions anywhere</h2>
            <p>
              Download our mobile app to connect with your therapist on the go
            </p>
            <div className="app-store-buttons">
              <div className="app-store-btn apple">
                <div className="store-icon apple-icon"></div>
                <div className="store-text">
                  <span className="download-text">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </div>
              <div className="app-store-btn google">
                <div className="store-icon google-icon"></div>
                <div className="store-text">
                  <span className="download-text">Get it on</span>
                  <span className="store-name">Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-preview">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-interface">
                <div className="chat-header">
                  <div className="therapist-avatar"></div>
                  <div className="therapist-info">
                    <span className="therapist-name">Dr. Mridul Sharma</span>
                    <span className="status">Online now</span>
                  </div>
                </div>
                <div className="chat-messages">
                  <div className="message received">
                    <p>How are you feeling today?</p>
                  </div>
                  <div className="message sent">
                    <p>Much better after our last session</p>
                  </div>
                </div>
                <div className="video-call-bar">
                  <span>Video session starting in 5 min</span>
                  <button className="join-call-btn">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

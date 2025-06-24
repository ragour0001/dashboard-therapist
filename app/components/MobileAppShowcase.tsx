"use client";

export default function MobileAppShowcase() {
  return (
    <div className="mobile-app-showcase">
      <div className="showcase-background">
        {/* Background gradients */}
        <div className="gradient-shape gradient-1"></div>
        <div className="gradient-shape gradient-2"></div>
        <div className="gradient-shape gradient-3"></div>
        <div className="gradient-shape gradient-4"></div>
      </div>

      <div className="showcase-content">
        <div className="showcase-text">
          <span className="new-platform-label">New Platform</span>
          <h2>Get one of our Refill Health apps, which is only available on</h2>
          <div className="download-section">
            <span className="download-label">Download Apps:</span>
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

        <div className="showcase-phones">
          {/* Phone mockups */}
          <div className="phone-mockup phone-1">
            <div className="phone-screen">
              <div className="phone-header">
                <div className="phone-status-bar">
                  <span className="time">9:41</span>
                  <div className="status-icons">
                    <div className="signal-icon"></div>
                    <div className="wifi-icon"></div>
                    <div className="battery-icon"></div>
                  </div>
                </div>
                <div className="app-header">
                  <div className="app-logo">
                    <span className="app-initial">R</span>
                  </div>
                  <div className="app-title">
                    <h4>My Care</h4>
                    <p>Find the right support to guide your journey.</p>
                  </div>
                </div>
              </div>
              <div className="phone-content">
                <div className="schedule-section">
                  <div className="today-header">
                    <div className="today-indicator">
                      <div className="blue-dot"></div>
                      <span>Today (2)</span>
                    </div>
                    <div className="expand-icon"></div>
                  </div>
                  <div className="appointment-card">
                    <div className="date-sidebar">
                      <span className="month">NOV</span>
                      <div className="date-circle">
                        <span>25</span>
                      </div>
                    </div>
                    <div className="appointment-details">
                      <div className="time-and-action">
                        <span className="time">10:00 - 10:30 AM</span>
                        <button className="join-btn">Join Now</button>
                      </div>
                      <span className="duration">30 min session</span>
                      <div className="therapist-info">
                        <div className="therapist-avatar"></div>
                        <div className="therapist-details">
                          <span className="therapist-role">Therapist</span>
                          <span className="therapist-name">
                            Mridhula Sharma
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="therapist-profile-card">
                    <div className="profile-info">
                      <div className="profile-avatar"></div>
                      <div className="profile-details">
                        <span className="profile-role">Therapist</span>
                        <span className="profile-name">Riya Agarwal</span>
                      </div>
                    </div>
                    <div className="sessions-progress">
                      <span className="sessions-text">
                        2 of 5 sessions booked.
                      </span>
                      <span className="schedule-next">Schedule Next</span>
                    </div>
                  </div>
                  <div className="confirmation-banner">
                    <div className="confirmation-text">
                      <span className="confirmation-title">
                        Your booking is confirmed.
                      </span>
                      <span className="confirmation-subtitle">
                        Your request has been accepted by the Therapist.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-mockup phone-2">
            <div className="phone-screen">
              <div className="phone-content-minimal">
                <div className="logo-section">
                  <div className="refill-logo">
                    <span>RefillHealth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function UpcomingSessionCard() {
  return (
    <div className="upcoming-session-card">
      <div className="session-card-content">
        <div className="session-header">
          <div className="therapist-info">
            <div className="therapist-avatar">
              <div className="avatar-placeholder"></div>
            </div>
            <div className="therapist-details">
              <h3>Mridul Sharma</h3>
              <p>30 min meeting with</p>
            </div>
          </div>
          <div className="session-actions">
            <button className="reschedule-btn">Reschedule</button>
            <button className="join-now-btn">Join Now</button>
          </div>
        </div>

        <div className="session-divider"></div>

        <div className="session-info">
          <div className="session-time">
            <div className="time-icon-group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="time-icon"
              >
                <path
                  d="M10.9982 19.4982C9.81872 19.4982 8.71364 19.2751 7.68297 18.829C6.65214 18.3828 5.75339 17.7764 4.98672 17.0097C4.22005 16.2431 3.61364 15.3443 3.16747 14.3135C2.7213 13.2828 2.49822 12.1777 2.49822 10.9982C2.49822 9.81872 2.7213 8.71364 3.16747 7.68297C3.61364 6.65214 4.22005 5.75339 4.98672 4.98672C5.75339 4.22005 6.65214 3.61364 7.68297 3.16747C8.71364 2.7213 9.81872 2.49822 10.9982 2.49822C12.1777 2.49822 13.2828 2.7213 14.3135 3.16747C15.3443 3.61364 16.2431 4.22005 17.0097 4.98672C17.7764 5.75339 18.3828 6.65214 18.829 7.68297C19.2751 8.71364 19.4982 9.81872 19.4982 10.9982C19.4982 12.1777 19.2751 13.2828 18.829 14.3135C18.3828 15.3443 17.7764 16.2431 17.0097 17.0097C16.2431 17.7764 15.3443 18.3828 14.3135 18.829C13.2828 19.2751 12.1777 19.4982 10.9982 19.4982ZM13.9712 15.0252L15.0252 13.9712L11.7482 10.6945V5.99822H10.2482V11.302L13.9712 15.0252Z"
                  fill="white"
                />
              </svg>
              <span>Time</span>
            </div>
            <div className="time-details">
              <p className="session-date">Thursday, Sep 14th</p>
              <p className="session-schedule">3:00 - 3:30 PM IST</p>
            </div>
          </div>
        </div>

        <div className="session-divider"></div>

        <div className="session-remarks">
          <div className="remarks-icon-group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="remarks-icon"
            >
              <path
                d="M0.882812 19.498V0.498047H2.38281V19.498H0.882812ZM4.67131 14.6518V12.1328H13.1133V14.6518H4.67131ZM4.67131 7.8633V5.3443H19.1133V7.8633H4.67131Z"
                fill="white"
              />
            </svg>
            <span>Remarks</span>
          </div>
          <p>I am going thhrouughh a heartbrake</p>
        </div>
      </div>
    </div>
  );
}

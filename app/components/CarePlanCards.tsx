"use client";

export default function CarePlanCards() {
  return (
    <div className="care-plan-section">
      <div className="care-plan-header">
        <h2>Your Care Plan is Almost Ready</h2>
        <p>
          To get personalized self-care actions, complete your first assessment.
          Your plan will be generated based on your mental health goals and
          responses.
        </p>
      </div>

      <div className="care-plan-cards-grid">
        {/* Left Card - Locked Care Plan */}
        <div className="care-plan-card locked-card">
          <div className="card-background">
            <div className="abstract-shapes">
              <div className="shape-circle"></div>
              <div className="shape-wave"></div>
            </div>
          </div>
          <div className="card-overlay">
            <div className="lock-icon-container">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lock-icon"
              >
                <path
                  d="M3.4974 30.416C2.71823 30.416 2.05122 30.1386 1.49635 29.5837C0.941493 29.0289 0.664062 28.3618 0.664062 27.5827V13.416C0.664062 12.6368 0.941493 11.9698 1.49635 11.415C2.05122 10.8601 2.71823 10.5827 3.4974 10.5827H4.91406V7.74935C4.91406 5.78963 5.60469 4.11914 6.98594 2.73789C8.36719 1.35664 10.0377 0.666016 11.9974 0.666016C13.9571 0.666016 15.6276 1.35664 17.0089 2.73789C18.3901 4.11914 19.0807 5.78963 19.0807 7.74935V10.5827H20.4974C21.2766 10.5827 21.9436 10.8601 22.4984 11.415C23.0533 11.9698 23.3307 12.6368 23.3307 13.416V27.5827C23.3307 28.3618 23.0533 29.0289 22.4984 29.5837C21.9436 30.1386 21.2766 30.416 20.4974 30.416H3.4974ZM11.9974 23.3327C12.7766 23.3327 13.4436 23.0553 13.9984 22.5004C14.5533 21.9455 14.8307 21.2785 14.8307 20.4993C14.8307 19.7202 14.5533 19.0532 13.9984 18.4983C13.4436 17.9434 12.7766 17.666 11.9974 17.666C11.2182 17.666 10.5512 17.9434 9.99636 18.4983C9.44149 19.0532 9.16406 19.7202 9.16406 20.4993C9.16406 21.2785 9.44149 21.9455 9.99636 22.5004C10.5512 23.0553 11.2182 23.3327 11.9974 23.3327ZM7.7474 10.5827H16.2474V7.74935C16.2474 6.56879 15.8342 5.56532 15.0078 4.73893C14.1814 3.91254 13.178 3.49935 11.9974 3.49935C10.8168 3.49935 9.81337 3.91254 8.98698 4.73893C8.16059 5.56532 7.7474 6.56879 7.7474 7.74935V10.5827Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="locked-content">
              <h3>Unlock your Personalized care plan</h3>
              <p>Take a quick assessment to unlock your Care Plan</p>
              <button className="complete-assessment-card-btn">
                Complete Assessment
              </button>
            </div>
          </div>
          <div className="card-title">
            <h4>Create ambient awareness through different senses</h4>
          </div>
        </div>

        {/* Right Card - Referral */}
        <div className="care-plan-card referral-card">
          <div className="referral-header">
            <div className="referral-text">
              <span className="referral-label">Referral</span>
              <h3>Help a friend, We&apos;ll help take care of them!</h3>
            </div>
            <div className="referral-avatar">
              <div className="avatar-placeholder"></div>
            </div>
          </div>
          <div className="referral-code-section">
            <div className="code-container">
              <span className="copy-label">Copy code</span>
              <div className="code-display">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="copy-icon"
                >
                  <path
                    d="M16.875 3.25H6.875C6.70924 3.25 6.55027 3.31585 6.43306 3.43306C6.31585 3.55027 6.25 3.70924 6.25 3.875V7H3.125C2.95924 7 2.80027 7.06585 2.68306 7.18306C2.56585 7.30027 2.5 7.45924 2.5 7.625V17.625C2.5 17.7908 2.56585 17.9497 2.68306 18.0669C2.80027 18.1842 2.95924 18.25 3.125 18.25H13.125C13.2908 18.25 13.4497 18.1842 13.5669 18.0669C13.6842 17.9497 13.75 17.7908 13.75 17.625V14.5H16.875C17.0408 14.5 17.1997 14.4342 17.3169 14.3169C17.4342 14.1997 17.5 14.0408 17.5 13.875V3.875C17.5 3.70924 17.4342 3.55027 17.3169 3.43306C17.1997 3.31585 17.0408 3.25 16.875 3.25ZM12.5 17H3.75V8.25H12.5V17ZM16.25 13.25H13.75V7.625C13.75 7.45924 13.6842 7.30027 13.5669 7.18306C13.4497 7.06585 13.2908 7 13.125 7H7.5V4.5H16.25V13.25Z"
                    fill="black"
                  />
                </svg>
                <span className="code-text">C232DF</span>
              </div>
            </div>
            <button className="share-invite-btn">Share Invite</button>
          </div>
          <div className="card-title orange">
            <h4>Create ambient awareness through different senses</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

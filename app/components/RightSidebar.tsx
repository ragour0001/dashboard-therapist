export default function RightSidebar() {
  return (
    <div className="figma-right-sidebar">
      {/* Profile Overview Header */}
      <div className="figma-profile-header">
        <div className="figma-profile-title">Profile Overview</div>
        <div className="figma-more-options">
          <svg
            width="4"
            height="16"
            viewBox="0 0 4 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0.5C1.3125 0.5 0.75 1.0625 0.75 1.75C0.75 2.4375 1.3125 3 2 3C2.6875 3 3.25 2.4375 3.25 1.75C3.25 1.0625 2.6875 0.5 2 0.5ZM2 13C1.3125 13 0.75 13.5625 0.75 14.25C0.75 14.9375 1.3125 15.5 2 15.5C2.6875 15.5 3.25 14.9375 3.25 14.25C3.25 13.5625 2.6875 13 2 13ZM2 6.75C1.3125 6.75 0.75 7.3125 0.75 8C0.75 8.6875 1.3125 9.25 2 9.25C2.6875 9.25 3.25 8.6875 3.25 8C3.25 7.3125 2.6875 6.75 2 6.75Z"
              fill="#1F1F1F"
            />
          </svg>
        </div>
      </div>

      {/* Profile Content */}
      <div className="figma-profile-content">
        <img
          src="/assets/images/profile_image.svg"
          alt="Profile"
          width={73}
          height={72}
          style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
          className="figma-avatar"
        />
        <div className="figma-profile-text">Complete your Profile</div>
      </div>

      {/* Insights Card */}
      <div className="figma-card">
        <div className="figma-insights-content">
          <div className="figma-award-icon">🏆</div>
          <div className="figma-insights-text">
            Get your insights, just complete the assessment
          </div>
        </div>
      </div>

      {/* Daily Streak */}
      <div className="figma-card">
        <div className="figma-streak-header">
          <div className="figma-streak-title">Daily Streak</div>
          <div className="figma-see-more">See More</div>
        </div>
        <div className="figma-streak-content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
            }}
          >
            <div className="figma-flame-container">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_603_1304)">
                  <ellipse
                    cx="17.3735"
                    cy="18.75"
                    rx="4.6875"
                    ry="6.5625"
                    fill="#FFCE51"
                  />
                  <path
                    d="M24.848 15.4387C22.8855 10.3387 15.898 10.0637 17.5855 2.65115C17.7105 2.10115 17.123 1.67615 16.648 1.96365C12.1105 4.63865 8.84805 10.0012 11.5855 17.0262C11.8105 17.6012 11.1355 18.1387 10.648 17.7637C8.38555 16.0512 8.14805 13.5887 8.34805 11.8262C8.42305 11.1762 7.57305 10.8637 7.21055 11.4012C6.36055 12.7012 5.49805 14.8012 5.49805 17.9637C5.97305 24.9637 11.8855 27.1137 14.0105 27.3887C17.048 27.7762 20.3355 27.2137 22.698 25.0512C25.298 22.6387 26.248 18.7887 24.848 15.4387ZM13.248 21.7262C15.048 21.2887 15.973 19.9887 16.223 18.8387C16.6355 17.0512 15.023 15.3012 16.1105 12.4762C16.523 14.8137 20.198 16.2762 20.198 18.8262C20.298 21.9887 16.873 24.7012 13.248 21.7262Z"
                    fill="#F37A1F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_603_1304">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="figma-streak-text">Your Streak</div>
            <div className="figma-streak-description">
              Complete the assessment, & do your activity
            </div>
          </div>
          <button className="figma-button">
            <span className="figma-button-text">Complete Assessment</span>
          </button>
        </div>
      </div>

      {/* Welcome to Rewards */}
      <div className="figma-card-large figma-card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div className="figma-medal-icon">
            <svg
              width="39"
              height="25"
              viewBox="0 0 39 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8449 2.52712C13.6487 2.2001 13.2953 2 12.9139 2H2.41767C1.57375 2 1.05249 2.92065 1.48668 3.64431L13.2124 23.1872C13.4086 23.5142 13.762 23.7143 14.1434 23.7143H24.6397C25.4836 23.7143 26.0048 22.7936 25.5707 22.07L13.8449 2.52712Z"
                fill="#C52229"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.914 0.914062H2.41768C0.729847 0.914062 -0.312685 2.75537 0.555702 4.20268L12.2814 23.7455C12.6738 24.3996 13.3807 24.7998 14.1434 24.7998H24.6397C26.3275 24.7998 27.37 22.9585 26.5017 21.5112L14.7759 1.9683C14.3835 1.31426 13.6767 0.914062 12.914 0.914062ZM12.914 1.99978C13.2953 1.99978 13.6487 2.19987 13.8449 2.5269L25.5707 22.0698C26.0049 22.7934 25.4836 23.7141 24.6397 23.7141H14.1434C13.762 23.7141 13.4086 23.514 13.2124 23.1869L1.48669 3.64409C1.0525 2.92043 1.57376 1.99978 2.41768 1.99978H12.914Z"
                fill="#9B0F15"
              />
              <path
                d="M25.1551 2.52712C25.3513 2.2001 25.7047 2 26.0861 2H36.5823C37.4262 2 37.9475 2.92065 37.5133 3.64431L25.7876 23.1872C25.5914 23.5142 25.238 23.7143 24.8566 23.7143H14.3603C13.5164 23.7143 12.9952 22.7936 13.4293 22.07L25.1551 2.52712Z"
                fill="#F1333B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.0865 0.914062H36.5828C38.2706 0.914062 39.3132 2.75537 38.4448 4.20268L26.7191 23.7455C26.3266 24.3996 25.6198 24.7998 24.8571 24.7998H14.3608C12.673 24.7998 11.6304 22.9585 12.4988 21.5112L24.2245 1.9683C24.617 1.31426 25.3238 0.914062 26.0865 0.914062ZM26.0865 1.99978C25.7052 1.99978 25.3518 2.19987 25.1555 2.5269L13.4298 22.0698C12.9956 22.7934 13.5169 23.7141 14.3608 23.7141H24.8571C25.2385 23.7141 25.5919 23.514 25.7881 23.1869L37.5138 3.64409C37.948 2.92043 37.4267 1.99978 36.5828 1.99978H26.0865Z"
                fill="#9B0F15"
              />
            </svg>
            <div style={{ position: "absolute", left: "4px", top: "14px" }}>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.1571 14.7704C30.1571 22.8653 23.5948 29.4276 15.4999 29.4276C7.405 29.4276 0.842773 22.8653 0.842773 14.7704C0.842773 6.67551 7.405 0.113281 15.4999 0.113281C23.5948 0.113281 30.1571 6.67551 30.1571 14.7704Z"
                  fill="#BCCCD2"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "218px",
              height: "68px",
              flexDirection: "column",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <div className="figma-rewards-title">Welcome to rewards</div>
            <div className="figma-rewards-subtitle">
              Use Reward Points for free session
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="figma-progress-container">
          <div className="figma-progress-track"></div>
          <div className="figma-progress-fill"></div>
          <div className="figma-progress-medal">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3286 8.46125C15.3286 12.5086 12.0475 15.7897 7.99998 15.7897C3.95251 15.7897 0.671387 12.5086 0.671387 8.46125C0.671387 4.41387 3.95251 1.13281 7.99998 1.13281C12.0475 1.13281 15.3286 4.41387 15.3286 8.46125Z"
                fill="#BCCCD2"
              />
            </svg>
          </div>
        </div>

        {/* Claim Reward Button */}
        <button className="figma-claim-button">
          <span className="figma-claim-text">Claim reward</span>
        </button>
      </div>

      {/* Upcoming Events */}
      <div className="figma-card-large figma-card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <div className="figma-events-header">
            <div className="figma-events-title">Upcoming Events</div>
            <div
              style={{
                display: "flex",
                width: "24px",
                height: "24px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.9546 3.70281C2.50272 3.70281 2.1364 4.06913 2.1364 4.52101V15.9758C2.1364 16.4277 2.50272 16.794 2.9546 16.794H14.4094C14.8613 16.794 15.2276 16.4277 15.2276 15.9758V4.52101C15.2276 4.06913 14.8613 3.70281 14.4094 3.70281H2.9546ZM0.5 4.52101C0.5 3.16537 1.59896 2.06641 2.9546 2.06641H14.4094C15.765 2.06641 16.864 3.16537 16.864 4.52101V15.9758C16.864 17.3314 15.765 18.4304 14.4094 18.4304H2.9546C1.59896 18.4304 0.5 17.3314 0.5 15.9758V4.52101Z"
                  fill="#003A5D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9549 0.429688C12.4068 0.429688 12.7731 0.796008 12.7731 1.24789V4.52069C12.7731 4.97257 12.4068 5.33889 11.9549 5.33889C11.503 5.33889 11.1367 4.97257 11.1367 4.52069V1.24789C11.1367 0.796008 11.503 0.429688 11.9549 0.429688Z"
                  fill="#003A5D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.40902 0.429688C5.8609 0.429688 6.22722 0.796008 6.22722 1.24789V4.52069C6.22722 4.97257 5.8609 5.33889 5.40902 5.33889C4.95714 5.33889 4.59082 4.97257 4.59082 4.52069V1.24789C4.59082 0.796008 4.95714 0.429688 5.40902 0.429688Z"
                  fill="#003A5D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 7.79476C0.5 7.34288 0.866321 6.97656 1.3182 6.97656H16.0458C16.4977 6.97656 16.864 7.34288 16.864 7.79476C16.864 8.24664 16.4977 8.61296 16.0458 8.61296H1.3182C0.866321 8.61296 0.5 8.24664 0.5 7.79476Z"
                  fill="#003A5D"
                />
              </svg>
            </div>
          </div>
          <div className="figma-events-date">12 Oct ,23</div>
        </div>
        <button className="figma-button">
          <span className="figma-button-text">Complete Assessment</span>
        </button>
      </div>

      {/* Banner */}
      <div className="figma-banner">
        <div className="figma-banner-content"></div>
        <div className="figma-banner-dots">
          <div className="figma-dot active"></div>
          <div className="figma-dot"></div>
          <div className="figma-dot"></div>
        </div>
      </div>
    </div>
  );
}

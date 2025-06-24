"use client";

import { useState } from "react";

export default function MainContent({
  onSectionChange,
}: {
  onSectionChange?: (section: string) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState("April 2024");
  const [selectedDate, setSelectedDate] = useState(23);

  return (
    <div className="home-dashboard">
      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="left-column">
          {/* Sessions for Today Section */}
          <div className="sessions-today-card">
            <div className="sessions-header">
              <div className="sessions-main">
                <h2 className="sessions-title">Sessions for Today</h2>
                <div className="sessions-number">57</div>
                <div className="progress-section">
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <span className="progress-text">65% complete</span>
                  </div>
                </div>
              </div>

              <div className="today-dropdown">
                <span className="today-text">Today</span>
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.0279 15.4818C24.6876 15.1235 24.1359 15.1235 23.7955 15.4818L19.0488 20.4793L14.3021 15.4818C13.9618 15.1235 13.41 15.1235 13.0697 15.4818C12.7294 15.8401 12.7294 16.4211 13.0697 16.7794L18.4326 22.4256C18.7729 22.7839 19.3247 22.7839 19.6651 22.4256L25.0279 16.7794C25.3683 16.4211 25.3683 15.8401 25.0279 15.4818Z"
                    fill="#1A1A1A"
                    fillOpacity="0.61"
                  />
                </svg>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="metric-cards">
              <div className="metric-card metric-card-green">
                <div className="metric-content">
                  <h3 className="metric-label">No. of sessions</h3>
                  <div className="metric-value">24</div>
                  <div className="metric-change">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 14.9062H11V10.7063L12.6 12.3063L14 10.9062L10 6.90625L6 10.9062L7.4 12.3063L9 10.7063V14.9062ZM10 20.9062C8.61667 20.9062 7.31667 20.6437 6.1 20.1187C4.88333 19.5938 3.825 18.8813 2.925 17.9813C2.025 17.0813 1.3125 16.0229 0.7875 14.8063C0.2625 13.5896 0 12.2896 0 10.9062C0 9.52292 0.2625 8.22292 0.7875 7.00625C1.3125 5.78958 2.025 4.73125 2.925 3.83125C3.825 2.93125 4.88333 2.21875 6.1 1.69375C7.31667 1.16875 8.61667 0.90625 10 0.90625C11.3833 0.90625 12.6833 1.16875 13.9 1.69375C15.1167 2.21875 16.175 2.93125 17.075 3.83125C17.975 4.73125 18.6875 5.78958 19.2125 7.00625C19.7375 8.22292 20 9.52292 20 10.9062C20 12.2896 19.7375 13.5896 19.2125 14.8063C18.6875 16.0229 17.975 17.0813 17.075 17.9813C16.175 18.8813 15.1167 19.5938 13.9 20.1187C12.6833 20.6437 11.3833 20.9062 10 20.9062Z"
                        fill="#006B5F"
                      />
                    </svg>
                    <span>+5.11%</span>
                  </div>
                </div>
              </div>

              <div className="metric-card metric-card-blue">
                <div className="metric-content">
                  <h3 className="metric-label">No. of sessions</h3>
                  <div className="metric-value">24</div>
                  <div className="metric-change">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.33301 14.9062H11.333V10.7063L12.933 12.3063L14.333 10.9062L10.333 6.90625L6.33301 10.9062L7.73301 12.3063L9.33301 10.7063V14.9062ZM10.333 20.9062C8.94967 20.9062 7.64967 20.6437 6.43301 20.1187C5.21634 19.5938 4.15801 18.8813 3.25801 17.9813C2.35801 17.0813 1.64551 16.0229 1.12051 14.8063C0.595508 13.5896 0.333008 12.2896 0.333008 10.9062C0.333008 9.52292 0.595508 8.22292 1.12051 7.00625C1.64551 5.78958 2.35801 4.73125 3.25801 3.83125C4.15801 2.93125 5.21634 2.21875 6.43301 1.69375C7.64967 1.16875 8.94967 0.90625 10.333 0.90625C11.7163 0.90625 13.0163 1.16875 14.233 1.69375C15.4497 2.21875 16.508 2.93125 17.408 3.83125C18.308 4.73125 19.0205 5.78958 19.5455 7.00625C20.0705 8.22292 20.333 9.52292 20.333 10.9062C20.333 12.2896 20.0705 13.5896 19.5455 14.8063C19.0205 16.0229 18.308 17.0813 17.408 17.9813C16.508 18.8813 15.4497 19.5938 14.233 20.1187C13.0163 20.6437 11.7163 20.9062 10.333 20.9062Z"
                        fill="#006B5F"
                      />
                    </svg>
                    <span>+5.11%</span>
                  </div>
                </div>
              </div>

              <div className="metric-card metric-card-purple">
                <div className="metric-content">
                  <h3 className="metric-label">No. of sessions</h3>
                  <div className="metric-value">24</div>
                  <div className="metric-change">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66699 14.9062H11.667V10.7063L13.267 12.3063L14.667 10.9062L10.667 6.90625L6.66699 10.9062L8.06699 12.3063L9.66699 10.7063V14.9062ZM10.667 20.9062C9.28366 20.9062 7.98366 20.6437 6.76699 20.1187C5.55033 19.5938 4.49199 18.8813 3.59199 17.9813C2.69199 17.0813 1.97949 16.0229 1.45449 14.8063C0.929492 13.5896 0.666992 12.2896 0.666992 10.9062C0.666992 9.52292 0.929492 8.22292 1.45449 7.00625C1.97949 5.78958 2.69199 4.73125 3.59199 3.83125C4.49199 2.93125 5.55033 2.21875 6.76699 1.69375C7.98366 1.16875 9.28366 0.90625 10.667 0.90625C12.0503 0.90625 13.3503 1.16875 14.567 1.69375C15.7837 2.21875 16.842 2.93125 17.742 3.83125C18.642 4.73125 19.3545 5.78958 19.8795 7.00625C20.4045 8.22292 20.667 9.52292 20.667 10.9062C20.667 12.2896 20.4045 13.5896 19.8795 14.8063C19.3545 16.0229 18.642 17.0813 17.742 17.9813C16.842 18.8813 15.7837 19.5938 14.567 20.1187C13.3503 20.6437 12.0503 20.9062 10.667 20.9062Z"
                        fill="#006B5F"
                      />
                    </svg>
                    <span>+5.11%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Welcome Clients Section */}
            <div className="welcome-clients-section">
              <div className="welcome-header">
                <div className="welcome-text">
                  <span className="welcome-gray">Welcome </span>
                  <span className="welcome-bold">291 Clients</span>
                  <span className="welcome-gray">
                    {" "}
                    with a personal warm message 😎
                  </span>
                </div>
                <button className="send-message-btn">Send message</button>
              </div>

              <div className="client-avatars">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/64x64/d4a574/d4a574"
                    alt="Courtney Henry"
                    className="avatar-img"
                  />
                  <span className="client-name">Courtney Henry</span>
                </div>
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/64x64/c8a882/c8a882"
                    alt="Courtney Henry"
                    className="avatar-img"
                  />
                  <span className="client-name">Courtney Henry</span>
                </div>
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/64x64/b89c7a/b89c7a"
                    alt="Jenny Wilson"
                    className="avatar-img"
                  />
                  <span className="client-name">Jenny Wilson</span>
                </div>
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/64x64/a68f6d/a68f6d"
                    alt="Cameron Williamson"
                    className="avatar-img"
                  />
                  <span className="client-name">Cameron Williamson</span>
                </div>
                <div className="view-all-avatar">
                  <div className="view-all-icon">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.59961 12.9055C4.59961 12.4084 5.00255 12.0055 5.49961 12.0055L17.1271 12.0055L13.8632 8.7419C13.5118 8.39044 13.5117 7.82059 13.8632 7.4691C14.2146 7.11761 14.7845 7.11759 15.136 7.46904L19.9365 12.269C20.1053 12.4378 20.2001 12.6668 20.2001 12.9055C20.2001 13.1442 20.1053 13.3731 19.9365 13.5419L15.136 18.3419C14.7845 18.6934 14.2146 18.6933 13.8632 18.3418C13.5117 17.9903 13.5118 17.4205 13.8632 17.069L17.1271 13.8055L5.49961 13.8055C5.00255 13.8055 4.59961 13.4025 4.59961 12.9055Z"
                        fill="#303030"
                      />
                    </svg>
                  </div>
                  <span className="view-all-text">View all</span>
                </div>
              </div>
            </div>

            {/* Warning Banner */}
            <div className="warning-banner">
              <div className="warning-content">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8429 5.20763C11.1961 5.00877 11.5947 4.9043 12 4.9043C12.4053 4.9043 12.8039 5.00877 13.1571 5.20763C13.5103 5.40649 13.8063 5.69303 14.0165 6.03961L14.0188 6.04334L20.684 17.1705C20.89 17.5271 20.9988 17.9315 21 18.3433C21.0011 18.7551 20.8944 19.1601 20.6905 19.5179C20.4866 19.8756 20.1925 20.1738 19.8376 20.3826C19.4827 20.5915 19.0792 20.7037 18.6674 20.7083L18.6588 20.7084L5.33257 20.7083C4.92077 20.7038 4.51734 20.5915 4.16241 20.3826C3.80748 20.1738 3.51342 19.8756 3.30949 19.5179C3.10555 19.1601 2.99886 18.7551 3.00001 18.3433C3.00116 17.9315 3.11013 17.5272 3.31606 17.1705L3.32236 17.1596L9.98348 6.0396C10.1937 5.69303 10.4897 5.40649 10.8429 5.20763ZM12 6.47662C11.8649 6.47662 11.732 6.51145 11.6143 6.57773C11.4971 6.64372 11.3988 6.73867 11.3288 6.85349L4.67508 17.9613C4.60812 18.0791 4.57271 18.2122 4.57233 18.3477C4.57194 18.485 4.60751 18.62 4.67549 18.7392C4.74346 18.8585 4.84149 18.9579 4.95979 19.0275C5.07707 19.0965 5.21023 19.1339 5.34623 19.136H18.6538C18.7898 19.1339 18.9229 19.0965 19.0402 19.0275C19.1585 18.9579 19.2565 18.8585 19.3245 18.7392C19.3925 18.62 19.4281 18.485 19.4277 18.3477C19.4273 18.2122 19.3919 18.0791 19.3249 17.9614L12.6722 6.85506C12.6719 6.85454 12.6715 6.85401 12.6712 6.85349C12.6012 6.73867 12.5029 6.64372 12.3857 6.57773C12.268 6.51145 12.1351 6.47662 12 6.47662Z"
                    fill="#E94545"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.001 9.70117C12.4352 9.70117 12.7872 10.0531 12.7872 10.4873V13.632C12.7872 14.0662 12.4352 14.4181 12.001 14.4181C11.5668 14.4181 11.2148 14.0662 11.2148 13.632V10.4873C11.2148 10.0531 11.5668 9.70117 12.001 9.70117Z"
                    fill="#E94545"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2148 16.7764C11.2148 16.3422 11.5668 15.9902 12.001 15.9902H12.0089C12.4431 15.9902 12.795 16.3422 12.795 16.7764C12.795 17.2106 12.4431 17.5626 12.0089 17.5626H12.001C11.5668 17.5626 11.2148 17.2106 11.2148 16.7764Z"
                    fill="#E94545"
                  />
                </svg>
                <span className="warning-text">
                  Two Patients Needs Immediate attention
                </span>
              </div>
              <button className="review-btn">Review</button>
            </div>

            {/* Next Session Card */}
            <div className="next-session-card">
              <div className="next-session-header">
                <h3 className="next-session-title">Next session</h3>
                <div className="session-badges">
                  <span className="starts-in-badge">Starts in 1 hr</span>
                  <button className="join-now-btn">Join Now</button>
                </div>
              </div>

              <div className="patient-info">
                <img
                  src="https://placehold.co/48x48/4a9b8e/4a9b8e"
                  alt="Denzel White"
                  className="patient-avatar"
                />
                <div className="patient-details">
                  <h4 className="patient-name">Denzel White</h4>
                  <p className="session-type">Follow Up Session</p>
                </div>
              </div>

              <div className="appointment-details">
                <div className="detail-row">
                  <div className="detail-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 6h6M6 3v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="detail-label">Appointments Date & Time</span>
                </div>
                <p className="appointment-time">
                  Mon, 11 June 2024 11:00 AM - 12:00 PM
                </p>
              </div>

              <div className="assessment-details">
                <div className="detail-row">
                  <div className="detail-icon">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 3h8M2 6h8M2 9h8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="detail-label">
                    Client Assessment Summary
                  </span>
                </div>
                <div className="symptoms">
                  <div className="symptom-item">
                    <span className="symptom-dot anxiety"></span>
                    <span>
                      Symptoms of{" "}
                      <span className="symptom-highlight anxiety">Anxiety</span>{" "}
                      and{" "}
                      <span className="symptom-highlight anxiety">Burnout</span>
                    </span>
                  </div>
                  <div className="symptom-item">
                    <span className="symptom-dot sleep"></span>
                    <span>Showing signs of sleep disturbance</span>
                  </div>
                </div>
              </div>

              <div className="user-report">
                <div className="report-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="report-info">
                  <span className="report-title">User report</span>
                  <span className="report-size">2.4 MB</span>
                </div>
                <div className="download-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4v12M4 10l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="session-actions">
                <button className="action-btn">Review history</button>
                <button className="action-btn">Client Notes(3)</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Calendar Section */}
          <div className="calendar-section">
            <h3 className="calendar-title">Calendar</h3>

            <div className="calendar-header">
              <button className="nav-btn">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.4235 25.3326C22.7818 24.9923 22.7818 24.4406 22.4235 24.1002L17.426 19.3535L22.4235 14.6068C22.7818 14.2665 22.7818 13.7147 22.4235 13.3744C22.0652 13.0341 21.4842 13.0341 21.1259 13.3744L15.4797 18.7373C15.1214 19.0776 15.1214 19.6294 15.4797 19.9698L21.1259 25.3326C21.4842 25.673 22.0652 25.673 22.4235 25.3326Z"
                    fill="#1A1A1A"
                    fillOpacity="0.61"
                  />
                </svg>
              </button>
              <span className="current-month">{currentMonth}</span>
              <button className="nav-btn nav-btn-active">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.234375"
                    y="0.400391"
                    width="37.905"
                    height="37.905"
                    rx="18.9525"
                    fill="#006B5F"
                    fillOpacity="0.08"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.714 25.3326C15.3557 24.9923 15.3557 24.4406 15.714 24.1002L20.7115 19.3535L15.714 14.6068C15.3557 14.2665 15.3557 13.7147 15.714 13.3744C16.0724 13.0341 16.6533 13.0341 17.0116 13.3744L22.6578 18.7373C23.0161 19.0776 23.0161 19.6294 22.6578 19.9698L17.0116 25.3326C16.6533 25.673 16.0724 25.673 15.714 25.3326Z"
                    fill="#006B5F"
                  />
                </svg>
              </button>
            </div>

            <div className="calendar-grid">
              <div className="calendar-days-header">
                <div className="day-header">MON</div>
                <div className="day-header">TUE</div>
                <div className="day-header">WED</div>
                <div className="day-header">THU</div>
                <div className="day-header">FRI</div>
                <div className="day-header">SAT</div>
                <div className="day-header">SUN</div>
              </div>

              <div className="calendar-dates">
                {/* Week 1 */}
                <div className="date-cell">
                  <span className="date-number faded">1</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number">8</span>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">2</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">3</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">4</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">5</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">6</span>
                  <div className="event-dots">
                    <span className="dot dot-gray"></span>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="date-cell">
                  <span className="date-number faded">7</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number">8</span>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">9</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">10</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">11</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number">12</span>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">13</span>
                  <div className="event-dots">
                    <span className="dot dot-gray"></span>
                  </div>
                </div>

                {/* Week 3 */}
                <div className="date-cell">
                  <span className="date-number faded">14</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">15</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number">16</span>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">17</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">18</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">19</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">20</span>
                  <div className="event-dots">
                    <span className="dot dot-gray"></span>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="date-cell">
                  <span className="date-number faded">21</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">22</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-purple"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell selected">
                  <span className="date-number">23</span>
                  <div className="event-dots">
                    <span className="dot dot-blue"></span>
                    <span className="dot dot-teal"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">24</span>
                  <div className="event-dots">
                    <span className="dot dot-orange"></span>
                  </div>
                </div>
                <div className="date-cell">
                  <span className="date-number next-month">25</span>
                </div>
                <div className="date-cell">
                  <span className="date-number next-month">26</span>
                </div>
                <div className="date-cell">
                  <span className="date-number faded">27</span>
                  <div className="event-dots">
                    <span className="dot dot-gray"></span>
                  </div>
                </div>

                {/* Week 5 */}
                <div className="date-cell">
                  <span className="date-number">28</span>
                </div>
                <div className="date-cell">
                  <span className="date-number next-month">29</span>
                </div>
                <div className="date-cell">
                  <span className="date-number next-month">30</span>
                </div>
              </div>
            </div>

            {/* Calendar Legend */}
            <div className="calendar-legend">
              <div className="legend-item">
                <span className="legend-dot dot-teal"></span>
                <span className="legend-text">Booked</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot dot-blue"></span>
                <span className="legend-text">Available slot</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot dot-gray"></span>
                <span className="legend-text">Holiday</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot dot-orange"></span>
                <span className="legend-text">On leave</span>
              </div>
            </div>

            {/* Selected Date Sessions */}
            <div className="selected-date-sessions">
              <h4 className="selected-date-title">Wed Apr 23,2024</h4>
              <div className="session-items">
                <div className="session-item session-booked">
                  <span className="session-name">session with Olivia</span>
                  <span className="session-time">12:00 pm</span>
                </div>
                <div className="session-item session-available">
                  <span className="session-name">slot available</span>
                  <span className="session-time">1:00 pm</span>
                </div>
                <div className="session-item session-booked">
                  <span className="session-name">session with Olivia</span>
                  <span className="session-time">12:00 pm</span>
                </div>
              </div>
              <p className="more-sessions">2 more....</p>
            </div>
          </div>

          {/* To-Do List Section */}
          <div className="todo-section">
            <div className="todo-header">
              <h3 className="todo-title">To-Do List</h3>
              <button className="add-new-btn">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10.4004" r="10" fill="#5856D6" />
                </svg>
                <span>Add New</span>
              </button>
            </div>

            <div className="todo-items">
              <div className="todo-item">
                <span className="todo-text">Send assignment to JhonD</span>
                <input type="checkbox" className="todo-checkbox" />
              </div>
              <div className="todo-item">
                <span className="todo-text">Update Notes For Jhon</span>
                <input type="checkbox" className="todo-checkbox" />
              </div>
              <div className="todo-item">
                <span className="todo-text">Update Notes For Jhon</span>
                <input type="checkbox" className="todo-checkbox" />
              </div>
              <div className="todo-item">
                <span className="todo-text">Update Notes For Jhon</span>
                <input type="checkbox" className="todo-checkbox" />
              </div>
              <div className="todo-item">
                <span className="todo-text">Update Notes For Jhon</span>
                <input type="checkbox" className="todo-checkbox" />
              </div>
              <div className="todo-item">
                <span className="todo-text">Update Notes For Jhon</span>
                <input type="checkbox" className="todo-checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions Table */}
      <div className="upcoming-sessions-section">
        <div className="section-header">
          <h2 className="section-title">Upcoming Sessions</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by names"
              className="search-input"
            />
          </div>
        </div>

        <div className="sessions-table">
          <div className="table-header">
            <div className="header-cell client-id-header">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33398 10.739C1.69189 11.2175 2.14852 11.6134 2.67289 11.8999C3.19726 12.1864 3.77712 12.3568 4.37312 12.3995C4.96912 12.4421 5.56734 12.3561 6.12718 12.1473C6.68703 11.9385 7.19542 11.6117 7.61786 11.1891L10.1181 8.68886C10.8771 7.90295 11.2971 6.85035 11.2876 5.75777C11.2782 4.66519 10.8399 3.62005 10.0673 2.84745C9.29471 2.07485 8.24957 1.6366 7.15699 1.62711C6.06441 1.61762 5.01181 2.03763 4.2259 2.79669L2.79244 4.22181"
                  stroke="#DBDBDB"
                  strokeWidth="1.66678"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6677 3.07146C11.3098 2.59298 10.8532 2.19706 10.3288 1.91057C9.80441 1.62409 9.22455 1.45372 8.62855 1.41104C8.03255 1.36835 7.43433 1.45435 6.87449 1.66319C6.31464 1.87202 5.80625 2.19882 5.38381 2.62142L2.8836 5.12163C2.12454 5.90754 1.70453 6.96014 1.71402 8.05272C1.72352 9.1453 2.16176 10.1904 2.93436 10.963C3.70696 11.7356 4.7521 12.1739 5.84468 12.1834C6.93726 12.1929 7.98986 11.7729 8.77577 11.0138L10.2009 9.58868"
                  stroke="#DBDBDB"
                  strokeWidth="1.66678"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Client ID</span>
            </div>
            <div className="header-cell">
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6704 6.40472V4.73792C14.6704 3.85378 14.3192 3.00587 13.694 2.38069C13.0688 1.75552 12.2209 1.4043 11.3368 1.4043H4.66956C3.78543 1.4043 2.93751 1.75552 2.31233 2.38069C1.68716 3.00587 1.33594 3.85378 1.33594 4.73792V6.40472"
                  stroke="#DBDBDB"
                  strokeWidth="1.66678"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00295 8.07231C6.84427 8.07231 8.33695 6.57962 8.33695 4.7383C8.33695 2.89698 6.84427 1.4043 5.00295 1.4043C3.16163 1.4043 1.66895 2.89698 1.66895 4.7383C1.66895 6.57962 3.16163 8.07231 5.00295 8.07231Z"
                  stroke="#DBDBDB"
                  strokeWidth="1.66678"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Name</span>
            </div>
            <div className="header-cell appointment-date-header">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3373 1.23828H2.66972C1.74918 1.23828 1.00293 1.98453 1.00293 2.90507V14.5726C1.00293 15.4932 1.74918 16.2394 2.66972 16.2394H14.3373C15.2578 16.2394 16.0041 15.4932 16.0041 14.5726V2.90507C16.0041 1.98453 15.2578 1.23828 14.3373 1.23828Z"
                  stroke="#DBDBDB"
                  strokeWidth="1.66678"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Appointment Date</span>
            </div>
            <div className="header-cell">
              <span>Time</span>
            </div>
            <div className="header-cell">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99608 1.57031L12.5713 6.78738L18.33 7.62911L14.1631 11.6878L15.1465 17.4215L9.99608 14.713L4.84569 17.4215L5.82909 11.6878L1.66211 7.62911L7.42088 6.78738L9.99608 1.57031Z"
                  stroke="#DBDBDB"
                  strokeWidth="1.66678"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Contact Number</span>
            </div>
            <div className="header-cell">
              <span>Status</span>
            </div>
          </div>

          <div className="table-body">
            <div className="table-row">
              <div className="table-cell">#123</div>
              <div className="table-cell name-cell">
                <img
                  src="https://placehold.co/40x40/9FF2E2/9FF2E2"
                  alt="Lorem Ipsum"
                  className="patient-avatar-small"
                />
                <span>Lorem Ipsum</span>
              </div>
              <div className="table-cell">14/06/2025</div>
              <div className="table-cell">08:00 AM - 08:30AM</div>
              <div className="table-cell">+91 00000 00000</div>
              <div className="table-cell">
                <span className="status-badge status-completed">Completed</span>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell">#123</div>
              <div className="table-cell name-cell">
                <img
                  src="https://placehold.co/40x40/9FF2E2/9FF2E2"
                  alt="Lorem Ipsum"
                  className="patient-avatar-small"
                />
                <span>Lorem Ipsum</span>
              </div>
              <div className="table-cell">14/06/2025</div>
              <div className="table-cell">08:00 AM - 08:30AM</div>
              <div className="table-cell">+91 00000 00000</div>
              <div className="table-cell">
                <span className="status-badge status-pending">Pending</span>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell">#123</div>
              <div className="table-cell name-cell">
                <img
                  src="https://placehold.co/40x40/9FF2E2/9FF2E2"
                  alt="Lorem Ipsum"
                  className="patient-avatar-small"
                />
                <span>Lorem Ipsum</span>
              </div>
              <div className="table-cell">14/06/2025</div>
              <div className="table-cell">08:00 AM - 08:30AM</div>
              <div className="table-cell">+91 00000 00000</div>
              <div className="table-cell">
                <span className="status-badge status-completed">Completed</span>
              </div>
            </div>

            <div className="table-row">
              <div className="table-cell">#123</div>
              <div className="table-cell name-cell">
                <img
                  src="https://placehold.co/40x40/9FF2E2/9FF2E2"
                  alt="Lorem Ipsum"
                  className="patient-avatar-small"
                />
                <span>Lorem Ipsum</span>
              </div>
              <div className="table-cell">14/06/2025</div>
              <div className="table-cell">08:00 AM - 08:30AM</div>
              <div className="table-cell">+91 00000 00000</div>
              <div className="table-cell">
                <span className="status-badge status-pending">Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>

      <style jsx>{`
        .home-dashboard {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 16px;
          padding: 20px;
          background: #f5f5f5;
          min-height: 100vh;
          font-family: "Inter", sans-serif;
        }

        .dashboard-grid {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          width: 658px;
          gap: 16px;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 23px;
          flex: 1;
        }

        .sessions-today-card {
          display: flex;
          padding: 25px 16px;
          flex-direction: column;
          gap: 16px;
          border-radius: 12px;
          background: #fff;
        }

        .sessions-header {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .sessions-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sessions-title {
          color: #000;
          font-family: "Inter", sans-serif;
          font-size: 24px;
          font-weight: 500;
          line-height: normal;
          margin: 0;
        }

        .sessions-number {
          color: #006b5f;
          font-family: "Inter", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: normal;
          margin: 0;
        }

        .progress-section {
          display: flex;
          align-items: center;
          gap: 23px;
        }

        .progress-bar-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }

        .progress-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }

        .progress-bar > div:first-child {
          height: 6px;
          flex: 1;
          position: relative;
          background: #eee;
          border-radius: 3px;
        }

        .progress-fill {
          height: 6px;
          background: #006b5f;
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 0;
        }

        .progress-text {
          color: #959ba3;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.16px;
        }

        .today-dropdown {
          display: flex;
          align-items: center;
          gap: 6px;
          align-self: flex-end;
        }

        .today-text {
          color: #1a1a1a;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }

        .metric-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .metric-card {
          display: flex;
          padding: 17px 21px;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          border-radius: 12px;
        }

        .metric-card-green {
          background: #f6ffde;
        }

        .metric-card-blue {
          background: #defffd;
        }

        .metric-card-purple {
          background: #f2deff;
        }

        .metric-content {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .metric-label {
          color: #3b3b3b;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          margin: 0;
        }

        .metric-value {
          color: #3b3b3b;
          font-family: "Inter", sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: normal;
        }

        .metric-change {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #006b5f;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
        }

        .welcome-clients-section {
          display: flex;
          padding: 20px 30px 1px 30px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 15px;
          border: 1px solid #9d9d9d;
          background: #f5f5f5;
        }

        .welcome-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .welcome-text {
          width: 240px;
          color: #303030;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.225px;
        }

        .welcome-gray {
          color: #8a8a8a;
        }

        .welcome-bold {
          color: #303030;
        }

        .send-message-btn {
          display: flex;
          padding: 10px 18px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          border: 1px solid #616161;
          background: #303030;
          box-shadow:
            0px 1px 2px 0px rgba(255, 255, 255, 0.4) inset,
            0px -1px 2px 0px rgba(0, 0, 0, 0.24);
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: -0.15px;
          cursor: pointer;
        }

        .client-avatars {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 8px;
          width: 100%;
        }

        .client-avatar {
          display: flex;
          padding: 20px 16px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: calc(50% - 4px);
        }

        .avatar-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
        }

        .client-name {
          color: #303030;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: -0.13px;
        }

        .view-all-avatar {
          display: flex;
          padding: 32px 24px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: calc(50% - 4px);
        }

        .view-all-icon {
          display: flex;
          padding: 20px;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: #f1f1f1;
        }

        .view-all-text {
          color: #303030;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: -0.13px;
        }

        .warning-banner {
          display: flex;
          height: 68px;
          min-width: 200px;
          padding: 24px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 8px;
          border-radius: 16px;
          border: 1px solid #e94545;
          background: rgba(255, 105, 97, 0.06);
        }

        .warning-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .warning-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .warning-text {
          color: #003a5d;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 18px;
        }

        .review-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 6px 12px;
          gap: 4px;
          border-radius: 100px;
          background: #006a63;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          border: none;
          cursor: pointer;
        }

        .next-session-card {
          display: flex;
          width: 658px;
          height: 600px;
          border-radius: 16px;
          background: #006b5f;
          padding: 24px;
          color: #fff;
          font-family: "Inter", sans-serif;
          flex-direction: column;
          gap: 20px;
        }

        .next-session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .next-session-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0;
        }

        .session-badges {
          display: flex;
          gap: 12px;
        }

        .starts-in-badge {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          font-size: 14px;
        }

        .join-now-btn {
          padding: 8px 16px;
          background: #fff;
          color: #006b5f;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .patient-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .patient-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }

        .patient-name {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .session-type {
          font-size: 14px;
          opacity: 0.8;
          margin: 0;
        }

        .appointment-details,
        .assessment-details {
          margin-top: 20px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .detail-icon {
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .detail-label {
          font-size: 16px;
          font-weight: 500;
        }

        .appointment-time {
          font-size: 18px;
          font-weight: 600;
          margin-left: 32px;
          margin: 0;
        }

        .symptoms {
          margin-left: 32px;
          margin-top: 12px;
        }

        .symptom-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .symptom-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        .symptom-dot.anxiety {
          background: #ffd700;
        }

        .symptom-dot.sleep {
          background: #87ceeb;
        }

        .symptom-highlight.anxiety {
          color: #ffd700;
        }

        .user-report {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }

        .report-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .report-info {
          display: flex;
          flex-direction: column;
        }

        .report-title {
          font-size: 14px;
          font-weight: 500;
        }

        .report-size {
          font-size: 12px;
          opacity: 0.7;
        }

        .download-icon {
          margin-left: auto;
        }

        .session-actions {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }

        .action-btn {
          flex: 1;
          padding: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        .calendar-section {
          display: flex;
          padding: 28px;
          flex-direction: column;
          gap: 28.7px;
          border-radius: 12px;
          background: #fff;
        }

        .calendar-title {
          color: #1a1a1a;
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 150%;
          margin: 0;
        }

        .calendar-header {
          display: flex;
          width: 343.14px;
          justify-content: space-between;
          align-items: center;
        }

        .nav-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .nav-btn-active {
          background: rgba(0, 107, 95, 0.08);
          border-radius: 50%;
        }

        .current-month {
          color: #1a1a1a;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }

        .calendar-grid {
          display: flex;
          flex-direction: column;
          gap: 15.96px;
        }

        .calendar-days-header {
          display: flex;
          width: 343.14px;
          gap: 5.985px;
        }

        .day-header {
          width: 35px;
          color: #1a1a1a;
          text-align: center;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 11.97px;
          text-transform: uppercase;
        }

        .calendar-dates {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 7.98px;
          width: 343.14px;
        }

        .date-cell {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 7.98px;
          width: 43.89px;
          height: 43.89px;
          border-radius: 50%;
          position: relative;
        }

        .date-cell.selected {
          background: rgba(0, 107, 95, 0.1);
        }

        .date-number {
          color: rgba(26, 26, 26, 0.61);
          text-align: center;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
        }

        .date-number.faded {
          color: rgba(26, 26, 26, 0.61);
        }

        .date-number.next-month {
          color: #737373;
        }

        .date-cell.selected .date-number {
          color: #006b5f;
          font-weight: 600;
        }

        .event-dots {
          display: flex;
          gap: 3px;
          position: absolute;
          bottom: 4px;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }

        .dot-blue {
          background: #3b82f6;
        }

        .dot-purple {
          background: #a855f7;
        }

        .dot-teal {
          background: #2dd4bf;
        }

        .dot-gray {
          background: #b1b1b1;
        }

        .dot-orange {
          background: #ffae00;
        }

        .calendar-legend {
          display: flex;
          width: 393px;
          align-items: center;
          align-content: center;
          gap: 23px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          height: 30px;
          padding: 0px 8px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 4px;
          border: 1px solid #e5e8eb;
          background: #f8f8f9;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-text {
          color: #6c6c6c;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 14px;
        }

        .selected-date-sessions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .selected-date-title {
          width: 365px;
          color: #1a1a1a;
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 150%;
          margin: 0;
        }

        .session-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .session-item {
          display: flex;
          padding: 7px 6px;
          justify-content: space-between;
          align-items: center;
          border-radius: 9px;
          border: 1px solid;
        }

        .session-booked {
          border-color: #2dd4bf;
          background: rgba(45, 212, 191, 0.1);
        }

        .session-available {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .session-name {
          color: #1a1a1a;
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
        }

        .session-time {
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
        }

        .session-booked .session-time {
          color: #2dd4bf;
        }

        .session-available .session-time {
          color: #3b82f6;
        }

        .more-sessions {
          color: #888;
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 150%;
          margin: 0;
        }

        .todo-section {
          display: flex;
          height: 386px;
          flex-direction: column;
          border-radius: 10px;
          background: #e7d9fe;
        }

        .todo-header {
          display: flex;
          height: 50px;
          padding: 0px 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          flex-shrink: 0;
          background: #fff;
          justify-content: center;
        }

        .todo-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          color: #272727;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 19px;
          margin: 0;
        }

        .add-new-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #5856d6;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0.33px;
        }

        .todo-items {
          flex: 1;
          padding: 0 20px;
        }

        .todo-item {
          display: flex;
          height: 60px;
          padding: 0px 20px;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          justify-content: space-between;
        }

        .todo-text {
          color: #0c0c0c;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          flex: 1;
        }

        .todo-checkbox {
          width: 22px;
          height: 22px;
          border-radius: 3px;
          background: #fff;
        }

        .upcoming-sessions-section {
          display: flex;
          flex-direction: column;
          gap: 27px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section-title {
          color: #006b5f;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 19px;
          margin: 0;
        }

        .search-bar {
          display: flex;
          width: 292px;
          justify-content: center;
          align-items: center;
        }

        .search-input {
          display: flex;
          height: 56px;
          align-items: center;
          gap: 4px;
          flex: 1;
          border-radius: 28px;
          background: #dde4e2;
          border: none;
          padding: 0 20px;
          color: #3f4947;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
        }

        .search-input::placeholder {
          color: #3f4947;
        }

        .sessions-table {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
        }

        .table-header {
          display: flex;
          align-items: center;
          background: #006b5f;
        }

        .header-cell {
          display: flex;
          padding: 22px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          color: #fcfcfc;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: normal;
        }

        .client-id-header {
          width: 170px;
        }

        .appointment-date-header {
          width: 240px;
        }

        .table-body {
          background: #fcfcfc;
        }

        .table-row {
          display: flex;
          align-items: flex-start;
          border-bottom: 1px solid #e5e7eb;
          padding: 16px 0;
        }

        .table-cell {
          color: #222;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
          display: flex;
          padding: 22px;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .table-cell:first-child {
          width: 170px;
        }

        .table-cell:nth-child(3) {
          width: 147px;
        }

        .table-cell:nth-child(4) {
          width: 235px;
        }

        .table-cell:nth-child(5) {
          width: 222px;
        }

        .name-cell {
          width: 197px;
          padding: 22px 12px;
          align-items: center;
          gap: 12px;
        }

        .patient-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #9ff2e2;
        }

        .status-badge {
          display: flex;
          width: 101px;
          height: 38px;
          padding: 4px 12px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 6px;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }

        .status-completed {
          color: #222;
          background: #c4feb6;
        }

        .status-pending {
          color: #ba1a1a;
          background: #ffdad6;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }

        .pagination-btn {
          padding: 8px 12px;
          background: #f3f4f6;
          border-radius: 6px;
          color: #6b7280;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          border: none;
          cursor: pointer;
        }

        .pagination-btn.active {
          background: #006b5f;
          color: #fff;
          font-weight: 600;
        }

        .pagination-btn:hover {
          background: #e5e7eb;
        }

        .pagination-btn.active:hover {
          background: #006b5f;
        }

        @media (max-width: 1200px) {
          .dashboard-grid {
            flex-direction: column;
          }

          .left-column {
            width: 100%;
          }

          .next-session-card {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .home-dashboard {
            padding: 16px;
          }

          .metric-cards {
            flex-direction: column;
          }

          .client-avatars {
            flex-direction: column;
            align-items: center;
          }

          .client-avatar {
            min-width: 100%;
          }

          .sessions-table {
            overflow-x: auto;
          }

          .section-header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }

          .search-bar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

import { useState } from "react";
import AssessmentModal from "./AssessmentModal";
import GoalCard from "./GoalCard";

export default function MainContent({ onSectionChange }: { onSectionChange?: (section: string) => void }) {
  const [activeTab, setActiveTab] = useState("recommendation");
  const [modalOpen, setModalOpen] = useState(false);
  const [goalSet, setGoalSet] = useState(false);
  const [showAllGoals, setShowAllGoals] = useState(false);
  const goals = [
    {
      emoji: "😌",
      title: "Manage stress",
      color: "#EDFFEF",
      lockColor: "#006B5F",
      isLocked: true,
    },
    {
      emoji: "💤",
      title: "Sleep better",
      color: "#FFF2EC",
      lockColor: "#FF5100",
      isLocked: true,
    },
    {
      emoji: "🧘",
      title: "Feel calm",
      color: "#F4F2FF",
      lockColor: "#781FD1",
      isLocked: true,
    },
  ];
  const allGoals = [
    { emoji: "😌", title: "Manage stress" },
    { emoji: "😊", title: "Boost mood & feel positive" },
    { emoji: "💤", title: "Sleep better" },
    { emoji: "🔋", title: "Prevent burnout" },
    { emoji: "😟", title: "Manage anxiety" },
    { emoji: "🎯", title: "Improve focus & productivity" },
    { emoji: "🤝", title: "Strengthen personal or work relationships" },
    { emoji: "💪", title: "Build self-confidence" },
    { emoji: "⚖️", title: "Improve work-life balance" },
    { emoji: "🧘", title: "Feel calm" },
    { emoji: "🧘", title: "Reduce unhealthy habits" },
    { emoji: "🧘", title: "Develop healthy routines" },
    { emoji: "🧘", title: "Build resilience" },
    { emoji: "🧘", title: "Navigate life transitions" },
  ];
  const visibleGoals = showAllGoals ? allGoals : allGoals.slice(0, allGoals.length - 4);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="main-content">
      {/* Breadcrumb and Welcome */}
      <div className="welcome-section">
        <div className="breadcrumb">
          <span className="breadcrumb-item">Global Dashboard</span>
          <svg
            className="breadcrumb-arrow"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.04543 9.31171C0.794381 9.06066 0.794381 8.65363 1.04543 8.40257L4.44801 5L1.04543 1.59743C0.794381 1.34638 0.794381 0.939341 1.04543 0.68829C1.29648 0.437238 1.70352 0.437238 1.95457 0.68829L5.81171 4.54543C6.06276 4.79648 6.06276 5.20352 5.81171 5.45457L1.95457 9.31171C1.70352 9.56276 1.29648 9.56276 1.04543 9.31171Z"
              fill="#999999"
            />
          </svg>
          <span className="breadcrumb-item active">Home</span>
        </div>
        <h1 className="welcome-title">
          Good Morning, Shalini
          {/* <span className="name">Shalini</span> */}
        </h1>
      </div>
      {/*  */}
      <h1 className="goal-set-title">
        Start your journey, Set Your Goals.
      </h1>
      {/* Initial My Goals Section */}
      {!goalSet && (
        <div className="goals-section">
          <div className="goals-content">
            <div className="goals-header">
              <h3>Select up to 3 goals</h3>
              <div className="goals-actions">
                <div className="search-box">
                  <svg
                    className="search-icon"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.0998 5.29996C7.62052 5.29996 4.79996 8.12052 4.79996 11.5998C4.79996 15.0792 7.62052 17.8997 11.0998 17.8997C14.5792 17.8997 17.3997 15.0792 17.3997 11.5998C17.3997 8.12052 14.5792 5.29996 11.0998 5.29996ZM3 11.5998C3 7.12642 6.62642 3.5 11.0998 3.5C15.5733 3.5 19.1997 7.12642 19.1997 11.5998C19.1997 16.0733 15.5733 19.6997 11.0998 19.6997C6.62642 19.6997 3 16.0733 3 11.5998Z"
                      fill="#CCCCCC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5488 16.0488C15.9002 15.6973 16.4701 15.6973 16.8215 16.0488L20.7364 19.9637C21.0879 20.3151 21.0879 20.885 20.7364 21.2364C20.385 21.5879 19.8151 21.5879 19.4637 21.2364L15.5488 17.3215C15.1973 16.9701 15.1973 16.4002 15.5488 16.0488Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                  <span>Search</span>
                </div>
                <button className="done-btn" onClick={() => setGoalSet(true)}>Done</button>
              </div>
            </div>
            <div className="goals-grid">
              {visibleGoals.map((goal, idx) => (
                <div className="goal-chip" key={goal.title + idx}>
                  <div className="goal-emoji">{goal.emoji}</div>
                  <span>{goal.title}</span>
                </div>
              ))}
              <div className="goal-chip more" onClick={() => setShowAllGoals((prev) => !prev)} style={{ cursor: 'pointer' }}>
                <svg width="17" height="5" viewBox="0 0 17 5" fill="none">
                  <path
                    d="M2.06641 4.5C1.51641 4.5 1.04557 4.30417 0.653906 3.9125C0.26224 3.52083 0.0664062 3.05 0.0664062 2.5C0.0664062 1.95 0.26224 1.47917 0.653906 1.0875C1.04557 0.695833 1.51641 0.5 2.06641 0.5C2.61641 0.5 3.08724 0.695833 3.47891 1.0875C3.87057 1.47917 4.06641 1.95 4.06641 2.5C4.06641 3.05 3.87057 3.52083 3.47891 3.9125C3.08724 4.30417 2.61641 4.5 2.06641 4.5ZM8.06641 4.5C7.51641 4.5 7.04557 4.30417 6.65391 3.9125C6.26224 3.52083 6.06641 3.05 6.06641 2.5C6.06641 1.95 6.26224 1.47917 6.65391 1.0875C7.04557 0.695833 7.51641 0.5 8.06641 0.5C8.61641 0.5 9.08724 0.695833 9.47891 1.0875C9.87057 1.47917 10.0664 1.95 10.0664 2.5C10.0664 3.05 9.87057 3.52083 9.47891 3.9125C9.08724 4.30417 8.61641 4.5 8.06641 4.5ZM14.0664 4.5C13.5164 4.5 13.0456 4.30417 12.6539 3.9125C12.2622 3.52083 12.0664 3.05 12.0664 2.5C12.0664 1.95 12.2622 1.47917 12.6539 1.0875C13.0456 0.695833 13.5164 0.5 14.0664 0.5C14.6164 0.5 15.0872 0.695833 15.4789 1.0875C15.8706 1.47917 16.0664 1.95 16.0664 2.5C16.0664 3.05 15.8706 3.52083 15.4789 3.9125C15.0872 4.30417 14.6164 4.5 14.0664 4.5Z"
                    fill="#00201C"
                  />
                </svg>
                <span>{showAllGoals ? 'See less' : 'More'}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Initial Your Goal has been Set */}
      {goalSet && (
        <div className="goals-status-container">
          <div className="goals-status-header">
            <div>
              <div className="goals-status-info">
                <h3 className="goals-status-title">
                  Yayyyy,, Your Goal has been Set
                </h3>
              </div>
              <div className="reset-goals-container">
                <button className="reset-goals-btn" onClick={() => setGoalSet(false)}>
                  <div className="btn-content">
                    <span className="btn-text">Reset Goals</span>
                  </div>
                </button>
                <p className="reset-goals-text">
                  You can Reset your Goals after 14 Days
                </p>
              </div>
            </div>
          </div>

          <div className="goals-cards-container">
            {goals.map((goal, index) => (
              <GoalCard
                key={index}
                emoji={goal.emoji}
                title={goal.title}
                color={goal.color}
                lockColor={goal.lockColor}
                isLocked={goal.isLocked}
              />
            ))}
          </div>
        </div>
      )}

      {/* Purple Section - Still Unsure */}
      <div className="purple-section">
        <div className="purple-content">
          <div className="purple-text">
            <h2>Still unsure about what you need?</h2>
            <p>
              Take 3 small steps to help us match you with the right care plan
              and support.
            </p>

            <div className="steps-container">
              <div className="steps-visual">
                <div className="step-indicator active">
                  <div className="step-circle filled"></div>
                </div>
                <div className="step-line"></div>
                <div className="step-indicator">
                  <div className="step-circle"></div>
                </div>
                <div className="step-line"></div>
                <div className="step-indicator">
                  <div className="step-circle"></div>
                </div>
              </div>

              <div className="steps-text">
                <div className="step-item">Set 1–3 wellness goals</div>
                <div className="step-item">Take a short assessment</div>
                <div className="step-item">
                  Tell us your therapist preferences
                </div>
              </div>
            </div>
          </div>

          <button className="discover-btn">
            <span>Discover Yourself</span>
            <div className="arrow-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="white" />
                <path
                  d="M10.6669 10.0001L7.55566 6.8889L8.44457 6L12.4446 10.0001L8.44457 14.0001L7.55566 13.1112L10.6669 10.0001Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="purple-image">
          {/* <div className="illustration-placeholder"> */}
          <img
            src="/assets/images/Positive_thinking-rafiki.png"
            alt="Download on App Store"
            className="positive-img"
          />
          {/* </div> */}
        </div>
      </div>

      {/* Getting Started Card*/}
      {/* Progress Section */}
      <div
        style={{
          display: "flex",
          height: "177px",
          padding: "16px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "21px",
          flexShrink: 0,
          alignSelf: "stretch",
          borderRadius: "8px",
          border: "1px solid #E94545",
          background: "#FFF6F6",
          position: "relative",
        }}
      >
        {/* Icon and Progress Text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            alignSelf: "stretch",
            position: "relative",
          }}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "24px",
              height: "24px",
              fill: "#006B5F",
              position: "relative",
            }}
          >
            <path
              d="M12 0.5C12.4504 0.5 12.8944 0.5244 13.332 0.5732C13.4886 0.590535 13.6403 0.638552 13.7784 0.714511C13.9165 0.790469 14.0383 0.892882 14.1368 1.0159C14.2353 1.13892 14.3086 1.28014 14.3525 1.43149C14.3964 1.58284 14.4101 1.74136 14.3928 1.898C14.3755 2.05464 14.3274 2.20633 14.2515 2.34442C14.1755 2.4825 14.0731 2.60427 13.9501 2.70278C13.8271 2.80128 13.6859 2.87459 13.5345 2.91852C13.3832 2.96245 13.2246 2.97613 13.068 2.9588C11.0905 2.73757 9.09303 3.13633 7.35201 4.09991C5.61099 5.06349 4.21243 6.54427 3.34976 8.33744C2.48709 10.1306 2.20296 12.1475 2.53667 14.1092C2.87038 16.0709 3.80543 17.8805 5.21249 19.2875C6.61955 20.6946 8.42907 21.6296 10.3908 21.9633C12.3525 22.297 14.3694 22.0129 16.1626 21.1502C17.9557 20.2876 19.4365 18.889 20.4001 17.148C21.3637 15.407 21.7624 13.4095 21.5412 11.432C21.5239 11.2754 21.5376 11.1168 21.5815 10.9655C21.6254 10.8141 21.6987 10.6729 21.7972 10.5499C21.9962 10.3015 22.2857 10.1422 22.602 10.1072C22.9184 10.0722 23.2357 10.1643 23.4841 10.3632C23.6071 10.4617 23.7095 10.5835 23.7855 10.7216C23.8615 10.8597 23.9095 11.0114 23.9268 11.168C23.9748 11.6056 23.9992 12.0496 24 12.5C24 19.1276 18.6276 24.5 12 24.5C5.3724 24.5 0 19.1276 0 12.5C0 5.8724 5.3724 0.5 12 0.5ZM11.9616 7.5524C12.0407 7.86047 11.9942 8.18733 11.8325 8.46117C11.6707 8.73501 11.4068 8.93342 11.0988 9.0128C10.2526 9.23445 9.51604 9.7564 9.02645 10.4813C8.53685 11.2061 8.3277 12.0843 8.43804 12.952C8.54838 13.8198 8.97066 14.6177 9.62609 15.1969C10.2815 15.7762 11.1253 16.0972 12 16.1C12.7984 16.1003 13.5742 15.8353 14.2055 15.3465C14.8367 14.8578 15.2876 14.173 15.4872 13.4C15.5723 13.098 15.7722 12.8414 16.0442 12.685C16.3162 12.5287 16.6386 12.485 16.9423 12.5635C17.2461 12.6419 17.507 12.8362 17.6693 13.1047C17.8316 13.3732 17.8822 13.6946 17.8104 14C17.4423 15.4111 16.573 16.6399 15.365 17.4569C14.157 18.2739 12.6928 18.6231 11.2461 18.4394C9.79939 18.2557 8.46904 17.5515 7.50361 16.4585C6.53817 15.3655 6.00368 13.9583 6 12.5C5.99979 11.1697 6.44172 9.87699 7.2563 8.82521C8.07088 7.77342 9.21191 7.02218 10.5 6.6896C10.6526 6.65026 10.8115 6.64138 10.9676 6.66345C11.1236 6.68552 11.2738 6.73812 11.4095 6.81824C11.5452 6.89836 11.6639 7.00444 11.7586 7.1304C11.8533 7.25637 11.9223 7.39977 11.9616 7.5524ZM19.8048 0.6524C20.0238 0.743215 20.2111 0.896884 20.3428 1.09401C20.4746 1.29114 20.545 1.52289 20.5452 1.76C20.5452 2.97216 21.5278 3.956 22.74 3.956C22.9773 3.95605 23.2093 4.02646 23.4066 4.15832C23.6038 4.29018 23.7576 4.47757 23.8484 4.69681C23.9392 4.91605 23.963 5.15729 23.9167 5.39004C23.8704 5.62278 23.7562 5.83658 23.5884 6.0044L19.344 10.244C19.119 10.4691 18.8138 10.5955 18.4956 10.5956C16.6416 10.5956 14.8637 11.3323 13.5531 12.6437L13.4064 12.7904C13.1812 13.0156 12.8758 13.1421 12.5574 13.1421C12.239 13.1421 11.9336 13.0156 11.7084 12.7904C11.4832 12.5652 11.3567 12.2598 11.3567 11.9414C11.3567 11.623 11.4832 11.3176 11.7084 11.0924L11.8537 10.9472C13.1659 9.63649 13.9032 7.85788 13.9032 6.0032C13.9033 5.68497 14.0297 5.37979 14.2548 5.1548L18.4968 0.9116C18.6646 0.743681 18.8785 0.62931 19.1113 0.582958C19.3441 0.536605 19.5855 0.560354 19.8048 0.6512M18.1452 5.1548C18.1452 4.97069 17.9225 4.87855 17.7924 5.00882L16.5725 6.23032C16.4001 6.40301 16.3032 6.63708 16.3032 6.88114V6.99682C16.3032 7.65955 16.8405 8.1968 17.5032 8.1968H17.6187C17.8628 8.1968 18.097 8.09985 18.2697 7.92726L19.4909 6.70682C19.6209 6.57696 19.5289 6.3548 19.3452 6.3548C19.0269 6.3548 18.7217 6.22837 18.4967 6.00333C18.2716 5.77828 18.1452 5.47306 18.1452 5.1548Z"
              fill="#006B5F"
            />
          </svg>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "9px",
              flex: "1 0 0",
              position: "relative",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                color: "#006B5F",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "140%",
                position: "relative",
              }}
            >
              You're just getting started – Let's kick off your Wellness
              Journey!
            </div>

            {/* Progress Indicator */}
            <div
              style={{
                display: "flex",
                height: "16px",
                paddingRight: "252px",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                borderRadius: "64px",
                background: "#E0E0E0",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "16px",
                  borderRadius: "8px",
                  background: "#DA1E28",
                  position: "relative",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "31px",
                  top: "6px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#EDF5FF",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "171px",
                  top: "6px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#A8A8A8",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "337px",
                  top: "6px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#A8A8A8",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: "580px",
                  top: "6px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#A8A8A8",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "287.002px",
            height: "1px",
            background: "rgba(255, 255, 255, 0.24)",
            position: "relative",
          }}
        ></div>

        {/* Bottom Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "1px",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#006B5F",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "140%",
                position: "relative",
              }}
            >
              Take me to FAQ
            </div>
          </div>

          {/* Complete Assessment Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "#EFF5F3",
                boxShadow:
                  "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: "10px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: "#006A63",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    letterSpacing: "0.1px",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  onClick={() => onSectionChange?.("goals-assessment")}
                >
                  Complete your Assessment
                </div>
              </div>
            </div>
            {/* <button
                style={{
                  marginTop: 12,
                  background: '#006B5F',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 22px',
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onClick={() => setModalOpen(true)}
              >
                Complete your Assessment
              </button> */}
          </div>
        </div>
      </div>

      {/* TherapistCoach Section */}
      <div className="main-content-section">
        <SearchAndFilters />
        <TherapistGrid />
      </div>

      {/* My Goals Section */}
      <div className="goals-section">
        <div className="section-header">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "recommendation" ? "active" : ""}`}
              onClick={() => handleTabClick("recommendation")}
            >
              Recommendation
            </div>
            <div className="tab-separator">|</div>
            <div
              className={`tab ${activeTab === "my-progress" ? "active" : ""}`}
              onClick={() => handleTabClick("my-progress")}
            >
              My Progress
            </div>
            <div className="tab-separator">|</div>
            <div
              className={`tab ${activeTab === "my-goals" ? "active" : ""}`}
              onClick={() => handleTabClick("my-goals")}
            >
              My Goals
            </div>
          </div>
        </div>

        {activeTab === "recommendation" && (
          <div className="progress-content">
            <div className="recommendation-tab-header">
            <img
                src="/assets/images/recommendation_gif.gif"
                alt="Recommendation GIF"
                className="recomm-gif"
              />              
              <h3>Kindly Take the Assessment</h3>
              <p>By taking the assessment we can customize and set up things for you</p>
            </div>
            <div className="recommendation-tab-button">
              <button className="figma-button">
                <span className="figma-button-text">Take Assessment</span>
              </button>
            </div>
          </div>

        )}

        {activeTab === "my-progress" && (
          <div className="main-progress-content-tab">
            <ProgressInsightsCard />
            <AssessmentWarning />

          </div>
        )}

        {activeTab === "my-goals" && (
          <div className="goals-content">
            <div className="goals-header">
              <h3>Select up to 3 goals</h3>
              <div className="goals-actions">
                <div className="search-box">
                  <svg
                    className="search-icon"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.0998 5.29996C7.62052 5.29996 4.79996 8.12052 4.79996 11.5998C4.79996 15.0792 7.62052 17.8997 11.0998 17.8997C14.5792 17.8997 17.3997 15.0792 17.3997 11.5998C17.3997 8.12052 14.5792 5.29996 11.0998 5.29996ZM3 11.5998C3 7.12642 6.62642 3.5 11.0998 3.5C15.5733 3.5 19.1997 7.12642 19.1997 11.5998C19.1997 16.0733 15.5733 19.6997 11.0998 19.6997C6.62642 19.6997 3 16.0733 3 11.5998Z"
                      fill="#CCCCCC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5488 16.0488C15.9002 15.6973 16.4701 15.6973 16.8215 16.0488L20.7364 19.9637C21.0879 20.3151 21.0879 20.885 20.7364 21.2364C20.385 21.5879 19.8151 21.5879 19.4637 21.2364L15.5488 17.3215C15.1973 16.9701 15.1973 16.4002 15.5488 16.0488Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                  <span>Search</span>
                </div>
                <button className="done-btn">Done</button>
              </div>
            </div>

            <div className="goals-grid">
              {visibleGoals.map((goal: { emoji: string, title: string }, idx: number) => (
                <div className="goal-chip" key={goal.title + idx}>
                  <div className="goal-emoji">{goal.emoji}</div>
                  <span>{goal.title}</span>
                </div>
              ))}
              <div className="goal-chip more" onClick={() => setShowAllGoals((prev) => !prev)} style={{ cursor: 'pointer' }}>
                <svg width="17" height="5" viewBox="0 0 17 5" fill="none">
                  <path
                    d="M2.06641 4.5C1.51641 4.5 1.04557 4.30417 0.653906 3.9125C0.26224 3.52083 0.0664062 3.05 0.0664062 2.5C0.0664062 1.95 0.26224 1.47917 0.653906 1.0875C1.04557 0.695833 1.51641 0.5 2.06641 0.5C2.61641 0.5 3.08724 0.695833 3.47891 1.0875C3.87057 1.47917 4.06641 1.95 4.06641 2.5C4.06641 3.05 3.87057 3.52083 3.47891 3.9125C3.08724 4.30417 2.61641 4.5 2.06641 4.5ZM8.06641 4.5C7.51641 4.5 7.04557 4.30417 6.65391 3.9125C6.26224 3.52083 6.06641 3.05 6.06641 2.5C6.06641 1.95 6.26224 1.47917 6.65391 1.0875C7.04557 0.695833 7.51641 0.5 8.06641 0.5C8.61641 0.5 9.08724 0.695833 9.47891 1.0875C9.87057 1.47917 10.0664 1.95 10.0664 2.5C10.0664 3.05 9.87057 3.52083 9.47891 3.9125C9.08724 4.30417 8.61641 4.5 8.06641 4.5ZM14.0664 4.5C13.5164 4.5 13.0456 4.30417 12.6539 3.9125C12.2622 3.52083 12.0664 3.05 12.0664 2.5C12.0664 1.95 12.2622 1.47917 12.6539 1.0875C13.0456 0.695833 13.5164 0.5 14.0664 0.5C14.6164 0.5 15.0872 0.695833 15.4789 1.0875C15.8706 1.47917 16.0664 1.95 16.0664 2.5C16.0664 3.05 15.8706 3.52083 15.4789 3.9125C15.0872 4.30417 14.6164 4.5 14.0664 4.5Z"
                    fill="#00201C"
                  />
                </svg>
                <span>{showAllGoals ? 'See less' : 'More'}</span>
              </div>
            </div>

            <div className="assessment-warning">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8429 4.30333C11.1961 4.10447 11.5947 4 12 4C12.4053 4 12.8039 4.10447 13.1571 4.30333C13.5103 4.5022 13.8063 4.78874 14.0165 5.13531L14.0188 5.13904L20.684 16.2662C20.89 16.6228 20.9988 17.0272 21 17.439C21.0011 17.8508 20.8944 18.2558 20.6905 18.6136C20.4866 18.9713 20.1925 19.2695 19.8376 19.4783C19.4827 19.6872 19.0792 19.7994 18.6674 19.804L18.6588 19.8041L5.33257 19.804C4.92077 19.7995 4.51734 19.6872 4.16241 19.4783C3.80748 19.2695 3.51342 18.9713 3.30949 18.6136C3.10555 18.2558 2.99886 17.8508 3.00001 17.439C3.00116 17.0272 3.11013 16.6229 3.31606 16.2662L3.32236 16.2553L9.98348 5.1353C10.1937 4.78873 10.4897 4.5022 10.8429 4.30333Z"
                  fill="#E94545"
                />
              </svg>
              <span>Kindly Take the Assessment to track your process</span>
              <svg
                className="close-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 5L5 15"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5L15 15"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Care Plan Section */}
      {/* <div className="main-content-section">         */}
      <div className="care-plan">
        <CarePlanSection />
      </div>


      {/* Micro Learnings Section */}
      <div className="micro-learnings-main-section">
        <div className="section-header">
          <div className="section-title">Micro Learnings</div>
          <div className="section-description">
            short reads designed to support your well-being. Complete your
            assessment to get personalized suggestions.
          </div>
        </div>

        <div className="learning-cards-container">
          {/* Card 1: What is Microlearning? */}
          <div className="learning-card">
            <div className="card-container">
              <div className="card-sub-container">
                <div className="card-content-wrapper">
                  <div className="card-content-section">
                    <div className="card-title-wrapper">
                      <div className="card-title-row">
                        <div className="card-name">
                          What is Microlearning?
                        </div>
                        <div className="card-button">
                          <svg
                            className="card-arrow-icon"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                              fill="#00C7B2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="card-tags-container">
                        <div className="card-tags-sub-container">
                          <div className="card-tag">Beginner</div>
                          <div className="card-tag-group">
                            <div className="card-tag">Overview</div>
                            <div className="card-tag-read">2-min read</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-name-description">
                      Microlearning offers quick, focused reads to help you
                      manage mental health one step at a time.
                    </div>
                  </div>
                </div>
                <div className="card-actions-section">
                  <div className="card-actions-wrapper">
                    <button className="take-look-button">Take a Look</button>
                    <button className="take-assessment-button">
                      Take assessment to Personalize
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Why Short Reads Help */}
          <div className="learning-card">
            <div className="card-container">
              <div className="card-sub-container">
                <div className="card-content-wrapper">
                  <div className="card-content-section">
                    <div className="card-title-wrapper">
                      <div className="card-title-row">
                        <div className="card-name">Why Short Reads Help</div>
                        <div className="card-button">
                          <svg
                            className="card-arrow-icon"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                              fill="#00C7B2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="card-tags-container">
                        <div className="card-tags-sub-container">
                          <div className="card-tag">Beginner</div>
                          <div className="card-tag-group">
                            <div className="card-tag">Motivation</div>
                            <div className="card-tag-read">2-min read</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-name-description">
                      Learn how bite-sized articles reduce overwhelm and help
                      you make steady progress.
                    </div>
                  </div>
                </div>
                <div className="card-actions-section">
                  <div className="card-actions-wrapper">
                    <button className="take-look-button">Take a Look</button>
                    <button className="take-assessment-button">
                      Take assessment to Personalize
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Personalize Your Learning */}
          <div className="learning-card">
            <div className="card-container">
              <div className="card-sub-container">
                <div className="card-content-wrapper">
                  <div className="card-content-section">
                    <div className="card-title-wrapper">
                      <div className="card-title-row">
                        <div className="card-name">
                          Personalize Your Learning
                        </div>
                        <div className="card-button">
                          <svg
                            className="card-arrow-icon"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                              fill="#00C7B2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="card-tags-container">
                        <div className="card-tags-sub-container">
                          <div className="card-tag">Interactive</div>
                          <div className="card-tag-group">
                            <div className="card-tag">Overview</div>
                            <div className="card-tag-read">2-min read</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-name-description">
                      Get tailored recommendations by taking a short
                      assessment.
                    </div>
                  </div>
                </div>
                <div className="card-actions-section">
                  <div className="card-actions-wrapper">
                    <button className="take-look-button">Take a Look</button>
                    <button className="take-assessment-button">
                      Take assessment to Personalize
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Platform Section */}
      <div className="platform-section">
        <NewPlatformSection />
      </div>


      {/* Care Plan Section */}
      {/* <div className="care-plan">
        <h2>Care Plan</h2>

        <div className="care-plan-grid">
          <div className="care-card card-1">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
          <div className="care-card card-2">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
          <div className="care-card card-3">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations green">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
          <div className="care-card card-4">
            <div className="card-content">
              <h3>Create ambient awareness through different senses</h3>
              <div className="card-decorations blue">
                <div className="decoration-circles"></div>
                <div className="decoration-elements"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="care-plan-tabs">
          <div className="tab-filters">
            <span className="filter">Lorem Ipsum</span>
            <button className="filter active">Set Therapy Session</button>
            <span className="filter">Lorem Ipsum</span>
            <span className="filter">Lorem Ipsum</span>
            <span className="filter">Lorem Ipsum</span>
          </div>

          <div className="filter-scrollable">
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="filter-item">
                  Lorem
                </div>
              ))}
          </div>
        </div>

        <div className="session-results">
          <div className="result-row">
            <div className="result-info">
              <span className="team-name">Lorem</span>
              <div className="score-badge">Lorem</div>
              <span className="team-name">Lorem</span>
            </div>
            <div className="status-badge pending">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8.17105 1V2.71053M8.17105 11.7763V14.5132M3.89474 7.67105H1.5M14.5 7.67105H13.4737M12.5891 12.0891L12.1053 11.6053M12.7308 3.16606L11.7632 4.13368M3.32792 12.5142L5.26316 10.5789M3.46962 3.02436L4.92105 4.47579"
                  stroke="#D6A243"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pending
            </div>
            <div className="result-meta">
              <span className="date">18 December 2022</span>
              <div className="action-icons">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#A4A4A4"
                  />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.03133 3V19H21.2819V21H3V3H5.03133ZM20.5639 6.293L22 7.707L16.2036 13.414L13.1566 10.415L8.79639 14.707L7.36024 13.293L13.1566 7.586L16.2036 10.585L20.5639 6.293Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="result-row">
            <div className="result-info">
              <span className="team-name">Lorem</span>
              <div className="score-badge">Lorem</div>
              <span className="team-name">Lorem</span>
            </div>
            <div className="status-badge success">
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                <path
                  d="M13.5 1L5.25 9L1.5 5.36364"
                  stroke="#91C561"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Success
            </div>
            <div className="result-meta">
              <span className="date">18 December 2022</span>
              <div className="action-icons">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#A4A4A4"
                  />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.03133 3V19H21.2819V21H3V3H5.03133ZM20.5639 6.293L22 7.707L16.2036 13.414L13.1566 10.415L8.79639 14.707L7.36024 13.293L13.1566 7.586L16.2036 10.585L20.5639 6.293Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="result-row">
            <div className="result-info">
              <span className="team-name">Lorem</span>
              <div className="score-badge">Lorem</div>
              <span className="team-name">Lorem</span>
            </div>
            <div className="status-badge canceled">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path
                  d="M16.5 6L8.25 14"
                  stroke="#FA0E0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.375 5.875L16.375 14.125"
                  stroke="#FA0E0E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Canceled
            </div>
            <div className="result-meta">
              <span className="date">17 December 2022</span>
              <div className="action-icons">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
                    fill="#A4A4A4"
                  />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.03133 3V19H21.2819V21H3V3H5.03133ZM20.5639 6.293L22 7.707L16.2036 13.414L13.1566 10.415L8.79639 14.707L7.36024 13.293L13.1566 7.586L16.2036 10.585L20.5639 6.293Z"
                    fill="#A4A4A4"
                  />
                </svg>
              </div>
            </div>
          </div>

          
          <div className="view-all">
            <button className="view-all-btn">
              VIEW ALL
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.08301 5.00033C9.08301 5.28222 8.85449 5.51074 8.57259 5.51074L1.42676 5.51074C1.14486 5.51074 0.916342 5.28222 0.916342 5.00033C0.916342 4.71843 1.14486 4.48991 1.42676 4.48991L8.57259 4.48991C8.85449 4.48991 9.08301 4.71843 9.08301 5.00033Z"
                  fill="#00C7B2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.63876 8.934C4.43943 8.73467 4.43943 8.41149 4.63876 8.21216L7.85075 5.00016L4.63876 1.78817C4.43943 1.58884 4.43943 1.26566 4.63876 1.06633C4.83809 0.866998 5.16126 0.866998 5.36059 1.06633L8.93351 4.63924C9.13284 4.83857 9.13284 5.16175 8.93351 5.36108L5.36059 8.934C5.16126 9.13333 4.83809 9.13333 4.63876 8.934Z"
                  fill="#00C7B2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div> */}

      <AssessmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

function SearchAndFilters() {
  const [activeFilters, setActiveFilters] = useState([
    "Therapist",
    "Price : $200 - $600",
  ]);

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters((prev) =>
      prev.filter((filter) => filter !== filterToRemove),
    );
  };

  return (
    <div className="search-filters-section-therapist">
      <div className="search-container-therapist">
        <div className="search-field-therapist">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0998 4.79801C7.62052 4.79801 4.79996 7.61856 4.79996 11.0979C4.79996 14.5772 7.62052 17.3978 11.0998 17.3978C14.5792 17.3978 17.3997 14.5772 17.3997 11.0979C17.3997 7.61856 14.5792 4.79801 11.0998 4.79801ZM3 11.0979C3 6.62447 6.62642 2.99805 11.0998 2.99805C15.5733 2.99805 19.1997 6.62447 19.1997 11.0979C19.1997 15.5713 15.5733 19.1977 11.0998 19.1977C6.62642 19.1977 3 15.5713 3 11.0979Z"
              fill="#CCCCCC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5488 15.5468C15.9002 15.1953 16.4701 15.1953 16.8215 15.5468L20.7364 19.4617C21.0879 19.8132 21.0879 20.383 20.7364 20.7345C20.385 21.086 19.8151 21.086 19.4637 20.7345L15.5488 16.8196C15.1973 16.4681 15.1973 15.8983 15.5488 15.5468Z"
              fill="#CCCCCC"
            />
          </svg>
          <input
            type="text"
            placeholder="Search By Names, Specialization or Lannguage"
            className="search-input-therapist"
          />
          <button className="filter-button-therapist">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M1.19193 14.6022L0.417969 13.8283L6.58943 7.66471L3.13443 6.82971L6.6888 4.61346L6.37964 0.435547L9.58297 3.12471L13.4388 1.56055L11.8746 5.42909L14.5846 8.61971L10.4067 8.31055L8.19839 11.8858L7.35547 8.43076L1.19193 14.6022ZM1.62151 4.50117L0.417969 3.29763L1.62151 2.0943L2.82505 3.29763L1.62151 4.50117ZM11.7017 14.5814L10.4982 13.3778L11.7017 12.1743L12.9051 13.3778L11.7017 14.5814Z"
                fill="#1C1B1F"
              />
            </svg>
            <span>Filter</span>
          </button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="active-filters">
          {activeFilters.map((filter, index) => (
            <FilterChip
              key={index}
              label={filter}
              onRemove={() => removeFilter(filter)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TherapistGrid() {
  const therapists = [
    {
      name: "Dr. Marci Maiden",
      title: "Counselling Therapist",
      rating: 4.5,
      specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
      sessionTime: "2 : 30 Pm",
      sessionDay: "Today",
      imageUrl: "https://placehold.co/284x167/F2F2F2/F2F2F2",
    },
    {
      name: "Dr. Marci Maiden",
      title: "Counselling Therapist",
      rating: 4.5,
      specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
      sessionTime: "2 : 30 Pm",
      sessionDay: "Today",
      imageUrl: "https://placehold.co/284x167/F2F2F2/F2F2F2",
    },
    {
      name: "Dr. Marci Maiden",
      title: "Counselling Therapist",
      rating: 4.5,
      specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
      sessionTime: "2 : 30 Pm",
      sessionDay: "Today",
      imageUrl: "https://placehold.co/284x167/F2F2F2/F2F2F2",
    },
    {
      name: "Dr. Marci Maiden",
      title: "Counselling Therapist",
      rating: 4.5,
      specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
      sessionTime: "2 : 30 Pm",
      sessionDay: "Today",
      imageUrl: "https://placehold.co/284x167/F2F2F2/F2F2F2",
    },
    {
      name: "Dr. Marci Maiden",
      title: "Counselling Therapist",
      rating: 4.5,
      specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
      sessionTime: "2 : 30 Pm",
      sessionDay: "Today",
      imageUrl: "https://placehold.co/284x167/F2F2F2/F2F2F2",
    },
    {
      name: "Dr. Marci Maiden",
      title: "Counselling Therapist",
      rating: 4.5,
      specializations: ["Stress", "Trauma", "Anxiety", "+2 More"],
      sessionTime: "2 : 30 Pm",
      sessionDay: "Today",
      imageUrl: "https://placehold.co/284x167/F2F2F2/F2F2F2",
    },
  ];

  return (
    <div className="therapist-grid">
      <div className="therapist-row">
        {therapists.slice(0, 3).map((therapist, index) => (
          <TherapistCard key={index} {...therapist} />
        ))}
      </div>
      <div className="therapist-row">
        {therapists.slice(3, 6).map((therapist, index) => (
          <TherapistCard key={index + 3} {...therapist} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <div className="filter-chip">
      <span className="filter-chip-label">{label}</span>
      <button className="filter-chip-remove" onClick={onRemove}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M1.8 11.248L0.75 10.198L4.95 5.99805L0.75 1.79805L1.8 0.748047L6 4.94805L10.2 0.748047L11.25 1.79805L7.05 5.99805L11.25 10.198L10.2 11.248L6 7.04805L1.8 11.248Z"
            fill="#3F4947"
          />
        </svg>
      </button>
    </div>
  );
}

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

function TherapistCard({
  name,
  title,
  rating,
  specializations,
  sessionTime,
  sessionDay,
  imageUrl,
}: TherapistCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const bookingUrl = getBookingUrl(name);
  // const bookingUrl = "https://bookings.refillhealth.com/refilladmin/30min?name=Sudheer+Reddy&email=sudheer%40refillhealth.com";
  return (
    <div className="therapist-card">
      <div className="therapist-card-image">
        {/* <img src={imageUrl} alt={name} /> */}
        <img src="/assets/images/dr-image.png" alt={name} />
        <div className="availability-badge">
          <div className="availability-dot"></div>
          <span>Available Today</span>
        </div>
      </div>
      <div className="therapist-card-content">
        <div className="therapist-profile-section">
          <div className="therapist-info">
            <h3 className="therapist-name">{name}</h3>
            <p className="therapist-title">{title}</p>
          </div>
          <div className="therapist-rating">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
              <path
                d="M9.04894 0.925099C9.3483 0.00378799 10.6517 0.0037868 10.9511 0.925097L12.4697 5.59886C12.6035 6.01088 12.9875 6.28984 13.4207 6.28984H18.335C19.3037 6.28984 19.7065 7.52946 18.9228 8.09886L14.947 10.9874C14.5966 11.242 14.4499 11.6934 14.5838 12.1054L16.1024 16.7792C16.4017 17.7005 15.3472 18.4666 14.5635 17.8972L10.5878 15.0087C10.2373 14.754 9.7627 14.754 9.41221 15.0087L5.43648 17.8972C4.65276 18.4666 3.59828 17.7005 3.89763 16.7792L5.41623 12.1054C5.55011 11.6934 5.40345 11.242 5.05296 10.9874L1.07722 8.09886C0.293507 7.52946 0.696283 6.28984 1.66501 6.28984H6.57929C7.01252 6.28984 7.39647 6.01088 7.53035 5.59886L9.04894 0.925099Z"
                fill="#FFB063"
              />
            </svg>
            <span className="rating-value">{rating}</span>
          </div>
        </div>

        <div className="therapist-details">
          <div className="specializations">
            {specializations.map((spec, index) => (
              <span key={index} className="specialization-tag">
                {spec}
              </span>
            ))}
          </div>

          <div className="session-booking">
            <div className="session-info">
              <div className="session-label">Sessions</div>
              <div className="session-time-info">
                <span className="session-time">{sessionTime}</span>
                <span className="session-day">{sessionDay}</span>
              </div>
            </div>
            {/* Pop up button */}
            <button className="book-now-btn" onClick={() => setModalOpen(true)}>Book Now</button>
            {/* Redirect to new tab button */}
            {/* <button
              className="book-now-btn"
              onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
            >
              Book Now
            </button> */}
          </div>
        </div>
      </div>
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} url={bookingUrl} />
    </div>
  );
}

interface TherapistCardProps {
  name: string;
  title: string;
  rating: number;
  specializations: string[];
  sessionTime: string;
  sessionDay: string;
  imageUrl: string;
}

function BookingModal({ open, onClose, url }: { open: boolean; onClose: () => void; url: string }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        width: '800px',
        height: '80vh',
        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 12,
          right: 16,
          background: 'transparent',
          border: 'none',
          fontSize: 24,
          cursor: 'pointer',
          zIndex: 2,
        }}>&times;</button>
        <iframe
          src={url}
          title="Book Now"
          style={{ flex: 1, width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
        />
      </div>
    </div>
  );
}

function getBookingUrl(name: string) {
  // Remove common titles
  const cleanName = name.replace(/^(Dr\\.|Mr\\.|Ms\\.|Mrs\\.)\\s+/i, "");
  // Split into parts
  const parts = cleanName.trim().split(" ");
  // Use first and last name (if more than 2 parts, use first and last)
  const firstName = parts[1];
  const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
  // Format for URL
  const urlName = [firstName, lastName].filter(Boolean).join("+");
  // Generate email (using last name, lowercased)
  const email = firstName ? `${firstName.toLowerCase()}@refillhealth.com` : "";
  // Construct URL
  // https://bookings.refillhealth.com/priya.sharmatherapist/the-clarity-hour
  // https://bookings.refillhealth.com/sreeja/therapy-session
  return `https://bookings.refillhealth.com/sreeja/therapy-session?name=${urlName}&email=${encodeURIComponent(email)}`;
  // return `https://bookings.refillhealth.com/refilladmin/30min?name=${urlName}&email=${encodeURIComponent(email)}`;
}

interface CarePlanSectionProps { }

const CarePlanSection: React.FC<CarePlanSectionProps> = () => {
  return (
    <div className="care-plan-section">
      <div className="care-plan-header">
        <h2 className="care-plan-title">Your Care Plan is Almost Ready</h2>
        <p className="care-plan-description">
          To get personalized self-care actions, complete your first assessment.
          <br />
          Your plan will be generated based on your mental health goals and responses.
        </p>
      </div>

      <div className="care-plan-cards">
        <div className="unlock-plan-card">
          <div className="card-overlay">
            <svg
              className="lock-icon"
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
            >
              <path
                d="M3.4974 30.416C2.71823 30.416 2.05122 30.1386 1.49635 29.5837C0.941493 29.0289 0.664062 28.3618 0.664062 27.5827V13.416C0.664062 12.6368 0.941493 11.9698 1.49635 11.415C2.05122 10.8601 2.71823 10.5827 3.4974 10.5827H4.91406V7.74935C4.91406 5.78963 5.60469 4.11914 6.98594 2.73789C8.36719 1.35664 10.0377 0.666016 11.9974 0.666016C13.9571 0.666016 15.6276 1.35664 17.0089 2.73789C18.3901 4.11914 19.0807 5.78963 19.0807 7.74935V10.5827H20.4974C21.2766 10.5827 21.9436 10.8601 22.4984 11.415C23.0533 11.9698 23.3307 12.6368 23.3307 13.416V27.5827C23.3307 28.3618 23.0533 29.0289 22.4984 29.5837C21.9436 30.1386 21.2766 30.416 20.4974 30.416H3.4974ZM11.9974 23.3327C12.7766 23.3327 13.4436 23.0553 13.9984 22.5004C14.5533 21.9455 14.8307 21.2785 14.8307 20.4993C14.8307 19.7202 14.5533 19.0532 13.9984 18.4983C13.4436 17.9434 12.7766 17.666 11.9974 17.666C11.2182 17.666 10.5512 17.9434 9.99636 18.4983C9.44149 19.0532 9.16406 19.7202 9.16406 20.4993C9.16406 21.2785 9.44149 21.9455 9.99636 22.5004C10.5512 23.0553 11.2182 23.3327 11.9974 23.3327ZM7.7474 10.5827H16.2474V7.74935C16.2474 6.56879 15.8342 5.56532 15.0078 4.73893C14.1814 3.91254 13.178 3.49935 11.9974 3.49935C10.8168 3.49935 9.81337 3.91254 8.98698 4.73893C8.16059 5.56532 7.7474 6.56879 7.7474 7.74935V10.5827Z"
                fill="white"
              />
            </svg>
            <div className="unlock-content">
              <h3 className="unlock-title">
                Unlock your Personalized care plan
              </h3>
              <p className="unlock-subtitle">
                Take a quick assessment to unlock your Care Plan
              </p>
              <button className="complete-assessment-btn">
                Complete Assessment
              </button>
            </div>
          </div>
        </div>

        <div className="referral-card">
          <div className="referral-overlay">
            <div className="referral-header">
              <div className="referral-content">
                <span className="referral-label">Referral</span>
                <h3 className="referral-title">
                  Help a friend, We'll help take care of them!
                </h3>
              </div>
              <div className="referral-icon">
                <img
                  src="/assets/images/hand_shake_image.png"
                  alt="Handshake"
                // className="positive-img"
                />

                {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="12" fill="#FFD700" />
                </svg> */}
              </div>
            </div>
            <div className="referral-code-section">
              <div className="code-info">
                <span className="code-label">Copy code</span>
                <div className="code-display">
                  <svg
                    className="copy-icon"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
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
          </div>
        </div>
      </div>
    </div>
  );
};

function ProgressInsightsCard() {
  const [activeTab, setActiveTab] = useState("this-month");
  const [chartType, setChartType] = useState("bar");

  const tabs = [
    { id: "this-month", label: "This Month" },
    { id: "april", label: "April" },
    { id: "march", label: "March" },
    { id: "feb", label: "Feb" },
    { id: "jan", label: "Jan" },
    { id: "view-all", label: "View all" },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="progress-insights-card">
      <div className="insights-header">
        <div className="insights-title-section">
          <h2 className="insights-title">My Progress & Insights</h2>
          <button className="insights-menu-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 4.5C9.82843 4.5 10.5 3.82843 10.5 3C10.5 2.17157 9.82843 1.5 9 1.5C8.17157 1.5 7.5 2.17157 7.5 3C7.5 3.82843 8.17157 4.5 9 4.5Z"
                fill="#999999"
              />
              <path
                d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
                fill="#999999"
              />
              <path
                d="M9 16.5C9.82843 16.5 10.5 15.8284 10.5 15C10.5 14.1716 9.82843 13.5 9 13.5C8.17157 13.5 7.5 14.1716 7.5 15C7.5 15.8284 8.17157 16.5 9 16.5Z"
                fill="#999999"
              />
            </svg>
          </button>
        </div>

        <div className="insights-controls">
          <div className="tabs-section">
            <div className="insights-tabs">
              {tabs.map((tab) => (
                <ProgressTab
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>

          <div className="chart-controls">
            <div className="chart-type-toggles">
              <button
                className={`chart-toggle ${chartType === "bar" ? "active" : ""}`}
                onClick={() => setChartType("bar")}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 15.625H16.875V3.125C16.875 2.95924 16.8092 2.80027 16.6919 2.68306C16.5747 2.56585 16.4158 2.5 16.25 2.5H11.875C11.7092 2.5 11.5503 2.56585 11.4331 2.68306C11.3158 2.80027 11.25 2.95924 11.25 3.125V6.25H7.5C7.33424 6.25 7.17527 6.31585 7.05806 6.43306C6.94085 6.55027 6.875 6.70924 6.875 6.875V10H3.75C3.58424 10 3.42527 10.0658 3.30806 10.1831C3.19085 10.3003 3.125 10.4592 3.125 10.625V15.625H2.5C2.33424 15.625 2.17527 15.6908 2.05806 15.8081C1.94085 15.9253 1.875 16.0842 1.875 16.25C1.875 16.4158 1.94085 16.5747 2.05806 16.6919C2.17527 16.8092 2.33424 16.875 2.5 16.875H17.5C17.6658 16.875 17.8247 16.8092 17.9419 16.6919C18.0592 16.5747 18.125 16.4158 18.125 16.25C18.125 16.0842 18.0592 15.9253 17.9419 15.8081C17.8247 15.6908 17.6658 15.625 17.5 15.625ZM12.5 3.75H15.625V15.625H12.5V3.75ZM8.125 7.5H11.25V15.625H8.125V7.5ZM4.375 11.25H6.875V15.625H4.375V11.25Z"
                    fill={chartType === "bar" ? "#003A5D" : "#999999"}
                  />
                </svg>
              </button>
              <div className="toggle-divider"></div>
              <button
                className={`chart-toggle ${chartType === "line" ? "active" : ""}`}
                onClick={() => setChartType("line")}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.125 16.25C18.125 16.4158 18.0592 16.5747 17.9419 16.6919C17.8247 16.8092 17.6658 16.875 17.5 16.875H2.5C2.33424 16.875 2.17527 16.8092 2.05806 16.6919C1.94085 16.5747 1.875 16.4158 1.875 16.25V3.75C1.875 3.58424 1.94085 3.42527 2.05806 3.30806C2.17527 3.19085 2.33424 3.125 2.5 3.125C2.66576 3.125 2.82473 3.19085 2.94194 3.30806C3.05915 3.42527 3.125 3.58424 3.125 3.75V12.2414L7.05781 8.30781C7.11586 8.2497 7.18479 8.2036 7.26066 8.17215C7.33654 8.1407 7.41787 8.12451 7.5 8.12451C7.58213 8.12451 7.66346 8.1407 7.73934 8.17215C7.81521 8.2036 7.88414 8.2497 7.94219 8.30781L10 10.3664L14.1164 6.25H12.5C12.3342 6.25 12.1753 6.18415 12.0581 6.06694C11.9408 5.94973 11.875 5.79076 11.875 5.625C11.875 5.45924 11.9408 5.30027 12.0581 5.18306C12.1753 5.06585 12.3342 5 12.5 5H15.625C15.7908 5 15.9497 5.06585 16.0669 5.18306C16.1842 5.30027 16.25 5.45924 16.25 5.625V8.75C16.25 8.91576 16.1842 9.07473 16.0669 9.19194C15.9497 9.30915 15.7908 9.375 15.625 9.375C15.4592 9.375 15.3003 9.30915 15.1831 9.19194C15.0658 9.07473 15 8.91576 15 8.75V7.13359L10.4422 11.6922C10.3841 11.7503 10.3152 11.7964 10.2393 11.8279C10.1635 11.8593 10.0821 11.8755 10 11.8755C9.91786 11.8755 9.83654 11.8593 9.76066 11.8279C9.68479 11.7964 9.61586 11.7503 9.55781 11.6922L7.5 9.63359L3.125 14.0086V15.625H17.5C17.6658 15.625 17.8247 15.6908 17.9419 15.8081C18.0592 15.9253 18.125 16.0842 18.125 16.25Z"
                    fill={chartType === "line" ? "#003A5D" : "#999999"}
                  />
                </svg>
              </button>
            </div>

            <div className="plan-filter">
              <span>No plan</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.16737 6.16737C4.39052 5.94421 4.75233 5.94421 4.97549 6.16737L8 9.19188L11.0245 6.16737C11.2477 5.94421 11.6095 5.94421 11.8326 6.16737C12.0558 6.39052 12.0558 6.75233 11.8326 6.97549L8.40406 10.4041C8.1809 10.6272 7.8191 10.6272 7.59594 10.4041L4.16737 6.97549C3.94421 6.75233 3.94421 6.39052 4.16737 6.16737Z"
                  fill="#999999"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-area">
        <div className="chart-y-axis">
          <span className="y-label">25hr</span>
          <span className="y-label">20hr</span>
          <span className="y-label">15hr</span>
          <span className="y-label">10hr</span>
          <span className="y-label">5hr</span>
          <span className="y-label">0</span>
        </div>

        <div className="chart-content">
          <div className="chart-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="grid-line"></div>
            ))}
          </div>

          <div className="chart-bars-container">
            {months.map((month, index) => (
              <div key={month} className="month-bar-group">
                <div className="bars-wrapper">
                  <div
                    className="bar expected-bar"
                    style={{ height: "2px" }}
                  ></div>
                  <div
                    className="bar reality-bar"
                    style={{ height: "2px" }}
                  ></div>
                </div>
                <span className="month-label">{month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color expected-color"></div>
          <span>Expected</span>
        </div>
        <div className="legend-item">
          <div className="legend-color reality-color"></div>
          <span>Reality</span>
        </div>
      </div>
    </div>
  );
}

interface ProgressTabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ProgressTab({ id, label, isActive, onClick }: ProgressTabProps) {
  return (
    <div
      className={`progress-tab ${isActive ? "progress-tab-active" : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  );
}

function AssessmentWarning() {
  return (
    <div className="assessment-warning-banner">
      <div className="warning-content">
        <div className="warning-icon-text">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="warning-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3429 4.80333C11.6961 4.60447 12.0947 4.5 12.5 4.5C12.9053 4.5 13.3039 4.60447 13.6571 4.80333C14.0103 5.0022 14.3063 5.28874 14.5165 5.63531L14.5188 5.63904L21.184 16.7662C21.39 17.1228 21.4988 17.5272 21.5 17.939C21.5011 18.3508 21.3944 18.7558 21.1905 19.1136C20.9866 19.4713 20.6925 19.7695 20.3376 19.9783C19.9827 20.1872 19.5792 20.2994 19.1674 20.304L19.1588 20.3041L5.83257 20.304C5.42077 20.2995 5.01734 20.1872 4.66241 19.9783C4.30748 19.7695 4.01342 19.4713 3.80949 19.1136C3.60555 18.7558 3.49886 18.3508 3.50001 17.939C3.50116 17.5272 3.61013 17.1229 3.81606 16.7662L3.82236 16.7553L10.4835 5.6353C10.6937 5.28873 10.9897 5.0022 11.3429 4.80333ZM12.5 6.07232C12.3649 6.07232 12.232 6.10715 12.1143 6.17344C11.9971 6.23942 11.8988 6.33437 11.8288 6.4492L5.17508 17.557C5.10812 17.6748 5.07271 17.8079 5.07233 17.9434C5.07194 18.0807 5.10751 18.2157 5.17549 18.3349C5.24346 18.4542 5.34149 18.5536 5.45979 18.6232C5.57707 18.6922 5.71023 18.7296 5.84623 18.7317H19.1538C19.2898 18.7296 19.4229 18.6922 19.5402 18.6232C19.6585 18.5536 19.7565 18.4542 19.8245 18.3349C19.8925 18.2157 19.9281 18.0807 19.9277 17.9434C19.9273 17.8079 19.8919 17.6748 19.8249 17.5571L13.1722 6.45076C13.1719 6.45024 13.1715 6.44972 13.1712 6.4492C13.1012 6.33437 13.0029 6.23942 12.8857 6.17344C12.768 6.10715 12.6351 6.07232 12.5 6.07232Z"
              fill="#FFBF00"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4971 9.29883C12.9313 9.29883 13.2833 9.6508 13.2833 10.085V13.2296C13.2833 13.6638 12.9313 14.0158 12.4971 14.0158C12.0629 14.0158 11.7109 13.6638 11.7109 13.2296V10.085C11.7109 9.6508 12.0629 9.29883 12.4971 9.29883Z"
              fill="#FFBF00"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7109 16.3741C11.7109 15.9399 12.0629 15.5879 12.4971 15.5879H12.505C12.9391 15.5879 13.2911 15.9399 13.2911 16.3741C13.2911 16.8082 12.9391 17.1602 12.505 17.1602H12.4971C12.0629 17.1602 11.7109 16.8082 11.7109 16.3741Z"
              fill="#FFBF00"
            />
          </svg>
          <p className="warning-text">
            You haven't taken the assessment yet – take it to set your goal and
            begin your journey.
          </p>
        </div>
        <button className="take-assessment-btn">Take Assessment</button>
      </div>
    </div>
  );
}


function NewPlatformSection() {
  return (
    <div className="main-new-platform-section">
      <div className="platform-content">
        <div className="platform-info">
          <div className="platform-header">
            <span className="platform-label">New Platform</span>
            <h2 className="platform-title">
              Get one of our Refill Health apps, which is only available on
            </h2>
          </div>

          <div className="download-section">
            <h3 className="download-title">Download Apps:</h3>
            <div className="download-buttons">
              <img src="/assets/images/ios_image.png" alt="phone-1" />
              <img src="/assets/images/android_image.png" alt="phone-1" />
            </div>
          </div>
        </div>

        <div className="phone-1-phone-2">
          <img src="/assets/images/mobile-img-first.png" alt="phone-1" />
          <img src="/assets/images/mobile-img-second.png" alt="phone-1" />
        </div>
      </div>
    </div>
  );
}

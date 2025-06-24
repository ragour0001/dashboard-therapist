"use client";

import { useState } from "react";
import Profile from "./Profile";
import Password from "./Password";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("My Details");
  const [notificationSummary, setNotificationSummary] = useState("on");
  const [actionableNotifications, setActionableNotifications] = useState({
    reminders1: true,
    reminders2: true,
    reminders3: true,
    reminders4: true,
  });
  const [newsletters, setNewsletters] = useState({
    announcements: true,
  });

  // Form state for My Details
  const [firstName, setFirstName] = useState("Olivia");
  const [lastName, setLastName] = useState("Rhye");
  const [email, setEmail] = useState("olivia.rhye@example.com");

  const handleActionableToggle = (key: string) => {
    setActionableNotifications((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleNewsletterToggle = (key: string) => {
    setNewsletters((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderMyDetailsTab = () => (
    <div className="settings-my-details">
      {/* Profile Header Section */}
      <div className="settings-profile-header">
        <div className="settings-profile-background">
          <div className="settings-profile-gradient"></div>
        </div>
        <div className="settings-profile-content">
          <div className="settings-profile-avatar-large">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.6654 70V63.3333C66.6654 59.7971 65.2606 56.4057 62.7601 53.9052C60.2596 51.4048 56.8682 50 53.332 50H26.6654C23.1291 50 19.7378 51.4048 17.2373 53.9052C14.7368 56.4057 13.332 59.7971 13.332 63.3333V70M53.332 23.3333C53.332 30.6971 47.3625 36.6667 39.9987 36.6667C32.6349 36.6667 26.6654 30.6971 26.6654 23.3333C26.6654 15.9695 32.6349 10 39.9987 10C47.3625 10 53.332 15.9695 53.332 23.3333Z"
                stroke="#7F56D9"
                strokeWidth="6.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="settings-profile-info">
            <div className="settings-profile-details">
              <h1 className="settings-profile-name">Olivia Rhye</h1>
              <p className="settings-profile-email">olivia@untitledui.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="settings-form-section">
        <div className="settings-form-header">
          <div className="settings-form-title-section">
            <h3 className="settings-form-title">Personal info</h3>
            <p className="settings-form-subtitle">
              Update your photo and personal details.
            </p>
          </div>
        </div>

        <div className="settings-form-container">
          <div className="settings-form-content">
            {/* Name Fields */}
            <div className="settings-form-row">
              <div className="settings-input-field">
                <label className="settings-input-label">First name</label>
                <div className="settings-input-wrapper">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="settings-input"
                  />
                </div>
              </div>
              <div className="settings-input-field">
                <label className="settings-input-label">Last name</label>
                <div className="settings-input-wrapper">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="settings-input"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="settings-input-field">
              <label className="settings-input-label">Email</label>
              <div className="settings-input-wrapper settings-input-with-icon">
                <div className="settings-input-icon">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z"
                      fill="#3F4946"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="settings-input settings-input-padded"
                />
              </div>
            </div>

            {/* Avatar Upload Section */}
            <div className="settings-upload-section">
              <div className="settings-upload-avatar">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6654 26V23.3333C22.6654 21.9188 22.1035 20.5623 21.1033 19.5621C20.1031 18.5619 18.7465 18 17.332 18H6.66537C5.25088 18 3.89432 18.5619 2.89413 19.5621C1.89393 20.5623 1.33203 21.9188 1.33203 23.3333V26M17.332 7.33333C17.332 10.2789 14.9442 12.6667 11.9987 12.6667C9.05318 12.6667 6.66537 10.2789 6.66537 7.33333C6.66537 4.38781 9.05318 2 11.9987 2C14.9442 2 17.332 4.38781 17.332 7.33333Z"
                    stroke="#7F56D9"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="settings-upload-area">
                <div className="settings-upload-content">
                  <div className="settings-upload-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3326 13.3332L9.99923 9.9999M9.99923 9.9999L6.6659 13.3332M9.99923 9.9999V17.4999M16.9909 15.3249C17.8037 14.8818 18.4458 14.1806 18.8158 13.3321C19.1858 12.4835 19.2627 11.5359 19.0344 10.6388C18.8061 9.7417 18.2855 8.94616 17.5548 8.37778C16.8241 7.80939 15.925 7.50052 14.9992 7.4999H13.9492C13.697 6.52427 13.2269 5.61852 12.5742 4.85073C11.9215 4.08295 11.1033 3.47311 10.181 3.06708C9.2587 2.66104 8.25636 2.46937 7.24933 2.50647C6.2423 2.54358 5.25679 2.80849 4.36688 3.28129C3.47697 3.7541 2.70583 4.42249 2.11142 5.23622C1.51701 6.04996 1.11481 6.98785 0.935051 7.9794C0.755293 8.97095 0.802655 9.99035 1.07358 10.961C1.3445 11.9316 1.83194 12.8281 2.49923 13.5832"
                        stroke="#535862"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="settings-upload-text">
                    <div className="settings-upload-action">
                      <span className="settings-upload-link">
                        Click to upload
                      </span>
                      <span className="settings-upload-or">
                        or drag and drop
                      </span>
                    </div>
                    <p className="settings-upload-info">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Footer */}
          <div className="settings-form-footer">
            <div className="settings-form-divider"></div>
            <div className="settings-form-actions">
              <button className="settings-btn-secondary">Cancel</button>
              <button className="settings-btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmailNotificationsTab = () => (
    <div className="settings-sections">
      {/* Notification Summary */}
      <div className="settings-section">
        <div className="section-header">
          <h3 className="section-title">Notification Summary</h3>
          <p className="section-description">
            Receive an email summary of notifications instead of individual
            emails
          </p>
        </div>
        <div className="radio-group">
          <div className="radio-option">
            <div className="radio-button-wrapper">
              <div
                className={`radio-button ${notificationSummary === "on" ? "selected" : ""}`}
                onClick={() => setNotificationSummary("on")}
              >
                <div className="radio-container">
                  <div className="radio-state-layer">
                    <div className="radio-icon">
                      {notificationSummary === "on" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                            fill="#006A63"
                          />
                        </svg>
                      )}
                      {notificationSummary !== "on" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                            fill="#3F4947"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="radio-label">On</span>
          </div>
          <div className="radio-option">
            <div className="radio-button-wrapper">
              <div
                className={`radio-button ${notificationSummary === "off" ? "selected" : ""}`}
                onClick={() => setNotificationSummary("off")}
              >
                <div className="radio-container">
                  <div className="radio-state-layer">
                    <div className="radio-icon">
                      {notificationSummary === "off" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                            fill="#006A63"
                          />
                        </svg>
                      )}
                      {notificationSummary !== "off" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                            fill="#3F4947"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="radio-label">Off</span>
          </div>
        </div>
      </div>

      {/* Actionable Email Notifications */}
      <div className="settings-section">
        <div className="section-header">
          <h3 className="section-title">Actionable Email Notifications</h3>
        </div>
        <div className="toggle-list">
          <div className="toggle-item">
            <span className="toggle-label">Reminders for Sessions</span>
            <div
              className={`toggle-switch ${actionableNotifications.reminders1 ? "active" : ""}`}
              onClick={() => handleActionableToggle("reminders1")}
            >
              <div className="toggle-track">
                <div className="toggle-handle">
                  <div className="toggle-target">
                    <div className="toggle-state-layer">
                      <div className="toggle-handle-shape">
                        <div className="toggle-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-item">
            <span className="toggle-label">Reminders for Sessions</span>
            <div
              className={`toggle-switch ${actionableNotifications.reminders2 ? "active" : ""}`}
              onClick={() => handleActionableToggle("reminders2")}
            >
              <div className="toggle-track">
                <div className="toggle-handle">
                  <div className="toggle-target">
                    <div className="toggle-state-layer">
                      <div className="toggle-handle-shape">
                        <div className="toggle-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-item">
            <span className="toggle-label">Reminders for Sessions</span>
            <div
              className={`toggle-switch ${actionableNotifications.reminders3 ? "active" : ""}`}
              onClick={() => handleActionableToggle("reminders3")}
            >
              <div className="toggle-track">
                <div className="toggle-handle">
                  <div className="toggle-target">
                    <div className="toggle-state-layer">
                      <div className="toggle-handle-shape">
                        <div className="toggle-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-item">
            <span className="toggle-label">Reminders for Sessions</span>
            <div
              className={`toggle-switch ${actionableNotifications.reminders4 ? "active" : ""}`}
              onClick={() => handleActionableToggle("reminders4")}
            >
              <div className="toggle-track">
                <div className="toggle-handle">
                  <div className="toggle-target">
                    <div className="toggle-state-layer">
                      <div className="toggle-handle-shape">
                        <div className="toggle-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletters */}
      <div className="settings-section">
        <div className="section-header">
          <h3 className="section-title">
            Newsletters I would like to receive:
          </h3>
        </div>
        <div className="toggle-list">
          <div className="toggle-item">
            <span className="toggle-label">
              Announcements and special offers (Rarely)
            </span>
            <div
              className={`toggle-switch ${newsletters.announcements ? "active" : ""}`}
              onClick={() => handleNewsletterToggle("announcements")}
            >
              <div className="toggle-track">
                <div className="toggle-handle">
                  <div className="toggle-target">
                    <div className="toggle-state-layer">
                      <div className="toggle-handle-shape">
                        <div className="toggle-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="settings-page">
      <div className="settings-content">
        {/* Header Section */}
        <div className="settings-header">
          <div className="page-container">
            <h1 className="settings-title">Settings</h1>
          </div>
        </div>

        {/* Settings Content */}
        <div className="settings-main">
          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-nav">
            <div className="breadcrumb-item">
              <button
                className={`breadcrumb-button ${activeTab === "My Details" ? "active" : ""}`}
                onClick={() => handleTabClick("My Details")}
              >
                <span className="breadcrumb-text">My Details</span>
              </button>
            </div>
            <div className="breadcrumb-separator">|</div>
            <div className="breadcrumb-item">
              <button
                className={`breadcrumb-button ${activeTab === "Profile" ? "active" : ""}`}
                onClick={() => handleTabClick("Profile")}
              >
                <span className="breadcrumb-text">Profile</span>
              </button>
            </div>
            <div className="breadcrumb-separator">|</div>
            <div className="breadcrumb-item">
              <button
                className={`breadcrumb-button ${activeTab === "Password" ? "active" : ""}`}
                onClick={() => handleTabClick("Password")}
              >
                <span className="breadcrumb-text">Password</span>
              </button>
            </div>
            <div className="breadcrumb-separator">|</div>
            <div className="breadcrumb-item">
              <button
                className={`breadcrumb-button ${activeTab === "Email Notifications" ? "active" : ""}`}
                onClick={() => handleTabClick("Email Notifications")}
              >
                <span className="breadcrumb-text">Email Notifications</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="settings-tab-content">
            {activeTab === "My Details" && renderMyDetailsTab()}
            {activeTab === "Email Notifications" &&
              renderEmailNotificationsTab()}
            {activeTab === "Profile" && <Profile />}
            {activeTab === "Password" && <Password />}
          </div>
        </div>
      </div>
    </div>
  );
}

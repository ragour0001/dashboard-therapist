"use client";

import { useState } from "react";

export default function Profile() {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [nickName, setNickName] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("United States");
  const [timezone, setTimezone] = useState("Pacific Standard Time (PST)");
  const [bioCharacterCount, setBioCharacterCount] = useState(275);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const maxLength = 275;
    if (value.length <= maxLength) {
      setBio(value);
      setBioCharacterCount(maxLength - value.length);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-title-section">
            <h3 className="profile-title">Profile</h3>
            <p className="profile-subtitle">Update your portfolio and bio.</p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="profile-form-container">
          <div className="profile-form-content">
            {/* Anonymous Toggle */}
            <div className="profile-toggle-section">
              <div
                className={`profile-toggle-switch ${isAnonymous ? "active" : ""}`}
                onClick={() => setIsAnonymous(!isAnonymous)}
              >
                <div className="profile-toggle-track">
                  <div className="profile-toggle-handle">
                    <div className="profile-toggle-target">
                      <div className="profile-toggle-state-layer">
                        <div className="profile-toggle-handle-shape">
                          <div className="profile-toggle-container"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-toggle-text">
                <div className="profile-toggle-label">Keep Me Anonymous</div>
                <div className="profile-toggle-description">
                  When enabled, your real name will be hidden across the
                  platform. You'll appear with a chosen Nick Name when
                  interacting with therapists, coaches, and support staff.
                </div>
              </div>
            </div>

            {/* Nick Name Field */}
            <div className="profile-input-field">
              <label className="profile-input-label">Nick Name</label>
              <div className="profile-input-wrapper">
                <input
                  type="text"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                  placeholder="e.g. MindfulExplorer, CalmSoul123"
                  className="profile-input"
                />
              </div>
            </div>

            {/* Bio Field */}
            <div className="profile-textarea-section">
              <div className="profile-textarea-field">
                <label className="profile-input-label">Bio</label>
                <div className="profile-textarea-wrapper">
                  <textarea
                    value={bio}
                    onChange={handleBioChange}
                    placeholder="I am a in..."
                    className="profile-textarea"
                  />
                </div>
              </div>
              <div className="profile-character-count">
                {bioCharacterCount} characters left
              </div>
            </div>

            {/* Country Field */}
            <div className="profile-select-field">
              <label className="profile-input-label">Country</label>
              <div className="profile-select-wrapper">
                <div className="profile-select-content">
                  <div className="profile-flag-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M9.5625 8.00129H19.9973C19.9973 7.09871 19.8769 6.22433 19.6528 5.39258H9.5625V8.00129Z"
                        fill="#D80027"
                      />
                      <path
                        d="M9.5625 2.78254H18.5295C17.9174 1.78363 17.1347 0.900703 16.2221 0.173828H9.5625V2.78254Z"
                        fill="#D80027"
                      />
                      <path
                        d="M9.99828 18.0001C12.3518 18.0001 14.5149 17.1866 16.2231 15.8262H3.77344C5.48164 17.1866 7.6448 18.0001 9.99828 18.0001Z"
                        fill="#D80027"
                      />
                      <path
                        d="M1.46699 13.2161H18.5315C19.023 12.4142 19.4041 11.5377 19.6548 10.6074H0.34375C0.594414 11.5377 0.975547 12.4142 1.46699 13.2161Z"
                        fill="#D80027"
                      />
                      <path
                        d="M4.63219 1.56164H5.54348L4.69582 2.17746L5.01961 3.17391L4.17199 2.55809L3.32437 3.17391L3.60406 2.31309C2.85773 2.93477 2.20359 3.66313 1.66453 4.47469H1.95652L1.41695 4.86668C1.33289 5.00691 1.25227 5.14937 1.175 5.29395L1.43266 6.08695L0.951953 5.7377C0.832461 5.99086 0.723164 6.24973 0.624922 6.51398L0.908789 7.38773H1.95652L1.10887 8.00356L1.43266 9L0.585039 8.38418L0.0773047 8.75309C0.0264844 9.1616 0 9.57769 0 10H10C10 4.47719 10 3.82609 10 0C8.02453 0 6.18301 0.573047 4.63219 1.56164ZM5.01961 9L4.17199 8.38418L3.32437 9L3.64816 8.00356L2.80051 7.38773H3.84824L4.17199 6.39129L4.49574 7.38773H5.54348L4.69582 8.00356L5.01961 9ZM4.69582 5.09051L5.01961 6.08695L4.17199 5.47113L3.32437 6.08695L3.64816 5.09051L2.80051 4.47469H3.84824L4.17199 3.47824L4.49574 4.47469H5.54348L4.69582 5.09051ZM8.60656 9L7.75895 8.38418L6.91133 9L7.23512 8.00356L6.38746 7.38773H7.4352L7.75895 6.39129L8.0827 7.38773H9.13043L8.28277 8.00356L8.60656 9ZM8.28277 5.09051L8.60656 6.08695L7.75895 5.47113L6.91133 6.08695L7.23512 5.09051L6.38746 4.47469H7.4352L7.75895 3.47824L8.0827 4.47469H9.13043L8.28277 5.09051ZM8.28277 2.17746L8.60656 3.17391L7.75895 2.55809L6.91133 3.17391L7.23512 2.17746L6.38746 1.56164H7.4352L7.75895 0.565195L8.0827 1.56164H9.13043L8.28277 2.17746Z"
                        fill="#0052B4"
                      />
                    </svg>
                  </div>
                  <div className="profile-select-text">United States</div>
                </div>
                <div className="profile-chevron-icon">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#717680"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Timezone Field */}
            <div className="profile-select-field">
              <label className="profile-input-label">Timezone</label>
              <div className="profile-select-wrapper">
                <div className="profile-select-content">
                  <div className="profile-clock-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0013 4.99935V9.99935L13.3346 11.666M18.3346 9.99935C18.3346 14.6017 14.6037 18.3327 10.0013 18.3327C5.39893 18.3327 1.66797 14.6017 1.66797 9.99935C1.66797 5.39698 5.39893 1.66602 10.0013 1.66602C14.6037 1.66602 18.3346 5.39698 18.3346 9.99935Z"
                        stroke="#717680"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="profile-timezone-text">
                    Pacific Standard Time (PST)
                  </div>
                  <div className="profile-timezone-offset">UTC−08:00</div>
                </div>
                <div className="profile-chevron-icon">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L6 6.5L11 1.5"
                      stroke="#717680"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

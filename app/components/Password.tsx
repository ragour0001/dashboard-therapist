"use client";

import { useState } from "react";

export default function Password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="password-page">
      <div className="password-content">
        {/* Header Section */}
        <div className="password-header">
          <div className="password-title-section">
            <h3 className="password-title">Update Your Password</h3>
            <p className="password-subtitle">Update your portfolio and bio.</p>
          </div>
        </div>

        {/* Password Form */}
        <div className="password-form-container">
          <div className="password-form-content">
            {/* Current Password Field */}
            <div className="password-input-field">
              <label className="password-input-label">Current Password</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="password-input"
                />
              </div>
            </div>

            {/* New Password Field */}
            <div className="password-input-field">
              <label className="password-input-label">New Password</label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="password-input"
                />
              </div>
            </div>

            {/* Confirm New Password Field */}
            <div className="password-input-field">
              <label className="password-input-label">
                Confirm New Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="password-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

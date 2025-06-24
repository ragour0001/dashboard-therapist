"use client";

import { useState } from "react";
import ThankYouModal from "./ThankYouModal";

interface FeedbackModalProps {
  onClose: () => void;
}

export default function FeedbackModal({ onClose }: FeedbackModalProps) {
  const [selectedRating, setSelectedRating] = useState("excellent");
  const [comment, setComment] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = () => {
    setShowThankYou(true);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    onClose();
  };

  const ratings = [
    { id: "excellent", label: "🔥 Excellent", active: true },
    { id: "does-job", label: "👌 Does the Job", active: false },
    { id: "good", label: "😊 Good", active: false },
    { id: "satisfactory", label: "🙂 Satisfactory", active: false },
    { id: "average", label: "😐 Average", active: false },
    { id: "poor", label: "👎 Poor", active: false },
  ];

  return (
    <div className="feedback-modal-container">
      <div className="feedback-modal">
        <div className="feedback-modal-header">
          <h3>Share you experience ⭐</h3>
          <button className="close-button" onClick={onClose}>
            <svg width="44" height="42" viewBox="0 0 44 42" fill="none">
              <path
                d="M22 0.5C33.8963 0.5 43.5 9.69983 43.5 21C43.5 32.3002 33.8963 41.5 22 41.5C10.1037 41.5 0.5 32.3002 0.5 21C0.5 9.69983 10.1037 0.5 22 0.5Z"
                fill="white"
                stroke="#E6E6E6"
              />
              <path
                d="M28.875 14.4375L15.125 27.5625"
                stroke="#181F30"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.125 14.4375L28.875 27.5625"
                stroke="#181F30"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="rating-buttons">
          {ratings.map((rating) => (
            <button
              key={rating.id}
              className={`rating-button ${
                selectedRating === rating.id ? "active" : ""
              }`}
              onClick={() => setSelectedRating(rating.id)}
            >
              {rating.label}
            </button>
          ))}
        </div>

        <div className="comment-section">
          <label className="comment-label">Add a comment</label>
          <textarea
            className="comment-textarea"
            placeholder="Type here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="feedback-actions">
          <button className="skip-button" onClick={onClose}>
            Skip
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        </div>

        <ThankYouModal isOpen={showThankYou} onClose={handleThankYouClose} />
      </div>
    </div>
  );
}

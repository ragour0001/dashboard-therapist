"use client";

export default function TherapistCard() {
  return (
    <div className="therapist-card">
      <div className="card-image-section">
        <div className="card-image-placeholder"></div>
        <div className="availability-badge">
          <div className="availability-dot"></div>
          <span>Available Today</span>
        </div>
      </div>

      <div className="card-content">
        <div className="therapist-profile">
          <div className="profile-info">
            <h3>Dr. Marci Maiden</h3>
            <p>Counselling Therapist</p>
          </div>
          <div className="rating">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="star-icon"
            >
              <path
                d="M9.04894 0.925099C9.3483 0.00378799 10.6517 0.0037868 10.9511 0.925097L12.4697 5.59886C12.6035 6.01088 12.9875 6.28984 13.4207 6.28984H18.335C19.3037 6.28984 19.7065 7.52946 18.9228 8.09886L14.947 10.9874C14.5966 11.242 14.4499 11.6934 14.5838 12.1054L16.1024 16.7792C16.4017 17.7005 15.3472 18.4666 14.5635 17.8972L10.5878 15.0087C10.2373 14.754 9.7627 14.754 9.41221 15.0087L5.43648 17.8972C4.65276 18.4666 3.59828 17.7005 3.89763 16.7792L5.41623 12.1054C5.55011 11.6934 5.40345 11.242 5.05296 10.9874L1.07722 8.09886C0.293507 7.52946 0.696283 6.28984 1.66501 6.28984H6.57929C7.01252 6.28984 7.39647 6.01088 7.53035 5.59886L9.04894 0.925099Z"
                fill="#FFB063"
              />
            </svg>
            <span>4.5</span>
          </div>
        </div>

        <div className="card-details">
          <div className="specializations">
            <span className="specialization-tag">Stress</span>
            <span className="specialization-tag">Trauma</span>
            <span className="specialization-tag">Anxiety</span>
            <span className="specialization-tag">+2 More</span>
          </div>

          <div className="session-booking">
            <div className="session-info">
              <p className="session-label">Sessions</p>
              <div className="session-details">
                <span className="session-time">2 : 30 Pm</span>
                <span className="session-day">Today</span>
              </div>
            </div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

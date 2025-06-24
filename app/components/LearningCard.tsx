"use client";

interface LearningCardProps {
  title: string;
  description: string;
  tags: string[];
}

export default function LearningCard({
  title,
  description,
  tags,
}: LearningCardProps) {
  return (
    <div className="learning-card">
      <div className="learning-card-container">
        <div className="learning-card-sub-container">
          <div className="learning-card-content">
            <div className="learning-card-header">
              <div className="card-header-content">
                <div className="card-title-section">
                  <h3 className="card-title">{title}</h3>
                  <div className="card-arrow-button">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
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
                    {tags.map((tag, index) => (
                      <div key={index} className="card-tag">
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-description-section">
              <p className="card-description">{description}</p>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <div className="card-actions-container">
            <button className="take-look-btn">Take a Look</button>
            <button className="take-assessment-btn">
              Take assessment to Personalize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

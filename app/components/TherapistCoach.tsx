"use client";

import { useState } from "react";

interface FilterChipProps {
  label: string;
  onRemove: () => void;
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

interface TherapistCardProps {
  name: string;
  title: string;
  rating: number;
  specializations: string[];
  sessionTime: string;
  sessionDay: string;
  imageUrl: string;
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

function UpcomingSessionDetails() {
  return (
    <div className="upcoming-session-card">
      <div className="session-header">
        <div className="therapist-session-info">
          <img
            // src="https://placehold.co/78x78/E0E0E0/E0E0E0"
            src="/assets/images/Avatar.png"          
            alt="Mridul Sharma"
            className="session-therapist-avatar"
          />
          <div className="session-therapist-details">
            <h3 className="session-therapist-name">Olivia Rhye</h3>
            <p className="session-description">30 min meeting with</p>
          </div>
        </div>
        <div className="session-actions">
          <button className="reschedule-btn">Reschedule</button>
          <button className="join-now-btn">Join Now</button>
        </div>
      </div>

      <div className="session-separator"></div>

      <div className="session-details">
        <div className="session-time-section">
          <div className="session-time-header">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M10.9982 19.4982C9.81872 19.4982 8.71364 19.2751 7.68297 18.829C6.65214 18.3828 5.75339 17.7764 4.98672 17.0097C4.22005 16.2431 3.61364 15.3443 3.16747 14.3135C2.7213 13.2828 2.49822 12.1777 2.49822 10.9982C2.49822 9.81872 2.7213 8.71364 3.16747 7.68297C3.61364 6.65214 4.22005 5.75339 4.98672 4.98672C5.75339 4.22005 6.65214 3.61364 7.68297 3.16747C8.71364 2.7213 9.81872 2.49822 10.9982 2.49822C12.1777 2.49822 13.2828 2.7213 14.3135 3.16747C15.3443 3.61364 16.2431 4.22005 17.0097 4.98672C17.7764 5.75339 18.3828 6.65214 18.829 7.68297C19.2751 8.71364 19.4982 9.81872 19.4982 10.9982C19.4982 12.1777 19.2751 13.2828 18.829 14.3135C18.3828 15.3443 17.7764 16.2431 17.0097 17.0097C16.2431 17.7764 15.3443 18.3828 14.3135 18.829C13.2828 19.2751 12.1777 19.4982 10.9982 19.4982ZM13.9712 15.0252L15.0252 13.9712L11.7482 10.6945V5.99822H10.2482V11.302L13.9712 15.0252ZM4.75197 0.886719L5.80597 1.94047L1.94047 5.80597L0.886719 4.75197L4.75197 0.886719ZM17.2445 0.886719L21.1097 4.75197L20.056 5.80597L16.1905 1.94047L17.2445 0.886719ZM10.9982 17.9982C12.9419 17.9982 14.5945 17.3175 15.956 15.956C17.3175 14.5945 17.9982 12.9419 17.9982 10.9982C17.9982 9.05455 17.3175 7.40197 15.956 6.04047C14.5945 4.67897 12.9419 3.99822 10.9982 3.99822C9.05455 3.99822 7.40197 4.67897 6.04047 6.04047C4.67897 7.40197 3.99822 9.05455 3.99822 10.9982C3.99822 12.9419 4.67897 14.5945 6.04047 15.956C7.40197 17.3175 9.05455 17.9982 10.9982 17.9982Z"
                fill="white"
              />
            </svg>
            <span className="time-label">Time</span>
          </div>
          <div className="session-time-info">
            <div className="session-date">Thursday, Sep 14th</div>
            <div className="session-time">3:00 - 3:30 PM IST</div>
          </div>
        </div>
      </div>

      <div className="session-separator"></div>

      <div className="session-remarks">
        <div className="remarks-header">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M0.882812 19.498V0.498047H2.38281V19.498H0.882812ZM4.67131 14.6518V12.1328H13.1133V14.6518H4.67131ZM4.67131 7.8633V5.3443H19.1133V7.8633H4.67131Z"
              fill="white"
            />
          </svg>
          <span className="remarks-label">Remarks</span>
        </div>
        <p className="remarks-text">I am going thhrouughh a heartbrake</p>
      </div>
    </div>
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

function NewPlatformSection() {
  return (
    <div className="new-platform-section">
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
              {/* <button className="app-store-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    fill="white"
                  />
                </svg>
                <div className="store-text">
                  <span className="store-line1">Download on the</span>
                  <span className="store-line2">App Store</span>
                </div>
              </button>
              <button className="google-play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.6 2.45L13.85 12.7 3.6 23C3.3 22.85 3.1 22.55 3.1 22.2V2.8C3.1 2.45 3.3 2.15 3.6 2.45M20.4 10.8L17.55 9.25L15.2 11.6L17.55 13.95L20.4 12.4C20.8 12.15 21 11.7 21 11.2C21 10.7 20.8 10.25 20.4 10.8M14.5 12.35L4.25 22.6C4.35 22.75 4.5 22.85 4.7 22.9L15.9 13.7L14.5 12.35M4.7 1.1C4.5 1.15 4.35 1.25 4.25 1.4L14.5 11.65L15.9 10.3L4.7 1.1Z"
                    fill="white"
                  />
                </svg>
                <div className="store-text">
                  <span className="store-line1">GET IT ON</span>
                  <span className="store-line2">Google Play</span>
                </div>
              </button> */}
            </div>
          </div>
        </div>

        <div className="phone-1-phone-2">
        <img src="/assets/images/mobile-img-first.png" alt="phone-1" />
        <img src="/assets/images/mobile-img-second.png" alt="phone-1" />
        </div>

        {/* <div className="phone-mockups">
          <div className="phone-showcase">
            <div className="phone-mockup phone-1">
              <div className="phone-screen">
              <img src="/assets/images/mobile-img-first.png" alt="phone-1" />
                <div className="phone-content">
                  <div className="phone-logo">
                    <div className="refill-logo"></div>
                  </div>
                  <div className="phone-app-interface">
                    <h3 className="phone-app-title">My Care</h3>
                    <p className="phone-app-subtitle">
                      Find the right support to guide your journey.
                    </p>

                    <div className="phone-session-info">
                      <div className="today-indicator">
                        <div className="today-dot"></div>
                        <span>Today (2)</span>
                      </div>

                      <div className="session-details">
                        <div className="session-time-mobile">
                          10:00 - 10:30 AM
                        </div>
                        <div className="session-duration">30 min session</div>
                        <div className="therapist-info-mobile">
                          <div className="therapist-avatar-mobile"></div>
                          <div className="therapist-details-mobile">
                            <span className="therapist-role">Therapist</span>
                            <span className="therapist-name">
                              Mridhula Sharma
                            </span>
                          </div>
                          <button className="join-now-mobile">Join Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="phone-mockup phone-2">
              <div className="phone-screen">
              <img src="/assets/images/mobile-img-second.png" alt="phone-2" />
                <div className="refill-health-logo">
                  <div className="logo-circle">R</div>
                  <span>RefillHealth</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default function TherapistCoach() {
  return (
    <main className="therapist-coach-page">
      <div className="therapist-coach-content">
        <div className="page-header">
          <h1>Upcoming Session Details</h1>
        </div>

        <UpcomingSessionDetails />

        <div className="main-content-section">
          <SearchAndFilters />
          <TherapistGrid />
        </div>

        <NewPlatformSection />
      </div>
    </main>
  );
}

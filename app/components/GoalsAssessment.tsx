"use client";

import { useState } from "react";

interface GoalsAssessmentProps {
  onSectionChange?: (section: string) => void;
}

export default function GoalsAssessment({
  onSectionChange,
}: GoalsAssessmentProps) {
  const [currentDate, setCurrentDate] = useState("23 April");
  const [currentYear, setCurrentYear] = useState("2023");
  const [currentMonth, setCurrentMonth] = useState("April 2024");

  return (
    <div className="therapist-dashboard">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
      />

      <div className="main-content">
        <div className="dashboard-grid">
          {/* Calendar Section */}
          <div className="calendar-section">
            <div className="calendar-header">
              <h2 className="calendar-title">Calendar</h2>
            </div>

            {/* Legend */}
            <div className="calendar-legend">
              <div className="legend-item">
                <div className="legend-dot booked"></div>
                <span>Booked</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot available"></div>
                <span>Available slot</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot holiday"></div>
                <span>Holiday</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot on-leave"></div>
                <span>On leave</span>
              </div>
              <button className="availability-preference-btn">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                  <path
                    d="M8.24922 20.7002L7.84922 17.5002C7.63255 17.4169 7.42839 17.3169 7.23672 17.2002C7.04505 17.0835 6.85755 16.9585 6.67422 16.8252L3.69922 18.0752L0.949219 13.3252L3.52422 11.3752C3.50755 11.2585 3.49922 11.146 3.49922 11.0377V10.3627C3.49922 10.2544 3.50755 10.1419 3.52422 10.0252L0.949219 8.0752L3.69922 3.3252L6.67422 4.5752C6.85755 4.44186 7.04922 4.31686 7.24922 4.2002C7.44922 4.08353 7.64922 3.98353 7.84922 3.9002L8.24922 0.700195H13.7492L14.1492 3.9002C14.3659 3.98353 14.5701 4.08353 14.7617 4.2002C14.9534 4.31686 15.1409 4.44186 15.3242 4.5752L18.2992 3.3252L21.0492 8.0752L18.4742 10.0252C18.4909 10.1419 18.4992 10.2544 18.4992 10.3627V11.0377C18.4992 11.146 18.4826 11.2585 18.4492 11.3752L21.0242 13.3252L18.2742 18.0752L15.3242 16.8252C15.1409 16.9585 14.9492 17.0835 14.7492 17.2002C14.5492 17.3169 14.3492 17.4169 14.1492 17.5002L13.7492 20.7002H8.24922ZM9.99922 18.7002H11.9742L12.3242 16.0502C12.8409 15.9169 13.3201 15.721 13.7617 15.4627C14.2034 15.2044 14.6076 14.8919 14.9742 14.5252L17.4492 15.5502L18.4242 13.8502L16.2742 12.2252C16.3576 11.9919 16.4159 11.746 16.4492 11.4877C16.4826 11.2294 16.4992 10.9669 16.4992 10.7002C16.4992 10.4335 16.4826 10.171 16.4492 9.9127C16.4159 9.65436 16.3576 9.40853 16.2742 9.1752L18.4242 7.5502L17.4492 5.8502L14.9742 6.9002C14.6076 6.51686 14.2034 6.19603 13.7617 5.9377C13.3201 5.67936 12.8409 5.48353 12.3242 5.3502L11.9992 2.7002H10.0242L9.67422 5.3502C9.15755 5.48353 8.67839 5.67936 8.23672 5.9377C7.79505 6.19603 7.39089 6.50853 7.02422 6.8752L4.54922 5.8502L3.57422 7.5502L5.72422 9.1502C5.64089 9.4002 5.58255 9.6502 5.54922 9.9002C5.51589 10.1502 5.49922 10.4169 5.49922 10.7002C5.49922 10.9669 5.51589 11.2252 5.54922 11.4752C5.58255 11.7252 5.64089 11.9752 5.72422 12.2252L3.57422 13.8502L4.54922 15.5502L7.02422 14.5002C7.39089 14.8835 7.79505 15.2044 8.23672 15.4627C8.67839 15.721 9.15755 15.9169 9.67422 16.0502L9.99922 18.7002ZM11.0492 14.2002C12.0159 14.2002 12.8409 13.8585 13.5242 13.1752C14.2076 12.4919 14.5492 11.6669 14.5492 10.7002C14.5492 9.73353 14.2076 8.90853 13.5242 8.2252C12.8409 7.54186 12.0159 7.2002 11.0492 7.2002C10.0659 7.2002 9.23672 7.54186 8.56172 8.2252C7.88672 8.90853 7.54922 9.73353 7.54922 10.7002C7.54922 11.6669 7.88672 12.4919 8.56172 13.1752C9.23672 13.8585 10.0659 14.2002 11.0492 14.2002Z"
                    fill="#1C1B1F"
                  />
                </svg>
                <span>Availability Preference</span>
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="calendar-grid-container">
              <div className="calendar-month-nav">
                <button className="nav-btn prev">
                  <svg width="38" height="39" viewBox="0 0 38 39" fill="none">
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
                <button className="nav-btn next active">
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
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

                <div className="calendar-days">
                  {/* Week 1 */}
                  <div className="calendar-day empty"></div>
                  <div className="calendar-day">
                    <span className="day-number">1</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">2</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">3</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">4</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">5</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">6</span>
                    <div className="event-dots">
                      <div className="dot gray"></div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="calendar-day">
                    <span className="day-number">7</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">8</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">9</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">10</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">11</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">12</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">13</span>
                    <div className="event-dots">
                      <div className="dot gray"></div>
                    </div>
                  </div>

                  {/* Week 3 */}
                  <div className="calendar-day">
                    <span className="day-number">14</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">15</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">16</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">17</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">18</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">19</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">20</span>
                    <div className="event-dots">
                      <div className="dot gray"></div>
                    </div>
                  </div>

                  {/* Week 4 */}
                  <div className="calendar-day">
                    <span className="day-number">21</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">22</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">23</span>
                    <div className="event-dots">
                      <div className="dot blue"></div>
                      <div className="dot purple"></div>
                      <div className="dot teal"></div>
                    </div>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">24</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">25</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">26</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">27</span>
                    <div className="event-dots">
                      <div className="dot gray"></div>
                    </div>
                  </div>

                  {/* Week 5 */}
                  <div className="calendar-day">
                    <span className="day-number">28</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">29</span>
                  </div>
                  <div className="calendar-day">
                    <span className="day-number">30</span>
                  </div>
                </div>
              </div>

              {/* Calendar Sidebar */}
              <div className="calendar-sidebar">
                <div className="sidebar-section">
                  <div className="sidebar-item">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M4.47422 5.0707L0.849219 1.4457C0.799219 1.3957 0.761719 1.34154 0.736719 1.2832C0.711719 1.22487 0.699219 1.16237 0.699219 1.0957C0.699219 0.96237 0.745052 0.845703 0.836719 0.745703C0.928385 0.645703 1.04922 0.595703 1.19922 0.595703H8.79922C8.94922 0.595703 9.07005 0.645703 9.16172 0.745703C9.25339 0.845703 9.29922 0.96237 9.29922 1.0957C9.29922 1.12904 9.24922 1.2457 9.14922 1.4457L5.52422 5.0707C5.44089 5.15404 5.35755 5.21237 5.27422 5.2457C5.19089 5.27904 5.09922 5.2957 4.99922 5.2957C4.89922 5.2957 4.80755 5.27904 4.72422 5.2457C4.64089 5.21237 4.55755 5.15404 4.47422 5.0707Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
                      <path
                        d="M9 16.5957C8.06667 16.5957 7.175 16.7415 6.325 17.0332C5.475 17.3249 4.7 17.7624 4 18.3457V18.5957H14V18.3457C13.3 17.7624 12.525 17.3249 11.675 17.0332C10.825 16.7415 9.93333 16.5957 9 16.5957ZM2 17.4457C2.9 16.5624 3.94583 15.8665 5.1375 15.3582C6.32917 14.8499 7.61667 14.5957 9 14.5957C10.3833 14.5957 11.6708 14.8499 12.8625 15.3582C14.0542 15.8665 15.1 16.5624 16 17.4457V4.5957H2V17.4457ZM9 12.5957C8.03333 12.5957 7.20833 12.254 6.525 11.5707C5.84167 10.8874 5.5 10.0624 5.5 9.0957C5.5 8.12904 5.84167 7.30404 6.525 6.6207C7.20833 5.93737 8.03333 5.5957 9 5.5957C9.96667 5.5957 10.7917 5.93737 11.475 6.6207C12.1583 7.30404 12.5 8.12904 12.5 9.0957C12.5 10.0624 12.1583 10.8874 11.475 11.5707C10.7917 12.254 9.96667 12.5957 9 12.5957ZM9 10.5957C9.41667 10.5957 9.77083 10.4499 10.0625 10.1582C10.3542 9.86654 10.5 9.51237 10.5 9.0957C10.5 8.67904 10.3542 8.32487 10.0625 8.0332C9.77083 7.74154 9.41667 7.5957 9 7.5957C8.58333 7.5957 8.22917 7.74154 7.9375 8.0332C7.64583 8.32487 7.5 8.67904 7.5 9.0957C7.5 9.51237 7.64583 9.86654 7.9375 10.1582C8.22917 10.4499 8.58333 10.5957 9 10.5957ZM2 20.5957C1.45 20.5957 0.979167 20.3999 0.5875 20.0082C0.195833 19.6165 0 19.1457 0 18.5957V4.5957C0 4.0457 0.195833 3.57487 0.5875 3.1832C0.979167 2.79154 1.45 2.5957 2 2.5957H3V1.5957C3 1.31237 3.09583 1.07487 3.2875 0.883203C3.47917 0.691536 3.71667 0.595703 4 0.595703C4.28333 0.595703 4.52083 0.691536 4.7125 0.883203C4.90417 1.07487 5 1.31237 5 1.5957V2.5957H13V1.5957C13 1.31237 13.0958 1.07487 13.2875 0.883203C13.4792 0.691536 13.7167 0.595703 14 0.595703C14.2833 0.595703 14.5208 0.691536 14.7125 0.883203C14.9042 1.07487 15 1.31237 15 1.5957V2.5957H16C16.55 2.5957 17.0208 2.79154 17.4125 3.1832C17.8042 3.57487 18 4.0457 18 4.5957V18.5957C18 19.1457 17.8042 19.6165 17.4125 20.0082C17.0208 20.3999 16.55 20.5957 16 20.5957H2Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                    <span>My calendars</span>
                  </div>

                  <div className="sidebar-item">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path
                        d="M8.6 12.3957L6.45 10.2457C6.26667 10.0624 6.03333 9.9707 5.75 9.9707C5.46667 9.9707 5.23333 10.0624 5.05 10.2457C4.86667 10.429 4.775 10.6624 4.775 10.9457C4.775 11.229 4.86667 11.4624 5.05 11.6457L7.9 14.4957C8.1 14.6957 8.33333 14.7957 8.6 14.7957C8.86667 14.7957 9.1 14.6957 9.3 14.4957L14.95 8.8457C15.1333 8.66237 15.225 8.42904 15.225 8.1457C15.225 7.86237 15.1333 7.62904 14.95 7.4457C14.7667 7.26237 14.5333 7.1707 14.25 7.1707C13.9667 7.1707 13.7333 7.26237 13.55 7.4457L8.6 12.3957ZM10 20.5957C8.61667 20.5957 7.31667 20.3332 6.1 19.8082C4.88333 19.2832 3.825 18.5707 2.925 17.6707C2.025 16.7707 1.3125 15.7124 0.7875 14.4957C0.2625 13.279 0 11.979 0 10.5957C0 9.21237 0.2625 7.91237 0.7875 6.6957C1.3125 5.47904 2.025 4.4207 2.925 3.5207C3.825 2.6207 4.88333 1.9082 6.1 1.3832C7.31667 0.858203 8.61667 0.595703 10 0.595703C11.3833 0.595703 12.6833 0.858203 13.9 1.3832C15.1167 1.9082 16.175 2.6207 17.075 3.5207C17.975 4.4207 18.6875 5.47904 19.2125 6.6957C19.7375 7.91237 20 9.21237 20 10.5957C20 11.979 19.7375 13.279 19.2125 14.4957C18.6875 15.7124 17.975 16.7707 17.075 17.6707C16.175 18.5707 15.1167 19.2832 13.9 19.8082C12.6833 20.3332 11.3833 20.5957 10 20.5957Z"
                        fill="#337E89"
                      />
                    </svg>
                    <span>sessions</span>
                  </div>

                  <div className="sidebar-item">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path
                        d="M8.6 12.3957L6.45 10.2457C6.26667 10.0624 6.03333 9.9707 5.75 9.9707C5.46667 9.9707 5.23333 10.0624 5.05 10.2457C4.86667 10.429 4.775 10.6624 4.775 10.9457C4.775 11.229 4.86667 11.4624 5.05 11.6457L7.9 14.4957C8.1 14.6957 8.33333 14.7957 8.6 14.7957C8.86667 14.7957 9.1 14.6957 9.3 14.4957L14.95 8.8457C15.1333 8.66237 15.225 8.42904 15.225 8.1457C15.225 7.86237 15.1333 7.62904 14.95 7.4457C14.7667 7.26237 14.5333 7.1707 14.25 7.1707C13.9667 7.1707 13.7333 7.26237 13.55 7.4457L8.6 12.3957ZM10 20.5957C8.61667 20.5957 7.31667 20.3332 6.1 19.8082C4.88333 19.2832 3.825 18.5707 2.925 17.6707C2.025 16.7707 1.3125 15.7124 0.7875 14.4957C0.2625 13.279 0 11.979 0 10.5957C0 9.21237 0.2625 7.91237 0.7875 6.6957C1.3125 5.47904 2.025 4.4207 2.925 3.5207C3.825 2.6207 4.88333 1.9082 6.1 1.3832C7.31667 0.858203 8.61667 0.595703 10 0.595703C11.3833 0.595703 12.6833 0.858203 13.9 1.3832C15.1167 1.9082 16.175 2.6207 17.075 3.5207C17.975 4.4207 18.6875 5.47904 19.2125 6.6957C19.7375 7.91237 20 9.21237 20 10.5957C20 11.979 19.7375 13.279 19.2125 14.4957C18.6875 15.7124 17.975 16.7707 17.075 17.6707C16.175 18.5707 15.1167 19.2832 13.9 19.8082C12.6833 20.3332 11.3833 20.5957 10 20.5957Z"
                        fill="#3B82F6"
                      />
                    </svg>
                    <span>Available slot</span>
                  </div>

                  <div className="sidebar-item">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path
                        d="M8.6 12.3957L6.45 10.2457C6.26667 10.0624 6.03333 9.9707 5.75 9.9707C5.46667 9.9707 5.23333 10.0624 5.05 10.2457C4.86667 10.429 4.775 10.6624 4.775 10.9457C4.775 11.229 4.86667 11.4624 5.05 11.6457L7.9 14.4957C8.1 14.6957 8.33333 14.7957 8.6 14.7957C8.86667 14.7957 9.1 14.6957 9.3 14.4957L14.95 8.8457C15.1333 8.66237 15.225 8.42904 15.225 8.1457C15.225 7.86237 15.1333 7.62904 14.95 7.4457C14.7667 7.26237 14.5333 7.1707 14.25 7.1707C13.9667 7.1707 13.7333 7.26237 13.55 7.4457L8.6 12.3957ZM10 20.5957C8.61667 20.5957 7.31667 20.3332 6.1 19.8082C4.88333 19.2832 3.825 18.5707 2.925 17.6707C2.025 16.7707 1.3125 15.7124 0.7875 14.4957C0.2625 13.279 0 11.979 0 10.5957C0 9.21237 0.2625 7.91237 0.7875 6.6957C1.3125 5.47904 2.025 4.4207 2.925 3.5207C3.825 2.6207 4.88333 1.9082 6.1 1.3832C7.31667 0.858203 8.61667 0.595703 10 0.595703C11.3833 0.595703 12.6833 0.858203 13.9 1.3832C15.1167 1.9082 16.175 2.6207 17.075 3.5207C17.975 4.4207 18.6875 5.47904 19.2125 6.6957C19.7375 7.91237 20 9.21237 20 10.5957C20 11.979 19.7375 13.279 19.2125 14.4957C18.6875 15.7124 17.975 16.7707 17.075 17.6707C16.175 18.5707 15.1167 19.2832 13.9 19.8082C12.6833 20.3332 11.3833 20.5957 10 20.5957Z"
                        fill="#FFAE00"
                      />
                    </svg>
                    <span>On Leave</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <div className="sidebar-item">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M4.47422 5.0707L0.849219 1.4457C0.799219 1.3957 0.761719 1.34154 0.736719 1.2832C0.711719 1.22487 0.699219 1.16237 0.699219 1.0957C0.699219 0.96237 0.745052 0.845703 0.836719 0.745703C0.928385 0.645703 1.04922 0.595703 1.19922 0.595703H8.79922C8.94922 0.595703 9.07005 0.645703 9.16172 0.745703C9.25339 0.845703 9.29922 0.96237 9.29922 1.0957C9.29922 1.12904 9.24922 1.2457 9.14922 1.4457L5.52422 5.0707C5.44089 5.15404 5.35755 5.21237 5.27422 5.2457C5.19089 5.27904 5.09922 5.2957 4.99922 5.2957C4.89922 5.2957 4.80755 5.27904 4.72422 5.2457C4.64089 5.21237 4.55755 5.15404 4.47422 5.0707Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
                      <path
                        d="M2 18.5957C1.45 18.5957 0.979167 18.3999 0.5875 18.0082C0.195833 17.6165 0 17.1457 0 16.5957V4.5957C0 4.0457 0.195833 3.57487 0.5875 3.1832C0.979167 2.79154 1.45 2.5957 2 2.5957H3V1.5957C3 1.31237 3.09583 1.07487 3.2875 0.883203C3.47917 0.691536 3.71667 0.595703 4 0.595703C4.28333 0.595703 4.52083 0.691536 4.7125 0.883203C4.90417 1.07487 5 1.31237 5 1.5957V2.5957H11V1.5957C11 1.31237 11.0958 1.07487 11.2875 0.883203C11.4792 0.691536 11.7167 0.595703 12 0.595703C12.2833 0.595703 12.5208 0.691536 12.7125 0.883203C12.9042 1.07487 13 1.31237 13 1.5957V2.5957H14C14.55 2.5957 15.0208 2.79154 15.4125 3.1832C15.8042 3.57487 16 4.0457 16 4.5957V9.5957C16 9.87904 15.9042 10.1165 15.7125 10.3082C15.5208 10.4999 15.2833 10.5957 15 10.5957C14.7167 10.5957 14.4792 10.4999 14.2875 10.3082C14.0958 10.1165 14 9.87904 14 9.5957V8.5957H2V16.5957H8C8.28333 16.5957 8.52083 16.6915 8.7125 16.8832C8.90417 17.0749 9 17.3124 9 17.5957C9 17.879 8.90417 18.1165 8.7125 18.3082C8.52083 18.4999 8.28333 18.5957 8 18.5957H2ZM2 6.5957H14V4.5957H2V6.5957Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                    <span>Other calendars</span>
                  </div>

                  <div className="sidebar-item">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path
                        d="M8.6 12.3957L6.45 10.2457C6.26667 10.0624 6.03333 9.9707 5.75 9.9707C5.46667 9.9707 5.23333 10.0624 5.05 10.2457C4.86667 10.429 4.775 10.6624 4.775 10.9457C4.775 11.229 4.86667 11.4624 5.05 11.6457L7.9 14.4957C8.1 14.6957 8.33333 14.7957 8.6 14.7957C8.86667 14.7957 9.1 14.6957 9.3 14.4957L14.95 8.8457C15.1333 8.66237 15.225 8.42904 15.225 8.1457C15.225 7.86237 15.1333 7.62904 14.95 7.4457C14.7667 7.26237 14.5333 7.1707 14.25 7.1707C13.9667 7.1707 13.7333 7.26237 13.55 7.4457L8.6 12.3957ZM10 20.5957C8.61667 20.5957 7.31667 20.3332 6.1 19.8082C4.88333 19.2832 3.825 18.5707 2.925 17.6707C2.025 16.7707 1.3125 15.7124 0.7875 14.4957C0.2625 13.279 0 11.979 0 10.5957C0 9.21237 0.2625 7.91237 0.7875 6.6957C1.3125 5.47904 2.025 4.4207 2.925 3.5207C3.825 2.6207 4.88333 1.9082 6.1 1.3832C7.31667 0.858203 8.61667 0.595703 10 0.595703C11.3833 0.595703 12.6833 0.858203 13.9 1.3832C15.1167 1.9082 16.175 2.6207 17.075 3.5207C17.975 4.4207 18.6875 5.47904 19.2125 6.6957C19.7375 7.91237 20 9.21237 20 10.5957C20 11.979 19.7375 13.279 19.2125 14.4957C18.6875 15.7124 17.975 16.7707 17.075 17.6707C16.175 18.5707 15.1167 19.2832 13.9 19.8082C12.6833 20.3332 11.3833 20.5957 10 20.5957Z"
                        fill="#B0B0B0"
                      />
                    </svg>
                    <span>Holidays</span>
                  </div>

                  <div className="sidebar-item">
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none">
                      <path
                        d="M14 17.5957H12C11.7167 17.5957 11.4792 17.4999 11.2875 17.3082C11.0958 17.1165 11 16.879 11 16.5957C11 16.3124 11.0958 16.0749 11.2875 15.8832C11.4792 15.6915 11.7167 15.5957 12 15.5957H14V13.5957C14 13.3124 14.0958 13.0749 14.2875 12.8832C14.4792 12.6915 14.7167 12.5957 15 12.5957C15.2833 12.5957 15.5208 12.6915 15.7125 12.8832C15.9042 13.0749 16 13.3124 16 13.5957V15.5957H18C18.2833 15.5957 18.5208 15.6915 18.7125 15.8832C18.9042 16.0749 19 16.3124 19 16.5957C19 16.879 18.9042 17.1165 18.7125 17.3082C18.5208 17.4999 18.2833 17.5957 18 17.5957H16V19.5957C16 19.879 15.9042 20.1165 15.7125 20.3082C15.5208 20.4999 15.2833 20.5957 15 20.5957C14.7167 20.5957 14.4792 20.4999 14.2875 20.3082C14.0958 20.1165 14 19.879 14 19.5957V17.5957ZM2 18.5957C1.45 18.5957 0.979167 18.3999 0.5875 18.0082C0.195833 17.6165 0 17.1457 0 16.5957V4.5957C0 4.0457 0.195833 3.57487 0.5875 3.1832C0.979167 2.79154 1.45 2.5957 2 2.5957H3V1.5957C3 1.31237 3.09583 1.07487 3.2875 0.883203C3.47917 0.691536 3.71667 0.595703 4 0.595703C4.28333 0.595703 4.52083 0.691536 4.7125 0.883203C4.90417 1.07487 5 1.31237 5 1.5957V2.5957H11V1.5957C11 1.31237 11.0958 1.07487 11.2875 0.883203C11.4792 0.691536 11.7167 0.595703 12 0.595703C12.2833 0.595703 12.5208 0.691536 12.7125 0.883203C12.9042 1.07487 13 1.31237 13 1.5957V2.5957H14C14.55 2.5957 15.0208 2.79154 15.4125 3.1832C15.8042 3.57487 16 4.0457 16 4.5957V9.5957C16 9.87904 15.9042 10.1165 15.7125 10.3082C15.5208 10.4999 15.2833 10.5957 15 10.5957C14.7167 10.5957 14.4792 10.4999 14.2875 10.3082C14.0958 10.1165 14 9.87904 14 9.5957V8.5957H2V16.5957H8C8.28333 16.5957 8.52083 16.6915 8.7125 16.8832C8.90417 17.0749 9 17.3124 9 17.5957C9 17.879 8.90417 18.1165 8.7125 18.3082C8.52083 18.4999 8.28333 18.5957 8 18.5957H2ZM2 6.5957H14V4.5957H2V6.5957Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                    <span>Add calendar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="daily-schedule">
            <div className="schedule-header">
              <div className="schedule-date">
                <h3 className="date-title">{currentDate}</h3>
                <h3 className="year-title">{currentYear}</h3>
                <div className="date-navigation">
                  <button className="date-nav-btn">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M17.1395 11.4006H9.54954L12.8495 8.11058C13.0378 7.92227 13.1436 7.66688 13.1436 7.40058C13.1436 7.13427 13.0378 6.87888 12.8495 6.69058C12.6612 6.50227 12.4058 6.39648 12.1395 6.39648C11.8732 6.39648 11.6178 6.50227 11.4295 6.69058L6.42954 11.6906C6.3385 11.7857 6.26714 11.8978 6.21954 12.0206C6.11953 12.264 6.11953 12.5371 6.21954 12.7806C6.26714 12.9033 6.3385 13.0155 6.42954 13.1106L11.4295 18.1106C11.5225 18.2043 11.6331 18.2787 11.755 18.3295C11.8768 18.3802 12.0075 18.4064 12.1395 18.4064C12.2716 18.4064 12.4023 18.3802 12.5241 18.3295C12.646 18.2787 12.7566 18.2043 12.8495 18.1106C12.9433 18.0176 13.0177 17.907 13.0684 17.7852C13.1192 17.6633 13.1453 17.5326 13.1453 17.4006C13.1453 17.2686 13.1192 17.1379 13.0684 17.016C13.0177 16.8941 12.9433 16.7835 12.8495 16.6906L9.54954 13.4006H17.1395C17.4048 13.4006 17.6591 13.2952 17.8467 13.1077C18.0342 12.9201 18.1395 12.6658 18.1395 12.4006C18.1395 12.1354 18.0342 11.881 17.8467 11.6935C17.6591 11.5059 17.4048 11.4006 17.1395 11.4006Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <button className="date-nav-btn">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M18.0606 12.0206C18.013 11.8978 17.9417 11.7857 17.8506 11.6906L12.8506 6.69058C12.7574 6.59734 12.6467 6.52338 12.5249 6.47292C12.4031 6.42246 12.2725 6.39648 12.1406 6.39648C11.8743 6.39648 11.6189 6.50227 11.4306 6.69058C11.3374 6.78381 11.2634 6.8945 11.213 7.01633C11.1625 7.13815 11.1365 7.26872 11.1365 7.40058C11.1365 7.66688 11.2423 7.92227 11.4306 8.11058L14.7306 11.4006H7.14062C6.87541 11.4006 6.62105 11.5059 6.43352 11.6935C6.24598 11.881 6.14062 12.1354 6.14062 12.4006C6.14062 12.6658 6.24598 12.9201 6.43352 13.1077C6.62105 13.2952 6.87541 13.4006 7.14062 13.4006H14.7306L11.4306 16.6906C11.3369 16.7835 11.2625 16.8941 11.2117 17.016C11.161 17.1379 11.1348 17.2686 11.1348 17.4006C11.1348 17.5326 11.161 17.6633 11.2117 17.7852C11.2625 17.907 11.3369 18.0176 11.4306 18.1106C11.5236 18.2043 11.6342 18.2787 11.756 18.3295C11.8779 18.3802 12.0086 18.4064 12.1406 18.4064C12.2726 18.4064 12.4033 18.3802 12.5252 18.3295C12.6471 18.2787 12.7577 18.2043 12.8506 18.1106L17.8506 13.1106C17.9417 13.0155 18.013 12.9033 18.0606 12.7806C18.1606 12.5371 18.1606 12.264 18.0606 12.0206Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="schedule-menu-btn">
                <svg width="4" height="17" viewBox="0 0 4 17" fill="none">
                  <path
                    d="M2 4.40039C0.89543 4.40039 -4.82823e-08 3.50496 0 2.40039C4.82823e-08 1.29582 0.895431 0.400391 2 0.400391C3.10457 0.400391 4 1.29582 4 2.40039C4 3.50496 3.10457 4.40039 2 4.40039Z"
                    fill="#2C2C2C"
                  />
                  <path
                    d="M2 10.4004C0.89543 10.4004 -4.82823e-08 9.50496 0 8.40039C4.82823e-08 7.29582 0.895431 6.40039 2 6.40039C3.10457 6.40039 4 7.29582 4 8.40039C4 9.50496 3.10457 10.4004 2 10.4004Z"
                    fill="#2C2C2C"
                  />
                  <path
                    d="M2 16.4004C0.89543 16.4004 -4.82823e-08 15.505 0 14.4004C4.82823e-08 13.2958 0.895431 12.4004 2 12.4004C3.10457 12.4004 4 13.2958 4 14.4004C4 15.505 3.10457 16.4004 2 16.4004Z"
                    fill="#2C2C2C"
                  />
                </svg>
              </button>
            </div>

            <div className="schedule-stats">
              <div className="stats-row">
                <span>Today:</span>
                <span className="stat-sessions">5 sessions</span>
                <span className="stat-breaks">2 breaks</span>
              </div>
            </div>

            <div className="schedule-timeline">
              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content session">
                  <div className="session-title">session With Maryam</div>
                  <div className="session-time">9:00 - 10:00</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content session">
                  <div className="session-title">session With Maryam</div>
                  <div className="session-time">9:00 - 10:00</div>
                  <div className="session-attachment">Report.pdf</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content available"></div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content break">
                  <div className="session-title">Break</div>
                  <div className="session-time">9:00 - 10:00</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content available"></div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content session">
                  <div className="session-title">session With Maryam</div>
                  <div className="session-time">9:00 - 10:00</div>
                  <div className="session-attachment">Report.pdf</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-time">10:00 - 10:30 AM</div>
                <div className="timeline-content session">
                  <div className="session-title">session With Maryam</div>
                  <div className="session-time">9:00 - 10:00</div>
                  <div className="session-attachment">Report.pdf</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Statistics Section */}
        <div className="sessions-section">
          <h2 className="sessions-title">Sessions for Today</h2>

          <div className="sessions-stats">
            <div className="big-stat-card">
              <div className="big-number">57</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "65%" }}></div>
              </div>
              <div className="progress-text">65% complete</div>
              <div className="progress-period">Today</div>
            </div>

            <div className="stat-cards-row">
              <div className="stat-card green">
                <div className="stat-label">No. of sessions</div>
                <div className="stat-value">24</div>
                <div className="stat-change positive">+5.11%</div>
              </div>
              <div className="stat-card blue">
                <div className="stat-label">No. of sessions</div>
                <div className="stat-value">24</div>
                <div className="stat-change positive">+1.11%</div>
              </div>
              <div className="stat-card purple">
                <div className="stat-label">No. of sessions</div>
                <div className="stat-value">24</div>
                <div className="stat-change positive">+1.11%</div>
              </div>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="alert-banner">
            <div className="alert-icon">⚠</div>
            <div className="alert-text">
              Two Patients Needs Immediate attention
            </div>
            <button className="alert-btn">Review</button>
          </div>

          {/* Upcoming Sessions Table */}
          <div className="upcoming-sessions">
            <div className="sessions-header">
              <h3>Upcoming Sessions</h3>
              <input
                type="text"
                placeholder="Search by names"
                className="search-input"
              />
            </div>

            <div className="sessions-table">
              <div className="table-header">
                <div className="th">Client ID</div>
                <div className="th">Name</div>
                <div className="th">Appointment Date</div>
                <div className="th">Time</div>
                <div className="th">Contact Number</div>
                <div className="th">Status</div>
              </div>

              <div className="table-row">
                <div className="td">#123</div>
                <div className="td">
                  <div className="name-cell">
                    <div className="avatar"></div>
                    <span>Lorem Ipsum</span>
                  </div>
                </div>
                <div className="td">14/06/2025</div>
                <div className="td">08:00 AM - 08:30AM</div>
                <div className="td">+91 00000 00000</div>
                <div className="td">
                  <span className="status completed">Completed</span>
                </div>
              </div>

              <div className="table-row">
                <div className="td">#123</div>
                <div className="td">
                  <div className="name-cell">
                    <div className="avatar"></div>
                    <span>Lorem Ipsum</span>
                  </div>
                </div>
                <div className="td">14/06/2025</div>
                <div className="td">08:00 AM - 08:30AM</div>
                <div className="td">+91 00000 00000</div>
                <div className="td">
                  <span className="status pending">Pending</span>
                </div>
              </div>

              <div className="table-row">
                <div className="td">#123</div>
                <div className="td">
                  <div className="name-cell">
                    <div className="avatar"></div>
                    <span>Lorem Ipsum</span>
                  </div>
                </div>
                <div className="td">14/06/2025</div>
                <div className="td">08:00 AM - 08:30AM</div>
                <div className="td">+91 00000 00000</div>
                <div className="td">
                  <span className="status completed">Completed</span>
                </div>
              </div>

              <div className="table-row">
                <div className="td">#123</div>
                <div className="td">
                  <div className="name-cell">
                    <div className="avatar"></div>
                    <span>Lorem Ipsum</span>
                  </div>
                </div>
                <div className="td">14/06/2025</div>
                <div className="td">08:00 AM - 08:30AM</div>
                <div className="td">+91 00000 00000</div>
                <div className="td">
                  <span className="status pending">Pending</span>
                </div>
              </div>
            </div>

            <div className="table-pagination">
              <button>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>

          {/* Next Session Card */}
          <div className="next-session-card">
            <div className="next-session-header">
              <h3>Next session</h3>
              <button className="expand-btn">→</button>
            </div>

            <div className="next-session-content">
              <div className="session-client">
                <div className="client-avatar"></div>
                <div className="client-info">
                  <div className="client-name">Donzel White</div>
                  <div className="session-type">Follow Up Session</div>
                </div>
                <div className="session-actions">
                  <span className="session-timing">Starts in 1 hr</span>
                  <button className="join-btn">Join Now</button>
                </div>
              </div>

              <div className="session-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <div className="detail-content">
                    <div className="detail-title">Appointments Date & Time</div>
                    <div className="detail-text">
                      Mon, 11 June 2024 11:00 AM - 12:00 PM
                    </div>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">📋</span>
                  <div className="detail-content">
                    <div className="detail-title">
                      Client Assessment Summary
                    </div>
                    <div className="detail-tag">
                      symptoms of Anxiety and Burnout
                    </div>
                    <div className="detail-text">
                      Showing signs of sleep disturbance
                    </div>
                  </div>
                </div>

                <div className="detail-item file">
                  <span className="detail-icon">📄</span>
                  <div className="detail-content">
                    <div className="detail-title">User report</div>
                    <div className="detail-size">2.1 MB</div>
                  </div>
                  <button className="download-btn">⬇</button>
                </div>
              </div>

              <div className="session-footer">
                <button className="footer-btn">Review history</button>
                <button className="footer-btn">Messages</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .therapist-dashboard {
          width: 100%;
          height: 100vh;
          background: #f0f0f0;
          font-family:
            "Inter",
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          overflow-y: auto;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          padding: 20px 30px;
          gap: 30px;
        }

        .dashboard-grid {
          display: flex;
          gap: 29px;
          align-items: flex-start;
        }

        /* Calendar Section */
        .calendar-section {
          display: flex;
          padding: 28px;
          flex-direction: column;
          gap: 28.7px;
          border-radius: 12px;
          background: #fff;
          width: 676px;
        }

        .calendar-header {
          align-self: stretch;
        }

        .calendar-title {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 20px;
          font-weight: 600;
          line-height: 150%;
          margin: 0;
        }

        .calendar-legend {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
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

        .legend-dot.booked {
          background: #337e89;
        }

        .legend-dot.available {
          background: #3b82f6;
        }

        .legend-dot.holiday {
          background: #b0b0b0;
        }

        .legend-dot.on-leave {
          background: #ffae00;
        }

        .legend-item span {
          color: #6c6c6c;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 14px;
        }

        .availability-preference-btn {
          display: flex;
          padding: 10px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 38px;
          border: 1px solid #b8b8b8;
          background: #f8f8f8;
          cursor: pointer;
        }

        .availability-preference-btn span {
          color: #252b37;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
        }

        .calendar-grid-container {
          display: flex;
          align-items: flex-start;
          gap: 29px;
          align-self: stretch;
        }

        .calendar-month-nav {
          display: flex;
          width: 343.14px;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15.96px;
        }

        .nav-btn {
          width: 37.905px;
          height: 37.905px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 50%;
        }

        .nav-btn.next.active {
          background: rgba(0, 107, 95, 0.08);
        }

        .current-month {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }

        .calendar-grid {
          display: flex;
          width: 343.14px;
          flex-direction: column;
          gap: 15.96px;
        }

        .calendar-days-header {
          display: flex;
          width: 343.14px;
          gap: 5.985px;
        }

        .day-header {
          width: 43.89px;
          color: #1a1a1a;
          text-align: center;
          font-family: Inter;
          font-size: 12px;
          font-weight: 400;
          line-height: 11.97px;
          text-transform: uppercase;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 43.89px);
          gap: 7.98px 5.985px;
        }

        .calendar-day {
          width: 43.89px;
          height: 43.89px;
          border-radius: 996.503px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .calendar-day.empty {
          background: transparent;
        }

        .day-number {
          color: rgba(26, 26, 26, 0.61);
          text-align: center;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }

        .event-dots {
          position: absolute;
          bottom: 4px;
          display: flex;
          gap: 3px;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
        }

        .dot.blue {
          background: #3b82f6;
        }

        .dot.purple {
          background: #a855f7;
        }

        .dot.teal {
          background: #2dd4bf;
        }

        .dot.gray {
          background: #b1b1b1;
        }

        .calendar-sidebar {
          display: flex;
          width: 333px;
          flex-direction: column;
          gap: 12px;
        }

        .sidebar-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sidebar-item {
          display: flex;
          padding: 8px;
          align-items: center;
          gap: 12px;
          border-radius: 80px;
        }

        .sidebar-item span {
          color: #000;
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
        }

        /* Daily Schedule */
        .daily-schedule {
          display: flex;
          height: 810px;
          padding: 20px;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          border-radius: 12px;
          background: #fff;
        }

        .schedule-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          position: relative;
        }

        .schedule-date {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
        }

        .date-title,
        .year-title {
          color: #000;
          font-family: "DM Sans";
          font-size: 24px;
          font-weight: 500;
          line-height: 32px;
          margin: 0;
        }

        .date-navigation {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .date-nav-btn {
          display: flex;
          width: 40px;
          height: 40px;
          padding: 10px;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          border: 1px solid #dcdcdc;
          background: transparent;
          cursor: pointer;
        }

        .schedule-menu-btn {
          position: absolute;
          right: 0;
          top: 12px;
          width: 20px;
          height: 20px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .schedule-stats {
          display: flex;
          height: 72px;
          padding: 12px 20px;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          border-bottom: 1px solid #dce0e5;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
          gap: 16px;
        }

        .stats-row span {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          line-height: 150%;
        }

        .stat-sessions {
          color: #006b5f !important;
        }

        .stat-breaks {
          color: #ffae00 !important;
        }

        .schedule-timeline {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-self: stretch;
          flex: 1;
          overflow-y: auto;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          border-radius: 8px;
          min-height: 60px;
        }

        .timeline-time {
          color: #000;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          min-width: 120px;
        }

        .timeline-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 8px 12px;
          border-radius: 8px;
        }

        .timeline-content.session {
          background: #cce7ea;
        }

        .timeline-content.break {
          background: #ffe4a3;
        }

        .timeline-content.available {
          background: #bfdbfe;
          min-height: 40px;
        }

        .session-title {
          color: #000;
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
        }

        .session-time {
          color: #006b5f;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
        }

        .session-attachment {
          color: #ba1a1a;
          font-family: Inter;
          font-size: 12px;
          font-weight: 400;
        }

        /* Sessions Section */
        .sessions-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-self: stretch;
        }

        .sessions-title {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 20px;
          font-weight: 600;
          line-height: 150%;
          margin: 0;
        }

        .sessions-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px;
          border-radius: 12px;
          background: #fff;
        }

        .big-stat-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .big-number {
          color: #006b5f;
          font-family: Inter;
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e5e8eb;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #006b5f;
        }

        .progress-text {
          color: #666;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
        }

        .progress-period {
          color: #006b5f;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
        }

        .stat-cards-row {
          display: flex;
          gap: 16px;
        }

        .stat-card {
          flex: 1;
          padding: 20px;
          border-radius: 12px;
          background: #fff;
          border-left: 4px solid;
        }

        .stat-card.green {
          border-left-color: #10b981;
        }

        .stat-card.blue {
          border-left-color: #3b82f6;
        }

        .stat-card.purple {
          border-left-color: #8b5cf6;
        }

        .stat-label {
          color: #666;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 8px;
        }

        .stat-value {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stat-change {
          font-family: Inter;
          font-size: 12px;
          font-weight: 500;
        }

        .stat-change.positive {
          color: #10b981;
        }

        /* Alert Banner */
        .alert-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 8px;
          background: #ffdad6;
          border: 1px solid #ba1a1a;
        }

        .alert-icon {
          color: #ba1a1a;
          font-size: 20px;
        }

        .alert-text {
          flex: 1;
          color: #ba1a1a;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
        }

        .alert-btn {
          padding: 8px 16px;
          border-radius: 6px;
          background: #006b5f;
          color: #fff;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        /* Upcoming Sessions */
        .upcoming-sessions {
          padding: 24px;
          border-radius: 12px;
          background: #fff;
        }

        .sessions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .sessions-header h3 {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .search-input {
          color: #666;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          padding: 8px 12px;
          border: 1px solid #e5e8eb;
          border-radius: 6px;
          background: #fff;
          outline: none;
        }

        .sessions-table {
          width: 100%;
          border-collapse: collapse;
        }

        .table-header,
        .table-row {
          display: grid;
          grid-template-columns: 80px 200px 150px 120px 150px 100px;
          gap: 16px;
          padding: 12px 0;
          align-items: center;
        }

        .table-header {
          border-bottom: 1px solid #e5e8eb;
        }

        .table-row {
          border-bottom: 1px solid #f3f4f6;
        }

        .th {
          color: #666;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
        }

        .td {
          color: #1a1a1a;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
        }

        .name-cell {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e5e8eb;
        }

        .status {
          padding: 4px 12px;
          border-radius: 16px;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
        }

        .status.completed {
          background: #dcfce7;
          color: #166534;
        }

        .status.pending {
          background: #fef3c7;
          color: #92400e;
        }

        .table-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }

        .table-pagination button {
          color: #666;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          padding: 8px 12px;
          border-radius: 6px;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .table-pagination button.active {
          background: #006b5f;
          color: #fff;
        }

        /* Next Session Card */
        .next-session-card {
          padding: 24px;
          border-radius: 12px;
          background: linear-gradient(135deg, #006b5f 0%, #4db6ac 100%);
          color: #fff;
        }

        .next-session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .next-session-header h3 {
          font-family: Inter;
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .expand-btn {
          font-size: 20px;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .session-client {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .client-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .client-info {
          flex: 1;
        }

        .client-name {
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .session-type {
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          opacity: 0.8;
        }

        .session-actions {
          display: flex;
          gap: 12px;
        }

        .session-timing {
          padding: 8px 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.2);
          font-family: Inter;
          font-size: 12px;
          font-weight: 500;
        }

        .join-btn {
          padding: 8px 16px;
          border-radius: 6px;
          background: #fff;
          color: #006b5f;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .session-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .detail-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .detail-item.file {
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
        }

        .detail-icon {
          font-size: 20px;
          margin-top: 2px;
        }

        .detail-content {
          flex: 1;
        }

        .detail-title {
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .detail-text {
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          opacity: 0.9;
        }

        .detail-tag {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.2);
          font-family: Inter;
          font-size: 12px;
          font-weight: 500;
          margin: 8px 0;
        }

        .detail-size {
          font-family: Inter;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.8;
        }

        .download-btn {
          font-size: 16px;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .session-footer {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .footer-btn {
          flex: 1;
          padding: 12px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          font-family: Inter;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .dashboard-grid {
            flex-direction: column;
          }

          .calendar-section {
            width: 100%;
          }

          .calendar-grid-container {
            flex-direction: column;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 15px;
          }

          .stat-cards-row {
            flex-direction: column;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .session-client {
            flex-direction: column;
            align-items: flex-start;
          }

          .session-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ResourceFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All", active: true },
    { id: "article", label: "Article", active: false },
    { id: "video", label: "Video", active: false },
    { id: "podcasts", label: "Podcasts", active: false },
  ];

  const tags = [
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
    "Lorem",
  ];

  return (
    <div className="resource-filters">
      {/* Filter Tabs */}
      <div className="filter-tabs">
        {filterTabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`filter-tab ${tab.id === "all" ? "active" : ""} ${
              index === 0
                ? "tab-start"
                : index === filterTabs.length - 1
                  ? "tab-end"
                  : "tab-middle"
            }`}
            onClick={() => setActiveFilter(tab.id)}
          >
            <div className="tab-container">
              <div className="tab-state-layer">
                {tab.id === "all" && (
                  <svg
                    className="check-icon"
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                  >
                    <path
                      d="M4.66172 9.74922L0.386719 5.47422L1.45547 4.40547L4.66172 7.61172L11.543 0.730469L12.6117 1.79922L4.66172 9.74922Z"
                      fill="#06201C"
                    />
                  </svg>
                )}
                <span className="tab-label">{tab.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="filter-tags">
        {tags.map((tag, index) => (
          <div key={index} className="filter-tag">
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

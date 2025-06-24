"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";
import GoalsAssessment from "./components/GoalsAssessment";
import MyCarePlan from "./components/MyCarePlan";
import TherapistCoach from "./components/TherapistCoach";
import Progress from "./components/Progress";
import MicroLearnings from "./components/MicroLearnings";
import Resources from "./components/Resources";
import Settings from "./components/Settings";
import NeedHelp from "./components/NeedHelp";

export default function Home() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "goals-assessment":
        return <GoalsAssessment onSectionChange={handleSectionChange} />;
      case "my-care-plan":
        return <MyCarePlan />;
      case "therapist-coach":
        return <TherapistCoach />;
      case "progress":
        return <Progress />;
      case "micro-learnings":
        return <MicroLearnings />;
      case "resources":
        return <Resources />;
      case "settings":
        return <Settings />;
      case "need-help":
        return <NeedHelp />;
      default:
        return <MainContent onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div
        className={`dashboard-content ${isSidebarExpanded ? "sidebar-expanded-layout" : ""}`}
      >
        <Sidebar
          onToggle={handleSidebarToggle}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <div className="content-wrapper">{renderContent()}</div>
      </div>
    </div>
  );
}

interface ContactCardProps {
  type: "email" | "chat";
  title: string;
  description: string;
  buttonText: string;
}

export default function ContactCard({
  type,
  title,
  description,
  buttonText,
}: ContactCardProps) {
  const getIcon = () => {
    if (type === "email") {
      return (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path
            d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
            fill="#006B5F"
          />
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6Z"
            fill="#006B5F"
          />
        </svg>
      );
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-card-content">
        <div className="contact-icon-wrapper">
          <div className="contact-icon-background">{getIcon()}</div>
        </div>
        <div className="contact-text">
          <h3 className="contact-title">{title}</h3>
          <p className="contact-description">{description}</p>
        </div>
        <div className="contact-button">
          <button className="contact-btn">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

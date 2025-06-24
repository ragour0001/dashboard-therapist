export default function FAQSection() {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2>FAQs</h2>
      </div>

      <div className="faq-grid">
        <div className="faq-row">
          <div className="faq-item">
            <h3 className="faq-question">Is there a free trial available?</h3>
            <p className="faq-answer">
              Yes, you can try us for free for 30 days. If you want, we'll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Can I change my plan later?</h3>
            <p className="faq-answer">
              Of course. Our pricing scales with your company. Chat to our
              friendly team to find a solution that works for you.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">What is your cancellation policy?</h3>
            <p className="faq-answer">
              We understand that things change. You can cancel your plan at any
              time and we'll refund you the difference already paid.
            </p>
          </div>
        </div>
        <div className="faq-row">
          <div className="faq-item">
            <h3 className="faq-question">
              Can other info be added to an invoice?
            </h3>
            <p className="faq-answer">
              Yes, you can try us for free for 30 days. If you want, we'll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question faq-question-medium">
              How does billing work?
            </h3>
            <p className="faq-answer">
              Plans are per workspace, not per account. You can upgrade one
              workspace, and still have any number of free workspaces.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question faq-question-medium">
              How do I change my account email?
            </h3>
            <p className="faq-answer">
              You can change the email address associated with your account by
              going to untitled.com/account from a laptop or desktop.
            </p>
          </div>
        </div>
      </div>

      <div className="still-questions-section">
        <div className="still-questions-content">
          <div className="avatar-group">
            <div className="avatar avatar-1"></div>
            <div className="avatar avatar-2"></div>
            <div className="avatar avatar-3"></div>
          </div>
          <div className="still-questions-text">
            <h3>Still have questions?</h3>
            <p>
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <div className="still-questions-actions">
            <button className="get-in-touch-button">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../mainCssFile/ContactSection.css";
 // 문의 이미지

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title-contact">문의</h2>
      <div className="contact-container">
        <img src="/assets/contact.webp" alt="고객 상담" className="contact-image" />
        <div className="contact-info">
          <p><strong>E-MAIL :</strong> admin@saehangroup.com </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
  
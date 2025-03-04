import "../mainCssFile/ContactSection.css";
import contactImage from "../assets/contact.png"; // 문의 이미지

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">문의</h2>
      <div className="contact-container">
        <img src={contactImage} alt="고객 상담" className="contact-image" />
        <div className="contact-info">
          <p><strong>E-MAIL :</strong> kwm666@naver.com</p>
          <p><strong>TEL :</strong> 010-9953-8461</p>
          <p><strong>FAX :</strong> 112-4840-4547</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
  
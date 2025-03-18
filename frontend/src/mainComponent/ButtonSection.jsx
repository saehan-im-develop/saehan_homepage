import React from "react";
import "../mainCssFile/Button.css"; // CSS 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";

function ButtonSection() {
  return (
    <section className="btn-section icon-main">
      {/* ✅ 티스토리 */}
      <a href="https://copygloo.tistory.com/" target="_blank" rel="noopener noreferrer">
        <button className="btn-ts">
          <span className="first-logo">
            <img src="/tstory.ico" alt="Tistory" className="icon-img" />
          </span>
          <span className="second-logo">
            <img src="/tstory.ico" alt="Tistory" className="icon-img" />
          </span>
        </button>
      </a>

      {/* ✅ 트위터 */}
      <a href="https://x.com/saehan_im" target="_blank" rel="noopener noreferrer">
        <button className="btn-tw">
          <span className="first-logo">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span className="second-logo">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </button>
      </a>

      {/* ✅ 페이스북 */}
      <a href="https://www.facebook.com/profile.php?id=61573575943284&locale=ko_KR" target="_blank" rel="noopener noreferrer">
        <button className="btn-fb">
          <span className="first-logo">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span className="second-logo">
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
        </button>
      </a>

      {/* ✅ 인스타그램 */}
      <a href="https://www.instagram.com/saehan_im/" target="_blank" rel="noopener noreferrer">
        <button className="btn-ig">
          <span className="first-logo">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="second-logo">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </button>
      </a>

      {/* ✅ 쓰레드 */}
      <a href="https://www.threads.net/@saehan_im" target="_blank" rel="noopener noreferrer">
        <button className="btn-th">
          <span className="first-logo">
            <FontAwesomeIcon icon={faThreads} />
          </span>
          <span className="second-logo">
            <FontAwesomeIcon icon={faThreads} />
          </span>
        </button>
      </a>
    </section>
 
  );
}

export default ButtonSection;

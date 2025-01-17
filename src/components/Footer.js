// Footer.js
import React from 'react';
import '../cssfile/Footer.css';  // Footer CSS 파일을 불러옵니다.

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h4>사이트 운영 시작일</h4>
          <p>2024년 11월 1일</p>
        </div>
        <div className="footer-item">
          <h4>문의</h4>
          <p>contact@shopping.com</p>
        </div>
        <div className="footer-item">
          <h4>목적</h4>
          <p>최고의 쇼핑 경험을 제공합니다!</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
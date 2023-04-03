// @ts-nocheck

import React from "react";
import Link from "next/link";

import "../../styles/Components/footer.scss";

const FOOTER_NAV = [
  { title: "캐시나무 소개", url: "/about" },
  { title: "FAQ", url: "/faq" },
  { title: "공지사항", url: "/notice" },
];
const FOOTER_INNER_NAV = [
  { title: "개인정보처리방침", url: "/about" },
  { title: "이용약관", url: "/about" },
];
const Footer = () => {
  return (
    <footer>
      <Link href={""}>
        <h3 className="ad-app-down">
          캐시나무 앱 다운받고, <br /> 편리하게 캐시 적립 하세요.
        </h3>
      </Link>

      <nav className="footer-upper-nav">
        <ul>
          {FOOTER_NAV.map((menu, idx) => {
            return (
              <li className="list-item-font-big" key={idx}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="footer-lower">
        <div className="footer-kt-service">
          <Link href={""}>
            <h3 className="kt-service-title">
              월~금 9:00 ~ 18:00 (주말, 공휴일 휴무)
            </h3>
          </Link>
        </div>
        <nav className="footer-lower-nav">
          <ul>
            {FOOTER_INNER_NAV.map((menu, idx) => (
              <li className="list-item-font-small" key={idx}>
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="list-item-font-xsmall">
          <span>캐시나무 대표</span> <span>이승록</span>
          <br />
          <span> 사업자등록번호</span>
          <span> 306-21-61424 cashnamu@cashnamu.com</span>
          <br />
          <span>
            부산광역시 기장군 정관읍 모전1길 9, 311동 603호 (정관동일스위트3차)
          </span>
          <br />
          <p>Copyright © CashNamu.co,Ltd.All Rights Reserved.</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;

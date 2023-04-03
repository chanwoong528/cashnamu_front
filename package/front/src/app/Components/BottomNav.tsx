// @ts-nocheck
"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import "../../styles/Components/botNav.scss";

const NAV_MENUS = [
  { title: "home", href: "/", label: "홈", id: 0 },
  { title: "shopping", href: "/shopping", label: "쇼핑몰", id: 1 },
  { title: "points", href: "/points", label: "포인트샵", id: 2 },
  { title: "hotdeal", href: "/hotdeal", label: "핫딜", id: 3 },
  { title: "myPage", href: "/mypage", label: "마이페이지", id: 4 },
];

const BottomNav = () => {
  const pathName = usePathname();
  return pathName === "/auth" ? (
    <></>
  ) : (
    <nav className="bot-nav">
      <ul className="nav-list">
        {NAV_MENUS.map((item) => {
          return (
            <li
              className={`list-item-font-small ${
                pathName === item.href ? "active" : ""
              }`}
              key={item.id}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;

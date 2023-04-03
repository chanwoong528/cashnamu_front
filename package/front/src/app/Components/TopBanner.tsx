// @ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import "../../styles/Components/topBanner.scss";
import { useRouter, usePathname } from "next/navigation";

const TopBanner = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(router.asPath);
  console.log(pathname);

  return pathname === "/auth" ? (
    <nav className="top-banner top-banner-login">
      <button>
        <Image
          src={"/asset/icons/nav/top_btn_back.png"}
          width={11}
          height={19}
          objectFit="contain"
          alt="뒤로가기"
        />
      </button>
      <h2>로그인</h2>
    </nav>
  ) : (
    <nav className="top-banner">
      <div className="top-banner-left">
        <Link href="/">
          <h1>
            <Image
              src={"/asset/icons/main_logo.png"}
              width={137}
              height={27}
              objectFit="contain"
              alt="캐시나무"
            />
          </h1>
        </Link>
      </div>
      <div className="top-banner-right">
        <Link href="/auth">
          <span className="login-text">로그인</span>
        </Link>
        <Link href="/">
          <Image
            src={"/asset/icons/icon_faq.png"}
            width={25}
            height={25}
            objectFit="contain"
            alt="캐시나무 로고"
          />
        </Link>
      </div>
    </nav>
  );
};

export default TopBanner;

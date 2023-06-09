// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

import "../../styles/pages/login.scss";

// export const metadata = {
//   title: "스마트한 캐시백 습관-메인인인인",
//   description: "Generated by create next app",
// };

const inter = Inter({ subsets: ["latin"] });

//TODO: right url
const SNS_LOGIN_MENU = [
  { title: "네이버", url: "/" },
  { title: "카카오", url: "/" },
  { title: "구글", url: "/" },
];

export default function Auth() {
  return (
    <main className="main-content main-login">
      <h1>
        <Image
          src={"/asset/icons/main_logo.png"}
          width={200}
          height={40}
          objectFit="contain"
          alt="캐시나무"
        />
      </h1>

      <section>
        <header>
          <h3>간편 로그인</h3>
        </header>
        <ul className="sns-list">
          {SNS_LOGIN_MENU.map((menu, idx) => {
            return (
              <li className="list-item-font-xbig" key={idx}>
                <Link href={menu.url}> {menu.title} 아이디로 로그인</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

// @ts-nocheck
import React from "react";
import { getFAQ } from "../https/faqApi";

async function getData() {
  const data = await getFAQ();
  console.log(data);
}

export default function Page() {
  return <main>faq</main>;
}

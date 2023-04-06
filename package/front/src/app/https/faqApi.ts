// @ts-nocheck
import Axios from "axios";

import { BASE_API_URL } from "./config";

export async function getFAQ(params) {
  try {
    const result = await Axios.get(`${BASE_API_URL}/faq/list`, {});
    console.log(result);
    return result;
  } catch (error) {}
}

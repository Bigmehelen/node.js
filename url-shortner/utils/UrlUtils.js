
import { randomBytes } from "crypto";

export function generateShortCode(length = 7) {
  return randomBytes(length).toString("base64url").slice(0, length);
}

console.log(generateShortCode());


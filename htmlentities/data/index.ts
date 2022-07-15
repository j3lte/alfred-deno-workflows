export interface HTMLElement {
  name: string;
  uni: string;
  hex: string;
  htmlcode: string;
  htmlentity: string | null;
  css: string;
}

import arrows from "./arrows.ts";
import currency from "./currency.ts";
import letters from "./letters.ts";
import math from "./math.ts";
import numbers from "./numbers.ts";
import punctuation from "./punctuation.ts";
import symbols from "./symbols.ts";

export const elements: HTMLElement[] = [
  ...arrows,
  ...currency,
  ...letters,
  ...math,
  ...numbers,
  ...punctuation,
  ...symbols,
];

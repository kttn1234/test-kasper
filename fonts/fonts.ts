import { Open_Sans, Prompt } from "next/font/google";
export const openSans = Open_Sans({
  // weight: "400",
  // display: "swap",
  variable: "--open-sans",
  preload: true,
  subsets: ["latin"],
});

export const prompt = Prompt({
  variable: "--prompt",
  weight: "500",
  // display: "swap",
  preload: true,
  subsets: ["latin"],
});

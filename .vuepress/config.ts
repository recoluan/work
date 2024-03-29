import themeConfig from "./config/theme";
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "reco-work",
  description: "Keep your head up, and never stop learn!",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#42b983" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/hero.png" }],
    ["link", { rel: "mask-icon", href: "/hero.svg", color: "#42b983" }],
    ["meta", { name: "msapplication-TileImage", content: "/hero.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  theme: recoTheme(themeConfig),
});

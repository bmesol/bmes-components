import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "BM e-Solutions",
    brandUrl: "https://www.bmesolutions.in/",
    brandImage:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.bmesolutions.in/wp-content/uploads/2021/06/Bmesol.png",
    brandTarget: "_blank",
  }),
});
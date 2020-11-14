import React from "react";
import { Story } from "@storybook/react/types-6-0.d";
import HeroBanner from "./HeroBanner";
import Input from "../elements/Input";

export default {
  title: "Components",
};

const HeroBannerStory: Story = () => {
  return (
    <HeroBanner>
      <Input handleChange={(s: string) => console.log(s)} />
    </HeroBanner>
  );
};

export { HeroBannerStory as HeroBanner };

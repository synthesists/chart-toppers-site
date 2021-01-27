import React from "react";
import { Story } from "@storybook/react/types-6-0";
import HeroBanner from "./HeroBanner";
import Input from "../Input/Input";

export default {
  title: "Components",
};

const HeroBannerStory: Story = () => {
  return (
    <HeroBanner>
      <Input handleChange={(s: string) => console.log(s)} placeholder="Search for your favourite artists..." />
      <h4>
        <span className="bold">Top searches: </span>Ed Sheeran, Kanye West, The Weeknd
      </h4>
    </HeroBanner>
  );
};

export { HeroBannerStory as HeroBanner };

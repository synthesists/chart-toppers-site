import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Input from "./Input";

export default {
  title: "Components",
};

const InputStory: Story = () => {
  return <Input handleChange={(s: string) => console.log(s)} placeholder="placeholder text" />;
};

export { InputStory as Input };

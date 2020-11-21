import React from "react";
import { Story } from "@storybook/react/types-6-0.d";
import Input from "./Input";

export default {
  title: "Components",
};

const InputStory: Story = () => {
  return <Input handleChange={(s: string) => console.log(s)} />;
};

export { InputStory as Input };
import React from "react";
import { Meta, Story } from "@storybook/react";
import {PopupStatus} from "./PopupStatus";

export default {
  title: "Components/PopupStatus",
  component: PopupStatus,
} as Meta;

export const Template: Story = (args) => <PopupStatus {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      component: "A popup status component for searching and selecting options.",
    },
  },
};

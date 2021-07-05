import React from "react";

import { Story, Meta } from "@storybook/react";

import RepoCard from ".";
import { RepoCardPropTypes } from "./types";

export default {
  component: RepoCard,
  title: "Repo Card"
} as Meta;

const Template: Story<RepoCardPropTypes> = args => (
  <div
    style={{
      position: "absolute",
      margin: 0,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maxWidth: 400
    }}
  >
    <RepoCard {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  username: "dawsonbooth",
  repository: "react-repo-card"
};

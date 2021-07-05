import React from "react";

import { Story, Meta } from "@storybook/react";

import RepoCard from ".";
import { RepoCardPropTypes } from "./types";

export default {
  component: RepoCard,
  title: "Repo Card"
} as Meta;

const Template: Story<RepoCardPropTypes> = args => <RepoCard {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  username: "dawsonbooth",
  repository: "react-repo-card"
};

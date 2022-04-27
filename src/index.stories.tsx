import { Meta, Story } from '@storybook/react'
import React from 'react'
import RepoCard, { RepoCardProps } from '.'

export const Example: Story<RepoCardProps> = args => (
  <div
    style={{
      position: 'absolute',
      margin: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: 400,
    }}
  >
    <RepoCard {...args} />
  </div>
)

Example.args = {
  username: 'dawsonbooth',
  repository: 'react-repo-card',
  dark: false,
}

const story: Meta = {
  component: RepoCard,
  title: 'Example',
}

export default story

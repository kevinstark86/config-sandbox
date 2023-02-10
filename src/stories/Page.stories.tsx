/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */

import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {within, userEvent} from '@storybook/testing-library';
import Page from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

// eslint-disable-next-line func-names
const Template: ComponentStory<typeof Page> = function (args) {
  return <Page {...(args as object)} />;
};

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', {name: /Log in/i});
  await userEvent.click(loginButton);
};

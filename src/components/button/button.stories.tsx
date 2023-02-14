/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function (args) {
  return <Button {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  disabled: false,
  children: 'Click Me',
};
export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  disabled: false,
  children: 'Click Me',
};

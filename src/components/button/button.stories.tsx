/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Click Me',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = function (args) {
  return <Button {...args} />;
};
export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  disabled: false,
  children: 'Click Me',
};

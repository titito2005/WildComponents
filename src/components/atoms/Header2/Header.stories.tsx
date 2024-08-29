import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    label: 'Title',
    color: '500',
    degraded: '900',
    bold: false,
    fontSize: '40px',
  },
};

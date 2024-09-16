import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    label: 'Title',
    color: '500',
    degraded: '900',
    bold: false,
    fontSize: '40px',
  },
};

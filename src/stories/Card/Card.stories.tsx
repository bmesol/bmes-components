import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardDoc from "./CardDoc.md";
import { Card } from './../../lib/components/Card/Card';

const meta: Meta<typeof Card> = {
  title: "components/Card",
  tags: ["autodocs"],
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: CardDoc,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Sample: Story = {
  render: (children) => (
    <Card>
      <h3>Card Title</h3>
      <div>
        <p>Cards contain content and actions about a single subject.
          Cards are surfaces that display content and actions on a single topic.</p>
      </div>
    </Card>
  ),
};



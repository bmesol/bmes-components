import type { Meta, StoryObj } from '@storybook/react';
import { Label} from '../../lib/components/Label/Label';
import LabelDoc from "./LabelDoc.md"
import  { LabelVariants } from '../../lib/components/Label/DTOs';

// --- Metadata for the Storybook story ---

const meta = {
  title: 'Components/Label',
  component: Label,
   tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: LabelDoc,  // Description for the component from LabelDoc.md
      },
    },
  },

} satisfies Meta<typeof Label>;  // Metadata type definition

export default meta;

type Story = StoryObj<typeof meta>; // Typing for the Story

/* --- Stories for Text Label Variants --- */

export const TextDefault:Story={
  args:{
    label:"Not have an acoount?",
    type:"text",
    variant:LabelVariants.DEFAULT
  }
}
export const TextPrimary:Story={
  args:{
    label:"Not have an acoount?",
    type:"text",
    variant:LabelVariants.PRIMARY
  }
}

export const TextSecondary: Story = {
  args: {
    label:"Not have an acoount?",
    type:"text",
    variant:LabelVariants.SECONDARY
  },
};
export const TextDanger: Story = {
  args: {
    label:"Not have an acoount?",
    type:"text",  
    variant:LabelVariants.DANGER
  },
};

export const TextSuccess: Story = {
  args: {
    label:"Not have an acoount?",
    type:"text",
    variant:LabelVariants.SUCCESS
  },
};
export const TextWarning: Story = {
  args: {
    label:"Not have an acoount?",
    type:"text",
    variant:LabelVariants.WARNING
  },
};

/* --- Stories for Text Label Variants --- */

export const LinkDefault:Story={
  args:{
    label:"Not have an acoount?",
    type:"link",
    variant:LabelVariants.DEFAULT
  }
}
  
export const LinkPrimary:Story={
  args:{
    label:"Not have an acoount?",
    type:"link",
    variant:LabelVariants.PRIMARY
  }
}

export const LinkSecondary: Story = {
  args: {
    label:"Not have an acoount?",
    type:"link",
    variant:LabelVariants.SECONDARY
  },
};

export const LinkWarning: Story = {
  args: {
    label:"Not have an acoount?",
    type:"link",
    variant:LabelVariants.DANGER
  },
};

export const LinkDanger: Story = {
  args: {
    label:"Not have an acoount?",
    type:"link",
    variant:LabelVariants.SUCCESS
  },
};

export const LinkSuccess: Story = {
  args: {
    label:"Not have an acoount?",
    type:"link",
    variant:LabelVariants.WARNING
  },
};
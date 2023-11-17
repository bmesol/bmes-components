/// <reference types="react" />
/// <reference types="mdx" />
import ButtonDoc from "./ButtonDoc.md";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    tags: string[];
    component: ({ label, onClick, variant, classNames, isDisabled, }: import("../../lib/components/Button/Button").ButtonProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: typeof ButtonDoc;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Danger: Story;
export declare const Outline_Primary: Story;
export declare const Outline_Secondary: Story;
export declare const Outline_Success: Story;
export declare const Outline_Warning: Story;
export declare const Outline_Danger: Story;

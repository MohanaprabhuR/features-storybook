import Button from "./Button";
import "./Button.module.css";

const meta = {
  title: "Button",
  component: Button,
};

export default meta;

export const Primary = {
  args: {
    label: 'share list',
    size: 'Small',
    variant: 'Default'
  },
  argTypes: {
    label: {
      defaultValue: "Contact Us"
    },
    CustomIcon: {
      table: {
        disable: true
      }
    },
    iconPlacement: {
      table: {
        disable: true
      }
    },
  },
};

export const ButtonIcon = {
  args: {
    label: 'share list',
    size: 'Small',
    variant: 'Default',
    iconPlacement: 'Left'
  },
  argTypes: {
    label: {
      defaultValue: "Contact Us"
    }
  },
};

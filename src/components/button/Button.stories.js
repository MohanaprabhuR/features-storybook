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
    size: 'default',
    variant: 'default'
  },
  argTypes: {
    label: {
      defaultValue: "Contact Us"
    },
    customIcon: {
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
    label: 'share',
    size: 'default',
    variant: 'default',
    iconPlacement: 'left',
  },
  argTypes: {
    label: {
      defaultValue: "Contact Us"
    }
  },
};

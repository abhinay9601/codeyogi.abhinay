import Button from "./button";
import "../../index.css";
import { HiLockClosed,HiLogin ,HiMoon } from "react-icons/hi";

const icons ={HiLockClosed , HiLogin , HiMoon };
export default {
  title: "Button ",
  component: Button,
  argTypes: {
    theme: {
      control: { type: "select" },
    },
    icons:{
      Options:Object.keys(icons),
      mapping: icons,
      control:{
        type: 'select',
        labels:{
          HiLockClosed: "lock closed",
          HiLogin : 'login',
          HiMoon: 'moon icon'
        },
      },
    },
  },
};

const template = (args: any) => <button {...args}></button>;
export const main: any = template.bind({});
main.args = {
  children: "Sign in",
  className: "",
  Icon: HiLockClosed,
};


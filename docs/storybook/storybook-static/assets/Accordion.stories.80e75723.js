var m=Object.defineProperty;var t=(o,n)=>m(o,"name",{value:n,configurable:!0});import{j as r}from"./jsx-runtime.fbd1829f.js";import"./iframe.1c7d6f83.js";const a=t(({primary:o=!1,size:n="medium",backgroundColor:s,label:i,...c})=>{const d=o?"btn-primary":"btn-secondary";return r("button",{type:"button",className:["btn",`btn-${n}`,d].join(" "),style:{backgroundColor:s},...c,children:i})},"Button"),l=a;a.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:'"medium"',computed:!1},required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?"},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const T={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Button",
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:51,line:16},endLoc:{col:1,line:18},startBody:{col:51,line:16},endBody:{col:1,line:18}},secondary:{startLoc:{col:51,line:16},endLoc:{col:1,line:18},startBody:{col:51,line:16},endBody:{col:1,line:18}},large:{startLoc:{col:51,line:16},endLoc:{col:1,line:18},startBody:{col:51,line:16},endBody:{col:1,line:18}},small:{startLoc:{col:51,line:16},endLoc:{col:1,line:18},startBody:{col:51,line:16},endBody:{col:1,line:18}}}}},title:"Components/Core/Button",component:l,argTypes:{backgroundColor:{control:"color"}}},e=t(o=>r(l,{...o}),"Template"),p=e.bind({});p.args={primary:!0,label:"Button"};const u=e.bind({});u.args={label:"Button"};const y=e.bind({});y.args={size:"large",label:"Button"};const g=e.bind({});g.args={size:"small",label:"Button"};const h=["Primary","Secondary","Large","Small"];export{y as Large,p as Primary,u as Secondary,g as Small,h as __namedExportsOrder,T as default};
//# sourceMappingURL=Accordion.stories.80e75723.js.map

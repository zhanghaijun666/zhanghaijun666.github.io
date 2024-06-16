import type { App } from 'vue';

const CLASS_PREFIX = 'u';
// 拼装组件className
export const getComponentCls = (componentName: string): string => `${CLASS_PREFIX}-${componentName}`;

export interface Vue3UIOption {
  componentPrefix?: string;
}
// 注册插件
export const installComponent = (
  app: App,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Vue3UIOption
) => {
  app.component(component.name, component);
};

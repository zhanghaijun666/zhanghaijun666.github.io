import VCode from './components/CodeView/index.vue';
import VLink from './components/navigator/NavLink.vue';

declare module 'vue' {
  export interface GlobalComponents {
    VCode: typeof VCode;
    VLink: typeof VLink;
  }
}

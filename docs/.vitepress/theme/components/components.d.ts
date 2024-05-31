import VCode from './vp-demo/index.vue';
import VLink from './navigator/NavLink.vue';

declare module 'vue' {
  export interface GlobalComponents {
    VCode: typeof VCode;
    VLink: typeof VLink;
  }
}

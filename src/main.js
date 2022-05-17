import { createApp } from 'vue';
import * as Icons from '@element-plus/icons-vue';
import { dragscrollNext } from 'vue-dragscroll';

import App from './App.vue';
import router from './router';

const app = createApp(App);
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});
app.use(router);
app.directive('dragscroll', dragscrollNext);
app.mount('#app');

import Home from './foo.vue' 
import About from './bar.vue'


 /* 1、创建组件 */
  // const Home = Vue.extend({
  //     template: '<div><h1>Home</h1><p>{{msg}}</p></div>',
  //     data: function() {
  //         return {
  //             msg: 'Hello, vue router!'
  //         }
  //     }
  // });
  // const About = Vue.extend({
  //     template: '<div><h1>About</h1><p>This is the tutorial about vue-router.</p></div>'
  // });

  // 2. 创建 router 实例，然后传 `routes`路由映射 配置
  const router = new VueRouter({
    routes: [
      { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/', component: Home } //设置默认路径
    ] 
  });

  // 3. 创建和挂载根实例。记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
  const vm = new Vue({
        router: router 
  }).$mount('#app');

  // 现在，应用已经启动了！
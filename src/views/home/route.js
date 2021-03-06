export default [
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,
    children: [
        // { path: '/main', component: Main, name: '主页', hidden: true },
        { path: '/dashboard', component: r => require.ensure([], () => r(require('./welcome/index.vue')), 'employee'), name: '应用概况', iconCls: 'el-ali-thirdhome'},
        // { path: '/form', component: Form, name: 'Form' },
        // { path: '/user', component: user, name: '列表' },
    ]
  },
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,
    children: [
        // { path: '/main', component: Main, name: '主页', hidden: true },
        { path: '/employee', component: r => require.ensure([], () => r(require('./employee/index.vue')), 'employee'), name: '职员管理', iconCls: 'el-ali-thirdicon_group'},
        // { path: '/form', component: Form, name: 'Form' },
        // { path: '/user', component: user, name: '列表' },
    ]
  },
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,//只有一个节点
    children: [
        { path: '/order', component: r => require.ensure([], () => r(require('./order/index.vue')), 'order'), name: '订单管理',iconCls: 'el-ali-thirddingdanguanli10'},
    ]
  },
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,
    children: [
        { path: '/charts/line', component: r => require.ensure([], () => r(require('./charts/index.vue')), 'system'), name: '报表管理', iconCls: 'el-ali-thirdtubiao-zhexiantu'},
    ]
  },
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,
    children: [
        { path: '/editor', component: r => require.ensure([], () => r(require('./editor/index.vue')), 'editor'), name: '富文本编辑', iconCls: 'el-ali-thirdjiachang_lianxi'},
    ]
  },
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,
    children: [
        { path: '/system', component: r => require.ensure([], () => r(require('./system/index.vue')), 'system'), name: '系统管理', iconCls: 'el-ali-thirdshezhi' },
    ]
  },
  {
    path: '/',
    component: r => require.ensure([], () => r(require('./home.vue')), 'home'),
    name: '',
    iconCls: 'el-icon-menu',//图标样式class
    leaf: true,
    children: [
        { path: '/about', component: r => require.ensure([], () => r(require('./about/index.vue')), 'about'), name: '关于我们', iconCls: 'el-ali-thirdguanyuwomen' },
    ]
  },
]

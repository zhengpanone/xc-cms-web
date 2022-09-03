import Home from '@/module/home/page/home.vue'

export default [{
    path: '/',
    component: Home,
    name:"CMS", // 菜单名称
    hidden: false,
    children: [
        {
            path: 'cms/page/list',
            name: '页面列表',
            component: () => import('@/module/cms/page/page_list.vue'),
            hidden: false
        }
    ]
}]
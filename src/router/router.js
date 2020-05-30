import Main from '../views/main';

// 懒加载
const Article = () => import('../views/article');
const Detail = () => import('../views/detail');
const Page403 = () => import('../views/error/403');
const Page404 = () => import('../views/error/404');
const Page500 = () => import('../views/error/500');

export const constantRouter = [
    {
        path: '*',
        redirect: '/404',
        hidden: true
    },
    {
        path: '/404',
        name: 'error-404',
        meta: {
            title: '页面不存在'
        },
        hidden: true,
        component: Page404
    },
    {
        path: '/',
        redirect: '/article/p/1'
    },
    {
        path: '/article',
        component: Main,
        children: [
            {
                path: 'p/:page',
                name: 'list',
                meta: {
                    // title: 'iishoni - article'
                },
                component: Article
            },
            {
                path: ':id',
                name: 'detail',
                meta: {
                    // title: 'iishoni - detail'
                },
                component: Detail
            }
        ]
    }
];


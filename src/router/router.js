import Main from '../views/main';

// 懒加载
const Article = () => import('../views/article');
const Detail = () => import('../views/detail');

export const constantRouter = [
    {
        path: '/',
        redirect: '/article/1'
    },
    {
        path: '/article',
        component: Main,
        children: [
            {
                path: '/article/:page',
                name: '主页',
                meta: {
                    title: 'iishoni - article'
                },
                component: Article
            }
        ]
    },
    {
        path: '/detail',
        component: Main,
        children: [
            {
                path: '',
                name: 'iishoni - detail',
                meta: {
                    title: 'iishoni - detail'
                },
                component: Detail
            }
        ]
    }
];


import Main from '../views/main';

// 懒加载
const Article = () => import('../views/article');
const Detail = () => import('../views/detail');

export const constantRouter = [
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


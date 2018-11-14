import Header from '../views/header';
import Header2 from '../views/header2';

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
        component: Header,
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
        component: Header2,
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


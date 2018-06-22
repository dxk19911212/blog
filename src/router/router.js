import Header from '../views/header';
import Header2 from '../views/header2';

// 懒加载
const Index = () => import('../views/index');
const Detail = () => import('../views/detail');

export const constantRouter = [
    {
        path: '/',
        redirect: '/home',
        component: Header,
        children: [
            {
                path: '',
                name: '主页',
                meta: {
                    title: '主页'
                },
                component: Index
            }
        ]
    },
    {
        path: '/detail',
        component: Header2,
        children: [
            {
                path: '',
                name: '详情页',
                meta: {
                    title: '详情页'
                },
                component: Detail
            }
        ]
    },
    {
        path: '/test',
        component: Header
    }
];


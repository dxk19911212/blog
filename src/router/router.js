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
                    title: '一绪に！！(*^▽^*)'
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
                name: 'iishoni - detail',
                meta: {
                    title: 'iishoni - detail'
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


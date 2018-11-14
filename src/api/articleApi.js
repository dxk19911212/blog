import request from '../utils/request'

export function getTagList() {
    return request({
        url: '/tag',
        method: 'get'
    })
}

export function getArticleList(params) {
    return request({
        url: '/article',
        method: 'get',
        params: params
    })
}

export function getArticleInfo(id) {
    return request({
        url: '/article/' + id,
        method: 'get'
    })
}
import * as types from './types'
import * as articleApi from '../api/articleApi'

const state = {
    device: {
        isMobile: false,
        isDesktop: false
    },
    tags: [],
    article: {
        list: [],
        count: 0,
        info: {}
    }
};

const getters = {
    device: state => state.device,
    tags: state => state.tags,
    article: state => state.article
};

const actions = {
    // 自适应检测
    ToggleDevice({commit}, device) {
        commit(types.TOGGLE_DEVICE, device)
    },

    // 获取所有标签
    GetTagList({commit}) {
        return new Promise((resolve, reject) => {
            articleApi.getTagList().then(response => {
                const data = response.data;
                commit(types.GET_TAG_LIST, data);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取列表
    GetArticleList({commit}, params) {
        return new Promise((resolve, reject) => {
            articleApi.getArticleList(params).then(response => {
                const data = response.data;
                commit(types.GET_ARTICLE_LIST, data);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取详情
    GetArticleInfo({commit}, id) {
        return new Promise((resolve, reject) => {
            articleApi.getArticleInfo(id).then(response => {
                const data = response.data;
                commit(types.GET_ARTICLE_INFO, data);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 新增
    SaveArticle({commit}, data) {
        return new Promise((resolve, reject) => {
            articleApi.saveArticle(data).then(response => {
                commit(types.SAVE_ARTICLE, data);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 更新
    UpdateArticle({commit}, data) {
        return new Promise((resolve, reject) => {
            articleApi.updateArticle(data).then(response => {
                commit(types.UPDATE_ARTICLE, data);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
};

const mutations = {
    [types.TOGGLE_DEVICE](state, device) {
        state.device.isMobile = device === 'mobile';
        state.device.isDesktop = device === 'desktop';
    },
    [types.GET_TAG_LIST](state, data) {
        state.tags = data;
    },
    [types.GET_ARTICLE_LIST](state, data) {
        state.article.list = data.list;
        state.article.count = data.count;
    },
    [types.GET_ARTICLE_INFO](state, data) {
        state.article.info = data;
    },
    [types.SAVE_ARTICLE](state) {
    },
    [types.UPDATE_ARTICLE](state) {
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

import * as types from './types'

const state = {
    device: {
        isMobile: false,
        isTablet: false
    }
};

const getters = {
    device: state => state.device
};

const actions = {
    ToggleDevice({commit}, device) {
        commit(types.TOGGLE_DEVICE, device)
    }
};

const mutations = {
    [types.TOGGLE_DEVICE](state, device) {
        state.device.isMobile = device === 'mobile';
        state.device.isTablet = device === 'tablet'
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

export default {
    state: () => ({
        mobileNavVisible: false,
        overlayVisible: false,
        isActive: false,
        showCart: false,
    }),

    actions: {
        toggleMobileNavigation({ commit, state }) {
            commit("SET_MOBILE_STATE", !state.mobileNavVisible);
        },
        toggleOverlay({ commit, state }) {
            commit("TOGGLE_OVERLAY", !state.overlayVisible);
        },
        setShowCart({ commit }, showCart) {
            commit('SET_SHOW_CART', showCart)
        },

    },

    mutations: {
        SET_MOBILE_STATE(state, visibility) {
            state.mobileNavVisible = visibility;
        },
        TOGGLE_OVERLAY(state, visibility) {
            state.overlayVisible = visibility;
        },
        SET_SHOW_CART(state, showCart) {
            state.showCart = showCart
        },
    },
    getters: {
        cartCount(state) {
            return state.checkout?.lineItems?.length || 0
        },
    }

};

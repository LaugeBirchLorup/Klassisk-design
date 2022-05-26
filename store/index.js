export default {
    state: () => ({
        mobileNavVisible: false,
        overlayVisible: false,
        isActive: false,
    }),

    actions: {
        toggleMobileNavigation({ commit, state }) {
            commit("SET_MOBILE_STATE", !state.mobileNavVisible);
        },
        toggleOverlay({ commit, state }) {
            commit("TOGGLE_OVERLAY", !state.overlayVisible);
        },

    },

    mutations: {
        SET_MOBILE_STATE(state, visibility) {
            state.mobileNavVisible = visibility;
        },
        TOGGLE_OVERLAY(state, visibility) {
            state.overlayVisible = visibility;
        },
    }

};

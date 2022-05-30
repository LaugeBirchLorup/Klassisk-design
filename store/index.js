export default {
    state: () => ({
        checkout: {},
        removing: false,
        mobileNavVisible: false,
        overlayVisible: false,
        isActive: false,
        showCart: false,
        isButtonActive: false,
    }),

    actions: {
        toggleMobileNavigation({ commit, state }) {
            commit("SET_MOBILE_STATE", !state.mobileNavVisible);
        },
        toggleOverlay({ commit, state }) {
            commit("TOGGLE_OVERLAY", !state.overlayVisible);
        },
        setButtonActive({ commit, state }) {
            commit("SET_BUTTON_ACTIVE", !state.isButtonActive);
        },
        setShowCart({ commit }, showCart) {
            commit('SET_SHOW_CART', showCart)
        },
        async createCheckout({ state, commit }) {
            await this.$shopify.checkout.create().then((checkout) => {
                commit('UPDATE_CHECKOUT', checkout)
            })
        },
        async addItem({ commit, state, dispatch }, variantId) {
            const lineItemsToAdd = [
                {
                    variantId,
                    quantity: 1,
                },
            ]
            if (!state.checkout.id) {
                console.log('# Checkout does not exist! Creating a new one.')
                await dispatch('createCheckout')
            }
            await this.$shopify.checkout
                .addLineItems(state.checkout.id, lineItemsToAdd)
                .then((checkout) => {
                    commit('UPDATE_CHECKOUT', checkout)
                })
        },
        async removeItem({ commit, state }, variantId) {
            const lineItemIdsToRemove = [variantId]

            commit('UPDATE_REMOVING', true)

            await this.$shopify.checkout
                .removeLineItems(state.checkout.id, lineItemIdsToRemove)
                .then((checkout) => {
                    commit('UPDATE_CHECKOUT', checkout)
                    commit('UPDATE_REMOVING', false)
                })
        },
    },

    mutations: {
        
        SET_BUTTON_ACTIVE(state){
            state.isButtonActive =  !state.isButtonActive;
        },
        SET_MOBILE_STATE(state, visibility) {
            state.mobileNavVisible = visibility;
        },
        TOGGLE_OVERLAY(state, visibility) {
            state.overlayVisible = visibility;
        },
        SET_SHOW_CART(state, showCart) {
            state.showCart = showCart
        },
        SET_CHECKOUT_ID(state, checkoutId) {
            state.checkout.id = checkoutId
        },
        UPDATE_CHECKOUT(state, checkout) {
            state.checkout = { ...checkout }
        },
        UPDATE_REMOVING(state, removing) {
            state.removing = removing
        },
    },

    getters: {
        cartCount(state) {
            return state.checkout?.lineItems?.length || 0
        },
        checkout(state) {
            return state.checkout
        },
    }

};

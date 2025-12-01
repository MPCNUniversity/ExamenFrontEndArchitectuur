// =========================
// js/teams.js
// =========================
const CartFeature = (function () {
    function init() {
        // initial render
        CartComponent.render(CartStore.getItems(), CartStore.getTotal());
        // luister naar cart-changes
        CoreEventBus.subscribe("CART_CHANGED", payload => {
            CartComponent.render(payload.items, payload.total);
        });
    }
    return {
        init
    };
})();
export const CoreEventBus = {
    listeners: {},

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    publish(eventName, payload) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(payload));
    }
};

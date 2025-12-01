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
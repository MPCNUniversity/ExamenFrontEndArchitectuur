// =========================
// js/main.js
// =========================

import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

import { Teams } from './teams.js';
import { LogFeature } from './logboek.js';
import { Minutes } from './logica.js';

// =========================
// AppMain bootstrap
// =========================

export const AppMain = (function () {

    function init() {
        Teams.init();
        LogFeature.init();
        Minutes.init();

    }

    return {
        init
    };

})();

// =========================
// Start app wanneer DOM geladen is
// =========================

document.addEventListener('DOMContentLoaded', () => {
    AppMain.init();
});

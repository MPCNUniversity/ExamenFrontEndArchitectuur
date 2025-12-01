// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const exTimeModule = (function () {

    let total = 0;

    function add(amount){
        total += amount;
        render();
    }

    function reset(){
        total = 0;
        render();
    }

    function render(){
        document.querySelector("#time_display").textContent = total;
    }
    return{
        add,
        reset
    };
})();

document
    .querySelector("#btn_brief")
    .addEventListener("click", () => exTimeModule.add(7));

document
    .querySelector("#btn_shift")
    .addEventListener("click", () => exTimeModule.add(33));

document
    .querySelector("#btn_zero")
    .addEventListener("click", exTimeModule.reset);
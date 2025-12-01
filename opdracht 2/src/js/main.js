// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const exMeldingen = (function () {
    let meldingen = [];
    function saveMelding(interval){
        meldingen.push({
            interval,
            time: new Date().toLocaleTimeString()
        });
    }
    function showMelding(){
        const ul = document.querySelector("#notify_output");
        ul.innerHTML = meldingen
            .map(melding => `
            `);
    }

})();


function handleAddMelding(){
    const meldingSelect = document.querySelector("#notify_interval");
    const minutesInput = parseInt(minutesInput.value, 10);

    if (isNAN(minutes) || minutes <= 0) {}
        alert("Geef een geldig aantal minuten in.");
        return;
}

addmelding();


document
    .querySelector("#btn_notify_save")
    .addEventListener("click", () => exMeldingen.saveMelding);

document
    .querySelector("#btn_notify_show")
    .addEventListener("click", () => exMeldingen.showMelding);


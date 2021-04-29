var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Start");
    let chosenCharacter = "A"; // Lokale Variable, die den gewählten Buchstaben speichert//
    window.addEventListener("load", handleLoad); //listener ans window der die Funktion handleLoad auslöst, wenn alles geladen hat
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail"); //mail div wird selektiert//
        mail.addEventListener("click", placeLetter); //click listener für das div, der die Funktion placeLetter aufruft//
        document.addEventListener("keydown", chooseCharacter); //keydown event listener für das document, der die Funktion choose letter aufruft//
    }
    function placeLetter(_event) {
        console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        //if (_event.currentTarget != _event.target) //Lösung 2
        //return;
        //if (_event.currentTarget != _event.target) //Lösung 3
        //deleteLetter(_event);
        //return;
        let mail = _event.target; //???
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        // letter.addEventListener("click", deleteLetter); Lösung 3
    }
    function chooseCharacter(_event) {
        console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
        // _event.stopPropagation(); //Lösung 1
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=blackmailerScript.js.map
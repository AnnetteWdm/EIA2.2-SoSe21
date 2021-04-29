var Randompoem;
(function (Randompoem) {
    let subjects = ["Angelo Mertel und Regierung", "Querdenker", "Robert kocht instantfood", "Maskenaffäre-Beteiligte", "Urlauber:innen, die nach Malle fliegen", "Den Wendler und seine Fans"];
    let predicates = ["entgegen der Empfehlung des RKI", "wenn die Sonne im Zenit steht", "wenn Sie die liebe Bitte annehmen", "wenn 50% der Bevölkerung geimpft sind", "sofort", "nach eigenem Ermessen"];
    let objects = ["mit Trockenhefe versorgen", "schließen", "öffnen", "vom Balkon aus applaudieren", "von Telegramm abmelden", "steuerlich entlasten"];
    console.log(subjects, predicates, objects);
    for (let i = objects.length; i > 0; i--) {
        //console.log(i);
        let output = getVerse(subjects, predicates, objects);
        console.log(output);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let verse = "";
        let rSubject = Math.floor(Math.random() * _subjects.length);
        let rPredicate = Math.floor(Math.random() * _predicates.length);
        let rObject = Math.floor(Math.random() * _objects.length);
        verse = _subjects.splice(rSubject, 1) + " "
            + _predicates.splice(rPredicate, 1) + " "
            + _objects.splice(rObject, 1) + "!";
        return verse;
    }
})(Randompoem || (Randompoem = {}));
//# sourceMappingURL=script.js.map
 namespace Randompoem {

    let subjects: string [] = ["Angelo Mertel und Regierung", "Querdenker", "Robert kocht instantfood", "Maskenaffäre-Beteiligte", "Urlauber:innen, die nach Malle fliegen", "Den Wendler und seine Fans"];
    let predicates: string [] = ["entgegen der Empfehlung des RKI", "wenn die Sonne im Zenit steht", "wenn Sie die liebe Bitte annehmen", "wenn 50% der Bevölkerung geimpft sind", "sofort", "nach eigenem Ermessen"];
    let objects: string [] = ["mit Trockenhefe versorgen", "schließen", "öffnen", "vom Balkon aus applaudieren", "von Telegramm abmelden", "steuerlich entlasten"];

    console.log(subjects, predicates, objects);

    for (let i: number = objects.length; i > 0; i--) {
    //console.log(i);
    
    let output: string = getVerse(subjects, predicates, objects);
    console.log(output);
    
    }
    
    function getVerse (_subjects: string[], _predicates: string[], _objects: string[] ): string {
        let verse: string = "";

        
        let rSubject: number = Math.floor(Math.random() * _subjects.length);
        let rPredicate: number = Math.floor(Math.random() * _predicates.length);
        let rObject: number = Math.floor(Math.random() * _objects.length);

        verse = _subjects.splice(rSubject, 1) + " "
            + _predicates.splice(rPredicate, 1) + " "
            + _objects.splice(rObject, 1) + "!";

        return verse ;
    }
} 
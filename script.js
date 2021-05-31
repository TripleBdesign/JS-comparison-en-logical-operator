//Maak een const genaamd age en geef het een waarde van het type number
const age = 46;

//Schrijf een if statement die controleert of de age van de persoon (de input) groter is dan of gelijk aan 18 jaar.
//Console.log() een bericht naar de console wanneer de persoon naar binnen mag.
//Console.log() een ander bericht wanneer de persoon te jong is en vriendelijk wordt verzocht buiten te blijven
//Schrijf een if statement die controleert of de input waar is of niet waar is.
if (age >= 18){
    console.log("Jij bent ouder dan 18 en mag naar binnen.");

} else {
    console.log("Jij bent jonger dan 18 en mag niet naar binnen. We verzoeken je om buiten te blijven. ");
}


//Draai je programma in node, zoals je hebt geleerd.
//Probeer een aantal variabelen als input (de leeftijd van de persoon aan de deur). Werkt je code?
//Ja de code werkt.

//Naast de leeftijdsgrens, heb je ook een ladiesnight. 
//Voor de kaartverkoop van het feest, moet er natuurlijk online gecontroleerd worden over de persoon die de tickets koopt aangegeven heeft een vrouw te zijn.
//Schrijf een nieuwe const genaamd isFemale die als waarde een boolean (true/false) krijgt.

const isFemale = true;
//Dat =true zou ook weg mogen
if (isFemale) {
    console.log ("Jij bent een vrouw en mag naar de Ladiesnight.")
} else {
    console.log ("Jij bent een man en mag niet naar de Ladiesnight.")
}

//Als kroegbaas vind je het ook belangrijk dat de mensen veilig thuiskomen. Zeker als ze natuurlijk een glaasje hebben gedronken.
//Schrijf een nieuwe const genaamd driverStatus met de waarde 'bob'.

const driverStatus = "bob";

//Schrijft een if statement die controleert of de input van de driverStatus gelijk is aan 'bob'.
//Console.log een bericht als de bestuurder de status van bob heeft en mag rijden.
//Console.log een bericht als de bestuurder geen bob is en dus niet mag rijden.

if (driverStatus === "bob") {
 console.log ("Jij bent de Bob en mag rijden.");
} else {
    console.log ("Jij hebt gedronken en mag niet rijden.")
}

//Deel 1: 50% korting
//Naast de leeftijds-check van 18 jaar en ouder, wil je een nieuwe leeftijdscheck invoeren. Je wil namelijk graag wat jongere bezoekers naar je kroeg trekken en daarom heb je besloten dat kroegbezoekers tussen de 18 en 25 jaar een korting van 50% op hun biertjes krijgen.
//Schrijf een nieuw if statement, die checkt of leeftijd age tussen de 18 jaar of ouder en 25 jaar en jonger is.
//console.log("Je krijgt 50% korting!") als dat waar is, en iets anders als het niet waar is.
//Tip: gebruik &&

if (age > 18 && age < 25) {
    console.log ("Je krijgt 50% korting!");
} else {
    console.log ("Helaas, je valt buiten de groep en krijgt geen korting.")
}

//Je kroeg bestaat 50 jaar! Daarom krijgt iedereen die "Sarah" of "Abraham" heet een gratis biertje! Oke niemand heet tegenwoordig meer Abraham, dus laten we er "Bram" van maken.
//Maak een nieuwe const genaamd name en geef de persoon een naam.
//Check met een if statement of de persoon recht heeft op een gratis biertje op deze feestelijke dag.
//console.log de uitkomst van je if/else statement naar de console.
//Tip: gebruik ||

const name = "Hans";

if (age === 50 || name === "Bram") {
    console.log ("Hoera jij bent 50 jaar en krijgt een gratis biertje!")
} else {
    console.log ("Helaas krijg jij geen gratis biertje, je bent niet 50 jaar.")
}

//Naast deze ludieke actie, zijn er nog veel meer feestelijke kortingen tijdens jullie 50-jarig bestaan.
//Bestel je voor meer dan 25 euro aan drankjes? Dan krijg je gratis (vega)bitterballen.  Bestel je voor meer dan 50 euro aan drankjes? Dan krijg je gratis portie nachos.
//Bestel voor 100 euro of meer? Dan krijg je een gratis flesje champagne. 
//Je raadt het al, schrijf een if/else boom om aan de bezoeker te laten weten welk gratis cadeau hij of zij krijgt op basis van het aantal euro's van zijn of haar bestelling.
//Gebruik de const genaamd totalAmount .


const totalAmount = 75;

if (totalAmount >= 100) {
    console.log ("Jij krijgt een gratis flesje champagne bij je bestelling.");
} else if (totalAmount <100 && totalAmount > 50) {
    console.log ("Jij krijgt gratis een portie nachos bij je bestelling.");
} else if (totalAmount <50 && totalAmount >25) {
    console.log ("Jij krjig gratis een portie (vega)bitterballen bij je bestelling.");
}
//PPGAVE 1

//Din første oppgave er å koble denne JavaScript-filen til index.html-filen
//ved å bruke en av metodene vi viste i første forelesning.

//<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
//javascript.js
//******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

let exampleString="this is string";
console.log(exampleString);

let exampleNumber=30;
console.log(exampleNumber);

let isOngoing = true;
console.log(isOngoing);

let exampleArray=["10" ,"20" ,"30"];
console.log(exampleArray);

const userName="Richard";
console.log(userName);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

let x=10;
let y=5;

console.log(x+y);
console.log(y-x);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(y**2);

let score=10;
console.log(score++);
console.log(++score);
console.log(--score);

console.log(score+=10);
console.log(score-=5);
console.log(score*=2);

const mySet=20;
console.log(mySet*mySet);



/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName1 = "Alex";
let userAge = 18;
let userIsLoggedIn = true;
let userIsBlocked = false;
let goToPage = "/home";

// Skriv koden for oppgave 4 her

if(userName1 && userAge && userIsBlocked){
   console.log(userIsLoggedIn);
}else {
    console.log("goToPage");
   }

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her

const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle); 

const userMale1 =true;

const userTitle1 = userMale1 ? "text" : "data";
console.log(userTitle1);
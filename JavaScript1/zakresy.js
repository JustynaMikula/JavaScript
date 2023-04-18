//ZAKRESY
//zakres globalny

const zmienna1 = "Jan";

// console.log(zmienna1);

//zakres lokalny 1
//z zakresu lokalnego mamy dostęp do globalnego
function fn1 (){
    const zmiennaWFuncji = 123;
 
    //return kończy działanie funkcji
    // return może coś z funkcji ZWRACAĆ
    return zmiennaWFuncji;

// const wynikFunkcji = fn1();

// console.log(wynikFunkcji);

}
//zakres lokalny 2
function fn2(){
    return "Zwrócony tekst";
}

const wynikfn2 = fn2();

console.log(wynikfn2);



const country = "polska";

function capitalize (str) {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
return result;
}
const capitalizeCountry = capitalize(country);


const content = `Kraj w którym mieszkam to ${capitalizeCountry}`;

console.log(content);

function addNums (a,b) {
    return a + b;
    
}
const wynik1 = addNums(3,3);
const wynik2 = addNums(2,3);
const wynik3 = addNums(5,5);

console.log(wynik1);
console.log(wynik2);
console.log(wynik3);

const element = document.getElementById("txt");
element.textContent = wynik2;

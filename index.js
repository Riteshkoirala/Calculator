let calcu = document.querySelector("#calc");
const oneEl = document.querySelector("#one");
const twoEl = document.querySelector("#two");
const threeEl = document.querySelector("#three");
const fourEl = document.querySelector("#four");
const fiveEl = document.querySelector("#five");
const sixEl = document.querySelector("#six");
const sevenEl = document.querySelector("#seven");
const eightEl = document.querySelector("#eight");
const nineEl = document.querySelector("#nine");
const zeroEl = document.querySelector("#zero");
const addEl = document.querySelector("#add");
const subEl = document.querySelector("#sub");
const divEl = document.querySelector("#div");
const munEl = document.querySelector("#mun");
const modEl = document.querySelector("#modu");
const eqlEl = document.querySelector("#equ");
const dotEl = document.querySelector("#dot");
const refEl = document.querySelector("#ref");




function changeVal(val, element){
    element.addEventListener("click", function () {
        calcu.value += val;

        
    });
}
changeVal(1, oneEl);
changeVal(2, twoEl);
changeVal(3, threeEl);
changeVal(4, fourEl);
changeVal(5, fiveEl);
changeVal(6, sixEl);
changeVal(7, sevenEl);
changeVal(8, eightEl);
changeVal(9, nineEl);
changeVal(0, zeroEl);
changeVal(".", dotEl);

let num = [];
let sum = 0;

function calculateA(element){

    element.addEventListener("click", function () {
          num.push(parseFloat(calcu.value));
          for(let i=0; i<num.length; i++){
            sum += parseFloat(num[i]);
          }
        calcu.value = null;
        calcu.placeholder = sum;
        sum = 0;
        console.log(num)
    });}

    refEl.addEventListener("click", function(){
        calcu.value = null;
        calcu.placeholder = "";
        num = [];
        subt = [];
        Mun = 1;
    });
    subt = [];
    sub = 0;
    eqlEl.addEventListener("click", function() {

        if(num.length>=1){
        num.push(parseFloat(calcu.value));
        for(let i=0; i<num.length; i++){
          sum += parseFloat(num[i]);
        }
        calcu.value = sum;
        console.log(sum)
        num = [];
        console.log(num)
        sum = 0;
    }

    else if(subt.length>=1){
        subt.push(parseFloat(calcu.value));
        for(let i=0; i<subt.length; i++){
                sub = parseFloat(subt[i-1]) - parseFloat(subt[i]);
        }
        calcu.value = sub;
      subt = [];
      console.log(subt)
    }
    else if(Mun>1){
        rov = calcu.value;
        Mun = parseFloat(rov) * Mun;
        calcu.value = Mun;
        Mun = 1;
    }

    else if(dive>1){
        reo = calcu.value;
        dive = dive/parseInt(reo);
        calcu.value = dive;
        dive = 1;
    }
    else if(modu>1){
        let ram  = calcu.value;
        let result = parseFloat(modu%ram);
        calcu.value = result;
    }

    })


    function calculateS(element){

    element.addEventListener("click", function () {
        subt.push(parseFloat(calcu.value));
        console.log(subt)
        for(let i=0; i<subt.length; i++){
            if(subt.length>1){
                sub = parseFloat(subt[i-1]) - parseFloat(subt[i]);
            }
            else{
                sub = calcu.value;
            }
        }
        calcu.value = null;
      calcu.placeholder = sub;
      subt = [];
      console.log(subt);
      subt.push(sub);
      sub = 0;
      console.log(subt);
    });}

    let Mun = 1;

    function calculateM(element){

    element.addEventListener("click", function () {
        rov = calcu.value;
        Mun = parseFloat(rov) * Mun;
        calcu.placeholder = Mun;
        calcu.value = null;
    });}
    let dive = 1;
    function calculateD(element){

    element.addEventListener("click", function () {
        reo = calcu.value;
        if(dive>1){
            dive = dive/parseInt(reo);
            calcu.placeholder = dive;
        }
        else{
            dive =reo;
            calcu.placeholder = dive;

        }
        calcu.value = null;
    });
}
let modu = 1;
function calculateMo(element){

    element.addEventListener("click", function () {
        modu = calcu.value;
        calcu.placeholder = modu;
        calcu.value = null;
})
}

calculateA(addEl);
calculateS(subEl);
calculateM(munEl);
calculateD(divEl);
calculateMo(modEl);



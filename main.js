const display1Elem = document.querySelector('.display-1');
const display2Elem = document.querySelector('.display-2');
const currentResElem = document.querySelector('.current-res');
const numbersElem = document.querySelectorAll('.num');
const operationsElem = document.querySelectorAll('.ops');
const equalsTo = document.querySelector('.equal');
const clearScreen = document.querySelector('.clrscr');
const clear = document.querySelector('.clr');

let display1Number = '';
let display2Number = '';
let res = null;
let lastOperation = '';
let dottt = false;

numbersElem.forEach(num => {
    num.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !dottt){
            dottt=true;
        }
        else if(e.target.innerText ==='.' && dottt){
            return;
        }
        display2Number += e.target.innerText;
        display2Elem.innerText = display2Number;
    })
})


operationsElem.forEach(ops => {
    ops.addEventListener('click', (e)=>{
        if(!display2Number)
        res;
        dottt=false;
        const opName = e.target.innerText;
        if(display1Number && display2Number && lastOperation){
            mathOperation();
        }
        else{
            res = parseFloat(display2Number);
        }
        clearVar(opName);
    })
})

function clearVar(namee = ''){
    display1Number+=display2Number + ' ' + namee + ' ';
    display1Elem.innerText = display1Number;
    display2Elem.innerText = '';
    display2Number='';
};

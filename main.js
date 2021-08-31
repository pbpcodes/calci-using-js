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
});


operationsElem.forEach(ops => {
    ops.addEventListener('click', (e)=>{
        if(!display2Number)
        return;
        dottt=false;
        const opName = e.target.innerText;
        if(display1Number && display2Number && lastOperation){
            mathOperation();
        }
        else{
            res = parseFloat(display2Number);
        }
        clearVar(opName);
        lastOperation=opName;
    })
});

function clearVar(namee = ''){
    display1Number+=display2Number + ' ' + namee + ' ';
    display1Elem.innerText = display1Number;
    display2Elem.innerText = '';
    display2Number='';
    currentResElem.innerText = res;
};

function mathOperation(){
    if(lastOperation==='x'){
        res = parseFloat(res)*parseFloat(display2Number);
    }
    else if(lastOperation==='+'){
        res = parseFloat(res)+parseFloat(display2Number);
    }
    else if(lastOperation==='-'){
        res = parseFloat(res)-parseFloat(display2Number);
    }
    else if(lastOperation==='/'){
        res = parseFloat(res)/parseFloat(display2Number);
    }
    else if(lastOperation==='%'){
        res = parseFloat(res)%parseFloat(display2Number);
    }
}

equalsTo.addEventListener('click', (e)=>{
    if(!display1Number || !display2Number) 
    return;
    dottt=false;
    mathOperation();
    clearVar();

    display2Elem.innerText = res;
    currentResElem.innerText = '';
    display2Number = res;
    display1Number = '';
    display1Elem.innerText='0';
});

clearScreen.addEventListener('click', (e)=>{
    display2Elem.innerText='0';
    display1Elem.innerText = '0';
    display2Number = '';
    display1Number = '';
    res='';
    currentResElem.innerText='0';
});

clear.addEventListener('click', (e)=>{
    display2Elem.innerText='0';
    display2Number = '';
});

//Takes input from keyboard too :)

//Numbers
window.addEventListener('keydown', (e)=>{
    if(
        e.key==='0' ||
        e.key==='1' ||
        e.key==='2' ||
        e.key==='3' ||
        e.key==='4' ||
        e.key==='5' ||
        e.key==='6' ||
        e.key==='7' ||
        e.key==='8' ||
        e.key==='9' ||
        e.key==='.'
    ){
        keyboardClick(e.key);
    }
});

function keyboardClick(key){
    numbersElem.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    })
}

//Operations and equals

window.addEventListener('keydown', (e)=>{
    if(
        e.key==='+' ||
        e.key==='-' ||
        e.key==='/' ||
        e.key==='%' 
    ){
        keyboardClickOperations(e.key);
    }
    else if(e.key==='*'){
        keyboardClickOperations('x');
    }
    else if(e.key==='=' || e.key=='Enter'){
        equalsTo.click();

    }
});

function keyboardClickOperations(key){
    operationsElem.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}



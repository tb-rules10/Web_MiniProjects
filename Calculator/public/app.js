const form = document.querySelector('#calculator');
const cont = document.querySelector('.cont');


form.addEventListener('submit',calc)

async function calc(e) {
    e.preventDefault();
    const num1 = parseInt(form.elements.number1.value);
    const num2 = parseInt(form.elements.number2.value);
    const op = form.elements.operation.value;
    let res = "Invalid Input!"
    // console.log(op)
    // console.log(num1 + num2)
    switch(op){
        case '+':
            res = num1 + num2
            res = "Output: " + res
            break;
        case '-':
            res = num1 - num2
            res = "Output: " + res
            break;
        case '*':
            res = num1 * num2
            res = "Output: " + res
            break;
        case '*':
            res = num1 * num2
            res = "Output: " + res
            break;
        case '/':
            res = num1 / num2
            res = "Output: " + res
            break;
    }
    // print(res)
    print(res)
}

const print = (res) => {
    cont.innerHTML='';
    const output = document.createElement("b");
    output.innerText = res;
    cont.append(output);
}
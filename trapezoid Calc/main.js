document.getElementById('calculate').addEventListener('click',calculate)

function calculate(){
    let b1= Number(document.getElementById('b1').value);
    let b2= Number(document.getElementById('b2').value);
    let h= Number(document.getElementById('h').value);

    let result= 1/2*(b1+b2)*h;
    result=(result.toFixed(2))

    document.getElementById('output').innerHTML=result
}
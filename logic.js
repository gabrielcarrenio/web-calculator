let acum;

function addNumber(num){
    console.log(num);
}

function handleClick(num) {
    //console.log(num, typeof num);
    if(typeof num == "number"){
        showResult(acum)
        let numStr = `${num}${acum}`
        acum = parseInt(numStr); 
    }
}

function showResult(data){
    var result = document.querySelector(".result")
    result.innerHTML = data
}

function main() {
    showResult("...");
}

main();
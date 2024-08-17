
let counter=0;
function getData(data){
    console.log("fetching data.. " + counter++ +" "+data)
}

function debounce(fun,delay){
    let timer;
    return function (){
        let args = arguments
        let context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun.apply(context,args)
        },delay)
    }
}

let betterFunction = debounce(getData,300);
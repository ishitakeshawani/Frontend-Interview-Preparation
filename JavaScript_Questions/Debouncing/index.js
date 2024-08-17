
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


// extra flag called immediate to execute the function immediately
// without any further delay. After initial execution it won’t run again till
// the delay.

function debounce1(fun,delay,immediate){
    let timer; 
    return function(){
        let args = arguments
        let context = this
        const callNow = immediate && !timer
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            if(!immediate){
                fun.apply(context,args)
            }

        },delay)
        if(callNow) fun.apply(context,args)

    }
}

let betterFunction1 = debounce1(getData,300,true);

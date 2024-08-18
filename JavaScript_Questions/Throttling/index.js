
function logger(){
    console.log("clicked",new Date().getMilliseconds())
}

function Throttle(func,limit){
    let run = true
    return function(...args){
        if(run){
            func.apply(this,args)
            run = false
            setTimeout(() => {
                run = true
            },limit)
        }

    }
}

let handleClick = Throttle(logger,500)



document.getElementById("btn").addEventListener("click",handleClick)
document.querySelector("#grandParent").addEventListener("click",(event)=>{
    console.log('GrandParent clicked');
},true)

document.querySelector("#parent").addEventListener("click",(event)=>{
    console.log('Parent clicked');
    event.stopPropagation()
},true)  


document.querySelector("#child").addEventListener("click",()=>{
    console.log('Child clicked');
},true) 
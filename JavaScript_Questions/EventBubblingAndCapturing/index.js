document.querySelector("#grandParent").addEventListener("click",()=>{
    console.log('GrandParent clicked');
},true) // capturing

document.querySelector("#parent").addEventListener("click",()=>{
    console.log('Parent clicked');
},false)  // bubbling


document.querySelector("#child").addEventListener("click",()=>{
    console.log('Child clicked');
},true) // capturing
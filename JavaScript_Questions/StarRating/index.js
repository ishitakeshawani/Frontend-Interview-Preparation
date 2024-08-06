const rating = document.querySelector(".rating")
const numberOfStars = 5;
let selectedRating = -1; 


function addStar(){
    for(let i=0;i<numberOfStars;i++){
        let starEle = document.createElement("span")
        starEle.className = "star"
        let icon = document.createElement("i")
        icon.className = "fa fa-star-o"
        starEle.appendChild(icon)
        rating.appendChild(starEle)
        icon.setAttribute("data-num",i)
    }
        
}

addStar()

const stars = document.querySelectorAll(".star");

function handleMouseOver(event){
    if (event.target.tagName === "I") {
        let index = event.target.dataset.num
        stars.forEach((star, i) => {
            const icon = star.querySelector("i");
            if (i <= index) {
                icon.className = "fa fa-star";
            } else {
                icon.className = "fa fa-star-o";
            }
        });
    }
}

function handleMouseLeave(){
    stars.forEach((star,i) => {
        const icon = star.querySelector("i");
        if (i <= selectedRating) {
            icon.className = "fa fa-star";
        } else {
            icon.className = "fa fa-star-o";
        }
    });
}

function handleClick(e){
    let index = e.target.dataset.num
    if(index == selectedRating){
        selectedRating = -1;
        stars.forEach(star => {
            const icon = star.querySelector("i");
            icon.className = "fa fa-star-o";
        });
    } else {
        selectedRating = index;
        stars.forEach((star, i) => {
            const icon = star.querySelector("i");
            if (i <= index) {
                icon.className = "fa fa-star";
            } else {
                icon.className = "fa fa-star-o";
            }
        });
    }
}


rating.addEventListener("mouseover",handleMouseOver)

rating.addEventListener("mouseleave",handleMouseLeave)

rating.addEventListener("click",handleClick)


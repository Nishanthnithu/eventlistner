const box = document.getElementById("mybox")
const movement=10
let x=0
let y=0
box.addEventListener("click",event=>{
    event.target.style.backgroundColor = "gray"
    event.target.textContent="Have a  nice day 🤣🤣"
})
box.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor = "red"
    event.target.textContent="waiting  for this movement "
})
box.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor = " rgb(0, 191, 255)"
    event.target.textContent="Keep your smile 😊😊 "
})

document.addEventListener("keyup",event=>{
    box.textContent="😂"    
})

document.addEventListener("keydown",event=>{
    box.textContent= "🥳"
    
})

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        switch (event.key) {
            case "ArrowUp":
                y-=movement 
                break;
            case "ArrowDown":
                y +=movement 
                break;
                case "ArrowLeft":
                x-=movement 
                break;
                case "ArrowRight":
                x+=movement 
                break;
            default:
                break;
        }
        box.style.top=`${y}px`
        box.style.left=`${x}px`
    }
})

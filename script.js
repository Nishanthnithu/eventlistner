const box = document.getElementById("mybox")
box.addEventListener("click",event=>{
    event.target.style.backgroundColor = "gray"
    event.target.textContent="Have a  nie day 🤣🤣"
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
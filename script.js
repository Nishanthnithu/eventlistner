const box = document.getElementById("mybox")
box.addEventListener("click",event=>{
    event.target.style.backgroundColor = "gray"
    event.target.textContent="You are Earuma 🐃🤣🤣"
})
box.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor = "red"
    event.target.textContent="vara vala ellaya  ok click pannu"
})
box.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor = " rgb(0, 191, 255)"
    event.target.textContent="bye bye I have work "
})
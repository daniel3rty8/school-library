//for home page
export function hide_show(middle_div,login_div,container){
   let menuOpen =false
    window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    menuOpen=true
  }
  else{
   menuOpen=false
  }
  updateUI()
});
function updateUI(){
 login_div.style.display= menuOpen?"flex":"none"
      middle_div.style.display = menuOpen?"flex":"none";
    container.classList.toggle("change",menuOpen);
 
}
//  MENU TOGGLE 
container.addEventListener("click", () => {
   menuOpen=!menuOpen
 updateUI()
});

}
//for preview page
export function hide_show2(middle_div,container,cancel_container){
   let menuOpen =false;
window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    menuOpen=true
  }
  else{
   menuOpen=false
  }
  updateUI()
});
function updateUI(){
      middle_div.style.display = menuOpen?"flex":"none";
      cancel_container.style.display=menuOpen?"flex":"none",
    container.classList.toggle("change",menuOpen);

 
}
 cancel_container.addEventListener("click",()=>{ 
      middle_div.style.display = "none";
      container.classList.remove("change");
      menuOpen = false;
          cancel_container.style.display="none"
    })
//  MENU TOGGLE 
container.addEventListener("click", () => {
   menuOpen=!menuOpen
 updateUI()

});

}
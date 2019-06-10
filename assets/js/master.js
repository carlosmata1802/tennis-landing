const toggle_menu = action => (document.getElementsByClassName("mobile_menu_items_content")[0].style.right = (action) ?  "0" : "-80%");
const scroll_nav = () => {
  let nav = document.getElementsByClassName("header_content")[0];
  window.onscroll = () => ((window.pageYOffset > 80) ? nav.classList.add("shadow") : nav.classList.remove("shadow"));
}
scroll_nav();

let count = 0
const slider = action => {
let dots = document.getElementsByClassName("slide_dots")[0];
let items_content = document.getElementsByClassName("items");
let val = -100
if (count < 4) count = (action) ? count + 1 : count - 1;

if (count < 4 && count > -1) var move = count*val
if (count == 4 ) {
  move = 0;
  count = 0;
}else if(count < 0 && action == false){
  move = -300;
  count = 3;
}

for (var i = 0; i < items_content.length; i++) {
  console.log(items_content[i]);
  items_content[i].style.left = `${move}%`;
}
for (var i = 0; i < dots.children.length; i++) {
  dots.children[i].classList.remove("active");
}
dots.children[count].classList.add("active");
}

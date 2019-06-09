const toggle_menu = action => (document.getElementsByClassName("mobile_menu_items_content")[0].style.right = (action) ?  "0" : "-80%")

const scroll_nav = () => {
  let nav = document.getElementsByClassName("header_content")[0];
  window.onscroll = () => {
    (window.pageYOffset > 80) ? nav.classList.add("shadow") : nav.classList.remove("shadow");
  }
}
scroll_nav(); 

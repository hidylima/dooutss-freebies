
(function() {
  var $menuToogle = document.querySelector("#menuToogle");
  var $navigation = document.querySelector("#dooutss-navigation");
  var $item = $navigation.querySelector(".item");

  $menuToogle.addEventListener("click", function event(event){
    event.preventDefault();
    $menuToogle.classList.toggle("-active");
    $navigation.classList.toggle("-active");
    
  });
  
})();

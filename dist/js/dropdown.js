function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
	window.onclick = function(event) {
  		if (!event.target.matches('.header__item_main')) {

    		var dropdowns = document.getElementsByClassName("dropdown__content");
    		var i;
    		for (i = 0; i < dropdowns.length; i++) {
      			var openDropdown = dropdowns[i];
      			if (openDropdown.classList.contains('show')) {
        			openDropdown.classList.remove('show');
      			}
    		}
 		}
	}
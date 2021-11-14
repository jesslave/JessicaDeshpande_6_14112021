export default class redirectButton {

    // Create the button to scroll up the page
    create() {

        //Get main balise
        let elt = document.getElementById('main');

        let button = document.createElement('span');
        button.classList.add("go-to-main")
        button.innerHTML = "Passer au contenu";
        button.id = "goToMain";

        //Add the event
        button.onclick = function() {
            window.scrollTo(0, 0);
        }

        // Add the event
        elt.appendChild(button);
    }

    // Detect the current scroll and make appear the button to go top when the user scrolled enough
    showUpEvent() {
        
        var lastScrollTop = 0;
        window.onscroll = function() {
            var button = document.getElementById("goToMain");
            var st = document.documentElement.scrollTop;
            if (st > 100 && st > lastScrollTop) {
                button.style.display = "block";
            } 
            else {
                button.style.display = "none";
            }
            lastScrollTop = st;
        };
    }
}
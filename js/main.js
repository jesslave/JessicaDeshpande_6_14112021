import data from '../data/FishEyeData.json'  assert { type: "json" };
import createPhotographer from './createPhotographer.js'
import redirectButton from './redirectButton.js'
import createProfile from './createProfile.js'
import orderDropdownEvent from './orderDropdownEvent.js'


if (window.location.href.indexOf("photographer") != -1) {
    //Get the id of the photographer
    let url = new URLSearchParams(document.location.search);
    let id = url.get("id");
    new createProfile().createProfileCard(data, id)
    new orderDropdownEvent().filter(data, id);

}
else {
    
    //Create photographers profile
    new createPhotographer().createPhotographer(data);

    //Reload the page with the new hash
    window.onhashchange = function() {
        window.location.reload();
    }

    //Create redirect to top button and scroll event to make him visible
    new redirectButton().create();
    new redirectButton().showUpEvent();
}

 
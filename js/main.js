import data from '../data/FishEyeData.json'  assert { type: "json" };
import createPhotographer from './createPhotographer.js'
import redirectButton from './redirectButton.js'

new createPhotographer().createPhotographer(data);

//Reload the page with the new hash
window.onhashchange = function() {
    window.location.reload();
}


new redirectButton().create();
new redirectButton().showUpEvent();
 
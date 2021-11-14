import data from '../data/FishEyeData.json'  assert { type: "json" };
import createPhotographer from './createPhotographer.js'

new createPhotographer().builder(data);
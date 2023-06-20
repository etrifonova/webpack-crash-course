import generateJoke from "./generateJoke";
import './styles/main.scss';
import smiley from './assets/smiley.svg';

const smileImg = document.getElementById('smileImg');
smileImg.src = smiley;

console.log(generateJoke());
import generateJoke from "./generateJoke";
import './styles/main.scss';
import smiley from './assets/smiley.svg';

const smileImg = document.getElementById('smileImg');
smileImg.src = smiley;

const jokeBtn = document.getElementById('btn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
import { removeFigure, randomColor, arrayRandElement, collectDraw, animate, collect, explosion, findeFigure, findPos} from "./shapes/helper.js";
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');


setInterval(() => { collectDraw() }, 4000)
addEventListener('click', findPos)
addEventListener('click', findeFigure)
addEventListener('click', collect)
addEventListener('click', explosion)
animate()


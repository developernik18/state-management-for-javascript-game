import Player from "./player.js";
import InputHandler from './input.js';
import {drawStatusText} from './util.js';

window.addEventListener("load", function () {
  // to hide loading text
  hideLoadingText();

  // Starting canvas area.
  /**@type {HTMLCanvasElement} */
  // ---------------------------- //
  const canvas = document.querySelector("#canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandler();
  let lastTime = 0;
  
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update(input.lastKey);
    player.draw(ctx, deltaTime);
    
    drawStatusText(ctx, input, player);
    requestAnimationFrame(animate);
  }

  animate(0);



});

/**
 * function to hide loading text
 */
function hideLoadingText() {
  const loading = document.querySelector("#loading");
  loading.style.display = "none";
}

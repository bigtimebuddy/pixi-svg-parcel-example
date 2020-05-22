import { Application } from 'pixi.js';
import { SVG } from 'pixi-svg';

const app = new Application({
    width: 100,
    height: 100,
    resolution: window.devicePixelRatio,
    autoDensity: true
});
document.body.appendChild(app.view);

const svgBuffer = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle fill="red" r="25" cx="30" cy="30" />
</svg>`;

const svg = new SVG(svgBuffer);
app.stage.addChild(svg);

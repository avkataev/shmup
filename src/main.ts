import './style.css'
import { setupCanvas } from './canvas'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <style>
        * {
            padding: 0;
            margin: 0;
        }
        canvas {
            display: block;
            margin: 0 auto;
        }
    </style>
    <canvas id="myCanvas"></canvas>
  </div>
`

setupCanvas(document.querySelector('#myCanvas')!)

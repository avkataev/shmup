import {setting} from "../constants/setting";

const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");
canvas.width = setting.width;
canvas.height = setting.height;
console.log('canvas',canvas)
export default canvas

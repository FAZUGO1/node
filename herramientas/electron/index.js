const {app, BrowserWindow} = require('electron');

let mainVentana;

app.on('ready', createVentana);
function createVentana(){
    mainVentana = new BrowserWindow({
        width: 800,
        height: 600,

    });

    mainVentana.loadFile('index.html');
}
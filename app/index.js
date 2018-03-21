/**
 * Application entry point
 */

import brainProgrammer from 'program.js'
import brain from 'brain.js/src/index'

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

document.addEventListener("DOMContentLoaded", function(){

    let backgoundColorInput    = document.getElementById('background-color')
    let textColorInput         = document.getElementById('text-color')
    let accentColorInput       = document.getElementById('accent-color')
    let saveColors             = document.getElementById('save-colors')

    let _brainProgrammer = new brainProgrammer(backgoundColorInput, textColorInput, accentColorInput, saveColors)



    // var net = new brain.NeuralNetwork();

    // net.train();

    // var output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
});
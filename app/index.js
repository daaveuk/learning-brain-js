/**
 * Application entry point
 */

import brainProgrammer from 'program.js'
import brain from 'brain.js/src/index'
import Store from 'store.js'

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


    let _brainButton = document.getElementById('brain-button')

    let _store = new Store('brainColors')
    _brainButton.addEventListener('click', () => {
        var net = new brain.NeuralNetwork();
        
        net.train(_store.get());

        console.log(net.train(_store.get()))

        var output = net.run({r: 0, g: 1, b: 0.65});  // { white: 0.99, black: 0.002 }

        console.log(output)
    })




});
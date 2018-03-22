/**
 * Application entry point
 */

import brainProgrammer from 'program.js'
import stylesheetUpdate from 'stylesheet.js'
import brain from 'brain.js/src/index'
import Store from 'store.js'
import {getRgb} from '_utils.js'

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

document.addEventListener("DOMContentLoaded", function(){

    let backgoundColorInput    = document.getElementById('background-color')
    let textColorInput         = document.getElementById('text-color')
    let saveColors             = document.getElementById('save-colors')

    let _brainProgrammer = new brainProgrammer(backgoundColorInput, textColorInput, saveColors)


    let _brainButton = document.getElementById('brain-button')
    let _colorChoose = document.getElementById('choose-color')
    let _stylesheet = document.getElementById('colors')
    let _stylesheetUpdate = new stylesheetUpdate(_stylesheet)

    let _store = new Store('brainColors')
    _brainButton.addEventListener('click', () => {
        var net = new brain.NeuralNetwork();
        net.train(_store.get().brainColors);
        let _color = _colorChoose.value
        _color = getRgb(_color)
        var output = net.run(_color);  // { white: 0.99, black: 0.002 }

        _stylesheetUpdate.update({
           input: _color,
           output: output 
        })
    })




});
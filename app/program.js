import stylesheetUpdate from 'stylesheet.js'
import Store from 'store.js'
import {getRgb} from '_utils.js'

export default class brainProgrammer {
    constructor(backgroundColorInput, textColorInput, saveInput) {
        this.backgroundColorInput   = backgroundColorInput
        this.textColorInput         = textColorInput
        this.saveInput              = saveInput

        this.init()
    }

    generateBrainObj() {
        return {
            input: getRgb(this.backgroundColorInput.value),
            output: getRgb(this.textColorInput.value)
        }
    }

    init() {
        let _store = new Store('brainColors')

        let _template = {
            "brainColors": []
        }

        if(!_store.get()) {
            _store.set(_template)
        }

        let _stylesheet = document.getElementById('colors')
        let _stylesheetUpdate = new stylesheetUpdate(_stylesheet)

        this.saveInput.addEventListener('click', () => {
            let brainColors = _store.get()
            brainColors.brainColors.push(this.generateBrainObj())
            _store.set(brainColors)
        })

        let _colors = [this.backgroundColorInput, this.textColorInput]
        _colors.forEach((color) => {
            color.addEventListener('change', () => {
                _stylesheetUpdate.update(this.generateBrainObj())
            })
        })
    }


}
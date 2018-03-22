import stylesheetUpdate from 'stylesheet.js'
import Store from 'store.js'

export default class brainProgrammer {
    constructor(backgroundColorInput, textColorInput, accentColorInput, saveInput) {
        this.backgroundColorInput   = backgroundColorInput;
        this.textColorInput         = textColorInput;
        this.accentColorInput       = accentColorInput;
        this.saveInput              = saveInput;

        this.init()
    }

    getRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
            g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
            b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
        } : null;
      }

    

    generateBrainObj() {
        return {
            input: this.getRgb(this.backgroundColorInput.value),
            output: this.getRgb(this.textColorInput.value)
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

        let _colors = [this.backgroundColorInput, this.textColorInput, this.accentColorInput]
        _colors.forEach((color) => {
            color.addEventListener('change', () => {
                _stylesheetUpdate.update(this.generateBrainObj())
            })
        })
    }


}
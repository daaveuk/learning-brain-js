import stylesheetUpdate from 'stylesheet.js'

export default class brainProgrammer {
    constructor(backgroundColorInput, textColorInput, accentColorInput, saveInput) {
        this.backgroundColorInput   = backgroundColorInput;
        this.textColorInput         = textColorInput;
        this.accentColorInput       = accentColorInput;
        this.saveInput              = saveInput;


        this.init()
    }

    // getRgb(hex) {
    //     var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    //     hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    //         return r + r + g + g + b + b;
    //     });
      
    //     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    //     return result ? {
    //         r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
    //         g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
    //         b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    //     } : null;
    // }

    getRgb(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return {
                r: (c>>16)&255,
                b: (c>>8)&255,
                g: c&255
            }
        }
        throw new Error('Bad Hex');
    }
    

    generateBrainObj() {
        return {
            input: {
                bg: this.getRgb(this.backgroundColorInput.value)
            }, 
            output: {
                text: this.getRgb(this.textColorInput.value),
                accent: this.getRgb(this.accentColorInput.value)
            }
        }
    }
    

    init() {
        window._brainColors = []
        let _stylesheet = document.getElementById('colors')
        let _stylesheetUpdate = new stylesheetUpdate(_stylesheet)
        this.saveInput.addEventListener('click', () => {
            window._brainColors.push(this.generateBrainObj())
        })

        let _colors = [this.backgroundColorInput, this.textColorInput, this.accentColorInput]
        _colors.forEach((color) => {
            color.addEventListener('change', () => {
                _stylesheetUpdate.update(this.generateBrainObj())
            })
        })

       
    }


}
export default class stylesheetUpdate {
    constructor(stylesheet) {
        this.stylesheet = stylesheet
    }

    update(obj) {
        console.log(obj)
        let styles = `
            body {
                background-color: rgba(${Math.round(obj.input.r * 255)}, ${Math.round(obj.input.g * 255)}, ${Math.round(obj.input.b * 255)}, 1);
                color: rgb(${Math.round(obj.output.r * 255)}, ${Math.round(obj.output.g * 255)}, ${Math.round(obj.output.b * 255)});
                border-color: rgb(${Math.round(obj.output.r * 255)}, ${Math.round(obj.output.g * 255)}, ${Math.round(obj.output.b * 255)});

            }
        `

        this.stylesheet.innerHTML = styles
    }
}
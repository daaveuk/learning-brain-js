export default class stylesheetUpdate {
    constructor(stylesheet) {
        this.stylesheet = stylesheet
    }

    update(obj) {
        let styles = `
            .background-color {
                background-color: rgba(${obj.input.bg.r}, ${obj.input.bg.b}, ${obj.input.bg.g}, 1);
            }

            .text-color {
                color: rgb(${obj.output.text.r}, ${obj.output.text.b}, ${obj.output.text.g})
            }

            .accent-color {
                border-color: rgb(${obj.output.accent.r}, ${obj.output.accent.b}, ${obj.output.accent.g})
            }

        `

        this.stylesheet.innerHTML = styles
    }
}
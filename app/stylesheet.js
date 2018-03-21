export default class stylesheetUpdate {
    constructor(stylesheet) {
        this.stylesheet = stylesheet
    }

    update(obj) {
        console.log(obj)
        let styles = `
            .background-color {
                background-color: rgba(${obj.input[0][0]}, ${obj.input[0][1]}, ${obj.input[0][2]}, 1);
            }

            .text-color {
                color: rgb(${obj.output[0][0]}, ${obj.output[0][1]}, ${obj.output[0][2]})
            }

            .accent-color {
                border-color: rgb(${obj.output[1][0]}, ${obj.output[1][1]}, ${obj.output[1][2]})
            }

        `

        this.stylesheet.innerHTML = styles
    }
}
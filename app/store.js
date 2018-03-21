export default class Store {
  constructor(id) {
    this.id = id;
  }

  get() {
    if(localStorage.getItem(this.id) !== null) {
      let _string = localStorage.getItem(this.id)
      let _json = JSON.parse(_string)
      return _json;
    } else {
      return false;
    }
  }

  set(json) {
    let _string = JSON.stringify(json)
    localStorage.setItem(this.id, _string)
  }
}
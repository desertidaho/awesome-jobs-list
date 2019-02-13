let id = 1
export default class Job {
  constructor(data) {
    this.id = id
    this.title = data.title
    this.description = data.description
    this.salary = data.salary
    this.img = data.img || 'No image provided'
    id++
  }

  getTemplate() {
    return `
        <div class="card col-3">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description} -- ${this.salary}</p>
                <button onclick="app.controllers.carController.deleteCar(${this.id})">Remove</button>
            </div>
        </div>`
  }

}
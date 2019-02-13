let id = 1

export default class Job {
  constructor(data) {
    this.id = id
    this.title = data.title
    this.description = data.description
    this.salary = data.salary
    this.img = data.img || 'No image provided'
    this.url = data.url
    id++
  }

  getTemplate() {
    return `
        <div class="card col-3 mx-2 text-center bg-light shadow-sm mt-4">
            ${this.img}
            <div class="card-body text-left">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p> 
                <p>${this.salary}</p>
                <button class="btn-outline-primary py-1 shadow-sm" id="remove-btn" onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
                <a href="${this.url}" target="_blank"><button class="btn-outline-success ml-3 py-1 shadow-sm"
                id="apply-btn">
                Apply</button></a>
            </div>
        </div>`
  }
}
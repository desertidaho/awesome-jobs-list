import JobController from "./components/jobController.js"

class App {
  constructor() {
    this.controllers = {
      jobController: new JobController()
    }
  }
}

// @ts-nocheck
window.app = new App()
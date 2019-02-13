import JobService from "./jobService.js"

//Private
let _js = new JobService

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('available-jobs').innerHTML = template
}


//Public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
    draw()
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      title: form.title.value,
      description: form.description.value,
      salary: form.salary.value,
      img: form.img.value
    }
    _js.addJob(newJob)
    form.reset()
  }

  deleteJob(id) {
    _js.deleteJob(id)
  }
}
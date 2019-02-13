import Job from "../models/job.js"

//Private
let _state = {
  jobs: [
    new Job({
      title: 'Junior Software Developer',
      description: 'Looking for a recent graduate of Boise Codeworks to join our growing team of professional software developers. Candidates must have entry level JavaScript skills.',
      salary: `$45,000/year`,
      img: `<i class="fas fa-laptop"></i>`
    }),
    new Job({
      title: 'Realtor',
      description: 'Looking for an experienced realtor to join our team. Must have extensive commercial sales and service experience.',
      salary: 'Commision',
      img: `<i class="fas fa-home"></i>`
    }),
    new Job({
      title: 'Commercial Helicopter Pilot',
      description: 'Looking for a utility pilot for the upcoming Alaska field season. Must have precision long-line skills.',
      salary: `$400/day`,
      img: `<i class="fas fa-helicopter"></i>`
    })

  ]
}

let _subscribers = {
  jobs: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}


//Public
export default class JobService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Jobs() {
    return _state.jobs
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _state.jobs.push(newJob)
    setState('jobs', _state.jobs)
  }

  deleteJob(id) {
    for (let i = 0; i < _state.jobs.length; i++) {
      let job = _state.jobs[i];
      if (job.id == id) {
        _state.jobs.splice(i, 1)
        break;
      }
    }
    setState('jobs', _state.jobs)
  }

}
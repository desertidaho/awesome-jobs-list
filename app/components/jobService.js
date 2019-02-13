import Job from "../models/job.js"

//Private
let _state = {
  jobs: [
    new Job({
      title: 'Junior Software Developer',
      description: 'Looking for a recent graduate of Boise Codeworks to join our growing team of professional software developers.',
      salary: '$45,000/year',
      img: '<i class="fas fa-laptop img-fluid fa-5x mt-3"></i>',
      url: 'https://jrsext.simplot.com/prodhcm/CandidateSelfService/controller.servlet?context.dataarea=prodhcm&webappname=CandidateSelfService&context.session.key.HROrganization=JRS&context.session.key.JobBoard=EXTERNAL2&_saveKeys=true&JobPost=2&JobReq=6443&context.session.key.noheader=true'
    }),
    new Job({
      title: 'Realtor',
      description: 'Looking for an experienced realtor to join our team. Must have extensive commercial sales and service experience.',
      salary: 'Commision',
      img: '<i class="fas fa-home img-fluid fa-5x mt-3"></i>',
      url: 'https://jobs.lever.co/marcusmillichap/e96710e9-a856-4efc-b46d-4d5dc7f5d3ab?lever-source=Indeed'
    }),
    new Job({
      title: 'Commercial Helicopter Pilot',
      description: 'Looking for a utility pilot for the upcoming Alaska field season. Must have precision long-line skills.',
      salary: '$400/day',
      img: '<i class="fas fa-helicopter img-fluid fa-5x mt-3"></i>',
      url: 'https://jsfirm.com/Management/Assistant+Director+of+Operations/Lewiston-Idaho/jobID_512362'
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
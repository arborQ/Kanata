import VueComponent from 'vue-class-component'

@VueComponent({
  template: require('./TimeReportList.html')
})
export default class {
  data(): TimeReport.ITimeReportData {
    let days: TimeReport.IDayData[] = [
      { day: new Date('2017-01-01') },
      { day: new Date('2017-01-02') },
      { day: new Date('2017-01-03') },
      { day: new Date('2017-01-04') },
      { day: new Date('2017-01-05') },
      { day: new Date('2017-01-06') },
      { day: new Date('2017-01-07') },
      { day: new Date('2017-01-08') },
      { day: new Date('2017-01-09') },
    ];

    let projects: TimeReport.IProjectData[] = [
      { projectId: 1, projectName: 'Atomic' }
    ];

    return {
      days, projects
    }
  }
}

class GraphController {
  constructor(DemographicsSrv) {
    this.DemographicsSrv = DemographicsSrv;
    this.name = 'graph';
    this.data = DemographicsSrv.getDemoData()
    console.log('data ', this.data);
  }
}

GraphController.$inject = ['DemographicsSrv'];

export default GraphController;

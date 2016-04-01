class HomeController {
  constructor(DemographicsSrv) {
    'ngInject';
    this.DemographicsSrv = DemographicsSrv;
    this.demodata = [];
    this.getData();
  }

  getData() {
    this.DemographicsSrv.getDemoData().then((res) => {
      this.demodata = res;
    })
  }
}

export default HomeController;

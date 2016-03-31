class HomeController {
  constructor(DemographicsSrv) {
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

HomeController.$inject = ['DemographicsSrv'];
export default HomeController;

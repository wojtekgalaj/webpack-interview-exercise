class GraphController {
  constructor(DemographicsSrv) {
    this.DemographicsSrv = DemographicsSrv;
    this.getData();
  }

  getData() {
    this.DemographicsSrv.getDemoData().then((res) => {

      let graphdata = res.reduce(function (memo, item) {
        let series = [];
        let indexes = item.variables.indexes;
        let key;

        for (key in indexes) {
          if (indexes.hasOwnProperty(key)) {
            series.push(indexes[key]);
          }
        }
        console.log(memo, series);
        memo.push(series);

        return memo;
      }, []);

      let graphlables = Object.keys(res[0].variables.indexes);


      this.labels = graphlables;
      this.demodata = graphdata;
    })
  }
}

GraphController.$inject = ['DemographicsSrv'];

export default GraphController;

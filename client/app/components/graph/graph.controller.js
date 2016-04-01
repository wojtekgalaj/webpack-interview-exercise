import _ from 'lodash'

class GraphController {
  constructor() {
    this.prepareData();
  }

  prepareData() {
    // I am assuming the reference object is always sent
    // at position 0 so I will not be figuring that out
    let series = [];
    let labels = [];
    this.demodata.map(function (item) {
      let indexes = item.variables.indexes;

      labels = _.keys(indexes);
      series.push(_.values(indexes));
    });

    this.series = series;
    this.labels = labels;
  }

}


export default GraphController;

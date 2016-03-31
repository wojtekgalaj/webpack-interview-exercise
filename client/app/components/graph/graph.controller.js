import _ from 'lodash'

class GraphController {
  constructor() {
    this.prepareData();
    console.log('_ ', _);
    console.log(this.demodata);
  }

  prepareData() {
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

import _ from 'lodash'

class GraphController {
  constructor() {
    this.prepareData();
  }

  capitalize(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  prepareData() {
    // I am assuming the reference object is always sent
    // at position 0 so I will not be figuring that out
    let series = [];
    let labels = [];

    if (!demodata) {
      return;
    }

    this.demodata.map(function (item) {
      let indexes = item.variables.indexes;

      labels = _.keys(indexes);
      series.push(_.values(indexes));
    });

    this.series = series;
    this.labels = this.prettyLabels(labels);
  }

  prettyLabels(labels) {
    return labels.map((label) => {
      return this.capitalize(label.replace('_', ' '));
    })
  }

}


export default GraphController;

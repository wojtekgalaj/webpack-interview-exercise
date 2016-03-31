import template from './graph.html';
import controller from './graph.controller';
import './graph.styl';

let graphComponent = {
  bindings: {
    demodata: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default graphComponent;

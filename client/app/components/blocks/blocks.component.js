import template from './blocks.html';
import controller from './blocks.controller';
import './blocks.styl';

let blocksComponent = {
  restrict: 'E',
  bindings: {
    demodata: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default blocksComponent;

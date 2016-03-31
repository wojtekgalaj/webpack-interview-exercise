import angular from 'angular';
import graphComponent from './graph.component';


let graphModule = angular.module('app.graph', [
  'app.demographics'
])

.component('graph', graphComponent);

export default graphModule;

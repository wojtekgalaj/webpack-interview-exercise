import angular from 'angular';
import Home from './home/home';
import Graph from './graph/graph';

let componentModule = angular.module('app.components', [
  Home.name,
  Graph.name
]);

export default componentModule;

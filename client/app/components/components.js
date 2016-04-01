import angular from 'angular';
import Home from './home/home';
import Graph from './graph/graph';
import Blocks from './blocks/blocks';

let componentModule = angular.module('app.components', [
  Home.name,
  Graph.name,
  Blocks.name
]);

export default componentModule;

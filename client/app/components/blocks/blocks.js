import angular from 'angular';
import uiRouter from 'angular-ui-router';
import blocksComponent from './blocks.component';

let blocksModule = angular.module('blocks', [
  uiRouter
])

.component('blocks', blocksComponent);

export default blocksModule;

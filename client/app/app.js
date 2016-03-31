import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Chart from 'angular-chart.js'
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';

console.log('XXX ', Chart.name);
angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    Services.name,
    Chart.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);

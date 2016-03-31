import angular from 'angular';
import Demographics from './demographics/demographics.js';

let servicesModule = angular.module('app.services', [
  Demographics.name
])

export default servicesModule;

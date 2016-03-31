import angular from 'angular';
import demoService from './demographics.service.js'

let demographicsModule = angular.module('app.demographics', [])
  .factory('DemographicsSrv', demoService);


export default demographicsModule;

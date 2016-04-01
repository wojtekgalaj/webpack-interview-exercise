import DemographicsModule from './demographics'
import DemographicsService from './demographics.service';

describe('Demographics', () => {
  let $rootScope, makeService;

  beforeEach(window.module(DemographicsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeService = () => {
      return new DemographicsService();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Service', () => {
    // service specs
    it('exposes getDemoData method', () => {
      let service = makeService();
      expect(service).to.have.property('getDemoData');
    });
  });
});

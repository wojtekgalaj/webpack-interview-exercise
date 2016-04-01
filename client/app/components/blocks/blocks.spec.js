import BlocksModule from './blocks'
import BlocksController from './blocks.controller';
import BlocksComponent from './blocks.component';
import BlocksTemplate from './blocks.html';

describe('Blocks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BlocksModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BlocksController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
  });

  describe('Component', () => {
      // component/directive specs
      let component = BlocksComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BlocksTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BlocksController);
      });
  });
});

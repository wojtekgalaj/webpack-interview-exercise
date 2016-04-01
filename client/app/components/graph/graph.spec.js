import GraphModule from './graph'
import GraphController from './graph.controller';
import GraphComponent from './graph.component';
import GraphTemplate from './graph.html';

describe('Graph', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GraphModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GraphController();
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
      let component = GraphComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GraphTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GraphController);
      });
  });
});

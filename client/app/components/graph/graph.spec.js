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
    it('pases series and labels to chart component', () => {
      expect(GraphTemplate).to.match(/chart-data=\"vm\.series\"/g);
      expect(GraphTemplate).to.match(/chart-labels=\"vm\.labels\"/g);
    });
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

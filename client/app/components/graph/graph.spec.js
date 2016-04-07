import GraphModule from './graph'
import GraphController from './graph.controller';
import GraphComponent from './graph.component';
import GraphTemplate from './graph.html';

describe('Graph', () => {
  let $rootScope, makeController, $controller;

  beforeEach(window.module(GraphModule.name));
  beforeEach(inject((_$rootScope_, _$controller_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    makeController = () => {
      return new GraphController([
        {
          address: "Calle Mar Adriático, 12, 28221 Majadahonda, Madrid, Spain",
          variables: {
            population: 9084,
            is_reference: true,
            indexes: {
              population: "3",
              unemployment: "1",
              commercial_activity: "6",
              wealth: "7",
              traffic: "4",
              foreigners: "1",
              dependency_rate: "2"
            }
          }
        }
      ]);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('prepares the data', () => {
    //   let ctrl = makeController()
    //   expect(ctrl).to.have.property('series');
    //   expect(ctrl).to.have.property('labels');
    // });
    //
    // it('Makes the labels pretty', () => {
    //   let ctrl = makeController();
    //   expect(ctrl.labels[2]).to.equal('Commercial Activity');
    // });
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

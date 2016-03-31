import angular from 'angular';

let service = function ($q) {

  let getDemoData = () => {
    var deferred = $q.defer();

    deferred.resolve([
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
      },
      {
        address: "Calle Volver a Empezar, 5, 28018, Madrid, Madrid, Spain",
        variables: {
          population: 5759,
          is_reference: false,
          indexes: {
            population: "4",
            unemployment: "7",
            commercial_activity: "1",
            wealth: "3",
            traffic: "2",
            foreigners: "2",
            dependency_rate: "6"
          }
        }
      },
      {
        address: "Calle de la Virgen de los Peligros, 13, 28410, Manzanares el Real, Madrid, Spain",
        variables: {
          population: 1523,
          is_reference: false,
          indexes: {
            population: "5",
            unemployment: "3",
            commercial_activity: "7",
            wealth: "5",
            traffic: "1",
            foreigners: "2",
            dependency_rate: "4"
          }
        }
      }
    ]);


    return deferred.promise;
  }

  return {getDemoData}
};

service.$inject = ['$q'];

export default service;

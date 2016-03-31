import angular from 'angular';

let service = function ($q) {

  let getDemoData = () => {
    var deferred = $q.defer();

    deferred.resolve({
      data: 1
    });

    return deferred.promise;
  }

  return {getDemoData}
};

service.$inject = ['$q'];

export default service;

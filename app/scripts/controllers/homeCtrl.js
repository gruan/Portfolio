/**
 * Created by George Ruan on August 18, 2015.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'UserData'];

    function homeCtrl ($scope, UserData) {
      UserData.getName().then(setName);

      /**
       * Sets the user's name.
       * @param {String} name User's name.
       */
      function setName (name) {
        $scope.name = name;
      }
    }
})();

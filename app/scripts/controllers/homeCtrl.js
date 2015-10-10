/**
 * Created by George Ruan on August 18, 2015.
 *
 * HomeCtrl defines the behavior of the Home Page.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$interval', 'UserData'];

    function homeCtrl ($scope, $interval, UserData) {
      var greetingsArr = ['Hello.', 'What\'s Your Name?', ''];
      var greetingsCount = 0;
      var greetingsDelay = 4000;        // in .fade-in-out (duration + delay) * 1000
      $scope.greeting = greetingsArr[0];

      // Set to false for debugging. True for greetings animation
      $scope.showGreetingPage = false;

      $scope.input = {
        // name: ''
      };

      $scope.submitName = submitName;

      $scope.links = {
        github: 'https://github.com/gruan',
        linkedin: 'https://www.linkedin.com/in/gruan',
        resume: 'https://drive.google.com/file/d/0BxTOfbWmV3tWdWNQQm1NT19IMUk/view?usp=sharing'
      }

      UserData.getName().then(setLocalName);
      $interval(nextGreeting, greetingsDelay, greetingsArr.length - 1);

      /**
       * Sets the local user's name.
       * @param {String} name User's name.
       */
      function setLocalName (name) {
        $scope.input.name = name;
      }

      /**
       * Sets the local user name and changes the page to the Home Screen
       * @return {void}
       */
      function submitName() {
        UserData.setName($scope.input.name);
        $scope.showGreetingPage = false;
      }

      /**
       * Sets the greeting to the next possible one.
       * @return {void}
       */
      function nextGreeting() {
        if(greetingsCount < greetingsArr.length) {
          $scope.greeting = greetingsArr[++greetingsCount];
        }
      }
    }
})();

/**
 * Created by George Ruan on August 20, 2015.
 *
 * grScrollTo defines button scrolling functionality.
 *
 * To use: set this directive as an attribute and set the value to the string
 * of the target element's id.
 *
 * Ex. <button gr-scroll-to="'home'">
 *
 * This will create a button that when clicked will scroll to the home section.
 */

(function() {
  'use strict';

  angular.module('georgeRuan')
    .directive('grScrollTo', scrollTo);

  scrollTo.$inject = ['Scroll'];

  function scrollTo(Scroll) {
    var directive;
    directive = {
      link: link,
      scope: {
        id: '=grScrollTo'
      },
      restrict: 'A'
    };

    return directive;

    function link(scope, element) {
      var scrollElement = angular.element('html, body');

      element.click(smoothScroll);

      /**
       * Smooth scrolls to the target id.
       * @return {Void}
       */
      function smoothScroll() {
        Scroll.disableMouseScroll();

        var targetY = angular.element(document.getElementById(scope.id))[0].offsetTop;
        var duration = 1500;

        if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          window.scrollTo(0, targetY);
        }
        else {
          scrollElement.stop().animate({scrollTop: targetY}, duration, 'easeInOutExpo', Scroll.reenableMouseScroll);
        }
      }
    }
  }
})();

'use strict';
(function(module) {
  try {
    module = angular.module('tink.modal');
  } catch (e) {
    module = angular.module('tink.modal', []);
  }
  module.directive('tinkModal',['$modal',function($modal){
    return{
      restrict:'A',
      scope:{
        tinkModalSuccess:'=',
        tinkModalDismiss:'='
      },
      link:function(scope,element,attr){
        if(!attr.tinkModalTemplate){
          return;
        }

        element.bind('click',function(){
          scope.$apply(function(){
            openModal(attr.tinkModalTemplate);
          });
        });

        function openModal(template){
          var modalInstance = $modal.open({
            templateUrl: template
          });

          if(scope.tinkModalSucces !== undefined && typeof scope.tinkModalSuccess !== 'function'){
            scope.tinkModalSuccess = null;
          }

          if(scope.tinkModalDismiss !== undefined && typeof scope.tinkModalDismiss !== 'function'){
            scope.tinkModalDismiss = null;
          }

          modalInstance.result.then(scope.tinkModalSuccess,scope.tinkModalDismiss);
        }


      }
    };
  }]);
})();
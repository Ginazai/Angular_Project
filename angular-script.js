(function() {
  'use strict';

  angular.module('food_list', [])
  .controller('list_controller', list_controller);

  list_controller.$inject = ['$scope'];
  function list_controller($scope) {
    $scope.input = "";
    $scope.msg = "";

    $scope.getValue = function() {
      var m = getFood($scope.input);
      $scope.msg = m;
    };

    function getFood(inpt) {
      var reg = /\w+/;
      var spc = /\s+/;
      var pieces = inpt.split(",");
      var msg= "";
      for (var i = 0; i < pieces.length; i++) {
        if (!pieces[i].match(reg)) {pieces.splice(i, 1);}
      }
      if (pieces.length == 0) {
        msg = "Please enter data first";
      } else {
          if (pieces.length <= 3) {
            msg = "Enjoy !";
          $scope.myStyle ={'color': 'green'};
        }
          if (pieces.length > 3) {
            msg = "Too much !";
          $scope.myStyle = {'color': 'red'};
        }
      }
      return msg;
    }
    
  }
})();

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
      //regular expression that means "any latin alphabet character 1 or more
      //times"
      var reg = /\w+/;
      var pieces = inpt.split(",");
      var msg= "";
      //content check, if it's not a character delete it and return "empty value"
      for (var i = 0; i < pieces.length; i++) {
        if (!pieces[i].match(reg)) {
          pieces.splice(i);
          msg = ("Empty value found at: " + (i+1) + ' (delete to continue adding)');
          $scope.myStyle = {'color': 'red'};
          //you can check that in fact, is omitting any empty value
          console.log(pieces);
          return msg;
        }
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
      console.log(pieces);
      return msg;
    }

  }
})();

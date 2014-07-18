var app = angular.module('TicTacToe', []);

app.controller('tttCtrl', function($scope) {

    $scope.count = 2;

    // $scope.playerSwitch = function() {
    // };

    $scope.isSelected = function(box) {
        // If there is a winner ... alert-win.
        if ($scope.count === 11) {
            alert("cat's game!");
        } else if ($scope.count % 2 === 0 && box.color === "" && box.color != "blue" && box.color != "green") {
            box.color = "blue";
            $scope.count = $scope.count + 1;
            $scope.isSelected();
        } else if (($scope.count % 3 === 0 || $scope.count / 5 === 1 || $scope.count / 7 === 1) && box.color != "blue" && box.color != "green") {
            box.color = "green";
            $scope.count = $scope.count + 1;
            $scope.isSelected();
        } else {
            alert("this has been selected"); // Maybe have a dynamicly updated prompt.	
        }
    };

    $scope.boxes = [{
        name: 1,
        color: ""
    }, {
        name: 2,
        color: ""
    }, {
        name: 3,
        color: ""
    }, {
        name: 4,
        color: ""
    }, {
        name: 5,
        color: ""
    }, {
        name: 6,
        color: ""
    }, {
        name: 7,
        color: ""
    }, {
        name: 8,
        color: ""
    }, {
        name: 9,
        color: ""
    }];

});

/* If t */
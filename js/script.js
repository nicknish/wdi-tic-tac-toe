var app = angular.module('TicTacToe', []);

app.controller('tttCtrl', function($scope) {

    $scope.count = 2;
    $scope.blueSelection = [];
    $scope.greenSelection = [];

    $scope.isSelected = function(box) {

        if ($scope.count === 11) { //If all the tiles are filled without a winner, then cat's game
            alert("cat's game!");
        } else if ($scope.count % 2 === 0 && box.color === "" && box.color != "blue" &&
            box.color != "green") {
            box.color = "blue";
            $scope.count = $scope.count + 1;
            $scope.blueSelection.push("(" + box.row + ", " + box.column + ")");
            $scope.blueSelection.sort();
            console.log("Blues: " + $scope.blueSelection);
        } else if (($scope.count % 3 === 0 || $scope.count / 5 === 1 || $scope.count / 7 === 1) &&
            box.color != "blue" && box.color != "green") {
            box.color = "green";
            $scope.count = $scope.count + 1;
            $scope.greenSelection.push("(" + box.row + ", " + box.column + ")");
            $scope.greenSelection.sort();
            console.log("Greens: " + $scope.greenSelection);
        } else {
            alert("this has been selected"); // Maybe have a dynamically updated prompt.
        }
    };

    // Check for a win combination
    $scope.checkFtw = function(someArray) {
        for (row = 1; row <= 3; row++) { // check row win combos
            for (column = 1; row <= 3; column++) {
                // if () {
                //     break;
                // }
            }
        }
    };

    $scope.boxes = [{
        row: 1,
        column: 1,
        color: ""
    }, {
        row: 1,
        column: 2,
        color: ""
    }, {
        row: 1,
        column: 3,
        color: ""
    }, {
        row: 2,
        column: 1,
        color: ""
    }, {
        row: 2,
        column: 2,
        color: ""
    }, {
        row: 2,
        column: 3,
        color: ""
    }, {
        row: 3,
        column: 1,
        color: ""
    }, {
        row: 3,
        column: 2,
        color: ""
    }, {
        row: 3,
        column: 3,
        color: ""
    }];

});

/* If t */
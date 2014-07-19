var app = angular.module('TicTacToe', []);

app.controller('tttCtrl', function($scope) {

    $scope.count = 2;
    $scope.blueSelection = [];
    $scope.greenSelection = [];

    $scope.isSelected = function(box) {

        if ($scope.count === 11) { //If all the tiles are filled without a winner, then cat's game
            alert("cat's game!");
        } else if ($scope.count % 2 === 0 && box.color === "" && box.color != "blue" && box.color != "green") {
            box.color = "blue";
            $scope.count = $scope.count + 1;
            $scope.blueSelection.push(box.name);
            $scope.blueSelection.sort();
            console.log("Blues: " + $scope.blueSelection);
        } else if (($scope.count % 3 === 0 || $scope.count / 5 === 1 || $scope.count / 7 === 1) &&
            box.color != "blue" && box.color != "green") {
            box.color = "green";
            $scope.count = $scope.count + 1;
            $scope.greenSelection.push(box.name);
            $scope.greenSelection.sort();
            console.log("Greens: " + $scope.greenSelection);
        } else {
            alert("this has been selected"); // Maybe have a dynamically updated prompt.
        }
    };


    // Just thinking about this, what if you have 1357. Technically there
    // is a winning combo inside it, but how do you extract that?

    // $scope.checkFtw = function(someArray) {
    //     angular.copy(someArray, arrayToString);
    //     for (i = 0; i <= $scope.winCombos.length; i++) {
    //         if (arrayToString === $scope.winCombos[i]) {
    //             alert("You win, you cheeky motherfucker!");
    //         }
    //     }
    // };

    $scope.winCombos = [
        [1, 2, 3],
        [1, 5, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ];

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
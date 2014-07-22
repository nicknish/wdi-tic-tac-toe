var app = angular.module('TicTacToe', []);

app.controller('tttCtrl', function($scope) {

    $scope.count = 2;
    // $scope.blueSelection = [];
    $scope.blueDiagonals = [];
    $scope.blueColumnOne = [];
    $scope.blueColumnTwo = [];
    $scope.blueColumnThree = [];
    $scope.blueRowOne = [];
    $scope.blueRowTwo = [];
    $scope.blueRowThree = [];
    // $scope.greenSelection = [];
    $scope.greenDiagonals = [];
    $scope.greenColumnOne = [];
    $scope.greenColumnTwo = [];
    $scope.greenColumnThree = [];
    $scope.greenRowOne = [];
    $scope.greenRowTwo = [];
    $scope.greenRowThree = [];

    $scope.isSelected = function(box) {

        if ($scope.count === 11) { //If all the tiles are filled without a winner, then cat's game
            alert("cat's game!");
        } else if ($scope.count % 2 === 0 && box.color === "") {
            box.color = "blue";
            $scope.count = $scope.count + 1;
            // $scope.blueSelection.push("(" + box.row + ", " + box.column + ")");
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 1) ||
                (box.row === 2 && box.column === 2) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                // $scope.blueRows.push("(" + box.row + ", " + box.column + ")");
            }
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 1) ||
                (box.row === 2 && box.column === 2) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                // $scope.blueColumns.push("(" + box.row + ", " + box.column + ")");
            }
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 3) ||
                (box.row === 2 && box.column === 2) || (box.row === 3 && box.column === 1) ||
                (box.row === 3 && box.column === 3)) {
                // $scope.blueDiagonals.push("(" + box.row + ", " + box.column + ")");
            }
            // $scope.blueSelection.sort();
            console.log("Blues: ", $scope.blueRows, $scope.blueColumns, $scope.blueDiagonals);
            // console.log($scope.blueSelection);
            // $scope.checkFtw($scope.blueSelection);
        } else if (($scope.count % 3 === 0 || $scope.count / 5 === 1 || $scope.count / 7 === 1)) {
            box.color = "green";
            $scope.count = $scope.count + 1;
            // $scope.greenSelection.push("(" + box.row + ", " + box.column + ")");

            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 1) ||
                (box.row === 2 && box.column === 2) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                // $scope.greenRows.push("(" + box.row + ", " + box.column + ")");
            }
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 1) ||
                (box.row === 2 && box.column === 2) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                // $scope.greenColumns.push("(" + box.row + ", " + box.column + ")");
            }
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 3) ||
                (box.row === 2 && box.column === 2) || (box.row === 3 && box.column === 1) ||
                (box.row === 3 && box.column === 3)) {
                // $scope.greenDiagonals.push("(" + box.row + ", " + box.column + ")");
            }
            // $scope.greenSelection.sort();
            console.log("Greens: ", $scope.greenRows, $scope.greenColumns, $scope.greenDiagonals);
            // console.log("Greens: " + $scope.greenSelection);



            // $scope.checkFtw($scope.greenSelection);
        } else {
            alert("this has been selected"); // Maybe have a dynamically updated prompt.
        }
    };

    // Check the row, if the first box which is (1,1) (2,1) or (3,1) check deeper

    // Check for a win combination
    $scope.checkFtw = function(someArray) {
        for (row = 1; row >= 3; row++) { // check row win combos
            for (column = 1; column >= 3; column++) {
                if (someArray[row][column]) { // entered array contains the leftmost tile, 
                    console.log("dsads");
                } // then check the tile to the right
            }
        }
        for (column = 1; column >= 3; column++) { // check colum win combos
            for (row = 1; row >= 3; row++) {
                // if () // entered array contains the leftmost tile, 
                // then check the tile below it
            }
        }
        // if () // check diagonal win combos // entered array contains (1,1), (2,2), (3,3)
        // or(1, 3)(2, 2)(3, 1)

        // for (i = 0; i <= someArray.length; i++) {
        //     if (someArray[i] === "(1, 1)" || someArray[i] === "(2, 1)" || someArray[i] === "(3, 1)") {
        //         // check for a combination
        //     }
        //     if (someArray[i] === "")
        // }
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
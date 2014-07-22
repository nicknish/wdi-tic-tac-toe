var app = angular.module('TicTacToe', []);

app.controller('tttCtrl', function($scope) {

    // Counter determines player turn
    $scope.count = 2;

    // Blue Variables
    $scope.blueDiagonalLeftRight = [];
    $scope.blueDiagonalRightLeft = [];
    $scope.blueColumnOne = [];
    $scope.blueColumnTwo = [];
    $scope.blueColumnThree = [];
    $scope.blueRowOne = [];
    $scope.blueRowTwo = [];
    $scope.blueRowThree = [];

    // Green Variables
    $scope.greenDiagonalLeftRight = [];
    $scope.greenDiagonalRightLeft = [];
    $scope.greenColumnOne = [];
    $scope.greenColumnTwo = [];
    $scope.greenColumnThree = [];
    $scope.greenRowOne = [];
    $scope.greenRowTwo = [];
    $scope.greenRowThree = [];

    $scope.isSelected = function(box) {

        // Blue Stuff!
        if ($scope.count === 11) { // If all the tiles are filled without a winner, then cat's game
            alert("cat's game!");
        } else if ($scope.count % 2 === 0 && box.color === "" && box.color != "green") {
            box.color = "blue";
            $scope.count = $scope.count + 1;
            // Check Row 1
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3)) {
                $scope.blueRowOne.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueRowOne);
            }
            // Check Row 2
            if ((box.row === 2 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                $scope.blueRowTwo.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueRowTwo);
            }
            // Check Row 3
            if ((box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                $scope.blueRowThree.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueRowThree);
            }
            // Check Column 1
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 1) ||
                (box.row === 3 && box.column === 1)) {
                $scope.blueColumnOne.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueColumnOne);
            }
            // Check Column 2
            if ((box.row === 1 && box.column === 2) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 2)) {
                $scope.blueColumnTwo.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueColumnTwo);
            }
            // Check Column 3
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 3)) {
                $scope.blueColumnThree.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueColumnThree);
            }
            // Check Diagonal Left-to-Right
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                $scope.blueDiagonalLeftRight.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueDiagonalLeftRight);
            }
            // Check Diagonal Right-to-Left
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 1)) {
                $scope.blueDiagonalRightLeft.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.blueDiagonalRightLeft);
            }
            // console.log("Blues: ", $scope.blueRowOne, $scope.blueRowTwo, $scope.blueRowThree, $scope.blueColumnOne,
            // $scope.blueColumnTwo, $scope.blueColumnThree, $scope.blueDiagonalRightLeft, $scope.blueDiagonalLeftRight);
        }
        // Green Stuff! 
        else if (($scope.count % 3 === 0 || $scope.count / 5 === 1 || $scope.count / 7 === 1) &&
            box.color != "blue" && box.color != "green") {
            box.color = "green";
            $scope.count = $scope.count + 1;
            // Check Row 1
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3)) {
                $scope.greenRowOne.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenRowOne);
            }
            // Check Row 2
            if ((box.row === 2 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                $scope.greenRowTwo.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenRowTwo);
            }
            // Check Row 3
            if ((box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                $scope.greenRowThree.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenRowThree);
            }
            // Check Column 1
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 1) ||
                (box.row === 3 && box.column === 1)) {
                $scope.greenColumnOne.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenColumnOne);
            }
            // Check Column 2
            if ((box.row === 1 && box.column === 2) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 2)) {
                $scope.greenColumnTwo.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenColumnTwo);
            }
            // Check Column 3
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 3)) {
                $scope.greenColumnThree.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenColumnThree);
            }
            // Check Diagonal Left-to-Right
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                $scope.greenDiagonalLeftRight.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenDiagonalLeftRight);
            }
            // Check Diagonal Right-to-Left
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 1)) {
                $scope.greenDiagonalRightLeft.push("(" + box.row + ", " + box.column + ")");
                $scope.checkFtw(box, $scope.greenDiagonalRightLeft);
            }

            // console.log("Greens: ", $scope.greenRowOne, $scope.greenRowTwo, $scope.greenRowThree, $scope.greenColumnOne,
            //     $scope.greenColumnTwo, $scope.greenColumnThree, $scope.greenDiagonalRightLeft, $scope.greenDiagonalLeftRight);
        } else {
            alert("this has been selected"); // Maybe have a dynamically updated prompt.
        }
    };

    // Check for a win combination
    $scope.checkFtw = function(box, someArray) {
        if (someArray.length === 3) {
            alert(box.color + " wins!");
            // End the game, yo!
        }
    };

    // JavaScript Objects to build out Gameboard
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
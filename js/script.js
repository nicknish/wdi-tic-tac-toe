/*==================================
===THIS IS THE DEVELOPMENT BRANCH===
==================================*/


var app = angular.module('TicTacToe', ["firebase"]);

app.controller('tttCtrl', function($scope, $firebase) {

    // Counter determines player turn
    var count = 2;

    // Sweet Dynamic Banner
    $scope.bannerText = "Take a moment to relax.";

    // Blue Variables
    var blueDiagonalLeftRight = [],
        blueDiagonalRightLeft = [],
        blueColumnOne = [],
        blueColumnTwo = [],
        blueColumnThree = [],
        blueRowOne = [],
        blueRowTwo = [],
        blueRowThree = [];

    // Green Variables
    var greenDiagonalLeftRight = [],
        greenDiagonalRightLeft = [],
        greenColumnOne = [],
        greenColumnTwo = [],
        greenColumnThree = [],
        greenRowOne = [],
        greenRowTwo = [],
        greenRowThree = [];

    // Selection Function, Passing in individual box object
    $scope.isSelected = function(box) {

        // Blue Stuff!
        if (count === 11) { // If all the tiles are filled without a winner, then cat's game
            $scope.bannerText = "cat's game!";
        } else if (count % 2 === 0 && box.color === "" && box.color != "green") {
            box.color = "blue";
            count++;
            $scope.bannerText = "green's turn";
            // Check Row 1
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3)) {
                blueRowOne.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueRowOne);
            }
            // Check Row 2
            if ((box.row === 2 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                blueRowTwo.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueRowTwo);
            }
            // Check Row 3
            if ((box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                blueRowThree.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueRowThree);
            }
            // Check Column 1
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 1) ||
                (box.row === 3 && box.column === 1)) {
                blueColumnOne.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueColumnOne);
            }
            // Check Column 2
            if ((box.row === 1 && box.column === 2) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 2)) {
                blueColumnTwo.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueColumnTwo);
            }
            // Check Column 3
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 3)) {
                blueColumnThree.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueColumnThree);
            }
            // Check Diagonal Left-to-Right
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                blueDiagonalLeftRight.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueDiagonalLeftRight);
            }
            // Check Diagonal Right-to-Left
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 1)) {
                blueDiagonalRightLeft.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, blueDiagonalRightLeft);
            }
        }
        // Green Stuff! 
        else if ((count % 3 === 0 || count / 5 === 1 || count / 7 === 1) &&
            box.color != "blue" && box.color != "green") {
            box.color = "green";
            count++;
            $scope.bannerText = "blue's turn";
            // Check Row 1
            if ((box.row === 1 && box.column === 1) || (box.row === 1 && box.column === 2) ||
                (box.row === 1 && box.column === 3)) {
                greenRowOne.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenRowOne);
            }
            // Check Row 2
            if ((box.row === 2 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 2 && box.column === 3)) {
                greenRowTwo.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenRowTwo);
            }
            // Check Row 3
            if ((box.row === 3 && box.column === 1) || (box.row === 3 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                greenRowThree.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenRowThree);
            }
            // Check Column 1
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 1) ||
                (box.row === 3 && box.column === 1)) {
                greenColumnOne.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenColumnOne);
            }
            // Check Column 2
            if ((box.row === 1 && box.column === 2) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 2)) {
                greenColumnTwo.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenColumnTwo);
            }
            // Check Column 3
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 3) ||
                (box.row === 3 && box.column === 3)) {
                greenColumnThree.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenColumnThree);
            }
            // Check Diagonal Left-to-Right
            if ((box.row === 1 && box.column === 1) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 3)) {
                greenDiagonalLeftRight.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenDiagonalLeftRight);
            }
            // Check Diagonal Right-to-Left
            if ((box.row === 1 && box.column === 3) || (box.row === 2 && box.column === 2) ||
                (box.row === 3 && box.column === 1)) {
                greenDiagonalRightLeft.push("(" + box.row + ", " + box.column + ")");
                checkFtw(box, greenDiagonalRightLeft);
            }
        } else {
            $scope.bannerText = "this has been selected"; // Maybe have a dynamically updated prompt.
        }
    };

    // Check for a win combo by length row/col/diag array
    var checkFtw = function(box, someArray) {
        if (someArray.length === 3) {
            $scope.bannerText = box.color + " wins!";
        }
    };

    // Reset Game - reset values to default
    $scope.resetGame = function() {
        $scope.bannerText = "Game reset.";
        count = 2;
        blueDiagonalLeftRight.length = 0;
        blueDiagonalRightLeft.length = 0;
        blueColumnOne.length = 0;
        blueColumnTwo.length = 0;
        blueColumnThree.length = 0;
        blueRowOne.length = 0;
        blueRowTwo.length = 0;
        blueRowThree.length = 0;
        greenDiagonalLeftRight.length = 0;
        greenDiagonalRightLeft.length = 0;
        greenColumnOne.length = 0;
        greenColumnTwo.length = 0;
        greenColumnThree.length = 0;
        greenRowOne.length = 0;
        greenRowTwo.length = 0;
        greenRowThree.length = 0;
        // Overwrite the color property on each box
        for (i = 0; i < $scope.boxes.length; i++) {
            $scope.boxes[i].color = "";
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
/*==================================
=THIS IS THE EXPERIMENTATION BRANCH=
==================================*/


var app = angular.module('TicTacToe', ["firebase"]);

app.controller('tttCtrl', function($scope, $firebase) {

    // Counter determines player turn
    var count = 2;

    // Sweet Dynamic Banner
    $scope.bannerText = "Take a moment to relax.";

    // Selection Function, Passing in individual box object
    $scope.isSelected = function(box) {

        // Blue Stuff!
        if (count === 11) { // If all the tiles are filled without a winner, then cat's game
            // $scope.bannerText = "cat's game!";
        } else if (count % 2 === 0 && box.color === "" && box.color != "green") {
            box.color = "blue";
            count++;
            $scope.bannerText = "green's turn";
        }
        // Green Stuff! 
        else if ((count % 3 === 0 || count / 5 === 1 || count / 7 === 1) &&
            box.color != "blue" && box.color != "green") {
            box.color = "green";
            count++;
            $scope.bannerText = "blue's turn";
        } else {
            $scope.bannerText = "this has been selected"; // Maybe have a dynamically updated prompt.
        }
    };


    var checkRow = function(row, column) {
        // create default values
        if (row === null) {
            row = 0;
        }
        if (column === null) {
            column = 0;
        }

        // start from the topleft row, topleft col
        if (row <= 1) {
            if (($scope.boxes[row].color === $scope.boxes[row + 1].color) &&
                $scope.boxes[row].color != "") {
                $()
            }
        }


    }


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
var app = angular.module('TicTacToe', []);

app.controller('tttCtrl', function($scope) {

    $scope.count = 2;
    $scope.gameSelections = [];

    $scope.isSelected = function(box) {

        var sArray = $scope.gameSelections;
        // If there is a winner ... alert-win.

        if ($scope.count === 11) {
            alert("cat's game!");
        } else if ($scope.count % 2 === 0 && box.color === "" && box.color != "blue" && box.color != "green") {
            box.color = "blue";
            $scope.count = $scope.count + 1;
            console.log("box.name: " + box.name + "; box.color: " + box.color);
            sArray.push(box.name + "," + box.color);

            for (i = 0; i <= sArray.length; i++) {
                if (sArray.indexOf("1,blue") !== -1 && sArray.indexOf("2,blue") !== -1 && sArray.indexOf("3,blue")) {
                    // alert("alert me");
                    console.log(sArray);
                }
            }

            console.log(sArray);
            // $scope.isSelected();
        } else if (($scope.count % 3 === 0 || $scope.count / 5 === 1 || $scope.count / 7 === 1) && box.color != "blue" && box.color != "green") {
            box.color = "green";
            $scope.count = $scope.count + 1;
            console.log("box.name: " + box.name + "; box.color: " + box.color);
            sArray.push(box.name + "," + box.color);

            for (i = 0; i <= sArray.length; i++) {
                if (sArray.indexOf("1,blue") !== -1 && sArray.indexOf("2,blue") !== -1 && sArray.indexOf("3,blue")) {
                    // alert("alert me");
                    console.log(sArray);
                }
            }

            console.log(sArray);
            // $scope.isSelected();
        } else {
            alert("this has been selected"); // Maybe have a dynamicly updated prompt.	
        }
    };

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
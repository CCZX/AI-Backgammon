AI = false;

function analysisRowLine(x ,y) {
    var result1, result2, result3, result4, result5;

}

function analysisAttackPoint(x, y) {
    var leftCount = 0;
    for (var i = 1 ; i < 5 ; i ++) {
        if (grid[x - i][y].value == 0) {
            continue;
        } else if (grid[x - i][y] == 2) {
            leftCount += 1;
            continue;
        } else {
            break;
        }
    }
}

function aiAction() {
    for (var i = 0 ; i < grid.length ; i ++) {
        for (var j = 0 ; j < grid[i].length ; j ++) {
            analysisAttackPoint(i, j);
        }
    }
}
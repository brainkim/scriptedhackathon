function Cell(up, right, down, left, options) {
    if (!(this instanceof Cell)) {
        return new Cell(up, right, down, left, options);
    }
    this.up = up;
    this.right = right;
    this.down = down;
    this.left = left;
    for (var key in options) {
        this[key] = options[key];
    }
}
console.log(Cell(true, true, true, true, true));
var gridData = [
    [Cell(true, false, false, true), Cell(true, false, false, false), Cell(true, true, false, false)],
    [Cell(true, false, false, true), Cell(true, false, true, false, {player:true}), Cell(false, true, true, false)],
    [Cell(false, false, true, true),Cell(true,false,true,false), Cell(true, false, true, false)], 
];

function renderGrid(gridData, $node) {
    var player = $("<div></div>");
    player.addClass("circle");
    
    for (var i = 0; i < gridData.length; i++) {
        var gridRow = gridData[i];
        // create a div
        var gridRowElement = $("<div></div>");
        // append div to $node
        $node.append(gridRowElement);
        for (var j = 0; j < gridRow.length; j++) {
            // create an inner divid
            var gridCell = gridRow[j];
            var gridCellElement = $("<div></div>");
            gridCellElement.addClass("Cell");
            if (gridCell.up) {
                gridCellElement.addClass("upCell");
            }
            if (gridCell.down) {
                gridCellElement.addClass("downCell");
            }
            if (gridCell.left) {
                gridCellElement.addClass("leftCell");
            }
            if (gridCell.right) {
                gridCellElement.addClass("rightCell");
            }
            if (gridCell.player) {
                gridCellElement.append(player);
            }
            // append div to $node
            $(gridCellElement).text();
            $node.append(gridCellElement);
        }
    }
}

renderGrid(gridData, $("#grid"));

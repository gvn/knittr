window.KNIT = {
  init: function (width, height) {
    var randomGrid = [];

    function generateRow(width) {
      var row = [];

      for (var i = 0; i < width; i++) {
        row.push(Math.random() > 0.5 ? 0 : 1);
      }

      return row;
    }

    for (var j = 0; j < height; j++) {
      randomGrid.push(generateRow(width));
    }

    this.draw(randomGrid);
  },
  generateGridHTML: function (grid, withNumbers) {
    var gridHTML = '';
    var rowNumber;

    for (var i = 0; i < grid.length; i++) {
      gridHTML += '<div class="row">';

      for (var j = 0; j < grid[i].length; j++) {
        gridHTML += '<div class="item stitch-' + grid[i][j] + '"></div>';
      }

      if (withNumbers) {
        rowNumber = grid.length - i;

        if (rowNumber === 1 || rowNumber  % 10 === 0 || rowNumber === grid.length) {
          gridHTML += '<div class="item number">' + rowNumber + '</div>';
        } else {
          gridHTML += '<div class="item empty"></div>';
        }
      }

      gridHTML += '</div>';
    }

    return gridHTML;
  },
  draw: function (grid) {
    var elWrapper = document.querySelector('.grid');
    var elPreview = document.querySelector('.grid.preview');
    var previewHTML = '';

    elWrapper.innerHTML = this.generateGridHTML(grid, true);

    for (var i = 0; i < 10; i++) {
      previewHTML += this.generateGridHTML(grid);
    }

    elPreview.innerHTML = previewHTML;
  }
};

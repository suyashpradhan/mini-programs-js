//! Print 3x3 matrix
function matrix() {
  let matrix = [];
  for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = [];
      for (let k = 0; k < 3; k++) {
        matrix[i][j][k] = i + j + k;
      }
    }
  }
}

matrix();

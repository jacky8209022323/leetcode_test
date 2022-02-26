/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
  const m = grid.length;
  const n = (grid[0] || []).length;
  const dp = Array(m);
  let up = 0;
  let left = 0;

  if (!m || !n) return 0;

  for (var i = 0; i < m; i++) {
      dp[i] = Array(n);
      for (var j = 0; j < n; j++) {
          up = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
          left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
          dp[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(up, left));
      }
  }

  return dp[m - 1][n - 1];
};

function quadEqRoots(a, b, c) {
  const det = Math.sqrt(b * b - 4 * a * c);
  let root1 = (-b + det) / (2 * a);
  let root2 = (-b - det) / (2 * a);
	root1 = Math.round(root1 * 100)/100;
		root2 = Math.round(root2 * 100)/100;

  return root1, root2;
}

module.exports = quadEqRoots;

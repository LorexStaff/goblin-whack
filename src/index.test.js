import './index.js';

test('создаётся игровое поле 4x4', () => {
  const cells = document.querySelectorAll('.cell');
  expect(cells.length).toBe(16);
});

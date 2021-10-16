function neighborsChallenge(houses, days) {
  let newState = [...houses];

  for (let d = 0; d < days; d++) {
    let dayState = [...newState];

    for (let i = 0; i < dayState.length; i++) {
      const prev = dayState[i - 1] ?? 0;
      const next = dayState[i + 1] ?? 0;

      newState[i] = prev === next ? 0 : 1;
    }
  }

  return newState;
}

console.log(neighborsChallenge([1, 0, 0, 0, 0, 1, 0, 0], 1));

console.log(neighborsChallenge([1, 1, 1, 0, 1, 1, 1, 1], 2));

console.log(neighborsChallenge([1, 1, 1, 0, 1, 1, 1, 1], 3));

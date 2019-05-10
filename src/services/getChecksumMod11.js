const getChecksumMod11 = code => {
  const factor = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const mod = 11;

  if (code && code.length !== factor.length) {
    return NaN;
  }

  const sum = code.reduce((accumulator, currentValue, index) => accumulator + currentValue * factor[index], 0);

  return sum % mod;
};

export default getChecksumMod11;

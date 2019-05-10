const fs = require('fs');

const getChecksumMod11 = code => {
  const factor = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const mod = 11;

  if (code && code.length !== factor.length) {
    return NaN;
  }

  const sum = code.reduce((accumulator, currentValue, index) => accumulator + currentValue * factor[index], 0);

  return sum % mod;
};

function getPermutations(list, limit) {
  if (list.length === 0) {
    return [[]];
  }

  const result = [];

  for (let i = 0; i < list.length; i++) {
    const copy = [...list];
    const head = copy.splice(i, 1);
    const rest = getPermutations(copy);

    for (let j = 0; j < rest.length; j++) {
      const next = head.concat(rest[j]);
      result.push(next);

      if (limit && result.length === limit) {
        return result;
      }
    }
  }

  return result;
}

function addSuffixMod11(code) {
  const mod = 11;
  const data = [...code, 0, 0];
  const checksum = getChecksumMod11(data);

  if (checksum === 1) {
    data[data.length - 2] = 1;
    data[data.length - 1] = 8;
  } else if (checksum !== 0) {
    data[data.length - 1] = mod - checksum;
  }

  return data;
}

function generateCodes() {
  const permutations = getPermutations([1, 2, 3, 4, 5, 6, 7], 1000);
  const codes = [];

  for (let i = 0; i < permutations.length; i++) {
    const code = addSuffixMod11(permutations[i]);
    codes.push(code.reduce((accumulator, currentValue) => accumulator + currentValue, ''));
  }

  return codes;
}

const codes = generateCodes();

const writeStream = fs.createWriteStream('codes.txt');
writeStream.on('error', err => {
  // eslint-disable-next-line no-console
  console.log(err);
});
codes.forEach((code, index) => {
  writeStream.write(`${index + 1}, ${code}\n`);
});
writeStream.end();

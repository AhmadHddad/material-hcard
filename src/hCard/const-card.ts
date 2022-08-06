const hexToRgb = (input: string) => {
  input = input + '';
  input = input.replace('#', '');
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ', ' +
    parseInt(second, 16) +
    ', ' +
    parseInt(last, 16)
  );
};

const primaryColor = ['#00acc1', '#ab47bc', '#8e24aa', '#af2cc5', '#7b1fa2'];
const warningColor = [
  '#ff9800',
  '#ffa726',
  '#fb8c00',
  '#ffa21a',
  '#f57c00',
  '#faf2cc',
  '#fcf8e3',
];
const dangerColor = [
  '#f44336',
  '#ef5350',
  '#e53935',
  '#f55a4e',
  '#d32f2f',
  '#ebcccc',
  '#f2dede',
];
const successColor = [
  '#4caf50',
  '#66bb6a',
  '#43a047',
  '#5cb860',
  '#388e3c',
  '#d0e9c6',
  '#dff0d8',
];
const infoColor = [
  '#00acc1',
  '#26c6da',
  '#00acc1',
  '#00d3ee',
  '#0097a7',
  '#c4e3f3',
  '#d9edf7',
];
const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573', '#c2185b'];
const grayColor = [
  '#999',
  '#777',
  '#3C4858',
  '#AAAAAA',
  '#D2D2D2',
  '#DDD',
  '#555555',
  '#333',
  '#eee',
  '#ccc',
  '#e4e4e4',
  '#E5E5E5',
  '#f9f9f9',
  '#f5f5f5',
  '#495057',
  '#e7e7e7',
  '#212121',
  '#c8c8c8',
  '#505050',
];
const blackColor = '#000';
const whiteColor = '#FFF';

const infoBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(infoColor[0]) +
    ',.4)',
};
const successBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(successColor[0]) +
    ',.4)',
};
const warningBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(warningColor[0]) +
    ',.4)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(dangerColor[0]) +
    ',.4)',
};
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(roseColor[0]) +
    ',.4)',
};

const warningCardHeader = {
  background:
    'linear-gradient(60deg, ' + warningColor[1] + ', ' + warningColor[2] + ')',
  ...warningBoxShadow,
};
const successCardHeader = {
  background:
    'linear-gradient(60deg, ' + successColor[1] + ', ' + successColor[2] + ')',
  ...successBoxShadow,
};
const dangerCardHeader = {
  background:
    'linear-gradient(60deg, ' + dangerColor[1] + ', ' + dangerColor[2] + ')',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background:
    'linear-gradient(60deg, ' + infoColor[1] + ', ' + infoColor[2] + ')',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background: 'linear-gradient(60deg, ' + '#3a7acb' + ', ' + '#3a7acb' + ')',
  ...infoBoxShadow,
};
const roseCardHeader = {
  background:
    'linear-gradient(60deg, ' + roseColor[1] + ', ' + roseColor[2] + ')',
  ...roseBoxShadow,
};

export {
  hexToRgb,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  whiteColor,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
};

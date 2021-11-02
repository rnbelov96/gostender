/* eslint-disable no-param-reassign */
export {};

const leftColor = '#77c314';
const rightColor = '#00515a';

const rangeElList = document.querySelectorAll('.js-range');

const esc3Range = document.querySelector('.js-esc-3-range') as HTMLInputElement;
const esc6Range = document.querySelector('.js-esc-6-range') as HTMLInputElement;
const esc12Range = document.querySelector(
  '.js-esc-12-range',
) as HTMLInputElement;
const garantRange = document.querySelector(
  '.js-garant-range',
) as HTMLInputElement;
const trainRange = document.querySelector(
  '.js-train-range',
) as HTMLInputElement;

const esc3CurrentLabelEl = document.querySelector(
  '.js-esc-3-current',
) as HTMLDivElement;
const esc6CurrentLabelEl = document.querySelector(
  '.js-esc-6-current',
) as HTMLDivElement;
const esc12CurrentLabelEl = document.querySelector(
  '.js-esc-12-current',
) as HTMLDivElement;
const garantCurrentLabelEl = document.querySelector(
  '.js-garant-current',
) as HTMLDivElement;
const trainCurrentLabelEl = document.querySelector(
  '.js-train-current',
) as HTMLDivElement;

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let esc3CurrentStep = 2;
let esc6CurrentStep = 2;
let esc12CurrentStep = 2;
let garantCurrentStep = 2;
let trainCurrentStep = 2;

const calcResult = () => {
  result = Number(esc3Range.value) * 1000
    + Number(esc6Range.value) * 1000
    + Number(esc12Range.value) * 1000
    + Number(garantRange.value) * 10000
    + Number(trainRange.value) * 10000;
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

esc3Range.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  esc3CurrentLabelEl.textContent = rangeEl.value;

  esc3CurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (esc3CurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (esc3CurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

esc6Range.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  esc6CurrentLabelEl.textContent = rangeEl.value;

  esc6CurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (esc6CurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (esc6CurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

esc12Range.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  esc12CurrentLabelEl.textContent = rangeEl.value;

  esc12CurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (esc12CurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (esc12CurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

garantRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  garantCurrentLabelEl.textContent = rangeEl.value;

  garantCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (garantCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (garantCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

trainRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  trainCurrentLabelEl.textContent = rangeEl.value;

  trainCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (trainCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (trainCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

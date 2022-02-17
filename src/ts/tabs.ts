export {};

let reasonsCurrentTab = 1;
const reasonsTabEl = document.querySelectorAll('.reasons__item');
const reasonsTextBoxElList = document.querySelectorAll('.reasons__text-box');
const reasonsContentEl = document.querySelector('.reasons__content');

reasonsContentEl?.addEventListener('click', e => {
  const clickedEl = e.target as Element;
  if (!(clickedEl.tagName === 'LI')) {
    return;
  }

  const clickedElIndex = Number((clickedEl as HTMLOListElement).dataset.reasonsTabIndex);
  if (clickedElIndex === reasonsCurrentTab) {
    return;
  }

  reasonsTabEl[reasonsCurrentTab - 1].classList.toggle('reasons__item_active');
  reasonsTextBoxElList[reasonsCurrentTab - 1].classList.toggle('visually-hidden');
  reasonsCurrentTab = clickedElIndex;
  reasonsTabEl[reasonsCurrentTab - 1].classList.toggle('reasons__item_active');
  reasonsTextBoxElList[reasonsCurrentTab - 1].classList.toggle('visually-hidden');
});

let offerCurrentTab = 1;
const offerTabEl = document.querySelectorAll('.offer__tab-item');
const offerTextBoxElList = document.querySelectorAll('.offer__text-box');
const offerTabListEl = document.querySelector('.offer__tab-list');

offerTabListEl?.addEventListener('click', e => {
  const clickedEl = e.target as Element;
  if (!(clickedEl.tagName === 'LI')) {
    return;
  }

  const clickedElIndex = Number((clickedEl as HTMLUListElement).dataset.offerTabIndex);
  if (clickedElIndex === offerCurrentTab) {
    return;
  }

  offerTabEl[offerCurrentTab - 1].classList.toggle('offer__tab-item_active');
  offerTextBoxElList[offerCurrentTab - 1].classList.toggle('visually-hidden');
  offerCurrentTab = clickedElIndex;
  offerTabEl[offerCurrentTab - 1].classList.toggle('offer__tab-item_active');
  offerTextBoxElList[offerCurrentTab - 1].classList.toggle('visually-hidden');
});

let gainsCurrentTab = 1;
const gainsTabEl = document.querySelectorAll('.gains__tab-item');
const gainsTextBoxElList = document.querySelectorAll('.gains__text-box');
const gainsTabListEl = document.querySelector('.gains__tab-list');

gainsTabListEl?.addEventListener('click', e => {
  const clickedEl = e.target as Element;
  if (!(clickedEl.tagName === 'LI')) {
    return;
  }

  const clickedElIndex = Number((clickedEl as HTMLUListElement).dataset.gainsTabIndex);
  if (clickedElIndex === gainsCurrentTab) {
    return;
  }

  gainsTabEl[gainsCurrentTab - 1].classList.toggle('gains__tab-item_active');
  gainsTextBoxElList[gainsCurrentTab - 1].classList.toggle('visually-hidden');
  gainsCurrentTab = clickedElIndex;
  gainsTabEl[gainsCurrentTab - 1].classList.toggle('gains__tab-item_active');
  gainsTextBoxElList[gainsCurrentTab - 1].classList.toggle('visually-hidden');
});

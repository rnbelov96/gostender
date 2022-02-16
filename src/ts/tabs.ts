export {};

let reasonsCurrentTab = 1;
const reasonsTabElList = document.querySelectorAll('.reasons__item');
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

  reasonsTabElList[reasonsCurrentTab - 1].classList.toggle('reasons__item_active');
  reasonsTextBoxElList[reasonsCurrentTab - 1].classList.toggle('visually-hidden');
  reasonsCurrentTab = clickedElIndex;
  reasonsTabElList[reasonsCurrentTab - 1].classList.toggle('reasons__item_active');
  reasonsTextBoxElList[reasonsCurrentTab - 1].classList.toggle('visually-hidden');
});

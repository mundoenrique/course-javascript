import usersStore from '../../store/users-store';
import './render-butons.css';

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement('button');
  nextButton.innerText = ' Next >';

  const PrevButton = document.createElement('button');
  PrevButton.innerText = '< Prev ';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();

  element.append(PrevButton, currentPageLabel, nextButton);
};

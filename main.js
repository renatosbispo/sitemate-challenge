import ConfirmationModal, {
  confirmationModalElementName,
} from './components/confirmation-modal.js';

import { injectHtmlTemplates } from './modules/utils.js';

const defaultYesButtonAction = (modalClassName) => {
  const output = document.querySelector(`output.${modalClassName}`);
  console.log(output);
  output.innerHTML = 'You just clicked "Yes"';
};

const defaultCancelButtonAction = (modalClassName) => {
  const output = document.querySelector(`output.${modalClassName}`);

  output.innerHTML = 'You just clicked "Cancel"';
};

(async () => {
  await injectHtmlTemplates();

  customElements.define(confirmationModalElementName, ConfirmationModal);

  const confirmationModal1 = document.querySelector(
    `${confirmationModalElementName}.confirmation-modal-1`
  );

  confirmationModal1.yesButtonAction = () =>
    defaultYesButtonAction('confirmation-modal-1');

  confirmationModal1.cancelButtonAction = () =>
    defaultCancelButtonAction('confirmation-modal-1');

  const confirmationModal2 = document.querySelector(
    `${confirmationModalElementName}.confirmation-modal-2`
  );

  confirmationModal2.yesButtonAction = () =>
    defaultYesButtonAction('confirmation-modal-2');

  confirmationModal2.cancelButtonAction = () =>
    defaultCancelButtonAction('confirmation-modal-2');
})();

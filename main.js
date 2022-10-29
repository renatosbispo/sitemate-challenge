import ConfirmationModal, {
  confirmationModalElementName,
} from './components/confirmation-modal.js';

import { injectHtmlTemplates } from './modules/utils.js';

(async () => {
  await injectHtmlTemplates();

  customElements.define(confirmationModalElementName, ConfirmationModal);
})();

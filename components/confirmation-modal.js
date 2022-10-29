export const confirmationModalElementName = 'confirmation-modal';

export default class ConfirmationModal extends HTMLElement {
  cancelButtonId = 'cancel-button';
  confirmationModalDialogClassName = 'confirmation-modal-dialog';
  confirmationModalTemplateId = 'confirmation-modal';
  defaultDialogMessageContent = 'Are you sure you want to continue?';
  dialogMessageContentSlotName = 'dialog-message-content';
  yesButtonId = 'yes-button';
  modalTriggerSelector = '.modal-trigger';

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    this.modalClassName = this.className;

    this.triggerButton = document.querySelector(
      `button.${this.modalClassName}`
    );

    const dialogMessageContent =
      this.dialogMessageContent || this.defaultDialogMessageContent;

    const dialogMessageContentSpan = document.createElement('span');

    dialogMessageContentSpan.setAttribute(
      'slot',
      this.dialogMessageContentSlotName
    );

    dialogMessageContentSpan.innerHTML = dialogMessageContent;

    const confirmationModalTemplate = document.getElementById(
      this.confirmationModalTemplateId
    );

    const confirmationModalTemplateClone =
      confirmationModalTemplate.content.cloneNode(true);

    shadowRoot.appendChild(confirmationModalTemplateClone);

    this.dialog = shadowRoot.querySelector('dialog');

    this.yesButton = shadowRoot.getElementById(this.yesButtonId);

    this.cancelButton = shadowRoot.getElementById(this.cancelButtonId);

    if (typeof this.dialog.showModal !== 'function') {
      this.dialog.hidden = true;
    }

    this.triggerButton.addEventListener('click', () => {
      if (typeof this.dialog.showModal === 'function') {
        this.dialog.showModal();
      } else {
        alert('Sorry, the <dialog> API is not supported by this browser.');
      }
    });

    this.yesButton.addEventListener('click', () => {
      if (this.yesButtonAction) {
        this.yesButtonAction();
      } else {
        console.log('clicked yes button');
      }
    });

    this.cancelButton.addEventListener('click', () => {
      if (this.cancelButtonAction) {
        this.cancelButtonAction();
      } else {
        console.log('clicked cancel button');
      }
    });

    document
      .querySelector(`${confirmationModalElementName}.${this.modalClassName}`)
      .appendChild(dialogMessageContentSpan);
  }

  get dialogMessageContent() {
    return this.getAttribute('dialog-message-content');
  }
}

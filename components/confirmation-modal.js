export const confirmationModalElementName = 'confirmation-modal';

export default class ConfirmationModal extends HTMLElement {
  confirmationModalTemplateId = 'confirmation-modal';
  defaultDialogMessageContent = 'Are you sure you want to continue?';
  dialogMessageContentSlotName = 'dialog-message-content';

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

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

    document
      .querySelector(confirmationModalElementName)
      .appendChild(dialogMessageContentSpan);

    shadowRoot.appendChild(confirmationModalTemplateClone);
  }

  // connectedCallback() {}

  get dialogMessageContent() {
    return this.getAttribute('dialog-message-content');
  }
}

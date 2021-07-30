import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-65e1c793.js';
import { V as ViewState, L as LogService, S as StandardConsent, r as replaceHtmlLinksWithCustomFunction, C as ConsentService } from './view-state-6b785ead.js';

const modalViewCss = ".a-box{max-width:44rem}h3{margin-top:1rem;margin-bottom:0}.second-p{margin-top:2rem}.checkboxes{margin-top:2.25rem;margin-bottom:1rem}bbg-button>button{width:100%;margin-left:0 !important}#save-modal-dialog>button{margin-bottom:1rem}.read-more{margin-top:0.75rem;margin-left:32.5px}.smallprint-links{margin-bottom:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row}.smallprint-links span:after{content:\"|\";margin-right:1rem;margin-left:1rem}.smallprint-links span:last-child:after{content:\"\";margin:0;padding-top:0.1rem}@media (max-width: 48rem){.smallprint-links{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.smallprint-links span{padding:0.75rem 0}.smallprint-links span:after{display:none}}";

const ModalView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalShowEvent = createEvent(this, "modalShowEvent", 7);
    this.modalHideEvent = createEvent(this, "modalHideEvent", 7);
    this.saveAcceptAllEvent = createEvent(this, "saveAcceptAllEvent", 7);
    this.saveCurrentSelectionEvent = createEvent(this, "saveCurrentSelectionEvent", 7);
    this.checkboxToggleModalEvent = createEvent(this, "checkboxToggleModalEvent", 7);
    this.modalViewStateChangedEvent = createEvent(this, "modalViewStateChangedEvent", 7);
    this.changeToPrivacySettingsLinkEditViewEvent = createEvent(this, "changeToPrivacySettingsLinkEditViewEvent", 7);
    /**
     * Smallprint text divided into separate pieces to change placeholders with links
     */
    this.uiTextSmallprint = [];
    /**
     * Link addresses to the smallprint links at the bottom of the modal
     */
    this.uiTextSmallprintLinks = [];
    /**
     * List of all checkbox elements
     */
    this.uiCheckboxList = [];
    /**
     * Sets the defined view (e.g. initial view, edit view) to render
     */
    this.viewState = ViewState.InitialView;
    /**
     * Defines whether the standard consent category 'comfort' is disabled or not
     */
    this.disabledComfort = false;
    /**
     * Defines whether the standard consent category 'marketing' is disabled or not
     */
    this.disabledMarketing = false;
    /**
     * Sets visibility of modal
     */
    this.show = false;
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.changeToEditViewFromPrivacySettingsLink = this.changeToEditViewFromPrivacySettingsLink.bind(this);
  }
  /**
   * Watches the show attribute for value changes and emits an event
   * @param isVisible
   */
  modalVisibility(isVisible) {
    if (isVisible) {
      this.modalShowEvent.emit();
    }
    else {
      this.modalHideEvent.emit();
    }
  }
  changedModalViewState(viewState) {
    this.modalViewStateChangedEvent.emit(viewState);
  }
  /**
   * Updates all dynamic visual elements of the modal and issues a re-render
   * @param consentData The consent category data to list the consent options
   * @param localeContent (Optional to update texts, mandatory for view state changes) The i18n language texts of the
   *     current selected locale
   * @param linkUrlComfort (Optional) Overwrites the current 'comfort' link address
   * @param linkUrlMarketing (Optional) Overwrites the current 'marketing' link address
   * @param linkUrlPolicy (Optional) Overwrites the current 'policy' link address
   * @param linkUrlImprint (Optional) Overwrites the current 'imprint' link address
   * @param viewState (Optional) Overwrites the current view state
   * @param disabledComfort (Optional) Overwrites the disabledComfort state - this only affects the language texts,
   *     not the consents.
   * @param disabledMarketing (Optional) Overwrites the disabledMarketing state - this only affects the language
   *     texts, not the consents.
   */
  async updateUi(consentData, localeContent, linkUrlComfort, linkUrlMarketing, linkUrlPolicy, linkUrlImprint, viewState, disabledComfort, disabledMarketing) {
    if (viewState) {
      this.viewState = viewState;
    }
    if (disabledComfort !== undefined) {
      this.disabledComfort = disabledComfort;
    }
    if (disabledMarketing !== undefined) {
      this.disabledMarketing = disabledMarketing;
    }
    await this.applyAllLinks(linkUrlComfort, linkUrlMarketing, linkUrlPolicy, linkUrlImprint);
    if (localeContent) {
      await this.applyLocale(localeContent);
    }
    await this.applyConsents(consentData);
    LogService.log.debug("Updated modal user interface");
  }
  componentDidLoad() {
    this.modalShowEvent.emit();
  }
  render() {
    return (h(Host, null, h("bbg-dialog", { type: "modal", show: this.show }, h("span", { slot: "content" }, h("h3", null, this.uiTextTitle), h("slot", null), this.createDescription(), this.createCheckboxList()), this.createSmallprintText(), h("span", { style: { width: "100%" }, slot: "actions" }, this.createSaveAllButton(), this.createSaveButton(), this.createFooterLinks()))));
  }
  createSmallprintText() {
    return this.viewState === ViewState.InitialView ? h("span", { slot: "code" }, this.uiTextSmallprint) : "";
  }
  createDescription() {
    let description1Title = "";
    let description2Title = "";
    if (this.viewState === ViewState.EditView) {
      description1Title = (h("div", null, h("strong", null, this.uiTextDescription1Title), h("br", null)));
      description2Title = (h("div", null, h("strong", null, this.uiTextDescription2Title), h("br", null)));
    }
    return (h("div", null, h("p", null, description1Title, h("div", { class: "desc1" }, this.uiTextDescription1Text)), h("p", { class: "second-p" }, description2Title, h("div", { class: "desc2" }, this.uiTextDescription2Text))));
  }
  createCheckboxList() {
    const isEditView = this.viewState === ViewState.EditView;
    return this.uiCheckboxList.map(consentCheckbox => (h("p", { class: "checkboxes" }, h("bbg-checkbox", { fid: consentCheckbox.checkboxId }, h("input", { style: { display: "none" }, type: "checkbox", checked: consentCheckbox.userConsents, onClick: this.handleCheckbox }), h("label", null, consentCheckbox.label)), h("div", { class: "read-more" }, isEditView ? (consentCheckbox.name === StandardConsent.Comfort ? this.uiTextDescriptionReadMoreComfort : "") : "", isEditView ? (consentCheckbox.name === StandardConsent.Marketing ? this.uiTextDescriptionReadMoreMarketing : "") : "", isEditView ? h("span", null, "\u00A0") : "", h("bbg-link", { type: this.viewState === ViewState.InitialView ? "primary" : "simple", href: consentCheckbox.readMoreLink }, consentCheckbox.readMoreLabel)))));
  }
  createSaveAllButton() {
    return this.viewState === ViewState.InitialView ? (h("p", { style: { "margin-top": "0" } }, h("bbg-button", { id: "save-all-modal-dialog", type: "primary", label: this.uiTextButtonConfirm, onClick: () => this.saveAcceptAllAndCloseModal() }))) : ("");
  }
  createSaveButton() {
    let buttonType = "tertiary";
    if (this.viewState === ViewState.EditView) {
      buttonType = "primary";
    }
    return (h("p", null, h("bbg-button", { id: "save-modal-dialog", type: buttonType, label: this.uiTextButtonCancel, onClick: () => this.saveCurrentSelectionAndCloseModal() })));
  }
  createFooterLinks() {
    return (h("div", { class: "smallprint-links" }, this.uiTextSmallprintLinks.map(smallprintLink => (h("span", null, h("bbg-link", { type: "simple", href: smallprintLink.url }, smallprintLink.text))))));
  }
  /**
   * Applies the locale data texts to the according UI elements
   * @param content
   */
  async applyLocale(content) {
    LogService.log.debug("Apply locale");
    switch (this.viewState) {
      case ViewState.InitialView:
        this.applyInitialViewTexts(content);
        break;
      case ViewState.EditView:
        this.applyEditViewTexts(content);
        break;
    }
    this.uiTextSmallprint = replaceHtmlLinksWithCustomFunction(`${content.smallprint.saveDescription} ${content.smallprint.withdrawDescription}`, "SETTINGS_LINK", content.smallprint.settings.term, this.changeToEditViewFromPrivacySettingsLink);
    this.uiTextButtonCancel = content.general.save;
    this.smallprintValidation(content);
    LogService.log.debug("Applied language to user interface");
  }
  smallprintValidation(content) {
    this.uiTextSmallprintLinks = [];
    if (this.uiLinkUrlPolicy) {
      this.uiTextSmallprintLinks.push({ text: content.smallprint.policy.term, url: this.uiLinkUrlPolicy });
    }
    if (this.uiLinkUrlImprint) {
      this.uiTextSmallprintLinks.push({ text: content.smallprint.imprint.term, url: this.uiLinkUrlImprint });
    }
  }
  applyInitialViewTexts(content) {
    LogService.log.debug("Apply initial view texts");
    this.uiTextTitle = content.title.initialView;
    if (!this.disabledComfort && this.disabledMarketing) {
      this.uiTextLinkReadMoreComfort = content.comfortCookieDescription.link.label;
      this.uiTextLinkLabelReadMoreComfort = content.comfortCookieDescription.button.label;
      this.uiTextButtonConfirm = content.comfortCookieDescription.button.label;
      this.uiTextDescription1Text = content.description.cookies.onlycomfort;
      this.uiTextDescription2Text = content.description.cookies.onlycomfort2;
    }
    else if (this.disabledComfort && !this.disabledMarketing) {
      this.uiTextLinkReadMoreMarketing = content.marketingCookieDescription.link.label;
      this.uiTextLinkLabelReadMoreMarketing = content.marketingCookieDescription.button.label;
      this.uiTextButtonConfirm = content.marketingCookieDescription.button.label;
      this.uiTextDescription1Text = content.description.cookies.onlymarketing;
      this.uiTextDescription2Text = content.description.cookies.onlymarketing2;
    }
    else {
      this.uiTextLinkReadMoreComfort = content.comfortCookieDescription.link.label;
      this.uiTextLinkLabelReadMoreComfort = content.comfortCookieDescription.button.label;
      this.uiTextLinkReadMoreMarketing = content.marketingCookieDescription.link.label;
      this.uiTextLinkLabelReadMoreMarketing = content.marketingCookieDescription.button.label;
      this.uiTextButtonConfirm = content.general.acceptAllButtonLabel;
      this.uiTextDescription1Text = content.description.cookies.all;
      this.uiTextDescription2Text = content.description.cookies.all2;
    }
  }
  applyEditViewTexts(content) {
    LogService.log.debug("Apply edit view texts");
    this.uiTextTitle = content.title.editView;
    this.uiTextDescription1Title = content.description.deactivate.title;
    this.uiTextDescription1Text = content.description.deactivate.text;
    if (!this.disabledComfort && this.disabledMarketing) {
      this.uiTextDescription2Title = content.description.settings.titleonlycomfort;
      this.uiTextDescription2Text = content.description.settings.textonlycomfort;
    }
    else if (this.disabledComfort && !this.disabledMarketing) {
      this.uiTextDescription2Title = content.description.settings.titleonlymarketing;
      this.uiTextDescription2Text = content.description.settings.textonlymarketing;
    }
    else {
      this.uiTextDescription2Title = content.description.settings.titleall;
      this.uiTextDescription2Text = content.description.settings.textall;
    }
    // TODO: Discuss which texts should be here for the whole consent list section
    this.uiTextLinkLabelReadMoreComfort = content.comfortCookieDescription.button.label;
    this.uiTextLinkLabelReadMoreMarketing = content.marketingCookieDescription.button.label;
    this.uiTextDescriptionReadMoreComfort = content.comfortCookieDescription.text;
    this.uiTextDescriptionReadMoreMarketing = content.marketingCookieDescription.text;
    this.uiTextLinkReadMoreComfort = content.comfortCookieDescription.link.label;
    this.uiTextLinkReadMoreMarketing = content.marketingCookieDescription.link.label;
  }
  async applyAllLinks(linkUrlComfort, linkUrlMarketing, linkUrlPolicy, linkUrlImprint) {
    if (linkUrlComfort) {
      this.uiLinkReadMoreComfort = linkUrlComfort;
    }
    if (linkUrlMarketing) {
      this.uiLinkReadMoreMarketing = linkUrlMarketing;
    }
    this.uiLinkUrlPolicy = linkUrlPolicy ? linkUrlPolicy : undefined;
    this.uiLinkUrlImprint = linkUrlImprint ? linkUrlImprint : undefined;
  }
  async applyConsents(consents) {
    let standardConsents = [];
    let customConsents = [];
    for (const { name, userConsents } of consents) {
      if (name === StandardConsent.Comfort) {
        standardConsents.push(...ConsentService.consentUiElementFactory([
          {
            indexId: name,
            name,
            label: this.uiTextLinkLabelReadMoreComfort,
            linkAddress: this.uiLinkReadMoreComfort,
            linkLabel: this.uiTextLinkReadMoreComfort,
            userConsents: userConsents,
          },
        ]));
      }
      else if (name === StandardConsent.Marketing) {
        standardConsents.push(...ConsentService.consentUiElementFactory([
          {
            indexId: name,
            name,
            label: this.uiTextLinkLabelReadMoreMarketing,
            linkAddress: this.uiLinkReadMoreMarketing,
            linkLabel: this.uiTextLinkReadMoreMarketing,
            userConsents: userConsents,
          },
        ]));
      }
      else {
        // TODO: Custom consents
        customConsents.push(...ConsentService.consentUiElementFactory([
          {
            indexId: name,
            name,
            label: name + " (To Do)",
            linkAddress: "ToDo",
            linkLabel: "Read more link (To Do)",
            userConsents: userConsents,
          },
        ]));
      }
    }
    this.uiCheckboxList = [...standardConsents, ...customConsents];
  }
  /**
   * Marks all checkboxes, emits the respective 'checkboxToggleModalEvent' events, waits and emits the 'saveAcceptAllEvent' event
   */
  saveAcceptAllAndCloseModal() {
    const allCheckboxInputElements = this.hostElement.querySelectorAll("p.checkboxes > bbg-checkbox > div > input");
    /* eslint-disable unicorn/no-array-for-each */
    allCheckboxInputElements.forEach((checkboxElement) => {
      checkboxElement.checked = true;
      const indexId = checkboxElement.getAttribute("id");
      const consent = { name: indexId, userConsents: checkboxElement.checked };
      this.checkboxToggleModalEvent.emit(consent);
    });
    /* eslint-enable unicorn/no-array-for-each */
    setTimeout(() => {
      this.saveAcceptAllEvent.emit();
    }, 500);
  }
  /**
   * Emits the 'changeToPrivacySettingsLinkEditViewEvent'
   */
  changeToEditViewFromPrivacySettingsLink() {
    this.changeToPrivacySettingsLinkEditViewEvent.emit();
  }
  /**
   * Emits the 'saveCurrentSelectionEvent'
   */
  saveCurrentSelectionAndCloseModal() {
    this.saveCurrentSelectionEvent.emit();
  }
  handleCheckbox(event) {
    const checkboxElement = event.target;
    const indexId = checkboxElement.getAttribute("id");
    const userConsents = checkboxElement.checked;
    const consent = { name: indexId, userConsents };
    this.checkboxToggleModalEvent.emit(consent);
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "show": ["modalVisibility"],
    "viewState": ["changedModalViewState"]
  }; }
};
ModalView.style = modalViewCss;

export { ModalView as modal_view };

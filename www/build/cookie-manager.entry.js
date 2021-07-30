import { r as registerInstance, h, g as getElement } from './index-65e1c793.js';
import { d as defaultStandardConsentComfort, a as defaultStandardConsentMarketing, V as ViewState, L as LogService, S as StandardConsent, C as ConsentService, b as StorageType, J as JsonConfigurationService, I as I18nService } from './view-state-6b785ead.js';

'use strict';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

const cookieManagerCss = "";

const CookieManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Contains the current state of all consents
     */
    this.consents = [defaultStandardConsentComfort, defaultStandardConsentMarketing];
    /**
     * Holds the current state of the view
     */
    this.viewState = ViewState.InitialView;
    /**
     * Holds the internal current locale state
     */
    this.currentLocale = undefined;
    /**
     * Holds the internal current ui texts for display in the modal
     */
    this.uiTextContent = undefined;
    /**
     * Holds the read JSON configuration
     */
    this.jsonConfiguration = undefined;
    /**
     * Sets the visibility of the cookie manager modal
     */
    this.visible = false;
    /**
     * Toggles logging to the console
     */
    this.logging = "warn";
    /**
     * Element id of the JSON configuration settings script element block
     */
    this.jsonConfigTag = "consent-kit-settings";
    /**
     * Sets the language/locale of the user interface
     */
    this.locale = undefined;
    /**
     * Sets the fallback language/locale if nothing else works
     */
    this.fallbackLocale = "en-us";
    /**
     * Sets the link address of the comfort consent link (read more)
     */
    this.linkUrlComfort = undefined;
    /**
     * Sets the link address of the marketing consent link (read more)
     */
    this.linkUrlMarketing = undefined;
    /**
     * Sets the link address of the footer Policy link
     */
    this.linkUrlPolicy = undefined;
    /**
     * Sets the link address of the footer Imprint link
     */
    this.linkUrlImprint = undefined;
    /**
     * Sets the identifier of the cookie so the application can save/read the cookie from the browser cache
     */
    this.cookieName = "bosch-privacy-v3";
    /**
     * Disable the standard consent category 'comfort'
     */
    this.disableConsentComfort = false;
    /**
     * Disable the standard consent category 'marketing'
     */
    this.disableConsentMarketing = false;
  }
  /**
   * Watches the 'logging' attribute for value changes and sets the application log level
   * @param newLogSetting The new log level setting
   */
  validateAndSetLogLevel(newLogSetting) {
    if (LogService.isOfTypeLogLevelDesc(newLogSetting)) {
      LogService.log.setLevel("info");
      LogService.log.info("Set log level to:", newLogSetting);
      LogService.log.setLevel(newLogSetting);
    }
    else if (newLogSetting !== null) {
      LogService.log.setLevel("warn");
      LogService.log.warn("Log level is incorrect, fallback to 'silent'");
      LogService.log.setLevel("silent");
    }
  }
  /**
   * Watches the 'locale' attribute for value changes and calls the language change
   * @param newLocale
   */
  async validateAndSetLocale(newLocale) {
    LogService.log.info("Apply changed locale:", newLocale);
    await this.fetchAndChangeLanguage(newLocale);
  }
  /**
   * Watches the 'comfort-link-url' attribute for value changes and updates the user interface
   * @param newLinkAddress The new link address
   */
  async setComfortLink(newLinkAddress) {
    const modalView = await this.getModalView();
    LogService.log.info("Apply changed comfort link address:", newLinkAddress);
    await modalView.updateUi(this.consents, undefined, newLinkAddress, this.linkUrlMarketing);
  }
  /**
   * Watches the 'marketing-link-url' attribute for value changes and updates the user interface
   * @param newLinkAddress The new link address
   */
  async setMarketingLink(newLinkAddress) {
    const modalView = await this.getModalView();
    LogService.log.info("Apply changed marketing link address:", newLinkAddress);
    await modalView.updateUi(this.consents, undefined, this.linkUrlComfort, newLinkAddress);
  }
  /**
   * Watches the 'link-url-policy' attribute for value changes and updates the user interface
   * @param newLinkAddress The new link address
   */
  async setPolicyLink(newLinkAddress) {
    const modalView = await this.getModalView();
    LogService.log.info("Apply changed policy link address:", newLinkAddress);
    await modalView.updateUi(this.consents, this.uiTextContent, this.linkUrlComfort, this.linkUrlMarketing, newLinkAddress, this.linkUrlImprint);
  }
  /**
   * Watches the 'link-url-imprint' attribute for value changes and updates the user interface
   * @param newLinkAddress The new link address
   */
  async setImprintLink(newLinkAddress) {
    const modalView = await this.getModalView();
    LogService.log.info("Apply changed imprint link address:", newLinkAddress);
    await modalView.updateUi(this.consents, this.uiTextContent, this.linkUrlComfort, this.linkUrlMarketing, this.linkUrlPolicy, newLinkAddress);
  }
  async removeOrAddConsentComfort(disabled) {
    if (disabled) {
      this.consents = this.removeDisabledStandardConsentsFromAllConsents(this.consents);
      LogService.log.debug(`Disabled standard consent '${StandardConsent.Comfort}'`);
    }
    else if (!this.consents.includes(defaultStandardConsentComfort)) {
      this.consents.unshift(defaultStandardConsentComfort);
      LogService.log.debug(`Enabled standard consent '${StandardConsent.Comfort}'`);
    }
    const modalView = await this.getModalView();
    await modalView.updateUi(this.consents, this.uiTextContent, undefined, undefined, undefined, undefined, undefined, disabled, this.disableConsentMarketing);
  }
  async removeOrAddConsentMarketing(disabled) {
    if (disabled) {
      this.consents = this.removeDisabledStandardConsentsFromAllConsents(this.consents);
      LogService.log.debug(`Disabled standard consent '${StandardConsent.Marketing}'`);
    }
    else if (!this.consents.includes(defaultStandardConsentMarketing)) {
      if (this.consents.length > 0 && this.consents[0].name === StandardConsent.Comfort) {
        this.consents.splice(1, 0, defaultStandardConsentMarketing);
      }
      else {
        this.consents.unshift(defaultStandardConsentMarketing);
      }
      LogService.log.debug(`Enabled standard consent '${StandardConsent.Marketing}'`);
    }
    const modalView = await this.getModalView();
    await modalView.updateUi(this.consents, this.uiTextContent, undefined, undefined, undefined, undefined, undefined, this.disableConsentComfort, disabled);
  }
  /**
   * Listens to the 'modalShowEvent' event from the modal
   * @param event
   */
  modalShowEventHandler(event) {
    LogService.log.debug(event);
  }
  /**
   * Listens to the 'modalHideEvent' event from the modal
   * @param event
   */
  modalHideEventHandler(event) {
    LogService.log.debug(event);
  }
  /**
   * Listens to the 'changeToPrivacySettingsLinkEditViewEvent' event from the modal
   * @param event
   */
  async changeToPrivacySettingsLinkEditViewEventHandler(event) {
    LogService.log.debug("Clicked privacy 'settings'", event);
    const modalView = await this.getModalView();
    this.viewState = ViewState.EditView;
    await modalView.updateUi(this.consents, this.uiTextContent, undefined, undefined, undefined, undefined, ViewState.EditView);
  }
  /**
   * Listens to the 'saveAcceptAllEvent' event from the modal 'accept all' button
   * @param event
   */
  async saveAcceptAllEventHandler(event) {
    LogService.log.debug("Clicked 'Accept All':", event);
    await ConsentService.storeConsents(this.consents, [StorageType.Cookie], this.cookieName, this.currentLocale);
    await this.setModalVisibilityAndState(false, ViewState.EditView);
  }
  /**
   * Listens to the 'saveCurrentSelectionEvent' event from the modal 'save' button.
   * On event the consents in their current state are saved to the storage.
   * @param event
   */
  async saveCurrentSelectionEventHandler(event) {
    LogService.log.debug("Clicked 'Save'", event);
    await ConsentService.storeConsents(this.consents, [StorageType.Cookie], this.cookieName, this.currentLocale);
    await this.setModalVisibilityAndState(false, ViewState.EditView);
  }
  /**
   * Listens to the 'checkboxToggleModalEvent' event from the checkboxes.
   * @param event
   */
  checkboxToggleModalEventHandler(event) {
    LogService.log.debug(event);
    this.consents = this.consents.map(consent => {
      return consent.name === event.detail.name ? { name: consent.name, userConsents: event.detail.userConsents } : consent;
    });
  }
  /**
   * Renders the web component
   */
  render() {
    return (h("div", null, h("span", { slot: "content" }), h("modal-view", { show: this.visible })));
  }
  /**
   * Called once just after the component is first connected to the DOM - only called once
   */
  async componentWillLoad() {
    // Read JSON configuration if available
    this.jsonConfiguration = JsonConfigurationService.getConfiguration(this.jsonConfigTag);
  }
  /**
   * Will be called when the component has been rendered
   */
  async componentDidLoad() {
    LogService.log.setLevel(this.logging);
    LogService.log.info("The cookie manager was loaded");
    LogService.log.debug("The standard consent link values are:", this.linkUrlComfort, this.linkUrlMarketing);
    const usedStorageType = StorageType.Cookie;
    const restoredConsents = await ConsentService.restoreConsents([usedStorageType], this.cookieName);
    const tempConsents = await this.checkConsentAvailabilityAndSetModalVisibilityAndState(restoredConsents);
    this.consents = this.removeDisabledStandardConsentsFromAllConsents(tempConsents);
    LogService.log.debug("The cookie manager is visible:", this.visible);
    // NOTE: To add new custom consent categories to an existing storage/cookie they will have to be injected here
    await this.setLocaleFromSelectedStorageData(restoredConsents, usedStorageType);
  }
  /**
   * Requests the specified locale file from the server and applies it to the user interface
   * @param locale
   */
  async fetchAndChangeLanguage(locale) {
    LogService.log.debug("Given locale is:", locale);
    const changedLocale = I18nService.getLocale(this.fallbackLocale, this.element, locale);
    this.currentLocale = changedLocale;
    await I18nService.fetchI18n(changedLocale)
      .then(async (content) => {
      LogService.log.debug("Successfully requested the locale content:", content);
      // Save the current content for further use
      this.uiTextContent = content;
      // override configured texts of the current locale if available in the JSON configuration
      if (this.jsonConfiguration && this.jsonConfiguration.i18nOverride && this.currentLocale in this.jsonConfiguration.i18nOverride) {
        this.uiTextContent = cjs(content, this.jsonConfiguration.i18nOverride[this.currentLocale]);
        LogService.log.debug(`Overriding locale '${this.currentLocale}' texts with selected JSON configuration texts:`, this.jsonConfiguration.i18nOverride[this.currentLocale]);
      }
      // Call UI component method and apply the locale
      const modalView = await this.getModalView();
      await modalView.updateUi(this.consents, this.uiTextContent, this.linkUrlComfort, this.linkUrlMarketing, this.linkUrlPolicy, this.linkUrlImprint, this.viewState, this.disableConsentComfort, this.disableConsentMarketing);
    })
      .catch(error => {
      LogService.log.error(error);
    });
  }
  async setLocaleFromSelectedStorageData(restoredConsents, storageType) {
    const cookieStorageData = restoredConsents.storageData.find(storage => storage.storageType === storageType);
    if (cookieStorageData && cookieStorageData.locale) {
      LogService.log.debug("Retrieved locale from cookie storage:", cookieStorageData.locale);
      // Triggers locale change
      this.locale = cookieStorageData.locale;
    }
    else {
      // Initial locale change
      await this.fetchAndChangeLanguage(this.locale);
    }
  }
  /**
   * This method takes all consents, removes the disabled standard consents and returns the rest.
   * @param consents
   * @private
   */
  removeDisabledStandardConsentsFromAllConsents(consents) {
    let filteredConsents = [];
    for (let consent of consents) {
      if (!((this.disableConsentComfort && consent.name === StandardConsent.Comfort) || (this.disableConsentMarketing && consent.name === StandardConsent.Marketing))) {
        filteredConsents.push(consent);
      }
    }
    return filteredConsents;
  }
  /**
   * Sets the 'visible' and 'viewState' state properties
   * @param visible
   * @param viewState
   * @private
   */
  async setModalVisibilityAndState(visible, viewState) {
    LogService.log.debug("Set modal visible and modal state:", visible, viewState);
    this.visible = visible;
    this.viewState = viewState;
    const modalView = await this.getModalView();
    await modalView.updateUi(this.consents, this.uiTextContent, undefined, undefined, undefined, undefined, this.viewState);
  }
  /**
   * Checks if the restored consents are empty and sets them as the new state of consents if available.
   * In addition, the modal visibility is set accordingly. If there is a consent available already,
   * the modal is not shown.
   * @param restoredConsents
   * @private
   */
  async checkConsentAvailabilityAndSetModalVisibilityAndState(restoredConsents) {
    let tempConsents = this.consents;
    if (restoredConsents.consents.length > 0) {
      tempConsents = restoredConsents.consents;
      await this.setModalVisibilityAndState(false, ViewState.EditView);
    }
    else {
      await this.setModalVisibilityAndState(true, ViewState.InitialView);
    }
    return tempConsents;
  }
  /**
   * Returns the UI component to access its public methods and properties
   * @private
   */
  async getModalView() {
    await customElements.whenDefined("modal-view");
    return this.element.shadowRoot.querySelector("modal-view");
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "logging": ["validateAndSetLogLevel"],
    "locale": ["validateAndSetLocale"],
    "linkUrlComfort": ["setComfortLink"],
    "linkUrlMarketing": ["setMarketingLink"],
    "linkUrlPolicy": ["setPolicyLink"],
    "linkUrlImprint": ["setImprintLink"],
    "disableConsentComfort": ["removeOrAddConsentComfort"],
    "disableConsentMarketing": ["removeOrAddConsentMarketing"]
  }; }
};
CookieManager.style = cookieManagerCss;

export { CookieManager as cookie_manager };

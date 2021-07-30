import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-65e1c793.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = "";
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __sc_import_cookie_manager_3(/* webpackChunkName: "polyfills-dom" */ './dom-1b195079.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["cookie-manager",[[1,"cookie-manager",{"visible":[1540],"logging":[520],"jsonConfigTag":[513,"json-config-tag"],"locale":[1537],"fallbackLocale":[513,"fallback-locale"],"linkUrlComfort":[513,"link-url-comfort"],"linkUrlMarketing":[513,"link-url-marketing"],"linkUrlPolicy":[513,"link-url-policy"],"linkUrlImprint":[513,"link-url-imprint"],"cookieName":[513,"cookie-name"],"disableConsentComfort":[516,"disable-consent-comfort"],"disableConsentMarketing":[516,"disable-consent-marketing"],"consents":[32],"viewState":[32],"currentLocale":[32],"uiTextContent":[32],"jsonConfiguration":[32]},[[0,"modalShowEvent","modalShowEventHandler"],[0,"modalHideEvent","modalHideEventHandler"],[0,"changeToPrivacySettingsLinkEditViewEvent","changeToPrivacySettingsLinkEditViewEventHandler"],[0,"saveAcceptAllEvent","saveAcceptAllEventHandler"],[0,"saveCurrentSelectionEvent","saveCurrentSelectionEventHandler"],[0,"checkboxToggleModalEvent","checkboxToggleModalEventHandler"]]]]],["bbg-text-field",[[4,"bbg-text-field",{"state":[1],"fid":[1],"isPasswordTextField":[32],"isPasswordVisible":[32]}]]],["bbg-activity-indicator",[[0,"bbg-activity-indicator",{"size":[1]}]]],["bbg-form",[[4,"bbg-form"]]],["bbg-form-field",[[4,"bbg-form-field",{"portion":[1],"existsCheckbox":[32]}]]],["bbg-form-row",[[4,"bbg-form-row"]]],["bbg-notification",[[4,"bbg-notification",{"type":[1],"state":[1],"small":[4]}]]],["bbg-radio-button",[[4,"bbg-radio-button",{"fid":[1]}]]],["bbg-dialog",[[4,"bbg-dialog",{"type":[1],"show":[4],"state":[1],"small":[4]}]]],["bbg-checkbox",[[4,"bbg-checkbox",{"state":[1],"fid":[1],"indeterminate":[4]}]]],["bbg-button",[[4,"bbg-button",{"type":[1],"label":[1],"fixed":[4],"disabled":[4]}]]],["bbg-link",[[4,"bbg-link",{"type":[1],"disabled":[4],"href":[1],"target":[1]}]]],["bbg-box",[[4,"bbg-box",{"type":[1],"show":[4]}]]],["bbg-icon",[[0,"bbg-icon",{"type":[1],"source":[1],"name":[1]}]]],["modal-view",[[4,"modal-view",{"show":[4],"uiTextTitle":[32],"uiTextDescription1Title":[32],"uiTextDescription1Text":[32],"uiTextDescription2Title":[32],"uiTextDescription2Text":[32],"uiTextButtonConfirm":[32],"uiTextButtonCancel":[32],"uiTextLinkLabelReadMoreComfort":[32],"uiTextLinkLabelReadMoreMarketing":[32],"uiTextDescriptionReadMoreComfort":[32],"uiTextDescriptionReadMoreMarketing":[32],"uiTextSmallprint":[32],"uiLinkOfTextSmallprint":[32],"uiTextSmallprintLinks":[32],"uiTextLinkReadMoreComfort":[32],"uiTextLinkReadMoreMarketing":[32],"uiLinkReadMoreComfort":[32],"uiLinkReadMoreMarketing":[32],"uiLinkUrlPolicy":[32],"uiLinkUrlImprint":[32],"uiCheckboxList":[32],"viewState":[32],"disabledComfort":[32],"disabledMarketing":[32],"updateUi":[64]}]]]], options);
});

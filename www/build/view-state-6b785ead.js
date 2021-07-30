import { h } from './index-65e1c793.js';

const availableLocales = [
	{
		locale: "ar-ae",
		label: "اللغة العربية (الإمارات العربية المتحدة)"
	},
	{
		locale: "ar-ma",
		label: "اللغة العربية (المغرب)"
	},
	{
		locale: "az-az",
		label: "Azəri"
	},
	{
		locale: "bg-bg",
		label: "Български"
	},
	{
		locale: "bs-ba",
		label: "Bosanski"
	},
	{
		locale: "cs-cz",
		label: "Čeština"
	},
	{
		locale: "da-dk",
		label: "Dansk"
	},
	{
		locale: "de-at",
		label: "Deutsch (Österreich)"
	},
	{
		locale: "de-ch",
		label: "Deutsch (Schweiz)"
	},
	{
		locale: "de-de",
		label: "Deutsch"
	},
	{
		locale: "de-lu",
		label: "Deutsch (Luxemburg)"
	},
	{
		locale: "el-gr",
		label: "Ελληνικά"
	},
	{
		locale: "en-gb",
		label: "English"
	},
	{
		locale: "en-in",
		label: "English (India)"
	},
	{
		locale: "en-ng",
		label: "English (Nigeria)"
	},
	{
		locale: "en-us",
		label: "English (US)"
	},
	{
		locale: "en-za",
		label: "English (South Africa)"
	},
	{
		locale: "es-ar",
		label: "Español (Argentina)"
	},
	{
		locale: "es-bo",
		label: "Español (Bolivia)"
	},
	{
		locale: "es-cl",
		label: "Español (Chile)"
	},
	{
		locale: "es-co",
		label: "Español (Colombia)"
	},
	{
		locale: "es-cr",
		label: "Español (Costa Rica)"
	},
	{
		locale: "es-ec",
		label: "Español (Equador)"
	},
	{
		locale: "es-es",
		label: "Español"
	},
	{
		locale: "es-mx",
		label: "Español (Mexico)"
	},
	{
		locale: "es-pa",
		label: "Español (Panamá)"
	},
	{
		locale: "es-pe",
		label: "Español (Peru)"
	},
	{
		locale: "es-py",
		label: "Español (Paraguay)"
	},
	{
		locale: "es-uy",
		label: "Español (Uruguay)"
	},
	{
		locale: "es-ve",
		label: "Español (Venezuela)"
	},
	{
		locale: "es-xl",
		label: "Español (Chile, Argentina, Venezuela, Peru, Panama, Colombia, Uruguay, Paraguay)"
	},
	{
		locale: "et-ee",
		label: "Eesti keel (Eesti)"
	},
	{
		locale: "fa-ir",
		label: "Persian (Iran)"
	},
	{
		locale: "fi-fi",
		label: "Suomi"
	},
	{
		locale: "fr-be",
		label: "Français (Belgique)"
	},
	{
		locale: "fr-ca",
		label: "Français (Canada)"
	},
	{
		locale: "fr-fr",
		label: "Français"
	},
	{
		locale: "fr-lu",
		label: "Français (Luxembourg)"
	},
	{
		locale: "ga-ie",
		label: "Irish (Ireland)"
	},
	{
		locale: "he-il",
		label: "Hebrew"
	},
	{
		locale: "hr-hr",
		label: "Hrvatski"
	},
	{
		locale: "hu-hu",
		label: "Magyar"
	},
	{
		locale: "id-id",
		label: "Bahasa Indonesia"
	},
	{
		locale: "it-it",
		label: "Italiano"
	},
	{
		locale: "ja-jp",
		label: "日本語"
	},
	{
		locale: "ka-ge",
		label: "ქართული (საქართველო)"
	},
	{
		locale: "km-kh",
		label: "ខ្មែរ (កម្ពុជា)"
	},
	{
		locale: "ko-kr",
		label: "한국어"
	},
	{
		locale: "lo-la",
		label: "Lao"
	},
	{
		locale: "lt-lt",
		label: "Lietuvių (Lietuva)"
	},
	{
		locale: "lv-lv",
		label: "Latviešu (Latvija)"
	},
	{
		locale: "ms-bn",
		label: "Bahasa Melayu (Brunei)"
	},
	{
		locale: "ms-my",
		label: "Bahasa Melayu (Malaysia)"
	},
	{
		locale: "mt-mt",
		label: "Malti (Malta)"
	},
	{
		locale: "my-mm",
		label: "Myanmar"
	},
	{
		locale: "nl-be",
		label: "Nederlands (België)"
	},
	{
		locale: "nl-nl",
		label: "Nederlands"
	},
	{
		locale: "no-no",
		label: "Norsk"
	},
	{
		locale: "pl-pl",
		label: "Polski"
	},
	{
		locale: "pt-ao",
		label: "Português (Angola)"
	},
	{
		locale: "pt-br",
		label: "Português (Brasil)"
	},
	{
		locale: "pt-mz",
		label: "Português (Moçambique)"
	},
	{
		locale: "pt-pt",
		label: "Português"
	},
	{
		locale: "ro-ro",
		label: "Română"
	},
	{
		locale: "ru-ru",
		label: "Русский"
	},
	{
		locale: "sk-sk",
		label: "Slovenčina"
	},
	{
		locale: "sl-si",
		label: "Slovenščina"
	},
	{
		locale: "sr-rs",
		label: "Srpski"
	},
	{
		locale: "sv-se",
		label: "Svenska"
	},
	{
		locale: "sw-ke",
		label: "Swahili (Kenya)"
	},
	{
		locale: "th-th",
		label: "ภาษาไทย"
	},
	{
		locale: "tr-tr",
		label: "Türkçe"
	},
	{
		locale: "uk-ua",
		label: "Українська"
	},
	{
		locale: "vi-vn",
		label: "Tiếng Việt"
	},
	{
		locale: "zh-cn",
		label: "中文"
	},
	{
		locale: "zh-hant",
		label: "中文 (繁體)"
	},
	{
		locale: "zh-hk",
		label: "Languages of Hong Kong"
	},
	{
		locale: "zh-tw",
		label: "中文 (台灣)"
	}
];

class I18nServiceController {
  constructor() {
    /**
     * Merge 2 Arrays of locale Objects and remove duplicates
     * @param {array} localeArray1 - Array of the standard locales
     * @param {array} localeArray2 - Array of new custom locales from the configuration
     * @returns {array} An array of all locales without duplication
     */
    this.mergeLocaleArrays = (localeArray1, localeArray2) => {
      let mergedLocales = localeArray1;
      for (const customLocale of localeArray2) {
        const isInArray = localeArray1.map(standardLocale => standardLocale.locale.toLowerCase() === customLocale.locale.toLowerCase()).indexOf(true);
        if (isInArray < 0) {
          mergedLocales.push(customLocale);
        }
      }
      return mergedLocales;
    };
    /**
     * @param {array} localesToShowInMenu - Array of the only locales that are shown to the user
     * @param {array} customLocales - Array of new custom locales from the configuration. These will be merged with the standard locales from the list created on build.
     * @returns {array} An array of optionally filtered locales sorted alphabetically by locale. When no argument is given the standard locales will be used.
     */
    this.getFilteredLocales = (localesToShowInMenu, customLocales) => {
      let available;
      available = customLocales ? this.mergeLocaleArrays(availableLocales, customLocales) : availableLocales;
      if (localesToShowInMenu) {
        let show = [];
        for (let i in available) {
          for (let j in localesToShowInMenu) {
            if (available[i].locale === localesToShowInMenu[j]) {
              show.push(available[i]);
            }
          }
        }
        available = show;
      }
      return available.sort((a, b) => a.locale.localeCompare(b.locale));
    };
  }
  /**
   * 1. Get user-defined locale from configuration
   * 2. Fallback to page language - if available, get the closest lang tag to determine the page default language.
   * 3. Fallback to browser language
   * 4. Fallback to default fallback
   */
  getLocale(fallbackLocale, element, configuredLocale) {
    let closestElement;
    let allLocaleCodes = this.getFilteredLocales().map(o => o.locale);
    let resultLocale;
    let htmlLocale;
    let browserLocale;
    LogService.log.debug("Configured language:", configuredLocale);
    if (element) {
      closestElement = element.closest("[lang]");
    }
    if (closestElement) {
      htmlLocale = closestElement.lang;
    }
    LogService.log.debug("Default page language:", htmlLocale);
    browserLocale = window.navigator.language;
    LogService.log.debug("Browser language:", browserLocale);
    resultLocale = configuredLocale || htmlLocale || browserLocale;
    if (resultLocale) {
      resultLocale = resultLocale.toLowerCase();
      // first try the given locale directly, e.g. "de-at"
      if (allLocaleCodes.includes(resultLocale)) {
        LogService.log.debug("Use locale:", resultLocale);
        return resultLocale;
      }
      // secondly, find a locale only by the language
      if (!resultLocale.includes("-")) {
        const languageOnly = resultLocale.split("-")[0];
        for (let i in allLocaleCodes) {
          if (allLocaleCodes[i].split("-")[0] === languageOnly) {
            LogService.log.debug("Select locale by language prefix:", allLocaleCodes[i]);
            return allLocaleCodes[i];
          }
        }
      }
    }
    LogService.log.debug("No configured, web page or browser language found - fallback to default locale:", fallbackLocale);
    return fallbackLocale;
  }
  /**
   * Retrieves the requested language from the host.
   * @param locale The locale identifier string (e.g. "en-us", "de-de" etc.)
   */
  async fetchI18n(locale) {
    // TODO: Make path dynamic and to host source - when implemented on a different domain it will try to use that domain which is going to fail
    return fetch(`./assets/i18n/${locale}.json`)
      .then(result => {
      if (result.ok)
        return result.json();
      else
        throw new Error(`The locale file could not be requested: ${result.statusText.toString()} ${result.status.toString()}`);
    })
      .catch(error => {
      throw new Error(error);
    });
  }
}
const I18nService = new I18nServiceController();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var loglevel = createCommonjsModule(function (module) {
/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (typeof undefined === 'function' && undefined.amd) {
        undefined(definition);
    } else if ('object' === 'object' && module.exports) {
        module.exports = definition();
    } else {
        root.log = definition();
    }
}(commonjsGlobal, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel == null ? "WARN" : defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));
});

class LogServiceController {
  constructor() {
    this.log = loglevel;
    const originalFactory = loglevel.methodFactory;
    loglevel.methodFactory = function (methodName, logLevel, loggerName) {
      const rawMethod = originalFactory(methodName, logLevel, loggerName);
      return function () {
        let messages = [`[${new Date().toISOString()}]`];
        for (const argument of arguments) {
          messages.push(argument);
        }
        rawMethod.apply(undefined, messages);
      };
    };
    // Apply override log function
    loglevel.setLevel(loglevel.getLevel());
  }
  /**
   * Returns true if valid log level
   * @param inputLevel
   */
  isOfTypeLogLevelDesc(inputLevel) {
    return ["info", "trace", "warn", "error", "debug", "silent", 0, 1, 2, 3, 4, 5].includes(inputLevel);
  }
}
const LogService = new LogServiceController();

var js_cookie = createCommonjsModule(function (module, exports) {
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof undefined === 'function' && undefined.amd) {
		undefined(factory);
		registeredInModuleLoader = true;
	}
	if ('object' === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
});

var StorageType;
(function (StorageType) {
  StorageType["Cookie"] = "cookie";
  StorageType["Memory"] = "memory";
})(StorageType || (StorageType = {}));
var StandardConsent;
(function (StandardConsent) {
  StandardConsent["Comfort"] = "comfort";
  StandardConsent["Marketing"] = "marketing";
})(StandardConsent || (StandardConsent = {}));
class ConsentServiceController {
  constructor() {
    this.writeConsentsToCookie = async (consents) => {
      LogService.log.debug("Write consents to cookie:", consents);
      js_cookie.set(consents.consentDataName, JSON.stringify(consents));
    };
    this.writeConsentsToMemory = async (consents) => {
      LogService.log.debug("Write consents to memory:", consents);
      this.inMemoryConsents = Object.assign({}, consents);
    };
    /**
     * Removes specified consent cookie
     * @param cookieName
     */
    this.removeConsentsCookie = async (cookieName) => {
      LogService.log.debug("Remove consent cookie:", cookieName);
      js_cookie.remove(cookieName);
    };
    /**
     * Removes the in memory consent data.
     */
    this.removeConsentsMemory = async () => {
      LogService.log.debug("Remove consents from memory.");
      this.inMemoryConsents = undefined;
    };
    this.readConsentsFromCookie = async (cookieName) => {
      const consentCookie = js_cookie.getJSON(cookieName);
      LogService.log.debug("Read consents from cookie:", consentCookie);
      return consentCookie;
    };
    this.readConsentsFromMemory = async () => {
      LogService.log.debug("Read consents from memory:", this.inMemoryConsents);
      return this.inMemoryConsents;
    };
    this.inMemoryConsents = undefined;
  }
  /**
   * Sets all given consents
   * @param consents
   * @param storageTypes
   * @param cookieName
   * @param locale
   */
  async storeConsents(consents, storageTypes, cookieName, locale) {
    LogService.log.debug("Store these consents to:", storageTypes, consents);
    const consentData = this.createConsentDataFormat(cookieName, consents, 1000, locale);
    for (const storageType of storageTypes) {
      switch (storageType) {
        case StorageType.Cookie:
          await this.writeConsentsToCookie(consentData);
          break;
        case StorageType.Memory:
          await this.writeConsentsToMemory(consentData);
          break;
      }
    }
  }
  /**
   * Removes all consents in the specified storage destinations.
   * @param storageTypes
   * @param cookieName
   */
  async removeConsents(storageTypes, cookieName) {
    LogService.log.debug("Remove all consents from:", storageTypes);
    for (const storageType of storageTypes) {
      switch (storageType) {
        case StorageType.Cookie:
          await this.removeConsentsCookie(cookieName);
          break;
        case StorageType.Memory:
          await this.removeConsentsMemory();
          break;
      }
    }
  }
  /**
   * Gets all read consents
   */
  async restoreConsents(storageTypes, cookieName) {
    let restoredConsents = [];
    let restoredStorageData = [];
    LogService.log.debug("Restore consents from:", storageTypes);
    for (const storageType of storageTypes) {
      switch (storageType) {
        case StorageType.Cookie:
          const cookieConsents = await this.readConsentsFromCookie(cookieName);
          restoredConsents.push(...this.getAllConsentsAsArrayFromDataFormat(cookieConsents));
          if (cookieConsents) {
            restoredStorageData.push({
              storageType: StorageType.Cookie,
              consentDataName: cookieName,
              locale: cookieConsents.locale,
              timestamp: cookieConsents.timestamp,
              timeToLive: cookieConsents.timeToLive,
              version: cookieConsents.version,
            });
          }
          break;
        case StorageType.Memory:
          const memoryConsents = await this.readConsentsFromMemory();
          restoredConsents.push(...this.getAllConsentsAsArrayFromDataFormat(memoryConsents));
          if (memoryConsents) {
            restoredStorageData.push({
              storageType: StorageType.Memory,
              consentDataName: memoryConsents.consentDataName,
              locale: memoryConsents.locale,
              timestamp: memoryConsents.timestamp,
              timeToLive: memoryConsents.timeToLive,
              version: memoryConsents.version,
            });
          }
          break;
      }
    }
    const consentsWithoutDuplicates = this.removeObjectDuplicatesInArray(restoredConsents);
    LogService.log.debug("Restored consents:", consentsWithoutDuplicates);
    LogService.log.debug("Storage data:", restoredStorageData);
    return { storageData: restoredStorageData, consents: consentsWithoutDuplicates };
  }
  /**
   * ConsentType factory that returns one object
   * @param name The name of the consent e.g. 'comfort', 'marketing' - must be unique
   * @param userConsents Sets if the user consents (true) to this specific consent or not
   */
  consentFactory(name, userConsents) {
    return {
      name: name,
      userConsents: userConsents,
    };
  }
  /**
   * ConsentUiElement factory that creates an array of consents with index numbers to be used in user interface code
   * @param consentUiValues
   */
  consentUiElementFactory(consentUiValues) {
    let uiConsents = [];
    for (const consentUiValue of consentUiValues) {
      uiConsents.push(Object.assign(Object.assign({}, ConsentService.consentFactory(consentUiValue.name, consentUiValue.userConsents)), { label: consentUiValue.label, checkboxId: consentUiValue.indexId.toString(), readMoreLabel: consentUiValue.linkLabel, readMoreLink: consentUiValue.linkAddress }));
    }
    return uiConsents;
  }
  /**
   * Returns one dummy consent - for development purposes
   */
  createDummyConsent() {
    return this.consentFactory("other", false);
  }
  /**
   * Returns an array with dummy consent objects - for development purposes.
   * TODO: In production this method can be moved to the tests as a test util when not used anymore in the code.
   */
  createDummyConsents() {
    return [
      this.consentFactory(StandardConsent.Marketing, false),
      this.consentFactory(StandardConsent.Comfort, true),
      this.consentFactory("other", false),
      this.consentFactory("another", true),
    ];
  }
  /**
   * Extracts and returns all consents as an array.
   * @param consentDataFormat
   * @private
   */
  getAllConsentsAsArrayFromDataFormat(consentDataFormat) {
    let customConsents = [];
    let marketingConsentsMap = undefined;
    let comfortConsentsMap = undefined;
    if (consentDataFormat && consentDataFormat.consent) {
      if (consentDataFormat.consent.custom) {
        customConsents.push(...consentDataFormat.consent.custom);
      }
      if (consentDataFormat.consent.marketing !== undefined) {
        marketingConsentsMap = {
          name: StandardConsent.Marketing,
          userConsents: consentDataFormat.consent.marketing,
        };
      }
      if (consentDataFormat.consent.comfort !== undefined) {
        comfortConsentsMap = {
          name: StandardConsent.Comfort,
          userConsents: consentDataFormat.consent.comfort,
        };
      }
    }
    // This array also defines the order of the returned consent categories in the UI
    return [comfortConsentsMap, marketingConsentsMap, ...customConsents].filter(Boolean);
  }
  /**
   * Returns the given array without duplicate objects so every object exists only once
   * @param array
   * @private
   */
  removeObjectDuplicatesInArray(array) {
    return array.filter((consent, index) => {
      const _consent = JSON.stringify(consent);
      return (index ===
        array.findIndex(consentObject => {
          return JSON.stringify(consentObject) === _consent;
        }));
    });
  }
  /**
   * Returns one boolean consent value from an array if there are no multiple entries with the same consent name. If
   * there is no consent available it returns undefined.
   * @param consents
   * @param nameFilter
   * @private
   */
  filterAndReturnSingleConsentValue(consents, nameFilter) {
    const filteredConsents = consents.filter(consent => consent.name === nameFilter);
    let consentResult = undefined;
    if (filteredConsents.length > 1) {
      throw new Error(`There are multiple '${nameFilter}' consents - there can be only one ⚔`);
    }
    else if (filteredConsents.length === 0) {
      consentResult = undefined;
    }
    else {
      consentResult = filteredConsents[0].userConsents;
    }
    return consentResult;
  }
  /**
   * Checks if there are multiple custom consents that have an identical name. Returns the array if successful.
   * @param customConsents
   * @private
   */
  checkForDuplicateCustomConsentNames(customConsents) {
    let keyStack = [];
    return customConsents.map(consent => {
      if (keyStack.includes(consent.name)) {
        throw new Error("There are multiple custom consents with the same name and different values - each custom consent must have an individual name.");
      }
      keyStack.push(consent.name);
      return consent;
    });
  }
  /**
   * Returns a consent data format object with the given parameters, removes identical consent duplicates and checks
   * for identically named consents with different content.
   * @param consentDataName
   * @param consents
   * @param timeToLive
   * @param locale
   * @param dataFormatVersion
   * @private
   */
  createConsentDataFormat(consentDataName, consents, timeToLive, locale, dataFormatVersion = 3) {
    const timestamp = Date.now();
    const noDuplicateConsents = this.removeObjectDuplicatesInArray(consents);
    const marketingConsent = this.filterAndReturnSingleConsentValue(noDuplicateConsents, StandardConsent.Marketing);
    const comfortConsent = this.filterAndReturnSingleConsentValue(noDuplicateConsents, StandardConsent.Comfort);
    const customConsents = noDuplicateConsents.filter(consent => consent.name !== StandardConsent.Marketing && consent.name !== StandardConsent.Comfort);
    const noDuplicateKeyCustomConsents = this.checkForDuplicateCustomConsentNames(customConsents);
    return {
      consent: {
        comfort: comfortConsent,
        marketing: marketingConsent,
        custom: noDuplicateKeyCustomConsents,
      },
      consentDataName: consentDataName,
      locale: locale,
      timeToLive: timeToLive,
      timestamp: timestamp,
      version: dataFormatVersion,
    };
  }
}
const ConsentService = new ConsentServiceController();

class JsonConfigurationServiceController {
  constructor() { }
  getConfiguration(tagName) {
    const configElement = document.getElementById(tagName);
    if (configElement) {
      const configContent = JSON.parse(configElement.innerHTML);
      LogService.log.info("Found JSON configuration on page:", configContent);
      return configContent;
    }
    else {
      LogService.log.info("No JSON configuration found on page.");
      return undefined;
    }
  }
}
const JsonConfigurationService = new JsonConfigurationServiceController();

/**
 * Replaces the specified text snippets with <a> href and provides the option to add custom onClick functions
 * @param inputText
 * @param wordToReplace
 * @param linkText
 * @param customFunction
 * @param linkPath
 */
const replaceHtmlLinksWithCustomFunction = (inputText, wordToReplace, linkText, customFunction, linkPath) => {
  const regex = new RegExp(`(${wordToReplace})`, "g");
  const textArray = inputText.split(regex);
  return textArray.map(textPart => {
    if (regex.test(textPart)) {
      return (h("bbg-link", { href: linkPath, onClick: customFunction }, linkText));
    }
    return textPart;
  });
};

/**
 * Default/fallback values of the Properties of the CookieManager component class.
 * This object is used for testing purposes only. When a default value in the component changes,
 * it should be changed to the same value here as well. This prevents accidental changes or false
 * implementation of incorrect default values in the Web Component code by supposedly failing the tests.
 */
const testDefaults = {
  fallbackLocale: "en-us",
  cookieName: "bosch-privacy-v3",
  jsonConfigTag: "consent-kit-settings",
  linkUrlComfort: undefined,
  linkUrlMarketing: undefined,
  linkUrlPolicy: undefined,
  linkUrlImprint: undefined,
  consents: [
    {
      name: "comfort",
      userConsents: true,
    },
    {
      name: "marketing",
      userConsents: false,
    },
  ],
  logging: "warn",
  visible: false,
  locale: undefined,
};

const defaultStandardConsentComfort = {
  name: StandardConsent.Comfort,
  userConsents: false,
};
const defaultStandardConsentMarketing = {
  name: StandardConsent.Marketing,
  userConsents: false,
};

class SmallprintLink {
}

var ViewState;
(function (ViewState) {
  ViewState["InitialView"] = "initial";
  ViewState["EditView"] = "edit";
})(ViewState || (ViewState = {}));

export { ConsentService as C, I18nService as I, JsonConfigurationService as J, LogService as L, StandardConsent as S, ViewState as V, defaultStandardConsentMarketing as a, StorageType as b, defaultStandardConsentComfort as d, replaceHtmlLinksWithCustomFunction as r };

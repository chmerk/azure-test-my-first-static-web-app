import { r as registerInstance, h } from './index-65e1c793.js';

const bbgFormCss = "@charset \"UTF-8\";*{--bosch-red-95:#ffecec;--bosch-red-90:#ffd9d9;--bosch-red-85:#ffc6c6;--bosch-red-80:#ffb2b2;--bosch-red-75:#ff9d9d;--bosch-red-70:#ff8787;--bosch-red-65:#ff6e6f;--bosch-red-60:#ff5152;--bosch-red-55:#ff2124;--bosch-red-50:#ed0007;--bosch-red-45:#d50005;--bosch-red-40:#be0004;--bosch-red-35:#a80003;--bosch-red-30:#920002;--bosch-red-25:#7d0002;--bosch-red-20:#680001;--bosch-red-15:#540001;--bosch-red-10:#410000;--bosch-red-5:#2d0000;--bosch-purple-95:#f7eef6;--bosch-purple-90:#f0dcee;--bosch-purple-85:#ebcae8;--bosch-purple-80:#e8b6e3;--bosch-purple-75:#e5a2df;--bosch-purple-70:#e48cdd;--bosch-purple-65:#e472db;--bosch-purple-60:#e552da;--bosch-purple-55:#d543cb;--bosch-purple-50:#c535bc;--bosch-purple-45:#b12ea9;--bosch-purple-40:#9e2896;--bosch-purple-35:#8b2284;--bosch-purple-30:#791d73;--bosch-purple-25:#671761;--bosch-purple-20:#551151;--bosch-purple-15:#440c41;--bosch-purple-10:#340731;--bosch-purple-5:#230421;--bosch-blue-95:#e8f1ff;--bosch-blue-90:#d1e4ff;--bosch-blue-85:#b8d6ff;--bosch-blue-80:#9dc9ff;--bosch-blue-75:#7ebdff;--bosch-blue-70:#56b0ff;--bosch-blue-65:#00a4fd;--bosch-blue-60:#0096e8;--bosch-blue-55:#0088d4;--bosch-blue-50:#007bc0;--bosch-blue-45:#006ead;--bosch-blue-40:#00629a;--bosch-blue-35:#005587;--bosch-blue-30:#004975;--bosch-blue-25:#003e64;--bosch-blue-20:#003253;--bosch-blue-15:#002742;--bosch-blue-10:#001d33;--bosch-blue-5:#001222;--bosch-turquoise-95:#def5f3;--bosch-turquoise-90:#b6ede8;--bosch-turquoise-85:#a1dfdb;--bosch-turquoise-80:#8dd2cd;--bosch-turquoise-75:#79c5c0;--bosch-turquoise-70:#66b8b2;--bosch-turquoise-65:#54aba5;--bosch-turquoise-60:#419e98;--bosch-turquoise-55:#2e908b;--bosch-turquoise-50:#18837e;--bosch-turquoise-45:#147671;--bosch-turquoise-40:#116864;--bosch-turquoise-35:#0e5b57;--bosch-turquoise-30:#0a4f4b;--bosch-turquoise-25:#07423f;--bosch-turquoise-20:#053634;--bosch-turquoise-15:#032b28;--bosch-turquoise-10:#02201e;--bosch-turquoise-5:#011413;--bosch-green-95:#e2f5e7;--bosch-green-90:#b8efc9;--bosch-green-85:#9be4b3;--bosch-green-80:#86d7a2;--bosch-green-75:#72ca92;--bosch-green-70:#5ebd82;--bosch-green-65:#4ab073;--bosch-green-60:#37a264;--bosch-green-55:#219557;--bosch-green-50:#00884a;--bosch-green-45:#007a42;--bosch-green-40:#006c3a;--bosch-green-35:#005f32;--bosch-green-30:#00512a;--bosch-green-25:#004523;--bosch-green-20:#00381b;--bosch-green-15:#002c14;--bosch-green-10:#00210e;--bosch-green-5:#001507;--bosch-gray-95:#eff1f2;--bosch-gray-90:#e0e2e5;--bosch-gray-85:#d0d4d8;--bosch-gray-80:#c1c7cc;--bosch-gray-75:#b2b9c0;--bosch-gray-70:#a4abb3;--bosch-gray-65:#979ea4;--bosch-gray-60:#8a9097;--bosch-gray-55:#7d8389;--bosch-gray-50:#71767c;--bosch-gray-45:#656a6f;--bosch-gray-40:#595e62;--bosch-gray-35:#4e5256;--bosch-gray-30:#43464a;--bosch-gray-25:#383b3e;--bosch-gray-20:#2e3033;--bosch-gray-15:#232628;--bosch-gray-10:#1a1c1d;--bosch-gray-5:#101112;--bosch-yellow-95:#ffefd1;--bosch-yellow-90:#ffdf95;--bosch-yellow-85:#ffcf00;--bosch-yellow-80:#eec100;--bosch-yellow-75:#deb300;--bosch-yellow-70:#cda600;--bosch-yellow-65:#bd9900;--bosch-yellow-60:#ad8c00;--bosch-yellow-55:#9e7f00;--bosch-yellow-50:#8f7300;--bosch-yellow-45:#806700;--bosch-yellow-40:#725b00;--bosch-yellow-35:#644f00;--bosch-yellow-30:#564400;--bosch-yellow-25:#493900;--bosch-yellow-20:#3c2e00;--bosch-yellow-15:#2f2400;--bosch-yellow-10:#231a00;--bosch-yellow-5:#171000;--bosch-white:#ffffff;--bosch-black:#000000}:root{--shadow-fill:rgba(0, 0, 0, 0.25)}:root,.-primary{--plain__enabled__fill__default:var(--bosch-white);--plain__enabled__fill__hovered:var(--bosch-gray-90);--plain__enabled__fill__pressed:var(--bosch-gray-80);--plain__enabled__text__default:var(--bosch-black);--plain__enabled__text__hovered:var(--bosch-black);--plain__enabled__text__pressed:var(--bosch-black);--plain__focused__fill__default:var(--bosch-blue-95);--plain__focused__text__default:var(--bosch-black);--plain__disabled__fill__default:var(--bosch-white);--plain__disabled__text__default:var(--bosch-gray-80);--neutral__enabled__fill__default:var(--bosch-gray-90);--neutral__enabled__fill__hovered:var(--bosch-gray-80);--neutral__enabled__fill__pressed:var(--bosch-gray-70);--neutral__enabled__line__default:var(--bosch-black);--neutral__enabled__line__hovered:var(--bosch-black);--neutral__enabled__line__pressed:var(--bosch-black);--neutral__enabled__text__default:var(--bosch-black);--neutral__enabled__text__hovered:var(--bosch-black);--neutral__enabled__text__pressed:var(--bosch-black);--neutral__focused__fill__default:var(--bosch-blue-90);--neutral__focused__line__default:var(--bosch-blue-50);--neutral__focused__text__default:var(--bosch-black);--neutral__disabled__fill__default:var(--bosch-gray-90);--neutral__disabled__line__default:var(--bosch-gray-70);--neutral__disabled__text__default:var(--bosch-gray-70);--small__enabled__fill__default:var(--bosch-gray-60);--small__enabled__fill__hovered:var(--bosch-gray-50);--small__enabled__fill__pressed:var(--bosch-gray-40);--small__enabled__text__default:var(--bosch-white);--small__enabled__text__hovered:var(--bosch-white);--small__enabled__text__pressed:var(--bosch-white);--small__disabled__fill__default:var(--bosch-gray-90);--small__disabled__text__default:var(--bosch-gray-70);--integrated__enabled__fill__default:none;--integrated__enabled__fill__hovered:none;--integrated__enabled__fill__pressed:none;--integrated__enabled__text__default:var(--bosch-black);--integrated__enabled__text__hovered:var(--bosch-blue-50);--integrated__enabled__text__pressed:var(--bosch-blue-40);--integrated__disabled__fill__default:none;--integrated__disabled__text__default:var(--bosch-gray-80);--minor-accent__enabled__fill__default:none;--minor-accent__enabled__fill__hovered:var(--bosch-blue-90);--minor-accent__enabled__fill__pressed:var(--bosch-blue-80);--minor-accent__enabled__line__default:var(--bosch-blue-50);--minor-accent__enabled__line__hovered:var(--bosch-blue-40);--minor-accent__enabled__line__pressed:var(--bosch-blue-30);--minor-accent__enabled__text__default:var(--bosch-blue-50);--minor-accent__enabled__text__hovered:var(--bosch-blue-40);--minor-accent__enabled__text__pressed:var(--bosch-blue-30);--minor-accent__disabled__fill__default:none;--minor-accent__disabled__line__default:var(--bosch-gray-80);--minor-accent__disabled__text__default:var(--bosch-gray-80);--major-accent__enabled__fill__default:var(--bosch-blue-50);--major-accent__enabled__fill__hovered:var(--bosch-blue-40);--major-accent__enabled__fill__pressed:var(--bosch-blue-30);--major-accent__enabled__text__default:var(--bosch-white);--major-accent__enabled__text__hovered:var(--bosch-white);--major-accent__enabled__text__pressed:var(--bosch-white);--major-accent__disabled__fill__default:var(--bosch-gray-80);--major-accent__disabled__text__default:var(--bosch-gray-60);--signal-neutral__enabled__fill__default:var(--bosch-blue-90);--signal-neutral__enabled__fill__hovered:var(--bosch-blue-80);--signal-neutral__enabled__fill__pressed:var(--bosch-blue-70);--signal-neutral__enabled__line__default:var(--bosch-blue-50);--signal-neutral__enabled__line__hovered:var(--bosch-blue-40);--signal-neutral__enabled__line__pressed:var(--bosch-blue-30);--signal-neutral__enabled__text__default:var(--bosch-blue-40);--signal-neutral__enabled__text__hovered:var(--bosch-blue-30);--signal-neutral__enabled__text__pressed:var(--bosch-blue-20);--signal-error__enabled__fill__default:var(--bosch-red-90);--signal-error__enabled__fill__hovered:var(--bosch-red-80);--signal-error__enabled__fill__pressed:var(--bosch-red-70);--signal-error__enabled__line__default:var(--bosch-red-50);--signal-error__enabled__line__hovered:var(--bosch-red-40);--signal-error__enabled__line__pressed:var(--bosch-red-30);--signal-error__enabled__text__default:var(--bosch-red-40);--signal-error__enabled__text__hovered:var(--bosch-red-30);--signal-error__enabled__text__pressed:var(--bosch-red-20);--signal-warning__enabled__fill__default:var(--bosch-yellow-90);--signal-warning__enabled__fill__hovered:var(--bosch-yellow-80);--signal-warning__enabled__fill__pressed:var(--bosch-yellow-70);--signal-warning__enabled__line__default:var(--bosch-yellow-85);--signal-warning__enabled__line__hovered:var(--bosch-yellow-75);--signal-warning__enabled__line__pressed:var(--bosch-yellow-65);--signal-warning__enabled__text__default:var(--bosch-yellow-40);--signal-warning__enabled__text__hovered:var(--bosch-yellow-30);--signal-warning__enabled__text__pressed:var(--bosch-yellow-20);--signal-success__enabled__fill__default:var(--bosch-green-90);--signal-success__enabled__fill__hovered:var(--bosch-green-80);--signal-success__enabled__fill__pressed:var(--bosch-green-70);--signal-success__enabled__line__default:var(--bosch-green-60);--signal-success__enabled__line__hovered:var(--bosch-green-50);--signal-success__enabled__line__pressed:var(--bosch-green-40);--signal-success__enabled__text__default:var(--bosch-green-40);--signal-success__enabled__text__hovered:var(--bosch-green-30);--signal-success__enabled__text__pressed:var(--bosch-green-20);background-color:var(--plain__enabled__fill__default);color:var(--plain__enabled__text__default)}.-secondary{--plain__enabled__fill__default:var(--bosch-gray-95);--plain__enabled__fill__hovered:var(--bosch-gray-85);--plain__enabled__fill__pressed:var(--bosch-gray-75);--plain__enabled__text__default:var(--bosch-black);--plain__enabled__text__hovered:var(--bosch-black);--plain__enabled__text__pressed:var(--bosch-black);--plain__focused__fill__default:var(--bosch-blue-90);--plain__focused__text__default:var(--bosch-black);--plain__disabled__fill__default:var(--bosch-gray-95);--plain__disabled__text__default:var(--bosch-gray-75);--neutral__enabled__fill__default:var(--bosch-gray-85);--neutral__enabled__fill__hovered:var(--bosch-gray-75);--neutral__enabled__fill__pressed:var(--bosch-gray-65);--neutral__enabled__line__default:var(--bosch-black);--neutral__enabled__line__hovered:var(--bosch-black);--neutral__enabled__line__pressed:var(--bosch-black);--neutral__enabled__text__default:var(--bosch-black);--neutral__enabled__text__hovered:var(--bosch-black);--neutral__enabled__text__pressed:var(--bosch-black);--neutral__focused__fill__default:var(--bosch-blue-85);--neutral__focused__line__default:var(--bosch-blue-45);--neutral__focused__text__default:var(--bosch-black);--neutral__disabled__fill__default:var(--bosch-gray-85);--neutral__disabled__line__default:var(--bosch-gray-65);--neutral__disabled__text__default:var(--bosch-gray-65);--small__enabled__fill__default:var(--bosch-gray-55);--small__enabled__fill__hovered:var(--bosch-gray-45);--small__enabled__fill__pressed:var(--bosch-gray-35);--small__enabled__text__default:var(--bosch-white);--small__enabled__text__hovered:var(--bosch-white);--small__enabled__text__pressed:var(--bosch-white);--small__disabled__fill__default:var(--bosch-gray-85);--small__disabled__text__default:var(--bosch-gray-65);--integrated__enabled__fill__default:none;--integrated__enabled__fill__hovered:none;--integrated__enabled__fill__pressed:none;--integrated__enabled__text__default:var(--bosch-black);--integrated__enabled__text__hovered:var(--bosch-blue-45);--integrated__enabled__text__pressed:var(--bosch-blue-35);--integrated__disabled__fill__default:none;--integrated__disabled__text__default:var(--bosch-gray-75);--minor-accent__enabled__fill__default:none;--minor-accent__enabled__fill__hovered:var(--bosch-blue-85);--minor-accent__enabled__fill__pressed:var(--bosch-blue-75);--minor-accent__enabled__line__default:var(--bosch-blue-45);--minor-accent__enabled__line__hovered:var(--bosch-blue-35);--minor-accent__enabled__line__pressed:var(--bosch-blue-25);--minor-accent__enabled__text__default:var(--bosch-blue-45);--minor-accent__enabled__text__hovered:var(--bosch-blue-35);--minor-accent__enabled__text__pressed:var(--bosch-blue-25);--minor-accent__disabled__fill__default:none;--minor-accent__disabled__line__default:var(--bosch-gray-75);--minor-accent__disabled__text__default:var(--bosch-gray-75);--major-accent__enabled__fill__default:var(--bosch-blue-50);--major-accent__enabled__fill__hovered:var(--bosch-blue-40);--major-accent__enabled__fill__pressed:var(--bosch-blue-30);--major-accent__enabled__text__default:var(--bosch-white);--major-accent__enabled__text__hovered:var(--bosch-white);--major-accent__enabled__text__pressed:var(--bosch-white);--major-accent__disabled__fill__default:var(--bosch-gray-75);--major-accent__disabled__text__default:var(--bosch-gray-55);--signal-neutral__enabled__fill__default:var(--bosch-blue-85);--signal-neutral__enabled__fill__hovered:var(--bosch-blue-75);--signal-neutral__enabled__fill__pressed:var(--bosch-blue-65);--signal-neutral__enabled__line__default:var(--bosch-blue-50);--signal-neutral__enabled__line__hovered:var(--bosch-blue-40);--signal-neutral__enabled__line__pressed:var(--bosch-blue-30);--signal-neutral__enabled__text__default:var(--bosch-blue-35);--signal-neutral__enabled__text__hovered:var(--bosch-blue-25);--signal-neutral__enabled__text__pressed:var(--bosch-blue-15);--signal-error__enabled__fill__default:var(--bosch-red-85);--signal-error__enabled__fill__hovered:var(--bosch-red-75);--signal-error__enabled__fill__pressed:var(--bosch-red-65);--signal-error__enabled__line__default:var(--bosch-red-50);--signal-error__enabled__line__hovered:var(--bosch-red-40);--signal-error__enabled__line__pressed:var(--bosch-red-30);--signal-error__enabled__text__default:var(--bosch-red-35);--signal-error__enabled__text__hovered:var(--bosch-red-25);--signal-error__enabled__text__pressed:var(--bosch-red-15);--signal-warning__enabled__fill__default:var(--bosch-yellow-85);--signal-warning__enabled__fill__hovered:var(--bosch-yellow-75);--signal-warning__enabled__fill__pressed:var(--bosch-yellow-65);--signal-warning__enabled__line__default:var(--bosch-yellow-85);--signal-warning__enabled__line__hovered:var(--bosch-yellow-75);--signal-warning__enabled__line__pressed:var(--bosch-yellow-65);--signal-warning__enabled__text__default:var(--bosch-yellow-35);--signal-warning__enabled__text__hovered:var(--bosch-yellow-25);--signal-warning__enabled__text__pressed:var(--bosch-yellow-15);--signal-success__enabled__fill__default:var(--bosch-green-85);--signal-success__enabled__fill__hovered:var(--bosch-green-75);--signal-success__enabled__fill__pressed:var(--bosch-green-65);--signal-success__enabled__line__default:var(--bosch-green-60);--signal-success__enabled__line__hovered:var(--bosch-green-50);--signal-success__enabled__line__pressed:var(--bosch-green-40);--signal-success__enabled__text__default:var(--bosch-green-35);--signal-success__enabled__text__hovered:var(--bosch-green-25);--signal-success__enabled__text__pressed:var(--bosch-green-15);background-color:var(--plain__enabled__fill__default);color:var(--plain__enabled__text__default)}.-contrast{--plain__enabled__fill__default:var(--bosch-gray-20);--plain__enabled__fill__hovered:var(--bosch-gray-30);--plain__enabled__fill__pressed:var(--bosch-gray-40);--plain__enabled__text__default:var(--bosch-white);--plain__enabled__text__hovered:var(--bosch-white);--plain__enabled__text__pressed:var(--bosch-white);--plain__focused__fill__default:var(--bosch-blue-25);--plain__focused__text__default:var(--bosch-white);--plain__disabled__fill__default:var(--bosch-gray-20);--plain__disabled__text__default:var(--bosch-gray-40);--neutral__enabled__fill__default:var(--bosch-gray-30);--neutral__enabled__fill__hovered:var(--bosch-gray-40);--neutral__enabled__fill__pressed:var(--bosch-gray-50);--neutral__enabled__line__default:var(--bosch-white);--neutral__enabled__line__hovered:var(--bosch-white);--neutral__enabled__line__pressed:var(--bosch-white);--neutral__enabled__text__default:var(--bosch-white);--neutral__enabled__text__hovered:var(--bosch-white);--neutral__enabled__text__pressed:var(--bosch-white);--neutral__focused__fill__default:var(--bosch-blue-30);--neutral__focused__line__default:var(--bosch-blue-70);--neutral__focused__text__default:var(--bosch-white);--neutral__disabled__fill__default:var(--bosch-gray-30);--neutral__disabled__line__default:var(--bosch-gray-50);--neutral__disabled__text__default:var(--bosch-gray-50);--small__enabled__fill__default:var(--bosch-gray-60);--small__enabled__fill__hovered:var(--bosch-gray-70);--small__enabled__fill__pressed:var(--bosch-gray-80);--small__enabled__text__default:var(--bosch-white);--small__enabled__text__hovered:var(--bosch-white);--small__enabled__text__pressed:var(--bosch-white);--small__disabled__fill__default:var(--bosch-gray-30);--small__disabled__text__default:var(--bosch-gray-50);--integrated__enabled__fill__default:none;--integrated__enabled__fill__hovered:none;--integrated__enabled__fill__pressed:none;--integrated__enabled__text__default:var(--bosch-white);--integrated__enabled__text__hovered:var(--bosch-blue-70);--integrated__enabled__text__pressed:var(--bosch-blue-80);--integrated__disabled__fill__default:none;--integrated__disabled__text__default:var(--bosch-gray-40);--minor-accent__enabled__fill__default:none;--minor-accent__enabled__fill__hovered:var(--bosch-blue-30);--minor-accent__enabled__fill__pressed:var(--bosch-blue-40);--minor-accent__enabled__line__default:var(--bosch-blue-70);--minor-accent__enabled__line__hovered:var(--bosch-blue-80);--minor-accent__enabled__line__pressed:var(--bosch-blue-90);--minor-accent__enabled__text__default:var(--bosch-blue-70);--minor-accent__enabled__text__hovered:var(--bosch-blue-80);--minor-accent__enabled__text__pressed:var(--bosch-blue-90);--minor-accent__disabled__fill__default:none;--minor-accent__disabled__line__default:var(--bosch-gray-40);--minor-accent__disabled__text__default:var(--bosch-gray-40);--major-accent__enabled__fill__default:var(--bosch-blue-50);--major-accent__enabled__fill__hovered:var(--bosch-blue-60);--major-accent__enabled__fill__pressed:var(--bosch-blue-70);--major-accent__enabled__text__default:var(--bosch-white);--major-accent__enabled__text__hovered:var(--bosch-white);--major-accent__enabled__text__pressed:var(--bosch-white);--major-accent__disabled__fill__default:var(--bosch-gray-40);--major-accent__disabled__text__default:var(--bosch-gray-60);--signal-neutral__enabled__fill__default:var(--bosch-blue-30);--signal-neutral__enabled__fill__hovered:var(--bosch-blue-40);--signal-neutral__enabled__fill__pressed:var(--bosch-blue-50);--signal-neutral__enabled__line__default:var(--bosch-blue-50);--signal-neutral__enabled__line__hovered:var(--bosch-blue-60);--signal-neutral__enabled__line__pressed:var(--bosch-blue-70);--signal-neutral__enabled__text__default:var(--bosch-blue-80);--signal-neutral__enabled__text__hovered:var(--bosch-blue-90);--signal-neutral__enabled__text__pressed:var(--bosch-white);--signal-error__enabled__fill__default:var(--bosch-red-30);--signal-error__enabled__fill__hovered:var(--bosch-red-40);--signal-error__enabled__fill__pressed:var(--bosch-red-50);--signal-error__enabled__line__default:var(--bosch-red-50);--signal-error__enabled__line__hovered:var(--bosch-red-60);--signal-error__enabled__line__pressed:var(--bosch-red-70);--signal-error__enabled__text__default:var(--bosch-red-80);--signal-error__enabled__text__hovered:var(--bosch-red-90);--signal-error__enabled__text__pressed:var(--bosch-white);--signal-warning__enabled__fill__default:var(--bosch-yellow-30);--signal-warning__enabled__fill__hovered:var(--bosch-yellow-40);--signal-warning__enabled__fill__pressed:var(--bosch-yellow-50);--signal-warning__enabled__line__default:var(--bosch-yellow-85);--signal-warning__enabled__line__hovered:var(--bosch-yellow-95);--signal-warning__enabled__line__pressed:var(--bosch-white);--signal-warning__enabled__text__default:var(--bosch-yellow-85);--signal-warning__enabled__text__hovered:var(--bosch-yellow-95);--signal-warning__enabled__text__pressed:var(--bosch-white);--signal-success__enabled__fill__default:var(--bosch-green-30);--signal-success__enabled__fill__hovered:var(--bosch-green-40);--signal-success__enabled__fill__pressed:var(--bosch-green-50);--signal-success__enabled__line__default:var(--bosch-green-60);--signal-success__enabled__line__hovered:var(--bosch-green-70);--signal-success__enabled__line__pressed:var(--bosch-green-80);--signal-success__enabled__text__default:var(--bosch-green-80);--signal-success__enabled__text__hovered:var(--bosch-green-90);--signal-success__enabled__text__pressed:var(--bosch-white);background-color:var(--plain__enabled__fill__default);color:var(--plain__enabled__text__default)}.-floating{--plain__enabled__fill__default:var(--bosch-white);--plain__enabled__fill__hovered:var(--bosch-gray-90);--plain__enabled__fill__pressed:var(--bosch-gray-80);--plain__enabled__text__default:var(--bosch-black);--plain__enabled__text__hovered:var(--bosch-black);--plain__enabled__text__pressed:var(--bosch-black);--plain__focused__fill__default:var(--bosch-blue-95);--plain__focused__text__default:var(--bosch-black);--plain__disabled__fill__default:var(--bosch-white);--plain__disabled__text__default:var(--bosch-gray-80);--neutral__enabled__fill__default:var(--bosch-gray-90);--neutral__enabled__fill__hovered:var(--bosch-gray-80);--neutral__enabled__fill__pressed:var(--bosch-gray-70);--neutral__enabled__line__default:var(--bosch-black);--neutral__enabled__line__hovered:var(--bosch-black);--neutral__enabled__line__pressed:var(--bosch-black);--neutral__enabled__text__default:var(--bosch-black);--neutral__enabled__text__hovered:var(--bosch-black);--neutral__enabled__text__pressed:var(--bosch-black);--neutral__focused__fill__default:var(--bosch-blue-90);--neutral__focused__line__default:var(--bosch-blue-50);--neutral__focused__text__default:var(--bosch-black);--neutral__disabled__fill__default:var(--bosch-gray-90);--neutral__disabled__line__default:var(--bosch-gray-70);--neutral__disabled__text__default:var(--bosch-gray-70);--small__enabled__fill__default:var(--bosch-gray-60);--small__enabled__fill__hovered:var(--bosch-gray-50);--small__enabled__fill__pressed:var(--bosch-gray-40);--small__enabled__text__default:var(--bosch-white);--small__enabled__text__hovered:var(--bosch-white);--small__enabled__text__pressed:var(--bosch-white);--small__disabled__fill__default:var(--bosch-gray-90);--small__disabled__text__default:var(--bosch-gray-70);--integrated__enabled__fill__default:none;--integrated__enabled__fill__hovered:none;--integrated__enabled__fill__pressed:none;--integrated__enabled__text__default:var(--bosch-black);--integrated__enabled__text__hovered:var(--bosch-blue-50);--integrated__enabled__text__pressed:var(--bosch-blue-40);--integrated__disabled__fill__default:none;--integrated__disabled__text__default:var(--bosch-gray-80);--minor-accent__enabled__fill__default:none;--minor-accent__enabled__fill__hovered:var(--bosch-blue-90);--minor-accent__enabled__fill__pressed:var(--bosch-blue-80);--minor-accent__enabled__line__default:var(--bosch-blue-50);--minor-accent__enabled__line__hovered:var(--bosch-blue-40);--minor-accent__enabled__line__pressed:var(--bosch-blue-30);--minor-accent__enabled__text__default:var(--bosch-blue-50);--minor-accent__enabled__text__hovered:var(--bosch-blue-40);--minor-accent__enabled__text__pressed:var(--bosch-blue-30);--minor-accent__disabled__fill__default:none;--minor-accent__disabled__line__default:var(--bosch-gray-80);--minor-accent__disabled__text__default:var(--bosch-gray-80);--major-accent__enabled__fill__default:var(--bosch-blue-50);--major-accent__enabled__fill__hovered:var(--bosch-blue-40);--major-accent__enabled__fill__pressed:var(--bosch-blue-30);--major-accent__enabled__text__default:var(--bosch-white);--major-accent__enabled__text__hovered:var(--bosch-white);--major-accent__enabled__text__pressed:var(--bosch-white);--major-accent__disabled__fill__default:var(--bosch-gray-80);--major-accent__disabled__text__default:var(--bosch-gray-60);--signal-neutral__enabled__fill__default:var(--bosch-blue-90);--signal-neutral__enabled__fill__hovered:var(--bosch-blue-80);--signal-neutral__enabled__fill__pressed:var(--bosch-blue-70);--signal-neutral__enabled__line__default:var(--bosch-blue-50);--signal-neutral__enabled__line__hovered:var(--bosch-blue-40);--signal-neutral__enabled__line__pressed:var(--bosch-blue-30);--signal-neutral__enabled__text__default:var(--bosch-blue-40);--signal-neutral__enabled__text__hovered:var(--bosch-blue-30);--signal-neutral__enabled__text__pressed:var(--bosch-blue-20);--signal-error__enabled__fill__default:var(--bosch-red-90);--signal-error__enabled__fill__hovered:var(--bosch-red-80);--signal-error__enabled__fill__pressed:var(--bosch-red-70);--signal-error__enabled__line__default:var(--bosch-red-50);--signal-error__enabled__line__hovered:var(--bosch-red-40);--signal-error__enabled__line__pressed:var(--bosch-red-30);--signal-error__enabled__text__default:var(--bosch-red-40);--signal-error__enabled__text__hovered:var(--bosch-red-30);--signal-error__enabled__text__pressed:var(--bosch-red-20);--signal-warning__enabled__fill__default:var(--bosch-yellow-90);--signal-warning__enabled__fill__hovered:var(--bosch-yellow-80);--signal-warning__enabled__fill__pressed:var(--bosch-yellow-70);--signal-warning__enabled__line__default:var(--bosch-yellow-85);--signal-warning__enabled__line__hovered:var(--bosch-yellow-75);--signal-warning__enabled__line__pressed:var(--bosch-yellow-65);--signal-warning__enabled__text__default:var(--bosch-yellow-40);--signal-warning__enabled__text__hovered:var(--bosch-yellow-30);--signal-warning__enabled__text__pressed:var(--bosch-yellow-20);--signal-success__enabled__fill__default:var(--bosch-green-90);--signal-success__enabled__fill__hovered:var(--bosch-green-80);--signal-success__enabled__fill__pressed:var(--bosch-green-70);--signal-success__enabled__line__default:var(--bosch-green-60);--signal-success__enabled__line__hovered:var(--bosch-green-50);--signal-success__enabled__line__pressed:var(--bosch-green-40);--signal-success__enabled__text__default:var(--bosch-green-40);--signal-success__enabled__text__hovered:var(--bosch-green-30);--signal-success__enabled__text__pressed:var(--bosch-green-20);background-color:var(--plain__enabled__fill__default);color:var(--plain__enabled__text__default)}@font-face{font-family:\"Bosch-UI-Icon\";src:url(../assets/fonts/bosch_ui_icon.woff2) format(\"woff2\"), url(../assets/fonts/bosch_ui_icon.woff) format(\"woff\");font-weight:normal;font-style:normal;font-display:block}[class^=boschicon-ui-],[class*=\" boschicon-ui-\"]{font-family:\"Bosch-UI-Icon\" !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.boschicon-ui-ui-ic-alert-error:before{content:\"\"}.boschicon-ui-ui-ic-alert-info:before{content:\"\"}.boschicon-ui-ui-ic-alert-success:before{content:\"\"}.boschicon-ui-ui-ic-alert-warning:before{content:\"\"}.boschicon-ui-ui-ic-checkmark:before{content:\"\"}.boschicon-ui-ui-ic-close:before{content:\"\"}.boschicon-ui-ui-ic-close-small:before{content:\"\"}.boschicon-ui-ui-ic-dot:before{content:\"\"}.boschicon-ui-ui-ic-down:before{content:\"\"}.boschicon-ui-ui-ic-indeterminate:before{content:\"\"}.boschicon-ui-ui-ic-left:before{content:\"\"}.boschicon-ui-ui-ic-inline-right:before{content:\"\"}.boschicon-ui-ui-ic-inline-right-bold:before{content:\"\"}.boschicon-ui-ui-ic-inline-list-checkmark:before{content:\"\"}.boschicon-ui-ui-ic-inline-list-ul:before{content:\"\"}.boschicon-ui-ui-ic-minus:before{content:\"\"}.boschicon-ui-ui-ic-plus:before{content:\"\"}.boschicon-ui-ui-ic-right:before{content:\"\"}.boschicon-ui-ui-ic-search:before{content:\"\"}.boschicon-ui-ui-ic-up:before{content:\"\"}.boschicon-ui-ui-ic-up-down:before{content:\"\"}.boschicon-ui-ui-ic-watch-off:before{content:\"\"}.boschicon-ui-ui-ic-watch-on:before{content:\"\"}.boschicon-ui-ui-ic-inline-externallink:before{content:\"\"}.a-ui-icon{background:url(\"./basics/icons/sprite/sprite.svg\") no-repeat;display:inline-block}.a-ui-icon--ui-ic-checkmark{background-position:0 0;width:24px;height:24px}.a-ui-icon--ui-ic-close{background-position:20% 0;width:24px;height:24px}.a-ui-icon--ui-ic-close-small{background-position:0 25%;width:24px;height:24px}.a-ui-icon--ui-ic-dot{background-position:20% 25%;width:24px;height:24px}.a-ui-icon--ui-ic-down{background-position:40% 0;width:24px;height:24px}.a-ui-icon--ui-ic-down-disabled{background-position:40% 25%;width:24px;height:24px}.a-ui-icon--ui-ic-down-hover{background-position:0 50%;width:24px;height:24px}.a-ui-icon--ui-ic-error{background-position:20% 50%;width:24px;height:24px}.a-ui-icon--ui-ic-indeterminate{background-position:40% 50%;width:24px;height:24px}.a-ui-icon--ui-ic-info{background-position:60% 0;width:24px;height:24px}.a-ui-icon--ui-ic-left{background-position:60% 25%;width:24px;height:24px}.a-ui-icon--ui-ic-left-disabled{background-position:60% 50%;width:24px;height:24px}.a-ui-icon--ui-ic-left-hover{background-position:0 75%;width:24px;height:24px}.a-ui-icon--ui-ic-linkarrow{background-position:17.6470588235% 75%;width:8px;height:24px}.a-ui-icon--ui-ic-list-checkmark{background-position:93.75% 66.6666666667%;width:16px;height:12px}.a-ui-icon--ui-ic-list-ul{background-position:100% 64.2857142857%;width:8px;height:8px}.a-ui-icon--ui-ic-minus{background-position:26.6666666667% 75%;width:24px;height:24px}.a-ui-icon--ui-ic-minus-disabled{background-position:46.6666666667% 75%;width:24px;height:24px}.a-ui-icon--ui-ic-success{background-position:80% 0;width:24px;height:24px}.a-ui-icon--ui-ic-plus{background-position:80% 25%;width:24px;height:24px}.a-ui-icon--ui-ic-plus-disabled{background-position:80% 50%;width:24px;height:24px}.a-ui-icon--ui-ic-right{background-position:80% 75%;width:24px;height:24px}.a-ui-icon--ui-ic-right-disabled{background-position:0 100%;width:24px;height:24px}.a-ui-icon--ui-ic-right-hover{background-position:20% 100%;width:24px;height:24px}.a-ui-icon--ui-ic-search{background-position:40% 100%;width:24px;height:24px}.a-ui-icon--ui-ic-up{background-position:60% 100%;width:24px;height:24px}.a-ui-icon--ui-ic-up-hover{background-position:80% 100%;width:24px;height:24px}.a-ui-icon--ui-ic-warning{background-position:100% 0;width:24px;height:24px}.a-ui-icon--ui-ic-watch-off{background-position:100% 25%;width:24px;height:24px}.a-ui-icon--ui-ic-watch-on{background-position:100% 50%;width:24px;height:24px}html,body{font-family:boschsans, \"Helvetica Neue\", Helvetica, Arial, sans-serif;padding:0;margin:0;font-size:16px;font-weight:400;line-height:1.5;color:var(--bosch-black)}input,textarea,select,button{font-family:inherit;border-radius:0}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}.highlight{font-weight:700}.text{font-weight:400}.quote{font-weight:400;font-style:italic}.list-element{font-weight:400;margin-bottom:1rem}.label{font-weight:400}.-size-6xl{font-size:5rem;line-height:1.15}.-size-5xl{font-size:4rem;line-height:1.2}.-size-4xl{font-size:3rem;line-height:1.25}.-size-3xl{font-size:2.5rem;line-height:1.3}.-size-2xl{font-size:2rem;line-height:1.35}.-size-xl{font-size:1.5rem;line-height:1.4}.-size-l{font-size:1.25rem;line-height:1.5}.-size-m{font-size:1rem;line-height:1.5}.-size-s{font-size:0.75rem;line-height:1.5}h1{font-weight:700;font-size:3rem;line-height:1.25}h2{font-weight:700;font-size:2.5rem;line-height:1.3}h3{font-weight:700;font-size:2rem;line-height:1.35}h4{font-weight:700;font-size:1.5rem;line-height:1.4}h5{font-weight:700;font-size:1.25rem;line-height:1.5}p{font-weight:400;font-size:1rem;line-height:1.5}li{font-weight:400;margin-bottom:1rem;font-size:1rem;line-height:1.5}button{font-weight:400;font-size:1rem;line-height:1.5}figcaption{font-weight:400;font-size:0.75rem;line-height:1.5}label{font-weight:400;font-size:0.75rem;line-height:1.5}.e-container{width:calc(100% - 2rem);max-width:1120px;margin:0 1rem;}.e-container>*{max-width:1120px;margin:0 auto}@media (min-width: 1152px){.e-container{width:100%;margin:0 auto}}.e-container.-full-width{width:100%;max-width:unset;margin:0;padding:0 1rem}.e-container.-full-width>*{margin:0 auto}.m-form-field{margin-bottom:1rem;-ms-flex-negative:1;flex-shrink:1;-ms-flex-positive:1;flex-grow:1}.m-form-field.-quarter{-ms-flex-preferred-size:25%;flex-basis:25%;-ms-flex-positive:0;flex-grow:0}.m-form-field.-half{-ms-flex-preferred-size:50%;flex-basis:50%}.m-form-field--radio{margin-top:1.5rem}.m-form-field--checkbox{margin-top:1.5rem}.o-form{margin:4rem 0;}.o-form__row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.o-form__row .m-form-field{margin-left:0.5rem;margin-right:0.5rem}.o-form__row .m-form-field:first-child{margin-left:0}.o-form__row .m-form-field:last-child{margin-right:0}.o-form form{width:100%}.o-form h4{margin:3rem 0 1.5rem}.o-form button[type=submit]{margin:3rem 0}";

const BbgForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("form", { class: "o-form" }, h("slot", null)));
  }
};
BbgForm.style = bbgFormCss;

export { BbgForm as bbg_form };

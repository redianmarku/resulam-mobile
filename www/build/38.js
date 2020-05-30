webpackJsonp([38],{

/***/ 2042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSiteHelpPageModule", function() { return CoreLoginSiteHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_help__ = __webpack_require__(2194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreLoginSiteHelpPageModule = /** @class */ (function () {
    function CoreLoginSiteHelpPageModule() {
    }
    CoreLoginSiteHelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__site_help__["a" /* CoreLoginSiteHelpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__site_help__["a" /* CoreLoginSiteHelpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ]
        })
    ], CoreLoginSiteHelpPageModule);
    return CoreLoginSiteHelpPageModule;
}());

//# sourceMappingURL=site-help.module.js.map

/***/ }),

/***/ 2194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(87);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component that displays some help regarding the CoreLoginSitePage.
 */
var CoreLoginSiteHelpPage = /** @class */ (function () {
    function CoreLoginSiteHelpPage(viewCtrl, translate, utils) {
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.utils = utils;
        this.canScanQR = this.utils.canScanQR() && false; // @todo: Enable it for 3.9 release.
        this.urlImageHtml = __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreLoginHelperProvider */].FAQ_URL_IMAGE_HTML;
        this.qrCodeImageHtml = __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* CoreLoginHelperProvider */].FAQ_QRCODE_IMAGE_HTML;
        this.setupLinkHtml = '<a href="https://moodle.com/getstarted/" title="' +
            this.translate.instant('core.login.faqsetupsitelinktitle') + '">https://moodle.com/getstarted/</a>';
    }
    /**
     * Close help modal.
     */
    CoreLoginSiteHelpPage.prototype.closeHelp = function () {
        this.viewCtrl.dismiss();
    };
    CoreLoginSiteHelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-core-login-site-help',template:/*ion-inline-start:"/mnt/c/Users/redi1/Desktop/moodleapp/src/core/login/pages/site-help/site-help.html"*/'<ion-header>\n    <ion-navbar core-back-button>\n        <ion-title>{{ \'core.login.help\' | translate }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeHelp()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqwhatisurlquestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap class="core-login-faqwhatisurlanswer">\n            <div [innerHTML]="\'core.login.faqwhatisurlanswer\' | translate: {$image: urlImageHtml}">\n            </div>\n        </ion-item>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqcannotconnectquestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap>\n            <p>{{ \'core.login.faqcannotconnectanswer\' | translate }} {{ \'core.whoissiteadmin\' | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqsetupsitequestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap>\n            <p><core-format-text [text]="\'core.login.faqsetupsiteanswer\' | translate:{$link: setupLinkHtml}" [filter]="false"></core-format-text></p>\n        </ion-item>\n        <ion-item text-wrap>\n            <h2><b>{{ \'core.login.faqtestappquestion\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap>\n            <p>{{ \'core.login.faqtestappanswer\' | translate }}</p>\n        </ion-item>\n        <ion-item text-wrap *ngIf="canScanQR">\n            <h2><b>{{ \'core.login.faqwhereisqrcode\' | translate }}</b></h2>\n        </ion-item>\n        <ion-item text-wrap *ngIf="canScanQR" class="core-login-faqwhereisqrcodeanswer">\n            <div [innerHTML]="\'core.login.faqwhereisqrcodeanswer\' | translate: {$image: qrCodeImageHtml}">\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/mnt/c/Users/redi1/Desktop/moodleapp/src/core/login/pages/site-help/site-help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["G" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_utils__["b" /* CoreUtilsProvider */]])
    ], CoreLoginSiteHelpPage);
    return CoreLoginSiteHelpPage;
}());

//# sourceMappingURL=site-help.js.map

/***/ })

});
//# sourceMappingURL=38.js.map
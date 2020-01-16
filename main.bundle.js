webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">EJERCICIO</h4>\n</div>\n<div class=\"modal-body\">\n  <form #logInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Nombre*\" required \n        [(ngModel)]=\"exercise.name\" name=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" [(ngModel)]=\"exercise.urlVideo\" name=\"urlVideo\" required></textarea>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancelar</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"updateSave()\">Aceptar</button>\n</div>\n<!--<div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n  <strong>Upps!</strong> El usuario o contraseña son incorrectos.\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminExerciseFrmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exercise__ = __webpack_require__("../../../../../src/app/exercise.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminExerciseFrmModalComponent = /** @class */ (function () {
    function AdminExerciseFrmModalComponent(activeModal, apiService) {
        this.activeModal = activeModal;
        this.apiService = apiService;
        this.exercise = new __WEBPACK_IMPORTED_MODULE_3__exercise__["a" /* Exercise */]();
        this.isEdit = false;
    }
    AdminExerciseFrmModalComponent.prototype.ngOnInit = function () {
    };
    AdminExerciseFrmModalComponent.prototype.getExercise = function (exerId) {
        var _this = this;
        this.apiService.getExercisesById(exerId)
            .then(function (data) {
            Object.assign(_this.exercise, data);
            console.log('getExercise');
            console.log(_this.exercise);
        });
    };
    AdminExerciseFrmModalComponent.prototype.updateSave = function () {
        if (this.isEdit) {
            this.apiService.putExercise(this.exercise);
        }
        else {
            this.apiService.postExercise(this.exercise);
        }
    };
    AdminExerciseFrmModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-exercise-frm-modal',
            template: __webpack_require__("../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], AdminExerciseFrmModalComponent);
    return AdminExerciseFrmModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-exercise/admin-exercise.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"!loader\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\" >#</th>\n      <th scope=\"col\" ></th>\n      <th scope=\"col\" >Nombre</th>\n      <th scope=\"col\" >Acciones</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let exercise of listExercises; let i = index \">\n      <th scope=\"row\">{{(i + 1)}}</th>\n      <td>\n        <figure class=\"figure\">\n          <img src=\"{{exercise.urlImage}}\" width=\"70px\" class=\"figure-img img-fluid rounded\">\n        </figure>\n      </td>\n      <td>{{exercise.name}}</td>\n      <td>\n        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(0)\">Agregar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(exercise.id)\">Editar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"clickDelete(exercise.id)\">Eliminar</button>\n          </label>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-loading *ngIf=\"loader\"></app-loading>"

/***/ }),

/***/ "../../../../../src/app/admin-exercise/admin-exercise.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-exercise/admin-exercise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminExerciseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_exercise_frm_modal_admin_exercise_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminExerciseComponent = /** @class */ (function () {
    function AdminExerciseComponent(apiService, modalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.loader = false;
    }
    AdminExerciseComponent.prototype.ngOnInit = function () {
        this.getExercises();
    };
    AdminExerciseComponent.prototype.getExercises = function () {
        var _this = this;
        this.loader = true;
        this.apiService.getExercises().then(function (data) {
            _this.listExercises = data;
            _this.listExercises.forEach(function (exercise, index) {
                _this.apiService.getImg(exercise.urlImage)
                    .then(function (imageUrl) {
                    _this.listExercises[index].urlImage = imageUrl;
                });
            });
            _this.loader = false;
        })
            .catch(function () {
            _this.loader = false;
        });
    };
    AdminExerciseComponent.prototype.openModalFrm = function (exerciseId) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__admin_exercise_frm_modal_admin_exercise_frm_modal_component__["a" /* AdminExerciseFrmModalComponent */]);
        if (exerciseId != 0) {
            modalRef.componentInstance.getExercise(exerciseId);
        }
    };
    AdminExerciseComponent.prototype.clickDelete = function (id) {
        if (confirm("Esta seguro que desea eliminar este ejercicio? ")) {
            console.log("Implement delete functionality here");
        }
    };
    AdminExerciseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-exercise',
            template: __webpack_require__("../../../../../src/app/admin-exercise/admin-exercise.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-exercise/admin-exercise.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AdminExerciseComponent);
    return AdminExerciseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">INFLUENCER</h4>\n</div>\n<div class=\"modal-body\">\n  <form #logInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Nombre*\" required \n        [(ngModel)]=\"influencer.name\" name=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Perfil tags*\" required \n        [(ngModel)]=\"influencer.position\" name=\"profile\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Instagram\"  \n        [(ngModel)]=\"influencer.instagram\" name=\"instagram\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Twitter\"  \n        [(ngModel)]=\"influencer.twitter\" name=\"twitter\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Facebook\"  \n        [(ngModel)]=\"influencer.facebook\" name=\"facebook\">\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" [(ngModel)]=\"influencer.description\" name=\"description\" required></textarea>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancelar</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"updateSave()\">Aceptar</button>\n</div>\n<!--<div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n  <strong>Upps!</strong> El usuario o contraseña son incorrectos.\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminInfluencerFrmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainer__ = __webpack_require__("../../../../../src/app/trainer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminInfluencerFrmModalComponent = /** @class */ (function () {
    function AdminInfluencerFrmModalComponent(activeModal, apiService) {
        this.activeModal = activeModal;
        this.apiService = apiService;
        this.influencer = new __WEBPACK_IMPORTED_MODULE_3__trainer__["a" /* Trainer */]();
        this.isEdit = false;
    }
    AdminInfluencerFrmModalComponent.prototype.ngOnInit = function () {
    };
    AdminInfluencerFrmModalComponent.prototype.getInfluencer = function (infId) {
        var _this = this;
        this.isEdit = true;
        this.apiService.getAthleteById(infId)
            .then(function (data) {
            Object.assign(_this.influencer, data);
        });
    };
    AdminInfluencerFrmModalComponent.prototype.updateSave = function () {
        if (this.isEdit) {
            this.apiService.putAthlete(this.influencer);
        }
        else {
            this.apiService.postAthlete(this.influencer);
        }
    };
    AdminInfluencerFrmModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-influencer-frm-modal',
            template: __webpack_require__("../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], AdminInfluencerFrmModalComponent);
    return AdminInfluencerFrmModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-influencer/admin-influencer.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"!loader\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\" >#</th>\n      <th scope=\"col\" ></th>\n      <th scope=\"col\" >Influencer</th>\n      <th scope=\"col\" >Descripción</th>\n      <th scope=\"col\" >Acciones</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let athlete of listAthletes; let i = index \">\n      <th scope=\"row\">{{(i + 1)}}</th>\n      <td>\n        <figure class=\"figure\">\n          <img src=\"{{athlete.url}}\" width=\"70px\" class=\"figure-img img-fluid rounded\">\n        </figure>\n      </td>\n      <td>{{athlete.name}}</td>\n      <td>{{(athlete.description.length>70) ? (athlete.description | slice:0:70)+'..' : athlete.description}}</td>\n      <td>\n        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(0)\">Agregar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(athlete.id)\">Editar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"clickDelete(athlete.id)\">Eliminar</button>\n          </label>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-loading *ngIf=\"loader\"></app-loading>"

/***/ }),

/***/ "../../../../../src/app/admin-influencer/admin-influencer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-influencer/admin-influencer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminInfluencerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_influencer_frm_modal_admin_influencer_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminInfluencerComponent = /** @class */ (function () {
    function AdminInfluencerComponent(apiService, modalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.loader = false;
    }
    AdminInfluencerComponent.prototype.ngOnInit = function () {
        this.getInfluencers();
    };
    AdminInfluencerComponent.prototype.getInfluencers = function () {
        var _this = this;
        this.loader = true;
        this.apiService.getAthletes().then(function (data) {
            _this.listAthletes = data;
            _this.listAthletes.forEach(function (athlete, index) {
                _this.apiService.getImg(athlete.url)
                    .then(function (imageUrl) {
                    _this.listAthletes[index].url = imageUrl;
                });
            });
            _this.loader = false;
        })
            .catch(function () {
            _this.loader = false;
        });
    };
    AdminInfluencerComponent.prototype.openModalFrm = function (influenceId) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__admin_influencer_frm_modal_admin_influencer_frm_modal_component__["a" /* AdminInfluencerFrmModalComponent */]);
        if (influenceId != 0) {
            modalRef.componentInstance.getInfluencer(influenceId);
        }
    };
    AdminInfluencerComponent.prototype.clickDelete = function (id) {
        if (confirm("Esta seguro que desea eliminar este atleta? ")) {
            this.apiService.deleteAthlete(id);
        }
    };
    AdminInfluencerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-influencer',
            template: __webpack_require__("../../../../../src/app/admin-influencer/admin-influencer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-influencer/admin-influencer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AdminInfluencerComponent);
    return AdminInfluencerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">PLAN</h4>\n</div>\n<div class=\"modal-body\">\n  <form #logInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Nombre*\" required \n        [(ngModel)]=\"plan.name\" name=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <textarea class=\"form-control\" [(ngModel)]=\"plan.description\" name=\"description\" required></textarea>\n    </div>\n    <div class=\"form-group\">\n      <select [(ngModel)]=\"plan.ath_Id\" name=\"ath_Id\" class=\"form-control\">\n        <option *ngFor=\"let athlete of listAthletes\" [ngValue]=\"athlete.id\">{{athlete.name}}</option>\n      </select>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancelar</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"updateSave()\">Aceptar</button>\n</div>\n<!--<div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n  <strong>Upps!</strong> El usuario o contraseña son incorrectos.\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPlanFrmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plan__ = __webpack_require__("../../../../../src/app/plan.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminPlanFrmModalComponent = /** @class */ (function () {
    function AdminPlanFrmModalComponent(activeModal, apiService) {
        this.activeModal = activeModal;
        this.apiService = apiService;
        this.plan = new __WEBPACK_IMPORTED_MODULE_3__plan__["a" /* Plan */]();
        this.listAthletes = [];
        this.isEdit = false;
    }
    AdminPlanFrmModalComponent.prototype.ngOnInit = function () {
        this.getInfluencers();
    };
    AdminPlanFrmModalComponent.prototype.getPlan = function (planId) {
        var _this = this;
        this.isEdit = true;
        this.apiService.getPlanById(planId)
            .then(function (data) {
            Object.assign(_this.plan, data);
        });
    };
    AdminPlanFrmModalComponent.prototype.getInfluencers = function () {
        var _this = this;
        this.apiService.getAthletes().then(function (data) {
            _this.listAthletes = data;
        });
    };
    AdminPlanFrmModalComponent.prototype.updateSave = function () {
        if (this.isEdit) {
            this.apiService.putPlan(this.plan);
        }
        else {
            this.apiService.postPlan(this.plan);
        }
    };
    AdminPlanFrmModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-plan-frm-modal',
            template: __webpack_require__("../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], AdminPlanFrmModalComponent);
    return AdminPlanFrmModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-plan/admin-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"!loader\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\" >#</th>\n      <th scope=\"col\" ></th>\n      <th scope=\"col\" >Influencer</th>\n      <th scope=\"col\" >Nombre</th>\n      <th scope=\"col\" >Descripción</th>\n      <th scope=\"col\" >Acciones</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let plan of listPlans; let i = index \">\n      <th scope=\"row\">{{(i + 1)}}</th>\n      <td>\n        <figure class=\"figure\">\n          <img src=\"{{plan.url}}\" width=\"70px\" class=\"figure-img img-fluid rounded\">\n        </figure>\n      </td>\n      <td>{{plan.ath_Name}}</td>\n      <td>{{plan.name}}</td>\n      <td>{{(plan.description.length>70) ? (plan.description | slice:0:70)+'..' : plan.description}}</td>\n      <td>\n        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(0)\">Agregar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(plan.id)\">Editar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"clickDelete(plan.id)\">Eliminar</button>\n          </label>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-loading *ngIf=\"loader\"></app-loading>"

/***/ }),

/***/ "../../../../../src/app/admin-plan/admin-plan.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-plan/admin-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_plan_frm_modal_admin_plan_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminPlanComponent = /** @class */ (function () {
    function AdminPlanComponent(apiService, modalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.loader = false;
    }
    AdminPlanComponent.prototype.ngOnInit = function () {
        this.getPlans();
    };
    AdminPlanComponent.prototype.getPlans = function () {
        var _this = this;
        this.loader = true;
        this.apiService.getPlans().then(function (data) {
            _this.listPlans = data;
            _this.listPlans.forEach(function (plan, index) {
                _this.apiService.getImg(plan.url)
                    .then(function (imageUrl) {
                    _this.listPlans[index].url = imageUrl;
                });
                _this.loader = false;
            });
        }).catch(function () {
            _this.loader = false;
        });
    };
    AdminPlanComponent.prototype.openModalFrm = function (planId) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__admin_plan_frm_modal_admin_plan_frm_modal_component__["a" /* AdminPlanFrmModalComponent */]);
        if (planId != 0) {
            modalRef.componentInstance.getPlan(planId);
        }
    };
    AdminPlanComponent.prototype.clickDelete = function (id) {
        if (confirm("Esta seguro que desea eliminar este plan? ")) {
            this.apiService.deletePlan(id);
        }
    };
    AdminPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-plan',
            template: __webpack_require__("../../../../../src/app/admin-plan/admin-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-plan/admin-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AdminPlanComponent);
    return AdminPlanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Rutina</h4>\n  </div>\n  <div class=\"modal-body\">\n    <form #logInForm=\"ngForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre*\" required \n          [(ngModel)]=\"routine.name\" name=\"name\">\n      </div>\n      <div class=\"form-group\">\n        <select [(ngModel)]=\"routine.idPlan\" name=\"idPlan\" class=\"form-control\">\n          <option *ngFor=\"let plan of listPlans\" [ngValue]=\"plan.id\">{{plan.name}}</option>\n        </select>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancelar</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"updateSave()\">Aceptar</button>\n  </div>\n  <!--<div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Upps!</strong> El usuario o contraseña son incorrectos.\n  </div>-->"

/***/ }),

/***/ "../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutinesFrmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routine__ = __webpack_require__("../../../../../src/app/routine.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminRoutinesFrmModalComponent = /** @class */ (function () {
    function AdminRoutinesFrmModalComponent(activeModal, apiService) {
        this.activeModal = activeModal;
        this.apiService = apiService;
        this.routine = new __WEBPACK_IMPORTED_MODULE_3__routine__["a" /* Routine */]();
        this.listPlans = [];
        this.isEdit = false;
    }
    AdminRoutinesFrmModalComponent.prototype.ngOnInit = function () {
        this.getPlans();
    };
    AdminRoutinesFrmModalComponent.prototype.getRoutine = function (routineId) {
        var _this = this;
        this.isEdit = true;
        this.apiService.getRoutineById(routineId)
            .then(function (data) {
            Object.assign(_this.routine, data);
        });
    };
    AdminRoutinesFrmModalComponent.prototype.getPlans = function () {
        var _this = this;
        this.apiService.getPlans().then(function (data) {
            _this.listPlans = data;
        });
    };
    AdminRoutinesFrmModalComponent.prototype.updateSave = function () {
        if (this.isEdit) {
            this.apiService.putRoutine(this.routine);
        }
        else {
            this.apiService.postRoutine(this.routine);
        }
    };
    AdminRoutinesFrmModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-routines-frm-modal',
            template: __webpack_require__("../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], AdminRoutinesFrmModalComponent);
    return AdminRoutinesFrmModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-routines/admin-routines.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\" *ngIf=\"!loader\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\" >#</th>\n      <th scope=\"col\" ></th>\n      <th scope=\"col\" >Plan</th>\n      <th scope=\"col\" >Nombre</th>\n      <th scope=\"col\" >Acciones</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let routine of listRoutines; let i = index \">\n      <th scope=\"row\">{{(i + 1)}}</th>\n      <td>\n        <figure class=\"figure\">\n          <img src=\"{{routine.urlImagen}}\" width=\"70px\" class=\"figure-img img-fluid rounded\">\n        </figure>\n      </td>\n      <td>{{routine.plan}}</td>\n      <td>{{routine.name}}</td>\n      <td>\n        <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(0)\">Agregar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"openModalFrm(routine.id)\">Editar</button>\n          </label>\n          <label class=\"btn btn-secondary py-0 px-0\">\n            <button class=\"btn\" (click)=\"clickDelete(routine.id)\">Eliminar</button>\n          </label>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-loading *ngIf=\"loader\"></app-loading>"

/***/ }),

/***/ "../../../../../src/app/admin-routines/admin-routines.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-routines/admin-routines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routines_frm_modal_admin_routines_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminRoutinesComponent = /** @class */ (function () {
    function AdminRoutinesComponent(apiService, modalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.loader = false;
    }
    AdminRoutinesComponent.prototype.ngOnInit = function () {
        this.getRoutines();
    };
    AdminRoutinesComponent.prototype.getRoutines = function () {
        var _this = this;
        this.loader = true;
        this.apiService.getRoutines().then(function (data) {
            _this.listRoutines = data;
            _this.listRoutines.forEach(function (routine, index) {
                _this.apiService.getImg(routine.urlImagen)
                    .then(function (imageUrl) {
                    _this.listRoutines[index].urlImagen = imageUrl;
                });
            });
            _this.loader = false;
        })
            .catch(function () {
            _this.loader = false;
        });
    };
    AdminRoutinesComponent.prototype.openModalFrm = function (routineId) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__admin_routines_frm_modal_admin_routines_frm_modal_component__["a" /* AdminRoutinesFrmModalComponent */]);
        if (routineId != 0) {
            modalRef.componentInstance.getRoutine(routineId);
        }
    };
    AdminRoutinesComponent.prototype.clickDelete = function (id) {
        if (confirm("Esta seguro que desea eliminar esta rutina? ")) {
            console.log("Implement delete functionality here");
        }
    };
    AdminRoutinesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-routines',
            template: __webpack_require__("../../../../../src/app/admin-routines/admin-routines.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-routines/admin-routines.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AdminRoutinesComponent);
    return AdminRoutinesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-series/admin-series.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-series works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin-series/admin-series.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-series/admin-series.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSeriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSeriesComponent = /** @class */ (function () {
    function AdminSeriesComponent() {
    }
    AdminSeriesComponent.prototype.ngOnInit = function () {
    };
    AdminSeriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-series',
            template: __webpack_require__("../../../../../src/app/admin-series/admin-series.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-series/admin-series.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSeriesComponent);
    return AdminSeriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Influencers</b></ng-template>\n    <ng-template ngbTabContent>\n      <app-admin-influencer></app-admin-influencer>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Planes</b></ng-template>\n    <ng-template ngbTabContent>\n      <app-admin-plan></app-admin-plan>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Rutinas</b></ng-template>\n    <ng-template ngbTabContent>\n      <app-admin-routines></app-admin-routines>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Ejercicios</b></ng-template>\n    <ng-template ngbTabContent>\n      <app-admin-exercise></app-admin-exercise>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b>Series</b></ng-template>\n    <ng-template ngbTabContent>\n      <app-admin-series></app-admin-series>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle><b (click)=\"logout()\">Cerrar sesión</b></ng-template>\n    <ng-template ngbTabContent>      \n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_admin_service__ = __webpack_require__("../../../../../src/app/auth-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(authAdmin, router) {
        this.authAdmin = authAdmin;
        this.router = router;
        this.adminUser = null;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.adminUser = this.authAdmin.getUser();
        if (this.adminUser == null) {
            this.router.navigate(['admin/login']);
        }
    };
    AdminComponent.prototype.logout = function () {
        this.authAdmin.logOut();
        this.router.navigate(['admin/login']);
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_admin_service__["a" /* AuthAdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ads-modal/ads-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h3 class=\"pt-3\">Descarga ya nuestra <strong>App</strong></h3>\n    </div>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"col-12 img-back\">\n      <img src=\"../../assets/img/Background-transp.png\">\n    </div>\n    <div class=\"col-12\">\n      <p class=\"over-img\">Entrena usando las rutinas personales<br> de tus Influencers Favoritos. </p>\n    </div>\n    <div class=\"col-12 text-center\">\n      <a href=\"https://play.google.com/store/apps/details?id=com.influenceme.android&hl=en\" target=\"blank\">\n        <img src=\"../../assets/img/google-play.png\" height=\"40px\">\n      </a>\n      <img src=\"../../assets/img/app-store.png\" height=\"40px\" placement=\"right\" ngbTooltip=\"Próximamente\">\n    </div>\n    <div class=\"col-12 text-center pt-1 pb-3\">\n      <p class=\"activelink\" (click)=\"activeModal.close('Close click')\">Saltar y continuar en influencemeapp.com</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ads-modal/ads-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  background-color: #000;\n  color: #fff; }\n\n.close {\n  position: absolute;\n  top: .5em;\n  right: .5em; }\n\n.activelink {\n  color: orangered;\n  text-decoration: underline; }\n\n.activelink:hover {\n  color: white;\n  cursor: pointer; }\n\n.img-back img {\n  width: 100%; }\n\n.over-img {\n  margin-top: -1.5em;\n  font-style: italic;\n  font-weight: 100;\n  font-size: 12px; }\n\na {\n  text-decoration: underline; }\n\n/* unvisited link */\n\na:link {\n  color: white; }\n\n/* visited link */\n\na:visited {\n  color: white; }\n\n/* mouse over link */\n\na:hover {\n  color: white; }\n\n/* selected link */\n\na:active {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ads-modal/ads-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdsModalComponent = /** @class */ (function () {
    function AdsModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    AdsModalComponent.prototype.ngOnInit = function () {
    };
    AdsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ads-modal',
            template: __webpack_require__("../../../../../src/app/ads-modal/ads-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ads-modal/ads-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], AdsModalComponent);
    return AdsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = "http://app.influencemeapp.com/api/";
        this.apiToken = "?token=uyuiy6yyutyut";
    }
    ApiService.prototype.getAthletes = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Athlete/Get" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getImg = function (idImg) {
        var _this = this;
        var img;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "file/Get/" + idImg;
            resolve(methodUrl);
        });
        return promise;
    };
    ApiService.prototype.getPlans = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/Get" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getPlansByAthlete = function (idAthlete) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/GetPlansbyAthletes" + _this.apiToken + "&idAthletes=" + idAthlete;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getPlansByUser = function (idAthlete) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/GetPlansbyCustomer" + _this.apiToken + "&idCustomer=" + idAthlete;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getRoutinesByPlan = function (idPlan) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/RoutinesByPlan" + _this.apiToken + "&IdPlan=" + idPlan;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getExercisesByRoutine = function (idRoutine) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Exercise/ExerciseByRoutines" + _this.apiToken + "&idRoutine=" + idRoutine;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getAthleteById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Athlete/GetById" + _this.apiToken + "&IdAthlete=" + id;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list[0]);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getPlanById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/GetById" + _this.apiToken + "&IdPlan=" + id;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list[0]);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getSuscriptionStatus = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "SubscriptionStatus/GetAll" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getSuscriptionStatusById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "SubscriptionStatus/Get" + _this.apiToken + "&Id=" + id;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list[0]);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getSuscriptionStatusType = function (idRoutine) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "SubscriptionStatus/Get" + _this.apiToken + "&idRoutine=" + idRoutine;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getRoutineById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/GetById" + _this.apiToken + "&idRoutine=" + id;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list[0]);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getRoutines = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/Get" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getExercisesById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Exercise/GetById" + _this.apiToken + "&IdExercise=" + id;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.exercise);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.createUser = function (uid, phone, name, email, password, gender, weight, height, termsconditions, idOperator, referrer, typeAction, weightUnit, heightUnit, age) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            phone = phone.replace('+', '');
            var birthday = __WEBPACK_IMPORTED_MODULE_2_moment__();
            if (age > 0) {
                birthday = birthday.subtract(age, "years");
            }
            referrer = referrer.length > 0 ? referrer : "WebSite";
            var methodUrl = _this.apiUrl + "Customer/Insert" + _this.apiToken;
            var newUser = {
                id: uid,
                Action: typeAction,
                Phone: phone,
                First_name: name,
                Last_name: name,
                EMail: email,
                User: email,
                type: 1,
                CreationTime: __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD"),
                LastSignInTime: __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY-MM-DD"),
                Token: uid,
                Birthday: birthday.format("YYYY-MM-DD"),
                Password: password,
                Gty_Id: gender,
                UrlAvatar: 6,
                Set_Id: 4,
                Weight: weight,
                Height: height,
                TermsAndConditions: termsconditions,
                Idoperator: idOperator,
                MAC_Address: "WEB Site",
                Url_Referrer: referrer,
                sty_Id: 2,
                sst_Id: 3,
                uwt_Id: weightUnit,
                height_Id: heightUnit
            };
            console.log('Datos usuario:');
            console.log(JSON.stringify(newUser));
            _this.http.post(methodUrl, newUser)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error("value -1");
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                console.log("user create in DB");
                resolve(res);
            }, function (msg) {
                console.error("Error message: No create user");
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getGenderType = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "GenderType/GetAll" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getUserById = function (IdCustomer) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Customer/Profile" + _this.apiToken + "&IdCustomer=" + IdCustomer;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1 || res.error.value == 0) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list[0]);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getUserStatus = function (IdCustomer) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Customer/State" + _this.apiToken + "&IdCustomer=" + IdCustomer;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1 || res.error.value == 0) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                var statusUser = res.list[0];
                if (statusUser.sty_Id == 1 && statusUser.sst_Id == 1) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.postSubscription = function (id, email, token, phone, name) {
        var _this = this;
        var objSubscription = {
            "id": id,
            "email": email,
            "Token": token,
            "phone": phone,
            "first_name": name,
            "last_name": name,
            "height": 0,
            "MAC_Address": "WEB Site",
            "Url_Referrer": "http://influencemeapp.com/my-account"
        };
        console.log("Subscription");
        console.log(objSubscription);
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Customer/Subscription" + _this.apiToken;
            _this.http.post(methodUrl, objSubscription)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1 || res.error.value == 0) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.postUnsubscribe = function (idCustomer) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Customer/CancelSubscription" + _this.apiToken + "&IdCustomer=" + idCustomer;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value != 1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.postAthlete = function (athlete) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Athlete/Pos" + _this.apiToken;
            _this.http.post(methodUrl, athlete)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.putAthlete = function (athlete) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Athlete/Put" + _this.apiToken;
            _this.http.put(methodUrl, athlete)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.deleteAthlete = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Athlete/Delete" + _this.apiToken + "&id=" + id;
            _this.http.delete(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.postPlan = function (plan) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/Post" + _this.apiToken;
            _this.http.post(methodUrl, plan)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.putPlan = function (plan) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/Put" + _this.apiToken;
            _this.http.put(methodUrl, plan)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.deletePlan = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Plan/Delete" + _this.apiToken + "&id=" + id;
            _this.http.delete(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.postRoutine = function (routine) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/Post" + _this.apiToken;
            _this.http.post(methodUrl, routine)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.putRoutine = function (routine) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/Put" + _this.apiToken;
            _this.http.put(methodUrl, routine)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.deleteRoutine = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/Delete" + _this.apiToken + "&id=" + id;
            _this.http.delete(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.postExercise = function (exercise) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Exercise/Post" + _this.apiToken;
            _this.http.post(methodUrl, exercise)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.putExercise = function (exercise) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Exercise/Put" + _this.apiToken;
            _this.http.put(methodUrl, exercise)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.deleteExercise = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Exercise/Delete" + _this.apiToken + "&id=" + id;
            _this.http.delete(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
    };
    ApiService.prototype.getExercises = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Exercise/Get" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getUnitWeight = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "UnitWeightType/GetAll" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value != 1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getUnitHeight = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Height" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value != 1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getCountries = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Country" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value != 1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getOperators = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Operator/Get" + _this.apiToken;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res.list);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.setPlanUser = function (idUser, idPlan) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var objPost = { "IdCustomer": idUser, "IdPlan": idPlan };
            var methodUrl = _this.apiUrl + "customer/plan" + _this.apiToken;
            _this.http.post(methodUrl, objPost)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getPlanByUser = function (idUser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "customer/planState" + _this.apiToken + "&id=" + idUser;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getPlanProgressByUser = function (idUser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "progress/GetByCustomer" + _this.apiToken + "&IdCustomer=" + idUser;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value != 1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                if (typeof res.list[0] != undefined) {
                    resolve(res.list[0]);
                }
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getRoutineStatus = function (idCustomerPlan, idRoutine) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/Status" + _this.apiToken + "&idCustomerPlan=" + idCustomerPlan + "&idRoutine=" + idRoutine;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.getValidationRoutinesDay = function (idCustomer, idCustomerPlan, idRoutine) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "routine/ValidationRoutinesDay" + _this.apiToken + "&IdCus=" + idCustomer + "&IdCup=" + idCustomerPlan + "&IdRoutine=" + idRoutine;
            _this.http.get(methodUrl)
                .toPromise()
                .then(function (res) {
                if (res.error.value != 1) {
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.postChangePlan = function (idCustomer, idPlan) {
        var _this = this;
        var obj = {
            idCustomer: idCustomer,
            idPlan: idPlan
        };
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "customer/ChangePlan" + _this.apiToken;
            console.log(methodUrl);
            _this.http.post(methodUrl, obj)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.postInitRoutine = function (objStart) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/Start" + _this.apiToken;
            _this.http.post(methodUrl, objStart)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService.prototype.postEndRoutine = function (objEnd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var methodUrl = _this.apiUrl + "Routine/FinishRoutine2" + _this.apiToken;
            _this.http.post(methodUrl, objEnd)
                .toPromise()
                .then(function (res) {
                if (res.error.value == -1) {
                    console.error(res.error.message);
                    reject(res.error.message);
                }
                resolve(res);
            }, function (msg) {
                console.error(msg);
                reject(msg);
            });
        });
        return promise;
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__influencers_influencers_component__ = __webpack_require__("../../../../../src/app/influencers/influencers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plans_plans_component__ = __webpack_require__("../../../../../src/app/plans/plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__influencer_page_influencer_page_component__ = __webpack_require__("../../../../../src/app/influencer-page/influencer-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plan_page_plan_page_component__ = __webpack_require__("../../../../../src/app/plan-page/plan-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routine_page_routine_page_component__ = __webpack_require__("../../../../../src/app/routine-page/routine-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exercise_page_exercise_page_component__ = __webpack_require__("../../../../../src/app/exercise-page/exercise-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_account_my_account_component__ = __webpack_require__("../../../../../src/app/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tos_tos_component__ = __webpack_require__("../../../../../src/app/tos/tos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_admin_login_admin_component__ = __webpack_require__("../../../../../src/app/login-admin/login-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'influencers', component: __WEBPACK_IMPORTED_MODULE_3__influencers_influencers_component__["a" /* InfluencersComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: 'plans', component: __WEBPACK_IMPORTED_MODULE_4__plans_plans_component__["a" /* PlansComponent */] },
    { path: 'influencer/:id/:name', component: __WEBPACK_IMPORTED_MODULE_6__influencer_page_influencer_page_component__["a" /* InfluencerPageComponent */] },
    { path: 'plan/:id/:name', component: __WEBPACK_IMPORTED_MODULE_7__plan_page_plan_page_component__["a" /* PlanPageComponent */] },
    { path: 'plan/:idPlan/:namePlan/routine/:idRoutine/:nameRoutine', component: __WEBPACK_IMPORTED_MODULE_8__routine_page_routine_page_component__["a" /* RoutinePageComponent */] },
    { path: 'plan/:idPlan/:namePlan/routine/:idRoutine/:nameRoutine/exercise/:idExercise/:nameExercise', component: __WEBPACK_IMPORTED_MODULE_9__exercise_page_exercise_page_component__["a" /* ExercisePageComponent */] },
    { path: 'my-account', component: __WEBPACK_IMPORTED_MODULE_10__my_account_my_account_component__["a" /* MyAccountComponent */] },
    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_12__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */] },
    { path: 'tos', component: __WEBPACK_IMPORTED_MODULE_13__tos_tos_component__["a" /* TosComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_14__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'admin/login', component: __WEBPACK_IMPORTED_MODULE_15__login_admin_login_admin_component__["a" /* LoginAdminComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_16__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'InfluenceMe';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_admin_service__ = __webpack_require__("../../../../../src/app/auth-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__influencers_influencers_component__ = __webpack_require__("../../../../../src/app/influencers/influencers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__plans_plans_component__ = __webpack_require__("../../../../../src/app/plans/plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_modal_content_login_modal_content_component__ = __webpack_require__("../../../../../src/app/login-modal-content/login-modal-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__influencer_box_influencer_box_component__ = __webpack_require__("../../../../../src/app/influencer-box/influencer-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__header_page_header_page_component__ = __webpack_require__("../../../../../src/app/header-page/header-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__influencer_page_influencer_page_component__ = __webpack_require__("../../../../../src/app/influencer-page/influencer-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__plan_page_plan_page_component__ = __webpack_require__("../../../../../src/app/plan-page/plan-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__plan_box_plan_box_component__ = __webpack_require__("../../../../../src/app/plan-box/plan-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__routine_box_routine_box_component__ = __webpack_require__("../../../../../src/app/routine-box/routine-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__routine_page_routine_page_component__ = __webpack_require__("../../../../../src/app/routine-page/routine-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__exercise_box_exercise_box_component__ = __webpack_require__("../../../../../src/app/exercise-box/exercise-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__exercise_page_exercise_page_component__ = __webpack_require__("../../../../../src/app/exercise-page/exercise-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__my_account_my_account_component__ = __webpack_require__("../../../../../src/app/my-account/my-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__loading_loading_component__ = __webpack_require__("../../../../../src/app/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__change_password_modal_content_change_password_modal_content_component__ = __webpack_require__("../../../../../src/app/change-password-modal-content/change-password-modal-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sidebarmenu_sidebarmenu_component__ = __webpack_require__("../../../../../src/app/sidebarmenu/sidebarmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_plan_admin_plan_component__ = __webpack_require__("../../../../../src/app/admin-plan/admin-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__admin_influencer_admin_influencer_component__ = __webpack_require__("../../../../../src/app/admin-influencer/admin-influencer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__admin_routines_admin_routines_component__ = __webpack_require__("../../../../../src/app/admin-routines/admin-routines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__admin_exercise_admin_exercise_component__ = __webpack_require__("../../../../../src/app/admin-exercise/admin-exercise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__admin_series_admin_series_component__ = __webpack_require__("../../../../../src/app/admin-series/admin-series.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__admin_influencer_frm_modal_admin_influencer_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-influencer-frm-modal/admin-influencer-frm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__admin_plan_frm_modal_admin_plan_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-plan-frm-modal/admin-plan-frm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__admin_exercise_frm_modal_admin_exercise_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-exercise-frm-modal/admin-exercise-frm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__admin_routines_frm_modal_admin_routines_frm_modal_component__ = __webpack_require__("../../../../../src/app/admin-routines-frm-modal/admin-routines-frm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__login_admin_login_admin_component__ = __webpack_require__("../../../../../src/app/login-admin/login-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__tos_tos_component__ = __webpack_require__("../../../../../src/app/tos/tos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__register_modal_register_modal_component__ = __webpack_require__("../../../../../src/app/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ads_modal_ads_modal_component__ = __webpack_require__("../../../../../src/app/ads-modal/ads-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__telephone_modal_telephone_modal_component__ = __webpack_require__("../../../../../src/app/telephone-modal/telephone-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__telephone_confirm_modal_telephone_confirm_modal_component__ = __webpack_require__("../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__register_data1_register_data1_component__ = __webpack_require__("../../../../../src/app/register-data1/register-data1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__register_data2_register_data2_component__ = __webpack_require__("../../../../../src/app/register-data2/register-data2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__influencers_influencers_component__["a" /* InfluencersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__plans_plans_component__["a" /* PlansComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_modal_content_login_modal_content_component__["a" /* LoginModalContentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__influencer_box_influencer_box_component__["a" /* InfluencerBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__header_page_header_page_component__["a" /* HeaderPageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__influencer_page_influencer_page_component__["a" /* InfluencerPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__plan_page_plan_page_component__["a" /* PlanPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_25__plan_box_plan_box_component__["a" /* PlanBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_26__routine_box_routine_box_component__["a" /* RoutineBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_27__routine_page_routine_page_component__["a" /* RoutinePageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__exercise_box_exercise_box_component__["a" /* ExerciseBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_29__exercise_page_exercise_page_component__["a" /* ExercisePageComponent */],
                __WEBPACK_IMPORTED_MODULE_30__my_account_my_account_component__["a" /* MyAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_31__loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_32__change_password_modal_content_change_password_modal_content_component__["a" /* ChangePasswordModalContentComponent */],
                __WEBPACK_IMPORTED_MODULE_33__sidebarmenu_sidebarmenu_component__["a" /* SidebarmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_34__admin_plan_admin_plan_component__["a" /* AdminPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_35__admin_influencer_admin_influencer_component__["a" /* AdminInfluencerComponent */],
                __WEBPACK_IMPORTED_MODULE_36__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_37__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_38__admin_routines_admin_routines_component__["a" /* AdminRoutinesComponent */],
                __WEBPACK_IMPORTED_MODULE_39__admin_exercise_admin_exercise_component__["a" /* AdminExerciseComponent */],
                __WEBPACK_IMPORTED_MODULE_40__admin_series_admin_series_component__["a" /* AdminSeriesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__admin_influencer_frm_modal_admin_influencer_frm_modal_component__["a" /* AdminInfluencerFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_42__admin_plan_frm_modal_admin_plan_frm_modal_component__["a" /* AdminPlanFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_43__admin_exercise_frm_modal_admin_exercise_frm_modal_component__["a" /* AdminExerciseFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_44__admin_routines_frm_modal_admin_routines_frm_modal_component__["a" /* AdminRoutinesFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_45__login_admin_login_admin_component__["a" /* LoginAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_46__tos_tos_component__["a" /* TosComponent */],
                __WEBPACK_IMPORTED_MODULE_47__register_modal_register_modal_component__["a" /* RegisterModalComponent */],
                __WEBPACK_IMPORTED_MODULE_48__ads_modal_ads_modal_component__["a" /* AdsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_49__telephone_modal_telephone_modal_component__["a" /* TelephoneModalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__telephone_confirm_modal_telephone_confirm_modal_component__["a" /* TelephoneConfirmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_51__register_data1_register_data1_component__["a" /* RegisterData1Component */],
                __WEBPACK_IMPORTED_MODULE_52__register_data2_register_data2_component__["a" /* RegisterData2Component */],
                __WEBPACK_IMPORTED_MODULE_53__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__login_modal_content_login_modal_content_component__["a" /* LoginModalContentComponent */],
                __WEBPACK_IMPORTED_MODULE_32__change_password_modal_content_change_password_modal_content_component__["a" /* ChangePasswordModalContentComponent */],
                __WEBPACK_IMPORTED_MODULE_41__admin_influencer_frm_modal_admin_influencer_frm_modal_component__["a" /* AdminInfluencerFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_42__admin_plan_frm_modal_admin_plan_frm_modal_component__["a" /* AdminPlanFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_44__admin_routines_frm_modal_admin_routines_frm_modal_component__["a" /* AdminRoutinesFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_43__admin_exercise_frm_modal_admin_exercise_frm_modal_component__["a" /* AdminExerciseFrmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_47__register_modal_register_modal_component__["a" /* RegisterModalComponent */],
                __WEBPACK_IMPORTED_MODULE_48__ads_modal_ads_modal_component__["a" /* AdsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_49__telephone_modal_telephone_modal_component__["a" /* TelephoneModalComponent */],
                __WEBPACK_IMPORTED_MODULE_50__telephone_confirm_modal_telephone_confirm_modal_component__["a" /* TelephoneConfirmModalComponent */],
                __WEBPACK_IMPORTED_MODULE_51__register_data1_register_data1_component__["a" /* RegisterData1Component */],
                __WEBPACK_IMPORTED_MODULE_52__register_data2_register_data2_component__["a" /* RegisterData2Component */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__auth_admin_service__["a" /* AuthAdminService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthAdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthAdminService = /** @class */ (function () {
    function AuthAdminService() {
        this.currentUser = null;
    }
    AuthAdminService.prototype.getUser = function () {
        return this.currentUser;
    };
    AuthAdminService.prototype.authUser = function (username, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (username == 'admin2018' && password == 'admin2018') {
                _this.currentUser = { username: username, password: password };
                resolve(_this.currentUser);
            }
            else {
                reject(null);
            }
        });
        return promise;
    };
    AuthAdminService.prototype.logOut = function () {
        this.currentUser = null;
    };
    AuthAdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthAdminService);
    return AuthAdminService;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.currentUser = auth;
        });
    }
    AuthService.prototype.getUser = function () {
        return this.currentUser;
    };
    AuthService.prototype.loginWithEmailAndPassword = function (email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (result) {
                console.log(result);
                resolve(result);
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.linkFacebook = function () {
        var promise = new Promise(function (resolve, reject) {
            var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider();
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithPopup(provider)
                .then(function (result) {
                console.log(result);
                resolve(result);
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.initCaptcha = function (controlId) {
        var promise = new Promise(function (resolve, reject) {
            var captcha = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].RecaptchaVerifier(controlId, {
                'size': 'invisible'
            });
            captcha.render()
                .then(function (widgetId) {
                resolve(captcha);
            }).catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.sendLoginCode = function (captcha, phoneNumber) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithPhoneNumber(phoneNumber, captcha)
                .then(function (confirmationResult) {
                console.log(confirmationResult);
                resolve(confirmationResult);
            }).catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.updateProfileFirebase = function (userName, userEmail, userPassword) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.updateProfile({ displayName: userName, photoURL: "" })
                .then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.updateEmail(userEmail)
                    .then(function () {
                    if (userPassword) {
                        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.updatePassword(userPassword)
                            .then(function () {
                            resolve(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser);
                        })
                            .catch(function (error) {
                            console.error(error);
                            reject(error);
                        });
                    }
                    else {
                        resolve(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser);
                    }
                })
                    .catch(function (error) {
                    console.error(error);
                    reject(error);
                });
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.verifyLoginCode = function (confirmationResult, verificationCode, userName, userEmail, userPassword) {
        var promise = new Promise(function (resolve, reject) {
            confirmationResult.confirm(verificationCode)
                .then(function (result) {
                result.user.isNewUser = result.additionalUserInfo.isNewUser;
                if (userName && userEmail && userPassword) {
                    this.updateProfileFirebase(userName, userEmail, userPassword)
                        .then(function () {
                        resolve(result.user);
                    });
                }
                else {
                    resolve(result.user);
                }
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.linkWithPhoneNumber = function (phoneNumber, recaptchaVerifier) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.linkWithPhoneNumber(phoneNumber, recaptchaVerifier)
                .then(function (confirmationResult) {
                console.log(confirmationResult);
                resolve(confirmationResult);
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.updatePassword = function (password) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.updatePassword(password)
                .then(function (res) {
                resolve(res);
            })
                .catch(function (error) {
                console.error(error);
                reject(error);
            });
        });
        return promise;
    };
    AuthService.prototype.logout = function () {
        console.log("Bye user!");
        this.afAuth.auth.signOut()
            .then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.error(error);
        });
    };
    AuthService.prototype.sendMailResetPassword = function (emailreset) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.sendPasswordResetEmail(emailreset)
                .then(function (res) {
                console.log(res);
            }).catch(function (error) {
                console.error(error);
            });
        });
        return promise;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/change-password-modal-content/change-password-modal-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">CAMBIAR CONTRASEÑA</h4>\n</div>\n<div class=\"modal-body\">\n  <form #logInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña actual*\" required \n        [(ngModel)]=\"logUser.password\" name=\"password\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña nueva*\" required \n        [(ngModel)]=\"logUser.newpassword\" name=\"newpassword\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Confirmar contraseña nueva*\" required \n        [(ngModel)]=\"logUser.repassword\" name=\"repassword\">\n    </div>  \n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancelar</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"changePassword()\">Aceptar</button>\n</div>\n<div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n  <strong>Upps!</strong> Comprueba que las contraseñas coincidan.\n</div>"

/***/ }),

/***/ "../../../../../src/app/change-password-modal-content/change-password-modal-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header, .modal-footer {\n  border-bottom: none;\n  border-top: none;\n  margin: auto; }\n  .modal-header h4, .modal-header .btn, .modal-footer h4, .modal-footer .btn {\n    margin: auto; }\n  .modal-body {\n  padding-left: 40px;\n  padding-right: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-password-modal-content/change-password-modal-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordModalContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordModalContentComponent = /** @class */ (function () {
    function ChangePasswordModalContentComponent(activeModal, authService, apiService) {
        var _this = this;
        this.activeModal = activeModal;
        this.authService = authService;
        this.apiService = apiService;
        this.logUser = { password: "", newpassword: "", repassword: "" };
        this.showAlert = false;
        this.activeUser = null;
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
        });
    }
    ChangePasswordModalContentComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordModalContentComponent.prototype.changePassword = function () {
        if (this.logUser.newpassword == this.logUser.repassword && this.activeUser) {
            this.showAlert = false;
            //this.authService.updatePassword(this.logUser.newpassword);
            console.log('Se ha enviado un correo a ' + this.activeUser.email);
            this.authService.sendMailResetPassword(this.activeUser.email)
                .then(function () {
                console.log('Finalizo el correo');
            });
        }
        else {
            this.showAlert = true;
        }
    };
    ChangePasswordModalContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-password-modal-content',
            template: __webpack_require__("../../../../../src/app/change-password-modal-content/change-password-modal-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-password-modal-content/change-password-modal-content.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], ChangePasswordModalContentComponent);
    return ChangePasswordModalContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exercise-box/exercise-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-dark text-white\">\n  <img class=\"card-img\" src=\"{{imgUrl}}\" alt=\"Plan image\">\n  <div class=\"card-img-overlay text-center pt-5\">\n    <h5 class=\"card-title\">{{title}}</h5>\n    <!--<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>-->\n    <!--<button class=\"btn\" routerLink=\"/plan/{{planId}}/{{planName.split(' ').join('-') | lowercase }}/routine/{{routineId}}/{{routineName.split(' ').join('-') | lowercase }}/exercise/{{exerciseId}}/{{exerciseName.split(' ').join('-') | lowercase }}\">Ver ejercicio</button>-->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/exercise-box/exercise-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-card {\n  background-color: #fff; }\n\n.img-routine {\n  padding: 0; }\n\n.img-routine img {\n    width: 100%; }\n\n.content-card {\n  padding-top: 3em; }\n\n.content-card h3 {\n    font-weight: bold;\n    text-transform: uppercase; }\n\n.card-img-overlay {\n  background-color: rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exercise-box/exercise-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExerciseBoxComponent = /** @class */ (function () {
    function ExerciseBoxComponent() {
    }
    ExerciseBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ExerciseBoxComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ExerciseBoxComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], ExerciseBoxComponent.prototype, "planId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ExerciseBoxComponent.prototype, "planName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], ExerciseBoxComponent.prototype, "routineId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ExerciseBoxComponent.prototype, "routineName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], ExerciseBoxComponent.prototype, "exerciseId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ExerciseBoxComponent.prototype, "exerciseName", void 0);
    ExerciseBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exercise-box',
            template: __webpack_require__("../../../../../src/app/exercise-box/exercise-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exercise-box/exercise-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExerciseBoxComponent);
    return ExerciseBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exercise-page/exercise-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"exercise.name\" [image]=\"exercise.urlImage\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <div class=\"video\" [innerHTML]=\"exercise.urlVideo\"></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Series</h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{exercise.series.length}} series</h6>\n          \n          <div id=\"accordion\">\n            <div class=\"card\" *ngFor=\"let serie of exercise.series; let i = index\">\n              <div class=\"card-header\" id=\"heading{{serie.id}}\">\n                <h5 class=\"mb-0\">\n                  <button class=\"btn\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse'+serie.id\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapse'+serie.id\">\n                    Ver más de la serie {{i + 1}}\n                  </button>\n                </h5>\n              </div>\n        \n              <div id=\"collapse{{serie.id}}\" class=\"collapse\" [attr.aria-labelledby]=\"'heading'+serie.id\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                  <h6>Repeticiones <span class=\"badge badge-secondary\">{{serie.repetitions}}</span></h6>\n                  <h6>Tiempo de recuperación <span class=\"badge badge-secondary\">{{serie.ser_recuperacion}}</span></h6>\n                  <h6>Kit <span class=\"badge badge-secondary\">{{serie.kit_Name}}</span></h6>\n                  <h6>Musculo / Entrenamiento <span class=\"badge badge-secondary\">{{serie.ser_muscle}}</span></h6>\n                  <h6>Nivel <span class=\"badge badge-secondary\">{{serie.level_Name}}</span></h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-5\">\n    <div>\n      <div class=\"text-center\">\n        <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Navigation\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"prevRoutine()\" [disabled]=\"idExercise == exercisesList[0].id\">Anterior</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"nextRoutine()\" [disabled]=\"idExercise == exercisesList[exercisesList.length - 1].id\">Siguiente</button>\n        </div>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"endRoutine()\" [hidden]=\"idExercise != exercisesList[exercisesList.length - 1].id\">Finalizar</button>\n      </div>\n    </div>\n  </div>\n  \n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/exercise-page/exercise-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exercise-page/exercise-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercisePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExercisePageComponent = /** @class */ (function () {
    function ExercisePageComponent(route, apiService, sanitizer, authService, router) {
        this.route = route;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.router = router;
        this.exercise = { name: "", series: [] };
        this.activeUser = null;
        this.exercisesList = [{ id: 0 }];
        this.exercisePrev = { id: this.idExercise, name: "" };
        this.exerciseNext = { id: this.idExercise, name: "" };
    }
    ExercisePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getParams();
        this.getExerciseAndSeries();
        this.getExercises();
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            if (currentUser == null) {
                //this.router.navigate(['']);
            }
            else {
                _this.activeUser = currentUser;
            }
        });
    };
    ExercisePageComponent.prototype.getParams = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.idPlan = +params['idPlan'];
            _this.idRoutine = +params['idRoutine'];
            _this.idExercise = +params['idExercise'];
        });
    };
    ExercisePageComponent.prototype.getExercises = function () {
        var _this = this;
        this.apiService.getExercisesByRoutine(this.idRoutine)
            .then(function (data) {
            _this.exercisesList = data;
        });
    };
    ExercisePageComponent.prototype.getExerciseAndSeries = function () {
        var _this = this;
        this.apiService.getExercisesById(this.idExercise)
            .then(function (data) {
            _this.exercise = data;
            _this.apiService.getImg(_this.exercise.urlImage)
                .then(function (imageUrl) {
                _this.exercise.urlImage = imageUrl;
            });
            _this.exercise.urlVideo = _this.sanitizer.bypassSecurityTrustHtml(_this.exercise.urlVideo);
        });
    };
    ExercisePageComponent.prototype.prevRoutine = function () {
        for (var i = 0; i < this.exercisesList.length; i++) {
            if (i > 0) {
                if (this.exercisesList[i].id == this.idExercise) {
                    var routerLink = "./plan/" + this.idPlan + "/myplan/routine/" + this.idRoutine + "/current-routine/exercise/" + this.exercisesList[i - 1].id + "/" + this.exercisesList[i - 1].name.split(' ').join('-').toLowerCase();
                    //this.router.navigateByUrl(routerLink);
                    window.location.href = routerLink;
                    break;
                }
            }
        }
    };
    ExercisePageComponent.prototype.nextRoutine = function () {
        for (var i = 0; i < this.exercisesList.length; i++) {
            if (i < (this.exercisesList.length - 1)) {
                if (this.exercisesList[i].id == this.idExercise) {
                    var routerLink = "./plan/" + this.idPlan + "/myplan/routine/" + this.idRoutine + "/current-routine/exercise/" + this.exercisesList[i + 1].id + "/" + this.exercisesList[i + 1].name.split(' ').join('-').toLowerCase();
                    //this.router.navigateByUrl(routerLink);
                    window.location.href = routerLink;
                    break;
                }
            }
        }
    };
    ExercisePageComponent.prototype.endRoutine = function () {
        var _this = this;
        if (this.activeUser) {
            if (confirm("¿Desea finalizar la rutina?")) {
                var end = { "Cus_Id": this.activeUser.uid, "Cup_Id": this.idPlan, "Rou_Id": this.idRoutine };
                this.apiService.postEndRoutine(end)
                    .then(function (result) {
                    _this.router.navigate(['/plan/' + _this.idPlan + '/myplan']);
                    return result;
                })
                    .catch(function (error) {
                    alert(error);
                    return false;
                });
            }
        }
        else {
            this.router.navigate(['/plan/' + this.idPlan + '/myplan']);
        }
    };
    ExercisePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-exercise-page',
            template: __webpack_require__("../../../../../src/app/exercise-page/exercise-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exercise-page/exercise-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ExercisePageComponent);
    return ExercisePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exercise.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exercise; });
var Exercise = /** @class */ (function () {
    function Exercise() {
    }
    return Exercise;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footerbox\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-md-6 col-12\">\n        <img src=\"../../assets/img/IM_phone-footer.png\" width=\"90%\">\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"row\" style=\"padding-top: 20%\">\n          <div class=\"col-md-12\">\n            <h2>Gym & Fitness App</h2>\n            <p>Descarga InfluenceME y disfruta del contenido exclusivo.</p>\n          </div>\n          <div class=\"col-md-6 mb-2\">\n            <a href=\"https://play.google.com/store/apps/details?id=com.influenceme.android&hl=en\" target=\"blank\">\n              <img src=\"../../assets/img/google-play.png\" height=\"80px\">\n            </a>\n          </div>\n          <div class=\"col-md-6\">\n            <img src=\"../../assets/img/app-store.png\" height=\"80px\">\n          </div>\n          <div class=\"col-md-12 mt-1\">\n            <a routerLink=\"privacy\">Política de privacidad</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footerbox {\n  background-color: #181818;\n  color: #fff;\n  margin-top: 10px;\n  padding-top: 50px; }\n\na:link {\n  color: #FF5C25; }\n\na:visited {\n  color: #FF5C25; }\n\na:hover {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-page/header-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title-bar-image\" [ngStyle]=\"{'background-image': 'url(' + image + ')'}\">\n  <div class=\"mask-pattern\"></div>\t\n  <div class=\"over-pattern\">\n    <div class=\"container-wrap-title-image\">\n      <h1 class=\"main-title\">{{title}}</h1>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-page/header-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title-bar-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #ff5722;\n  background-position: center center;\n  padding-top: 179px;\n  padding-bottom: 140px;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n  margin-bottom: 2em; }\n\n.mask-pattern {\n  opacity: 0.5;\n  position: absolute;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUZFOEVERkYxNUQ1MTFFNjkyNjZBMTBENzA3NjQyNTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUZFOEVFMDAxNUQ1MTFFNjkyNjZBMTBENzA3NjQyNTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRkU4RURGRDE1RDUxMUU2OTI2NkExMEQ3MDc2NDI1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRkU4RURGRTE1RDUxMUU2OTI2NkExMEQ3MDc2NDI1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkZdIbgAAAA4SURBVHjaYlRVVWXABr5+/cqES4Kbm5sJlwSQwYRLAl0OWQJFDk0CIYcpAZXDKgGSwyUBBAABBgCgxxtgSWoPywAAAABJRU5ErkJggg==\");\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1; }\n\n.container-wrap-title-image {\n  margin: auto;\n  padding: 0 15px;\n  width: 100%;\n  max-width: 1200px; }\n\n.main-title {\n  text-transform: uppercase;\n  color: #fff;\n  font: italic bold 60px/60px 'Source Sans Pro', sans-serif; }\n\n.over-pattern {\n  position: relative;\n  z-index: 2; }\n\n@media only screen and (max-width: 600px) {\n  .main-title {\n    font-size: 40px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-page/header-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderPageComponent = /** @class */ (function () {
    function HeaderPageComponent() {
    }
    HeaderPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderPageComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderPageComponent.prototype, "image", void 0);
    HeaderPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header-page',
            template: __webpack_require__("../../../../../src/app/header-page/header-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-page/header-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderPageComponent);
    return HeaderPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"\">\n    <img src=\"/assets/img/Logo-Color.png\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">      \n      <li class=\"nav-item\" *ngFor=\"let page of pages\">\n        <a class=\"nav-link\" routerLink=\"{{page.url}}\">{{page.name | uppercase}}</a>\n      </li>\n      <!-- <li class=\"nav-item\" *ngIf=\"activeUser === null\">\n        <a class=\"nav-link\" (click)=\"clickNavMenuItem()\">Ingresa a tu cuenta</a>\n      </li> -->\n      <li class=\"nav-item\" *ngIf=\"activeUser !== null\">\n        <a class=\"nav-link\" routerLink=\"/my-account\">Mi cuenta</a>\n      </li>\n      <!-- <li class=\"nav-item\" *ngIf=\"activeUser !== null\" (click)=\"logOut()\">\n        <a class=\"nav-link\" style=\"text-transform: uppercase;\"><span class=\"icon-switch\"></span></a>\n      </li> -->\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);\n  font-weight: 700; }\n  .navbar img {\n    width: 200px; }\n  .navbar .nav-item {\n    cursor: pointer;\n    text-transform: uppercase; }\n  @media (min-width: 768px) {\n    .navbar .mr-auto {\n      position: absolute;\n      right: 0px; }\n      .navbar .mr-auto .nav-item {\n        padding: 0 10px 0 10px;\n        border-right: gray solid 1px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_modal_register_modal_component__ = __webpack_require__("../../../../../src/app/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, authService) {
        var _this = this;
        this.modalService = modalService;
        this.authService = authService;
        this.pages = [
            { id: 1, name: "Home", url: "/" },
            { id: 2, name: "Influencers", url: "/influencers" },
            { id: 3, name: "Planes", url: "/plans" },
        ];
        this.activeUser = null;
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderComponent.prototype.clickNavMenuItem = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__register_modal_register_modal_component__["a" /* RegisterModalComponent */]);
    };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"container-header\"></div>\n  <div class=\"container\">\n      <div class=\"over-image-header\">\n        <p><span class=\"\">BIENVENIDO</span></p>\n        <p class=\"my-0\"><span class=\"spanTitle\">INFLUENCEME</span></p>\n        <p class=\"mb-2\">Entrena usando los planes de tus Influencers favoritos, en el lugar que quieras y a la hora que elijas. Lleva a tu entrenador personal a donde vayas y alcanza tus objetivos.</p>\n        <!-- <p>\n          <button type=\"button\" *ngIf=\"activeUser === null\" (click)=\"openModalRegister()\" class=\"btn btn-primary btn-header mt-5\">ENTRAR AHORA</button>\n        </p> -->\n      </div>\n      <div id=\"contenthome\">\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <h2>ESCOGE A TU ENTRENADOR</h2>\n          </div>\n        </div>\n        <div class=\"row\">\n          <app-influencer-box class=\"col-md-3\" *ngFor=\"let athlete of listAthletes\" \n            [id]=\"athlete.id\" [name]=\"athlete.name\" [tags]=\"athlete.position\" [description]=\"(athlete.description.length>255) ? (athlete.description | slice:0:255)+'..' : athlete.description\" \n            [imgUrl]=\"athlete.url\" [facebook]=\"athlete.facebook\" [instagram]=\"athlete.instagram\" [twitter]=\"athlete.twitter\">\n          </app-influencer-box>\n        </div>\n      </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-header {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/slice1.jpg")) + ") no-repeat center center fixed;\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 700px;\n  z-index: -1; }\n\n.over-image-header {\n  height: 700px;\n  color: #fff;\n  text-align: left;\n  padding-top: 20%; }\n\n.over-image-header .spanTitle {\n    font-weight: 900;\n    font-size: 70px;\n    font-style: italic; }\n\n.over-image-header .btn-header {\n    padding: 20px 50px; }\n\n.over-image-header .black {\n    background-color: black; }\n\n.over-image-header .black:hover {\n    -webkit-box-shadow: 0 10px 40px 0 rgba(7, 7, 7, 0.5);\n            box-shadow: 0 10px 40px 0 rgba(7, 7, 7, 0.5); }\n\n#contenthome {\n  font-family: \"Source Sans Pro\", sans-serif;\n  text-align: center; }\n\n#contenthome h2 {\n    color: #949494;\n    font-weight: 900;\n    font-size: 50px;\n    font-style: italic;\n    padding: 50px; }\n\n@media only screen and (max-width: 600px) {\n  .spanTitle {\n    font-size: 40px !important; }\n  h2 {\n    font-size: 40px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_modal_register_modal_component__ = __webpack_require__("../../../../../src/app/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ads_modal_ads_modal_component__ = __webpack_require__("../../../../../src/app/ads-modal/ads-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, authService, modalService) {
        var _this = this;
        this.apiService = apiService;
        this.authService = authService;
        this.modalService = modalService;
        this.user = null;
        this.pageRegister = { id: 5, name: "Register", url: "/register" };
        this.activeUser = null;
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAthletes().then(function (data) {
            _this.listAthletes = data;
            _this.listAthletes.forEach(function (athlete, index) {
                _this.apiService.getImg(athlete.url)
                    .then(function (imageUrl) {
                    _this.listAthletes[index].url = imageUrl;
                });
            });
        });
        this.openModalAds();
    };
    HomeComponent.prototype.openModalRegister = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__register_modal_register_modal_component__["a" /* RegisterModalComponent */]);
    };
    HomeComponent.prototype.openModalAds = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__ads_modal_ads_modal_component__["a" /* AdsModalComponent */]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/influencer-box/influencer-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-trainer\">\n  <div>\n    <img class=\"card-img-top avatar\" src=\"assets/img/{{name.split(' ')[0]}}.jpg\" alt=\"avatar\">\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{name}}</h5>\n    <span class=\"card-tags\">{{tags}}</span>\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/influencer/{{id}}/{{name.split(' ').join('-') | lowercase }}\">VER</button>\n    <p class=\"card-text\">{{description}}</p>\n    <a href=\"{{facebook}}\" target=\"blank\" class=\"card-icon\"><span class=\"icon-facebook\"></span></a>\n    <a href=\"{{instagram}}\" target=\"blank\" class=\"card-icon\"><span class=\"icon-instagram\"></span></a>\n    <a href=\"{{twitter}}\" target=\"blank\" class=\"card-icon\"><span class=\"icon-twitter\"></span></a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/influencer-box/influencer-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 1em;\n  text-align: center; }\n\n.card-trainer {\n  border-radius: 20px; }\n\n.card-trainer:hover {\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15); }\n\n.card-title {\n  font-weight: bold; }\n\n.card-icon {\n  padding: 0.5em;\n  color: #949494; }\n\n.card-icon:hover {\n  color: #ff5722;\n  cursor: pointer;\n  text-decoration: none; }\n\n/*.card-img-top {\r\n    margin-top: 1em; \r\n    border-radius: 50%;\r\n    height: 130px;\r\n    width: 130px;\r\n}*/\n\n.card-tags {\n  color: #ff5722;\n  margin-bottom: 1em;\n  height: 2em;\n  display: inline-block; }\n\n.avatar {\n  width: 140px;\n  border-radius: 50%;\n  margin-top: 20px;\n  height: 140px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/influencer-box/influencer-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfluencerBoxComponent = /** @class */ (function () {
    function InfluencerBoxComponent() {
    }
    InfluencerBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], InfluencerBoxComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "tags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "facebook", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "instagram", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], InfluencerBoxComponent.prototype, "twitter", void 0);
    InfluencerBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-influencer-box',
            template: __webpack_require__("../../../../../src/app/influencer-box/influencer-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/influencer-box/influencer-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfluencerBoxComponent);
    return InfluencerBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/influencer-page/influencer-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"''\" [image]=\"athlete.listImg\"></app-header-page>\n<div class=\"container\">\n  <div class=\"over-header\">\n    <div class=\"row\">\n      <div class=\"col-md-6\" >\n        <div class=\"avatar\" [ngStyle]=\"{'background-image': 'url(' + athlete.url + ')'}\">\n        </div>\n      </div>\n      <div class=\"col-md-6 rigth-avatar\">\n        <div class=\"row title-avatar\">\n          <div class=\"col-md-9\" >\n            <h2>{{athlete.name}}</h2>\n          </div>\n          <div class=\"col-md-3 icons\" >\n            <a href=\"{{athlete.facebook}}\" target=\"blank\"><span class=\"icon-facebook\"></span></a>\n            <a href=\"{{athlete.instagram}}\" target=\"blank\"><span class=\"icon-instagram\"></span></a>\n            <a href=\"{{athlete.twitter}}\" target=\"blank\"><span class=\"icon-twitter\"></span></a>\n          </div>\n        </div>\n        <div class=\"row tags-trainer\">\n          <div class=\"col-md-12\" >\n            <span>{{athlete.position}}</span>\n          </div>\n        </div>\n        <div class=\"row subtitle\">\n          <div class=\"col-md-12\" >\n            <p><span class=\"icon-user\"></span> <span>Bio</span></p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\" >\n            <p>{{athlete.description}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <div class=\"video-presentation\" [innerHTML]=\"athlete.videoPresentation\"></div>\n    </div>\n  </div>\n  <div class=\"row text-center contenthome\">\n    <div class=\"col-md-12\">\n      <h2>ESCOGE TU PLAN</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <app-plan-box class=\"col-md-4\" *ngFor=\"let plan of listPlans\" \n      [id]=\"plan.id\" [name]=\"plan.name\" [description]=\"(plan.description.length>200) ? (plan.description | slice:0:200)+'..' : plan.description\" \n      [imgUrl]=\"plan.url\" [activePlan]=\"plan.id == activePlan.idPlan\" [percentPlan]=\"activePlan.progressCustomer\">\n    </app-plan-box>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/influencer-page/influencer-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".over-header {\n  position: relative;\n  margin-top: -250px;\n  z-index: 3;\n  background-color: #fff; }\n\n.avatar {\n  height: 600px;\n  background-position-x: center; }\n\n.icons {\n  color: #949494; }\n\n.icons span {\n    padding: 0.2em; }\n\n.icons span:hover {\n    color: #ff5722;\n    cursor: pointer; }\n\n.rigth-avatar {\n  padding-right: 2em; }\n\n.rigth-avatar .title-avatar {\n    padding-top: 3em; }\n\n.rigth-avatar .title-avatar h2 {\n      font-weight: bold;\n      text-transform: uppercase; }\n\n.rigth-avatar .tags-trainer {\n    color: #ff5722; }\n\n.rigth-avatar .row div span {\n    font-weight: bold; }\n\n.rigth-avatar .subtitle {\n    padding-top: 3em; }\n\n.contenthome {\n  font-family: \"Source Sans Pro\", sans-serif; }\n\n.contenthome h2 {\n    color: #949494;\n    font-weight: 900;\n    font-size: 50px;\n    font-style: italic;\n    padding: 50px; }\n\n.video-presentation {\n  padding-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/influencer-page/influencer-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencerPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfluencerPageComponent = /** @class */ (function () {
    function InfluencerPageComponent(route, apiService, sanitizer, authService) {
        var _this = this;
        this.route = route;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.athlete = { listImg: "" };
        this.activeUser = null;
        this.activePlan = { idPlan: -1 };
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
            if (_this.activeUser != null) {
                if (typeof _this.activeUser['uid'] != 'undefined') {
                    _this.getPlanUser();
                }
                else {
                    _this.activePlan = { idPlan: -1 };
                }
            }
            else {
                _this.activePlan = { idPlan: -1 };
            }
        });
    }
    InfluencerPageComponent.prototype.getParamns = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    InfluencerPageComponent.prototype.getPlanUser = function () {
        var _this = this;
        this.apiService.getPlanProgressByUser(this.activeUser.uid)
            .then(function (result) {
            _this.activePlan = result;
        });
    };
    InfluencerPageComponent.prototype.getAthlete = function () {
        var _this = this;
        this.apiService.getAthleteById(this.id)
            .then(function (data) {
            _this.athlete = data;
            _this.apiService.getImg(_this.athlete.url)
                .then(function (imageUrl) {
                _this.athlete.url = imageUrl;
            });
            _this.apiService.getImg(_this.athlete.listImg)
                .then(function (imageUrl) {
                _this.athlete.listImg = imageUrl;
            });
            _this.athlete.videoPresentation = _this.sanitizer.bypassSecurityTrustHtml(_this.athlete.videoPresentation);
        });
    };
    InfluencerPageComponent.prototype.getPlans = function () {
        var _this = this;
        this.apiService.getPlansByAthlete(this.id)
            .then(function (data) {
            _this.listPlans = data;
            _this.listPlans.forEach(function (plan, index) {
                _this.apiService.getImg(plan.url)
                    .then(function (imageUrl) {
                    _this.listPlans[index].url = imageUrl;
                });
            });
        });
    };
    InfluencerPageComponent.prototype.ngOnInit = function () {
        this.getParamns();
        this.getAthlete();
        this.getPlans();
    };
    InfluencerPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-influencer-page',
            template: __webpack_require__("../../../../../src/app/influencer-page/influencer-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/influencer-page/influencer-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], InfluencerPageComponent);
    return InfluencerPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/influencers/influencers.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"'Influencers'\" [image]=\"'../../assets/img/slice2.jpg'\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row\">\n    <app-influencer-box class=\"col-md-3\" *ngFor=\"let athlete of listAthletes\" \n      [id]=\"athlete.id\" [name]=\"athlete.name\" [tags]=\"athlete.position\" [description]=\"(athlete.description.length>255) ? (athlete.description | slice:0:255)+'..' : athlete.description\" \n      [imgUrl]=\"athlete.url\" [facebook]=\"athlete.facebook\" [instagram]=\"athlete.instagram\" [twitter]=\"athlete.twitter\">\n    </app-influencer-box>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/influencers/influencers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/influencers/influencers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfluencersComponent = /** @class */ (function () {
    function InfluencersComponent(apiService) {
        this.apiService = apiService;
    }
    InfluencersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAthletes().then(function (data) {
            _this.listAthletes = data;
            _this.listAthletes.forEach(function (athlete, index) {
                _this.apiService.getImg(athlete.url)
                    .then(function (imageUrl) {
                    _this.listAthletes[index].url = imageUrl;
                });
            });
        });
    };
    InfluencersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-influencers',
            template: __webpack_require__("../../../../../src/app/influencers/influencers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/influencers/influencers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], InfluencersComponent);
    return InfluencersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\n    <div class=\"row h-90\">\n        <div class=\"col-md-7 my-auto\">\n            <!--<img src=\"../../assets/img/slice1.jpg\" style=\"width: 100%;\">-->\n            <iframe width=\"100%\" height=\"700px\" src=\"https://www.youtube.com/embed/ds_HYbzcjug?autoplay=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n        </div>\n        <div class=\"col-md-5 my-auto p-5\">\n            <div class=\"text-center pb-4\">\n                <img src=\"../../assets/img/logo1.jpg\" style=\"display: inline-block;\">\n            </div>\n                <h1>Entrena usando los planes de tus\n                        Influencers favoritos, en el lugar\n                        que quieras y a la hora que elijas.\n                        Regístrate y empieza ahora!</h1>\n            <form class=\"mt-3\">\n                <select class=\"form-control\" name=\"country\" [(ngModel)]=\"indCode\" *ngIf=\"!valideStatus\">\n                    <option *ngFor=\"let country of countries; let i = index\" [ngValue]=\"country\" [attr.selected]='i == 0 ? \"selected\" : null'>\n                        {{country.name}} (+{{country.code}})\n                    </option>\n                </select>\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Tu teléfono\" *ngIf=\"!valideStatus\" required>\n                <input type=\"number\" class=\"form-control\" name=\"codeverification\" [(ngModel)]=\"codeverification\" placeholder=\"Escribe tu código SMS\" *ngIf=\"valideStatus\" >\n                <div class=\"form-check form-check-inline pl-4 pt-2\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"1\">\n                    <label class=\"form-check-label\" for=\"inlineCheckbox1\">Acepto los terminos & condiciones</label>\n                </div>\n                <div class=\"row pl-3\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"clickButton()\">{{valideStatus ? \"Suscribirme\" : \"Enviar código\"}}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"row foot h-10\">\n        <div class=\"col-sm-7 p-5 text-justify\">\n            <p>Servicio de suscripción proporcionado por WE VENTURE SRL. Altice Hispaniola, S.A., no es responsable del contenido presentado por WE VENTURE SRL. El usuario deberá hacer click en el botón \"Aceptar\" en el portal de la suscripción o enviar la palabra ENTRAR al numero corto 3081 para suscribirse a recibir 1 SMS por día con el contenido solicitado. Costo del servicio: RD12.5+ Imp. x SMS recibido. Para cancelar el servicio, el usuario deberá enviar un mensaje de texto SMS con la palabra SALIR al numero 3081.</p>\n        </div>\n        <div class=\"col-sm-5 p-5 my-auto\">\n            <div class=\"row\">\n                <div>\n                    <div class=\"col-sm-3 text-center\">\n                        <img src=\"../../assets/img/icon-100.original.png\" style=\"display: inline-block;\">\n                    </div>\n                    <div class=\"col-sm-7\">\n                        <h3>InfluenceME App | Copyright 2018</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"frm-register-captcha\"></div>"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #fff; }\n\n.container-fluid {\n  background-color: #000;\n  color: #fff; }\n\n.foot {\n  background-color: #FF4000; }\n\n.row {\n  margin-right: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(apiService, authService, router) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.phone = null;
        this.countries = [{ code: '57', name: "Colombia", id: 12 }];
        this.valideStatus = false;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.loadCountries();
    };
    LandingPageComponent.prototype.initCaptcha = function () {
        var _this = this;
        this.authService.initCaptcha('frm-register-captcha')
            .then(function (captcha) {
            _this.recaptchaVerifier = captcha;
        });
    };
    LandingPageComponent.prototype.ngAfterViewInit = function () {
        this.initCaptcha();
    };
    LandingPageComponent.prototype.validCode = function () {
        var valid = true;
        if (this.codeverification.toString().length == 5) {
            this.codeverification = "0" + this.codeverification.toString();
        }
        if (this.codeverification.toString().length != 6) {
            alert("Parece que el código esta erróneo. Debe ser de 6 dígitos, no " + this.codeverification.toString().length);
            valid = false;
        }
        return valid;
    };
    LandingPageComponent.prototype.validateCode = function () {
        var _this = this;
        if (this.validCode()) {
            if (this.codeverification.toString().length == 5) {
                this.codeverification = "0" + this.codeverification.toString();
            }
            this.authService.verifyLoginCode(this.confirmationResult, this.codeverification.toString(), "", "", "")
                .then(function (userFire) {
                if (userFire['isNewUser']) {
                    _this.createUser(userFire);
                }
                else {
                    _this.apiService.getUserStatus(userFire["uid"])
                        .then(function () {
                        _this.subscribe(userFire);
                    })
                        .catch(function () {
                        _this.createUser(userFire);
                    });
                }
            })
                .catch(function (error) {
                if (error.code == "auth/account-exists-with-different-credential") {
                    alert("Ya existe una cuenta con estos datos.");
                }
                else if (error.code == "auth/invalid-verification-code") {
                    alert("El código de validación es inválido, verifíquelo e intente de nuevo.");
                }
                else {
                    alert("Error: " + error.message);
                }
            });
        }
    };
    LandingPageComponent.prototype.loadCountries = function () {
        var _this = this;
        this.apiService.getCountries()
            .then(function (data) {
            _this.countries = data;
            var tempCountries = [];
            _this.countries.forEach(function (element, index) {
                if (element.id == 18 || element.id == 12) {
                    tempCountries.push(element);
                }
            });
            _this.countries = tempCountries;
            _this.indCode = _this.countries[0];
        });
    };
    LandingPageComponent.prototype.sendMsm = function () {
        var _this = this;
        if (this.phone) {
            var completeNumber = "+" + this.indCode.code + this.phone;
            this.authService.sendLoginCode(this.recaptchaVerifier, completeNumber)
                .then(function (data) {
                _this.confirmationResult = data;
            })
                .catch(function (error) {
                console.error('Error send message from primary');
            });
        }
    };
    LandingPageComponent.prototype.createUser = function (userFire) {
        var _this = this;
        this.apiService.createUser(userFire['uid'], userFire['phoneNumber'], typeof userFire['displayName'] != undefined && userFire['displayName'] != '' && userFire['displayName'] != null ? userFire['displayName'] : userFire['phoneNumber'], typeof userFire['email'] != undefined && userFire['email'] != '' && userFire['email'] != null ? userFire['email'] : userFire['phoneNumber'], "", 1, 50, 150, true, 1, "http://influencemeapp.com/landing", 1, 1, 1, 0)
            .then(function (resultApi) {
            _this.subscribe(userFire);
        });
    };
    LandingPageComponent.prototype.subscribe = function (userFire) {
        var _this = this;
        this.apiService.postSubscription(userFire['uid'], typeof userFire['email'] != undefined && userFire['email'] != '' && userFire['email'] != null ? userFire['email'] : userFire['phoneNumber'], userFire['uid'], userFire['phoneNumber'], typeof userFire['displayName'] != undefined && userFire['displayName'] != '' && userFire['displayName'] != null ? userFire['displayName'] : userFire['phoneNumber'])
            .then(function (result) {
            alert("Se ha suscrito satisfactoriamente. Por favor ahora seleccione un plan");
            _this.router.navigate(['/plans']);
        })
            .catch(function (error) {
            alert(error);
        });
    };
    LandingPageComponent.prototype.clickButton = function () {
        if (this.valideStatus) {
            this.validateCode();
        }
        else {
            this.sendMsm();
            this.valideStatus = true;
        }
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"../../assets/img/orange_load.gif\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  background-color: rgba(255, 117, 0, 0.3); }\n  .loading img {\n    width: 64px;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-admin/login-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-center mt-5\">\n    <div class=\"col-12 col-md-4\">\n      <form #registerForm=\"ngForm\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username*\" required\n            [(ngModel)]=\"adminUser.username\" name=\"username\">\n        </div>    \n        <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\"  placeholder=\"Contraseña*\" \n            [(ngModel)]=\"adminUser.password\" name=\"password\">\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"login()\">LogIn</button>\n        </div>\n      </form>\n      <div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Upps!</strong> No se encontro el usuario.\n      </div>\n    </div>\n  </div>\n  <app-loading *ngIf=\"loader\"></app-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-admin/login-admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-admin/login-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_admin_service__ = __webpack_require__("../../../../../src/app/auth-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(authAdmin, router) {
        this.authAdmin = authAdmin;
        this.router = router;
        this.adminUser = { username: "", password: "" };
        this.loader = false;
        this.showAlert = false;
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
    };
    LoginAdminComponent.prototype.login = function () {
        var _this = this;
        this.loader = true;
        this.authAdmin.authUser(this.adminUser.username, this.adminUser.password)
            .then(function (user) {
            _this.loader = false;
            _this.router.navigate(['admin']);
        })
            .catch(function () {
            _this.loader = false;
            _this.showAlert = true;
        });
    };
    LoginAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-admin',
            template: __webpack_require__("../../../../../src/app/login-admin/login-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-admin/login-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_admin_service__["a" /* AuthAdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-modal-content/login-modal-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">INICIAR SESIÓN</h4>\n</div>\n<div class=\"modal-body\">\n  <form #logInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\"placeholder=\"Correo electrónico*\" required \n        [(ngModel)]=\"logUser.email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña*\" required \n        [(ngModel)]=\"logUser.password\" name=\"password\">\n    </div>  \n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Cancelar</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"loginWithEmailAndPassword()\">Iniciar</button>\n  <button type=\"button\" class=\"btn btn-outline-dark facebook\" (click)=\"loginWithFacebook()\">Facebook</button>\n</div>\n<div *ngIf=\"showAlert\" class=\"alert alert-danger\" role=\"alert\">\n  <strong>¡Ups!</strong> El usuario ó contraseña son incorrectos.\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-modal-content/login-modal-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header, .modal-footer {\n  border-bottom: none;\n  border-top: none;\n  margin: auto; }\n  .modal-header h4, .modal-header .btn, .modal-footer h4, .modal-footer .btn {\n    margin: auto; }\n  .modal-body {\n  padding-left: 40px;\n  padding-right: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-modal-content/login-modal-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModalContentComponent = /** @class */ (function () {
    function LoginModalContentComponent(activeModal, authService) {
        this.activeModal = activeModal;
        this.authService = authService;
        this.logUser = { email: "", password: "", phone: "" };
        this.showAlert = false;
    }
    LoginModalContentComponent.prototype.loginWithEmailAndPassword = function () {
        var _this = this;
        this.authService.loginWithEmailAndPassword(this.logUser.email, this.logUser.password)
            .then(function () {
            _this.showAlert = false;
            _this.activeModal.close();
        })
            .catch(function (error) {
            _this.showAlert = true;
        });
    };
    LoginModalContentComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.authService.linkFacebook()
            .then(function () {
            _this.activeModal.close();
        })
            .catch(function (error) {
            _this.showAlert = true;
        });
    };
    LoginModalContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-modal-content',
            template: __webpack_require__("../../../../../src/app/login-modal-content/login-modal-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-modal-content/login-modal-content.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], LoginModalContentComponent);
    return LoginModalContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/my-account/my-account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"'Mi cuenta'\" [image]=\"'../../assets/img/slice2.jpg'\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <form>\n        <div class=\"form-group row\">\n          <label for=\"username\" class=\"col-sm-2 col-form-label\">Nombre</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"activeUser.displayName\" name=\"displayName\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"usercountry\" class=\"col-sm-2 col-form-label\">País</label>\n          <div class=\"col-sm-10\">\n            <select class=\"form-control\" name=\"country\" [(ngModel)]=\"activeUser.country\" disabled>\n              <option *ngFor=\"let country of countries; let i = index\" [ngValue]=\"country.id\" [attr.selected]='i == 0 ? \"selected\" : null'>\n                {{country.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"useremail\" class=\"col-sm-2 col-form-label\">Correo electrónico</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"useremail\" [(ngModel)]=\"activeUser.email\" name=\"email\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"userphone\" class=\"col-sm-2 col-form-label\">Celular</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"userphone\" [(ngModel)]=\"activeUser.phoneNumber\" name=\"phoneNumber\" disabled>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"usergender\" class=\"col-sm-2 col-form-label\">Género</label>\n          <div class=\"col-sm-4\">\n            <select name=\"usergender\" id=\"usergender\" class=\"form-control\" [(ngModel)]=\"activeUser.gender\">\n              <option *ngFor=\"let cg of catGender\" [ngValue]=\"cg.id\">{{cg.name}}</option>\n            </select>\n          </div>\n          <label for=\"userage\" class=\"col-sm-2 col-form-label\">Edad</label>\n          <div class=\"col-sm-4\">\n            <input type=\"number\" class=\"form-control\" id=\"userage\" [(ngModel)]=\"activeUser.age\" name=\"age\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"userheight\" class=\"col-sm-2 col-form-label\">Altura</label>\n          <div class=\"col-md-2 col-sm-4\">\n            <input type=\"text\" class=\"form-control\" id=\"userheight\" [(ngModel)]=\"activeUser.height\" name=\"height\">\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <select name=\"heightunit\" id=\"heightunit\" class=\"form-control\" [(ngModel)]=\"activeUser.height_Id\">\n              <option *ngFor=\"let ch of catHeight\" [ngValue]=\"ch.id\">{{ch.name}}</option>\n            </select>\n          </div>\n          <label for=\"userweight\" class=\"col-sm-2 col-form-label\">Peso</label>\n          <div class=\"col-md-2 col-sm-4\">\n            <input type=\"text\" class=\"form-control\" id=\"userweight\" [(ngModel)]=\"activeUser.weight\" name=\"weight\">\n          </div>\n          <div class=\"col-md-2 col-sm-6\">\n            <select name=\"weightunit\" id=\"weightunit\" class=\"form-control\" [(ngModel)]=\"activeUser.uwt_Id\">\n              <option *ngFor=\"let cw of catWeight\" [ngValue]=\"cw.id\">{{cw.name}}</option>\n            </select>\n          </div>\n        </div>\n      </form>\n      <p *ngFor=\"let subs of catSubscriptionStatus\"><span *ngIf=\"activeUser.sst_Id == subs.id\">Estado de la suscripción: {{subs.name}}</span></p>\n    </div>\n  </div>\n  <div *ngIf=\"showAlert\" class=\"alert alert-danger col-12 mt-2\" role=\"alert\">\n    <strong>¡Ups!</strong> {{showAlert}}\n  </div>\n  <div *ngIf=\"showAlertMail\" class=\"alert alert-success col-12 mt-2\" role=\"alert\">\n    {{showAlertMail}}\n  </div>\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <button class=\"btn\" (click)=\"updateProfile()\">Aceptar</button>\n      <!--<button class=\"btn\" (click)=\"openModalChangePass()\">Actualizar o crear contraseña</button>-->\n      <button class=\"btn\" *ngIf=\"activeUser.sst_Id != 1\" (click)=\"subscribe()\">Suscribirme</button>\n      <button class=\"btn\" *ngIf=\"activeUser.sst_Id == 1\" (click)=\"unsubscribe()\">Cancelar suscripción</button>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/my-account/my-account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-account/my-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(authService, router, modalService, apiService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.apiService = apiService;
        this.activeUser = { displayName: "", email: "", phoneNumber: "", country: 12, gender: 1, age: 0,
            height: 0, weight: 0, idoperator: 66, uwt_Id: 2, height_Id: 1 };
        this.catSubscriptionStatus = [];
        this.countries = [{ code: '57', name: "Colombia", id: 12 }];
        this.catWeight = [];
        this.catHeight = [];
        this.catGender = [];
        this.catOperators = [];
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            if (currentUser == null) {
                _this.router.navigate(['']);
            }
            else {
                _this.activeUser = currentUser;
                _this.loadUser();
            }
        });
    }
    MyAccountComponent.prototype.loadUser = function () {
        var _this = this;
        this.apiService.getUserById(this.activeUser.uid)
            .then(function (dataUser) {
            _this.activeUser.country = 12;
            _this.activeUser.gender = dataUser["gty_Id"];
            _this.activeUser.age = __WEBPACK_IMPORTED_MODULE_5_moment__().diff(__WEBPACK_IMPORTED_MODULE_5_moment__(dataUser["birthday"]).format("YYYY-MM-DD"), 'years', false);
            _this.activeUser.height = dataUser["height"];
            _this.activeUser.weight = dataUser["weight"];
            _this.activeUser.sst_Id = dataUser["sst_Id"];
            _this.activeUser.idoperator = dataUser["idoperator"];
            _this.activeUser.uwt_Id = dataUser["uwt_Id"];
            _this.activeUser.height_Id = dataUser["height_Id"];
            _this.loadCatOperators();
        }).catch(function (error) {
            _this.showAlert = error;
        });
    };
    MyAccountComponent.prototype.ngOnInit = function () {
        this.loadSubscriptionStatus();
        this.loadCountries();
        this.loadCatWeight();
        this.loadCatHeight();
        this.loadCatGender();
    };
    MyAccountComponent.prototype.loadCatWeight = function () {
        var _this = this;
        this.apiService.getUnitWeight()
            .then(function (data) {
            _this.catWeight = data;
        });
    };
    MyAccountComponent.prototype.loadCatHeight = function () {
        var _this = this;
        this.apiService.getUnitHeight()
            .then(function (data) {
            _this.catHeight = data;
        });
    };
    MyAccountComponent.prototype.loadCatGender = function () {
        var _this = this;
        this.apiService.getGenderType()
            .then(function (data) {
            _this.catGender = data;
        });
    };
    MyAccountComponent.prototype.loadCatOperators = function () {
        var _this = this;
        this.apiService.getOperators()
            .then(function (data) {
            _this.catOperators = data;
            for (var i = 0; i < _this.catOperators.length; i++) {
                if (_this.catOperators[i].id == _this.activeUser.idoperator) {
                    _this.activeUser.country = _this.catOperators[i].idCountry;
                }
            }
        });
    };
    MyAccountComponent.prototype.subscribe = function () {
        var _this = this;
        this.showAlertMail = null;
        this.showAlert = null;
        this.apiService.postSubscription(this.activeUser['uid'], this.activeUser['email'], this.activeUser['uid'], this.activeUser['phoneNumber'], this.activeUser['displayName'])
            .then(function (result) {
            _this.loadUser();
            _this.showAlertMail = "Se ha suscrito satisfactoriamente.";
        })
            .catch(function (error) {
            _this.showAlert = error;
        });
    };
    MyAccountComponent.prototype.unsubscribe = function () {
        var _this = this;
        this.showAlertMail = null;
        this.showAlert = null;
        this.apiService.postUnsubscribe(this.activeUser['uid'])
            .then(function () {
            _this.loadUser();
            _this.showAlertMail = "Se cancelo la suscripción satisfactoriamente.";
        })
            .catch(function (error) {
            _this.showAlert = error;
        });
    };
    MyAccountComponent.prototype.loadCountries = function () {
        var _this = this;
        this.apiService.getCountries()
            .then(function (data) {
            _this.countries = data;
        });
    };
    MyAccountComponent.prototype.loadSubscriptionStatus = function () {
        var _this = this;
        this.apiService.getSuscriptionStatus()
            .then(function (data) {
            _this.catSubscriptionStatus = data;
        });
    };
    MyAccountComponent.prototype.openModalChangePass = function () {
        //let modalRef = this.modalService.open(ChangePasswordModalContentComponent);
        this.changePassword();
    };
    MyAccountComponent.prototype.updateProfile = function () {
        var _this = this;
        this.showAlertMail = null;
        this.showAlert = null;
        this.apiService.createUser(this.activeUser['uid'], this.activeUser['phoneNumber'], this.activeUser['displayName'], this.activeUser['email'], "", this.activeUser.gender, this.activeUser.weight, this.activeUser.height, true, this.activeUser.idoperator, "website", 0, this.activeUser.uwt_Id, this.activeUser.height_Id, this.activeUser.age)
            .then(function () {
            _this.showAlertMail = "Se actualizo correctamente el usuario.";
        })
            .catch(function (error) {
            _this.showAlert = error;
        });
    };
    MyAccountComponent.prototype.changePassword = function () {
        this.showAlertMail = null;
        this.showAlert = null;
        if (this.activeUser.email != null) {
            this.authService.sendMailResetPassword(this.activeUser.email);
            this.showAlertMail = "Recibirás un correo con las instrucciones para que actualices o crees tu contraseña, revisa tu bandeja de entrada.";
        }
        else {
            this.showAlert = "Primero debes actualizar tu dirección de correo.";
        }
    };
    MyAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-account',
            template: __webpack_require__("../../../../../src/app/my-account/my-account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-account/my-account.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center page404\">\n      <h1>404!</h1>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-weight: bold;\n  font-size: 200px; }\n\n.page404 {\n  padding: 200px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/plan-box/plan-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div>\n    <img class=\"card-img-top card-img\" src=\"{{imgUrl}}\" alt=\"avatar\">\n    <div *ngIf=\"activePlan\" class=\"card-img-overlay\">\n      <h1 class=\"display-1\">{{percentPlan}}%</h1>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{name}}</h5>\n    <p class=\"card-text\">{{description}}</p>\n    <button class=\"btn\" routerLink=\"/plan/{{id}}/{{name.split(' ').join('-') | lowercase }}\">Ver clases</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/plan-box/plan-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  margin-bottom: 1em; }\n\n.card-title {\n  font-weight: bold; }\n\n.card-text {\n  height: 7em;\n  overflow-y: auto; }\n\n.card-img-overlay {\n  margin-bottom: 40%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plan-box/plan-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlanBoxComponent = /** @class */ (function () {
    function PlanBoxComponent() {
    }
    PlanBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PlanBoxComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PlanBoxComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PlanBoxComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PlanBoxComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PlanBoxComponent.prototype, "activePlan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PlanBoxComponent.prototype, "percentPlan", void 0);
    PlanBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plan-box',
            template: __webpack_require__("../../../../../src/app/plan-box/plan-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plan-box/plan-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlanBoxComponent);
    return PlanBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/plan-page/plan-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"plan.name\" [image]=\"plan.url\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row justify-content-md-center mpadding-5\">\n    <p>{{plan.description}}</p>\n  </div>\n  <!-- <div class=\"row justify-content-md-center mb-4 mpadding-20\">\n    <button class=\"btn p-4\" *ngIf=\"activePlan.idPlan != id\" (click)=\"suscribir()\">SUSCRIBIRME A ESTE PLAN</button>\n  </div> -->\n  <div *ngIf=\"showErrorAlert\" class=\"alert alert-danger col-12 mt-2\" role=\"alert\">\n    <strong>¡Ups!</strong> {{showErrorAlert}}\n  </div>\n  <div *ngIf=\"showSuccessAlert\" class=\"alert alert-success col-12 mt-2\" role=\"alert\">\n    {{showSuccessAlert}}\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-4 mb-1\" *ngFor=\"let routine of routines; let i = index\">\n      <app-routine-box [imgUrl]=\"routine.urlImagen\" [title]=\"routine.name\" [planId]=\"plan.id\"\n        [planName]=\"plan.name\" [routineId]=\"routine.id\" [routineName]=\"routine.name\" \n        [lock]=\"false\" \n        [uid]=\"activeUser != null ? activeUser.uid : null\" [customerPlanId]=\"planState.id\">\n      </app-routine-box>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/plan-page/plan-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-routine {\n  margin-bottom: 1em; }\n\n@media only screen and (max-width: 600px) {\n  .mpadding-5 {\n    padding-left: 5px; }\n  .mpadding-20 {\n    padding-left: 20%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plan-page/plan-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanPageComponent = /** @class */ (function () {
    function PlanPageComponent(route, apiService, sanitizer, authService) {
        var _this = this;
        this.route = route;
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.plan = { name: "", url: "" };
        this.activeUser = null;
        this.lockContent = false;
        this.activePlan = { idPlan: -1, daysCompleted: 0 };
        this.showErrorAlert = null;
        this.showSuccessAlert = null;
        this.planState = { id: 0 };
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
            if (_this.activeUser != null) {
                if (typeof _this.activeUser['uid'] != 'undefined') {
                    _this.getPlanUser();
                    _this.getPlanState();
                }
                else {
                    _this.activeUser.uid = null;
                    _this.activePlan = { idPlan: -1, daysCompleted: 0 };
                    _this.lockContent = true;
                }
            }
            else {
                _this.activePlan = { idPlan: -1, daysCompleted: 0 };
                _this.lockContent = true;
            }
        });
    }
    PlanPageComponent.prototype.getPlanUser = function () {
        var _this = this;
        this.apiService.getPlanProgressByUser(this.activeUser.uid)
            .then(function (result) {
            _this.activePlan = result;
            if (_this.id == _this.activePlan.idPlan) {
                _this.lockContent = false;
            }
        });
    };
    PlanPageComponent.prototype.getPlan = function () {
        var _this = this;
        this.apiService.getPlanById(this.id)
            .then(function (data) {
            _this.plan = data;
            _this.apiService.getImg(_this.plan.url)
                .then(function (imageUrl) {
                _this.plan.url = imageUrl;
            });
            _this.plan.videoPresentation = _this.sanitizer.bypassSecurityTrustHtml(_this.plan.videoPresentation);
        });
    };
    PlanPageComponent.prototype.ngAfterViewInit = function () {
        if (this.activeUser && typeof this.activeUser != undefined && typeof this.activeUser.uid != undefined) {
            this.lockContent = !this.getUserstatus();
        }
    };
    PlanPageComponent.prototype.getRoutines = function () {
        var _this = this;
        this.apiService.getRoutinesByPlan(this.id)
            .then(function (data) {
            _this.routines = data;
            debugger;
            _this.routines.forEach(function (routine, index) {
                _this.apiService.getImg(routine.urlImagen)
                    .then(function (imageUrl) {
                    _this.routines[index].urlImagen = imageUrl;
                });
            });
        });
    };
    PlanPageComponent.prototype.getParams = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    PlanPageComponent.prototype.getUserstatus = function () {
        if (this.activeUser.uid) {
            this.apiService.getUserStatus(this.activeUser.uid)
                .then(function (result) {
                return result;
            })
                .catch(function () {
                return false;
            });
        }
        else {
            return false;
        }
    };
    PlanPageComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getPlan();
        this.getRoutines();
    };
    PlanPageComponent.prototype.suscribirnew = function () {
        var _this = this;
        this.apiService.postSubscription(this.activeUser['uid'], this.activeUser['email'], this.activeUser['uid'], this.activeUser['phoneNumber'], this.activeUser['displayName'])
            .then(function () {
            _this.apiService.postChangePlan(_this.activeUser.uid, _this.id)
                .then(function () {
                _this.showSuccessAlert = "Se ha suscrito satisfactoriamente a este plan.";
            })
                .catch(function (serror) {
                _this.showErrorAlert = serror;
            });
        })
            .catch(function (error) {
            _this.showErrorAlert = error;
        });
    };
    PlanPageComponent.prototype.getPlanState = function () {
        var _this = this;
        this.showErrorAlert = null;
        this.apiService.getPlanByUser(this.activeUser.uid)
            .then(function (result) {
            _this.planState = result;
        })
            .catch(function (error) {
            _this.planState = { id: 0 };
            _this.showErrorAlert = error;
        });
    };
    PlanPageComponent.prototype.initRoutine = function () {
        var _this = this;
        var createConnUserPlan = 0;
        if (this.planState.id == 0) {
            this.apiService.postSubscription(this.activeUser['uid'], this.activeUser['email'], this.activeUser['uid'], this.activeUser['phoneNumber'], this.activeUser['displayName'])
                .then(function () {
                _this.apiService.setPlanUser(_this.activeUser.uid, _this.id)
                    .then(function (resultP) {
                    console.log(resultP);
                    var start = { "Cus_Id": _this.activeUser.uid, "Cup_Id": resultP[0], "Rou_Id": _this.routines[0].id };
                    _this.apiService.postInitRoutine(start)
                        .then(function (result) {
                        _this.showSuccessAlert = "Se ha suscrito satisfactoriamente a este plan.";
                    })
                        .catch(function (error) {
                        _this.showErrorAlert = error;
                    });
                })
                    .catch(function (error) {
                    _this.showErrorAlert = error;
                });
            })
                .catch(function (error) {
                _this.showErrorAlert = error;
            });
        }
        else {
            this.apiService.setPlanUser(this.activeUser.uid, this.id)
                .then(function (resultP) {
                console.log(resultP);
                var start = { "Cus_Id": _this.activeUser.uid, "Cup_Id": resultP[0], "Rou_Id": _this.routines[0].id };
                _this.apiService.postInitRoutine(start)
                    .then(function (result) {
                    _this.showSuccessAlert = "Se ha suscrito satisfactoriamente a este plan.";
                })
                    .catch(function (error) {
                    _this.showErrorAlert = error;
                });
            })
                .catch(function (error) {
                _this.showErrorAlert = error;
            });
        }
    };
    PlanPageComponent.prototype.checkStatusRoutine = function () {
        var _this = this;
        this.showErrorAlert = null;
        this.showSuccessAlert = null;
        this.apiService.getRoutineStatus(456, 43)
            .then(function (result) {
            var res = result;
            if (res.message = "unused routine") {
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            _this.showErrorAlert = error;
            return false;
        });
    };
    PlanPageComponent.prototype.suscribir = function () {
        var _this = this;
        this.showErrorAlert = null;
        this.showSuccessAlert = null;
        if (this.activeUser != null && typeof this.activeUser['uid'] != 'undefined') {
            this.apiService.getPlanProgressByUser(this.activeUser['uid'])
                .then(function (result) {
                if (Object.keys(result).length > 0) {
                    if (confirm("Esta seguro que desea cambiar de plan. Solo podrá realizar esta operación una vez? ")) {
                        _this.apiService.postChangePlan(_this.activeUser.uid, _this.id)
                            .then(function () {
                            _this.showSuccessAlert = "Se ha suscrito satisfactoriamente a este plan.";
                        })
                            .catch(function () {
                            _this.showErrorAlert = "Parece que ya hiciste un cambio de plan.";
                        });
                    }
                }
                else {
                    //this.suscribirnew();
                    _this.initRoutine();
                }
            })
                .catch(function (error) {
                _this.suscribirnew();
                if (error != null && typeof error != undefined) {
                    console.log(error);
                    _this.showErrorAlert = error;
                }
            });
        }
        else {
            alert('Debe iniciar sesión');
        }
    };
    PlanPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plan-page',
            template: __webpack_require__("../../../../../src/app/plan-page/plan-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plan-page/plan-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], PlanPageComponent);
    return PlanPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/plan.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
var Plan = /** @class */ (function () {
    function Plan() {
    }
    return Plan;
}());



/***/ }),

/***/ "../../../../../src/app/plans/plans.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"'Escoge tu plan'\" [image]=\"'../../assets/img/slice2.jpg'\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row\">\n      <app-plan-box class=\"col-md-4\" *ngFor=\"let plan of listPlans\" \n        [id]=\"plan.id\" [name]=\"plan.name\" [description]=\"(plan.description.length>200) ? (plan.description | slice:0:200)+'..' : plan.description\" \n        [imgUrl]=\"plan.url\" [activePlan]=\"plan.id == activePlan.idPlan\" [percentPlan]=\"activePlan.progressCustomer\">\n      </app-plan-box>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/plans/plans.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plans/plans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlansComponent = /** @class */ (function () {
    function PlansComponent(apiService, authService) {
        var _this = this;
        this.apiService = apiService;
        this.authService = authService;
        this.activeUser = null;
        this.activePlan = { idPlan: -1 };
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
            if (_this.activeUser != null) {
                if (typeof _this.activeUser['uid'] != 'undefined') {
                    _this.getPlanUser();
                }
                else {
                    _this.activePlan = { idPlan: -1 };
                }
            }
            else {
                _this.activePlan = { idPlan: -1 };
            }
        });
    }
    PlansComponent.prototype.getPlans = function () {
        var _this = this;
        this.apiService.getPlans()
            .then(function (data) {
            _this.listPlans = data;
            _this.listPlans.forEach(function (plan, index) {
                _this.apiService.getImg(plan.url)
                    .then(function (imageUrl) {
                    _this.listPlans[index].url = imageUrl;
                });
            });
        });
    };
    PlansComponent.prototype.getPlanUser = function () {
        var _this = this;
        this.apiService.getPlanProgressByUser(this.activeUser.uid)
            .then(function (result) {
            _this.activePlan = result;
        });
    };
    PlansComponent.prototype.ngOnInit = function () {
        this.getPlans();
    };
    PlansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plans',
            template: __webpack_require__("../../../../../src/app/plans/plans.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plans/plans.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], PlansComponent);
    return PlansComponent;
}());



/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"'Política de privacidad'\" [image]=\"'../../assets/img/slice2.jpg'\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p>La presente  declaración de privacidad corresponde a la empresa  We Venture SRL. Con Domicilio en Av. Winston Churchill 111, Local 205. Santo Domingo , República Dominicana.</p>\n      <p>Este Aviso de Privacidad contempla siempre los principios de legalidad, consentimiento  y responsabilidad en el tratamiento de los datos personales.Al visitar este sitio usted acepta  los términos de esta política.</p>\n      <p>InfluenceME toma muy en serio asuntos de privacidad y se compromete a protegerla. Por lo tanto ofrecemos esta política para explicar nuestras prácticas de  y sobre la manera en que se recoge y se utiliza su información.</p>\n      <h4>RECOPILACIÓN Y USO DE INFORMACIÓN PERSONAL</h4>\n      <p>Al proporcionar su información personal a nosotros sólo se utilizará para los fines para los que fue proporcionada.</p>\n      <p>La información obtenida  se utilizará para:</p>\n      <p>Procurar un servicio eficiente, crear una cuenta de acceso para que pueda realizar sus planes, informar sobre nuevos servicios que están relacionados con su planes y otros servicios, darle cumplimiento a todo aquello a lo que se haya comprometido tanto  de nuestra parte como de la suya (usuario), Informar sobre cambios de nuestros servicios y ofrecer una mejor atención al usuario. Todo esto bajo y  de acuerdo con las leyes que rigentes del pais.</p>\n      <h4>DIVULGACIÓN DE INFORMACIÓN PERSONAL</h4>\n      <p>InfluenceME no revelará, comercializará, alquilará, venderá o transferirá su información personal para fines diferentes de los establecidos en el presente, excepto con su consentimiento ó que sea requerido o permitido por la ley.</p>\n      <p>InfluenceME puede divulgar su información personal a terceros proveedores de servicios ó agentes que proporcionan servicios para o en nombre de InfluenceME .Su información personal será procesada y almacenada en la República Dominicana ó en cualquier otro país extranjero y los gobiernos, policía y agencias reguladoras de ese país tendrán la capacidad de divulgación de la información personal de conformidad con las leyes rigentes de ese país.</p>\n      <p>Generalmente no revelamos su información personal a terceros sin su consentimiento a menos que sea requerido por la ley aplicable.</p>\n      <h4>ACCESO A SU INFORMACIÓN PERSONAL</h4>\n      <p>InfluenceME. le permitirá acceder a la  información sobre usted con el fin de ver y actualizar dicha información. Tenga en cuenta que ésta lista puede cambiar en caso de que la aplicación también cambie:</p>\n      <p>Información de cuenta y perfil de usuario, dirección de correo electrónico de usuario (SI APLICA), número celular, información de perfil de Facebook (SI APLICA), preferencias de usuario, datos propios de la aplicación.</p>\n      <h4>SEGURIDAD</h4>\n      <p>La seguridad  para toda la información personal proporcionada es extremadamente importante para nosotros. Almacenamos su información personal de manera segura y utilizamos cifrado u otros procedimientos especiales diseñados para proteger que la información que obtenemos no sea perdída, mal utilizada,alterada ni tampoco accedida de una manera no autorizada.</p>\n      <h4>USO DE LA APLICACIÓN POR MENORES</h4>\n      <p>Este es un sitio destinado a personas que cuentan con por lo menos 18 años de edad. Si tiene menos de 18 años de edad, no puede utilizar la aplicación sin la previa autorización y supervisión de padres o tus tutores legales.</p>\n      <h4>ACTUALIZACIONES DE LA POLÍTICA DE PRIVACIDAD</h4>\n      <p>Nos reservamos el derecho de actualizar o modificar esta política en cualquier momento. Si realizamos cambios materiales a esta política, le notificaremos mediante un aviso a su correco electronico ó dentro de la misma aplicación.  Su uso de la aplicación constituye su consentimiento de que toda la información personal obtenida de usted o sobre usted estará sujeta a los términos y condiciones del servicio.</p>\n      <h4>INFORMACIÓN OFICIAL DE PRIVACIDAD CONTACTO</h4>\n      <p>Si usted tiene alguna pregunta o inquietud sobre nuestras prácticas de privacidad, no dude ponerse en contacto con info@whopmobile.com</p>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-data1/register-data1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <div class=\"row text-center align-items-center\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"z-index: 10;\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"col-12\">\n      <img src=\"../../assets/img/Icono-negro.png\" width=\"40px\">\n      <div class=\"row justify-content-md-center\">\n          <div class=\"col-2\">\n            <div class=\"round active\">\n              1\n            </div>\n          </div>\n          <div class=\"col-2\">\n            <div class=\"round\">\n              2\n            </div>\n          </div>\n      </div>\n      <div class=\"row mt-1\">\n        <div class=\"form-group col-12 col-md-12\">\n          <p class=\"col-12\">¿Cuál es tu género?</p>\n          <select name=\"gender\" id=\"gender\" class=\"form-control\" [(ngModel)]=\"genderId\">\n            <option *ngFor=\"let cg of catGender\" [ngValue]=\"cg.id\">{{cg.name}}</option>\n          </select>\n        </div>\n      </div>\n      <!--\n      <span class=\"icon-man icon-big\" [ngClass]=\"{'icon-selected': icon_man}\" (click)=\"icon_man = true; icon_woman = false;\"></span>\n      <span class=\"icon-woman icon-big\" [ngClass]=\"{'icon-selected': icon_woman}\" (click)=\"icon_man = false; icon_woman = true;\"></span>\n      -->\n      <div class=\"row mt-1\">\n        <div class=\"form-group col-12 col-md-6\">\n          <p class=\"col-12\">¿Cuál es tu peso?</p>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-6\">\n              <input type=\"number\" name=\"weight\" id=\"weight\" class=\"form-control\" [(ngModel)]=\"weight\">\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <select name=\"weightunit\" id=\"weightunit\" class=\"form-control\" [(ngModel)]=\"weightUnit\">\n                <option *ngFor=\"let cw of catWeight\" [ngValue]=\"cw.id\">{{cw.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-12 col-md-6\">\n          <p class=\"col-12\">¿Cuál es tu altura?</p>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-6\" *ngIf=\"heightUnit != 2\">\n              <input type=\"number\" name=\"height\" id=\"height\" class=\"form-control\" [(ngModel)]=\"height\">\n            </div>\n            <div class=\"col-6\" *ngIf=\"heightUnit == 2\">\n              <input type=\"number\" name=\"foots\" id=\"foots\" class=\"form-control\" [(ngModel)]=\"foots\" placeholder=\"Pies\">\n            </div>\n            <div class=\"col-6\" *ngIf=\"heightUnit == 2\">\n              <input type=\"number\" name=\"inches\" id=\"inches\" class=\"form-control\" [(ngModel)]=\"inches\" placeholder=\"Pulgadas\">\n            </div>\n            <div class=\"col-12\" [ngClass]=\"{'col-md-6': heightUnit != 2}\">\n              <select name=\"heightunit\" id=\"heightunit\" class=\"form-control\" [(ngModel)]=\"heightUnit\">\n                <option *ngFor=\"let ch of catHeight\" [ngValue]=\"ch.id\">{{ch.name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-12 col-md-6\">\n          <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"¿Cuál es tu nombre?\" required [(ngModel)]=\"name\">\n        </div>\n        <div class=\"form-group col-12 col-md-6\">\n          <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"¿Cuál es tu E-mail?\" required [(ngModel)]=\"email\">\n        </div>\n      </div>\n      <button class=\"btn\" (click)=\"openModalRegister2()\">SIGUIENTE</button>\n      <div class=\"row\">\n        <div *ngIf=\"showAlert\" class=\"alert alert-danger col-12\" role=\"alert\">\n          <strong>¡Ups!</strong> {{showAlert}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-data1/register-data1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".close {\n  position: absolute;\n  top: .5em;\n  right: .5em; }\n\n.round {\n  border: solid;\n  border-color: gray;\n  padding-top: .7em;\n  padding-bottom: .7em;\n  border-radius: 50%; }\n\n.round.active {\n  border-color: orangered;\n  background-color: orangered;\n  color: white; }\n\n.icon-big {\n  font-size: 60px;\n  color: gray; }\n\n.icon-big:hover {\n  cursor: pointer; }\n\n.icon-man:hover {\n  color: cyan; }\n\n.icon-woman:hover {\n  color: deeppink; }\n\n.icon-selected {\n  color: orangered; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-data1/register-data1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterData1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_data2_register_data2_component__ = __webpack_require__("../../../../../src/app/register-data2/register-data2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterData1Component = /** @class */ (function () {
    function RegisterData1Component(activeModal, modalService, apiService) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.apiService = apiService;
        this.icon_man = false;
        this.icon_woman = false;
        this.weightUnit = 1;
        this.genderId = 1;
        this.heightUnit = 1;
        this.catWeight = [];
        this.catHeight = [];
        this.catGender = [];
    }
    RegisterData1Component.prototype.ngOnInit = function () {
        this.loadCatWeight();
        this.loadCatHeight();
        this.loadCatGender();
    };
    RegisterData1Component.prototype.loadCatWeight = function () {
        var _this = this;
        this.apiService.getUnitWeight()
            .then(function (data) {
            _this.catWeight = data;
        });
    };
    RegisterData1Component.prototype.loadCatHeight = function () {
        var _this = this;
        this.apiService.getUnitHeight()
            .then(function (data) {
            _this.catHeight = data;
        });
    };
    RegisterData1Component.prototype.loadCatGender = function () {
        var _this = this;
        this.apiService.getGenderType()
            .then(function (data) {
            _this.catGender = data;
        });
    };
    RegisterData1Component.prototype.validateForm = function () {
        this.showAlert = null;
        var valid = true;
        if (!this.genderId || !this.name || !this.email || !this.weight || !this.weightUnit
            || !(this.height || this.foots || this.inches) || !this.heightUnit || !this.operator) {
            this.showAlert = "Debe completar el formulario.";
            valid = false;
        }
        return valid;
    };
    RegisterData1Component.prototype.openModalRegister2 = function () {
        if (this.validateForm()) {
            this.activeModal.close('Close click');
            this.objUser = { name: this.name, email: this.email, gender: this.genderId, weight: this.weight, height: typeof this.height == undefined || this.height == null ? typeof this.foots == undefined || this.foots == null ?
                    this.inches : this.foots : this.height, weightUnit: this.weightUnit, heightUnit: this.heightUnit,
                operator: this.operator };
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__register_data2_register_data2_component__["a" /* RegisterData2Component */]);
            modalRef.componentInstance.setObjUser(this.objUser);
        }
    };
    RegisterData1Component.prototype.changeClass = function (event) {
        if (!event.target.classList.contains('icon-selected')) {
            event.target.classList.add('icon-selected');
        }
    };
    RegisterData1Component.prototype.setOperator = function (id) {
        this.operator = id;
    };
    RegisterData1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-data1',
            template: __webpack_require__("../../../../../src/app/register-data1/register-data1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-data1/register-data1.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], RegisterData1Component);
    return RegisterData1Component;
}());



/***/ }),

/***/ "../../../../../src/app/register-data2/register-data2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <div class=\"row text-center align-items-center\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"z-index: 10;\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"col-12\">\n      <img src=\"../../assets/img/Icono-negro.png\" width=\"40px\">\n      <div class=\"row justify-content-md-center\">\n          <div class=\"col-2\">\n            <div class=\"round active\">\n              1\n            </div>\n          </div>\n          <div class=\"col-2\">\n            <div class=\"round active\">\n              2\n            </div>\n          </div>\n      </div>\n      <h4>¿Estás de acuerdo?</h4>\n      <p><strong>Género: </strong> <ng-container *ngFor=\"let cg of catGender\"><span *ngIf=\"cg.id == objUser.gender\">{{cg.name}}</span></ng-container></p>\n      <p><strong>Peso: </strong>{{objUser.weight}} <ng-container *ngFor=\"let cw of catWeight\"><span *ngIf=\"cw.id == objUser.weightUnit\">{{cw.name}}</span></ng-container></p>\n      <p><strong>Altura: </strong>{{objUser.height}} <ng-container *ngFor=\"let ch of catHeight\"><span *ngIf=\"ch.id == objUser.heightUnit\">{{ch.name}}</span></ng-container></p>\n      <p><strong>Nombre: </strong>{{objUser.name}}</p>\n      <p><strong>E-mail: </strong>{{objUser.email}}</p>\n      <!--<button class=\"btn\">ATRÁS</button>-->\n      <button class=\"btn\" (click)=\"createUserCloseModal()\">GUARDAR</button>\n      <div *ngIf=\"showErrorAlert\" class=\"alert alert-danger col-12 mt-2\" role=\"alert\">\n        <strong>¡Ups!</strong> {{showErrorAlert}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-data2/register-data2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".close {\n  position: absolute;\n  top: .5em;\n  right: .5em; }\n\n.round {\n  border: solid;\n  border-color: gray;\n  padding-top: .7em;\n  padding-bottom: .7em;\n  border-radius: 50%; }\n\n.round.active {\n  border-color: orangered;\n  background-color: orangered;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-data2/register-data2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterData2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterData2Component = /** @class */ (function () {
    function RegisterData2Component(authService, apiService, activeModal, router) {
        this.authService = authService;
        this.apiService = apiService;
        this.activeModal = activeModal;
        this.router = router;
        this.catWeight = [];
        this.catHeight = [];
        this.catGender = [];
        this.showErrorAlert = null;
    }
    RegisterData2Component.prototype.ngOnInit = function () {
        this.loadCatWeight();
        this.loadCatHeight();
        this.loadCatGender();
    };
    RegisterData2Component.prototype.loadCatWeight = function () {
        var _this = this;
        this.apiService.getUnitWeight()
            .then(function (data) {
            _this.catWeight = data;
        });
    };
    RegisterData2Component.prototype.loadCatHeight = function () {
        var _this = this;
        this.apiService.getUnitHeight()
            .then(function (data) {
            _this.catHeight = data;
        });
    };
    RegisterData2Component.prototype.loadCatGender = function () {
        var _this = this;
        this.apiService.getGenderType()
            .then(function (data) {
            _this.catGender = data;
        });
    };
    RegisterData2Component.prototype.updateCreateProfile = function () {
        var _this = this;
        this.showErrorAlert = null;
        this.authService.updateProfileFirebase(this.objUser.name, this.objUser.email, null)
            .then(function (user) {
            _this.apiService.createUser(user['uid'], user['phoneNumber'], _this.objUser.name, _this.objUser.email, "", _this.objUser.gender, _this.objUser.weight, _this.objUser.height, true, _this.objUser.operator, "website", 1, _this.objUser.weightUnit, _this.objUser.heightUnit, 0)
                .then(function () {
                _this.router.navigate(['/plans']);
            })
                .catch(function (error) {
                _this.showErrorAlert = error;
            });
        })
            .catch(function (error) {
            _this.showErrorAlert = error.message;
        });
    };
    RegisterData2Component.prototype.createUserCloseModal = function () {
        this.updateCreateProfile();
        this.activeModal.close('Close click');
    };
    RegisterData2Component.prototype.setObjUser = function (obj) {
        this.objUser = obj;
    };
    RegisterData2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-data2',
            template: __webpack_require__("../../../../../src/app/register-data2/register-data2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-data2/register-data2.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterData2Component);
    return RegisterData2Component;
}());



/***/ }),

/***/ "../../../../../src/app/register-modal/register-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <div class=\"row text-center align-items-center\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"z-index: 10;\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"col-12\">\n      <h6 class=\"padd-mid\"><strong><small>INGRESA CON</small></strong></h6>\n      <button class=\"btn\" (click)=\"openModalTelephone()\">Tu teléfono</button>\n      <!--<button class=\"btn facebook mt-1\" (click)=\"loginWithFacebook()\">Facebook</button>-->\n    </div>\n    <!--<div class=\"col-12\">\n      <p>¿Te registraste con tu dirección de correo?</p>\n    </div>\n    <div class=\"col-12\">\n      <p><span class=\"initwithemail\" (click)=\"showFrmEmail = !showFrmEmail\">Inicia con tu E-mail</span></p>\n    </div>\n    <div class=\"col-12 bgWhite\" *ngIf=\"showFrmEmail\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Correo electrónico\" [(ngModel)]=\"loginemail\">\n    </div>\n    <div class=\"col-12 bgWhite\" *ngIf=\"showFrmEmail\">\n      <input class=\"form-control\" type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"loginpassword\">\n    </div>-->\n    <div class=\"col-12 bgWhite py-2\" *ngIf=\"showFrmEmail\">\n      <button class=\"btn\" (click)=\"loginWithEmailAndPassword()\">INICIAR</button>\n    </div>\n    <div *ngIf=\"showAlert\" class=\"alert alert-danger col-12\" role=\"alert\">\n      <strong>¡Ups!</strong> {{showAlert}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-modal/register-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/Background2.png")) + ");\n  background-size: cover;\n  background-position: center;\n  height: 400px; }\n\n.close {\n  position: absolute;\n  top: .5em;\n  right: .5em; }\n\n.padd-mid {\n  padding-top: 190px; }\n\n.initwithemail {\n  color: forestgreen; }\n\n.initwithemail:hover {\n  font-weight: 700;\n  cursor: pointer; }\n\n.bgWhite {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-modal/register-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__telephone_modal_telephone_modal_component__ = __webpack_require__("../../../../../src/app/telephone-modal/telephone-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterModalComponent = /** @class */ (function () {
    function RegisterModalComponent(activeModal, modalService, authService, apiService) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.authService = authService;
        this.apiService = apiService;
        this.showFrmEmail = false;
    }
    RegisterModalComponent.prototype.ngOnInit = function () {
    };
    RegisterModalComponent.prototype.openModalTelephone = function () {
        this.activeModal.close();
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__telephone_modal_telephone_modal_component__["a" /* TelephoneModalComponent */]);
    };
    RegisterModalComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.authService.linkFacebook()
            .then(function (responseFacebook) {
            if (responseFacebook["additionalUserInfo"].isNewUser || responseFacebook["user"].phoneNumber == null) {
                var userFacebook = responseFacebook["user"];
                if (userFacebook.phoneNumber == null) {
                    _this.activeModal.close();
                    var modalRef = _this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__telephone_modal_telephone_modal_component__["a" /* TelephoneModalComponent */]);
                    modalRef.componentInstance.callFromFacebook();
                }
                else {
                    _this.apiService.createUser(userFacebook.uid, userFacebook.phoneNumber, userFacebook.displayName, userFacebook.email, "", 1, 0, 0, true, 1, "Facebook", 1, 1, 1, 0)
                        .then(function (responseUserC) {
                    })
                        .catch(function (error) {
                    });
                }
            }
            _this.activeModal.close();
        })
            .catch(function (error) {
            if (error.code == "auth/account-exists-with-different-credential") {
                _this.showAlert = "Ya existe una cuenta con estos datos.";
            }
        });
    };
    RegisterModalComponent.prototype.loginWithEmailAndPassword = function () {
        var _this = this;
        this.authService.loginWithEmailAndPassword(this.loginemail, this.loginpassword)
            .then(function () {
            _this.activeModal.close();
        })
            .catch(function (error) {
            _this.showAlert = "Usuario no encontrado. Por favor revise los datos introducidos.";
        });
    };
    RegisterModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-modal',
            template: __webpack_require__("../../../../../src/app/register-modal/register-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-modal/register-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], RegisterModalComponent);
    return RegisterModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-page [title]=\"'Registro'\" [image]=\"'../../assets/img/slice2.jpg'\"></app-header-page>\n<div class=\"container\">\n  <form #registerForm=\"ngForm\" *ngIf=\"!frmSubmit\">\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre*\" required\n          [(ngModel)]=\"regUser.name\" name=\"name\">\n      </div>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" \n          [(ngModel)]=\"regUser.country\" name=\"country\">\n          <option *ngFor=\"let country of countries; let i = index\" [value]=\"country.ind\" [attr.selected]='i == 0 ? \"selected\" : null'>\n            {{country.country}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"email\" class=\"form-control\" placeholder=\"Correo electrónico*\" \n        [(ngModel)]=\"regUser.email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Numero de celular*\" required\n        [(ngModel)]=\"regUser.phone\" name=\"phone\">\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\"  \n          [(ngModel)]=\"regUser.gender\" name=\"gender\">\n          <option *ngFor=\"let gen of gender; let i = index\" [value]=\"gen.id\" [attr.selected]='i == 0 ? \"selected\" : null'>\n              {{gen.name}}\n            </option>\n        </select>\n      </div>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Altura*\" \n          [(ngModel)]=\"regUser.height\" name=\"height\">\n      </div>      \n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-6\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"Edad*\"\n          [(ngModel)]=\"regUser.age\" name=\"age\">\n      </div>\n      <div class=\"col-sm-3\">\n        <input type=\"number\" class=\"form-control\" placeholder=\"Peso*\" \n          [(ngModel)]=\"regUser.weight\" name=\"weight\">\n      </div>\n      <div class=\"col-sm-3\">\n        <select class=\"form-control\" \n          [(ngModel)]=\"regUser.weight\" name=\"weight\">\n          <option *ngFor=\"let weiUnit of weight; let i = index\" [value]=\"weiUnit.id\" [attr.selected]='i == 0 ? \"selected\" : null'>\n            {{weiUnit.name}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\"  placeholder=\"Contraseña*\" \n        [(ngModel)]=\"regUser.password\" name=\"password\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control\"  placeholder=\"Confirmar contraseña*\" \n        [(ngModel)]=\"repassword\" name=\"repassword\">\n    </div>\n    <div id=\"frm-register-captcha\"></div>\n    <div class=\"form-group text-center\">\n      <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"register()\">Registrarme ahora</button>\n      <button type=\"button\" class=\"btn btn-primary mb-2 facebook\" (click)=\"loginWithFacebook()\">Iniciar con facebook</button>\n    </div>\n  </form>\n  <form #registerValidationForm=\"ngForm\" *ngIf=\"validForm && !errorSendTxt && frmSubmit\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\"  placeholder=\"Código de verificación*\" \n        [(ngModel)]=\"validCode\" name=\"validcode\">\n    </div>\n    <div class=\"form-group text-center\">\n      <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"validateCode()\">Validar código</button>\n      <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"frmSubmit = false;\">Reenviar código</button>\n    </div>\n  </form>\n  <div *ngIf=\"!validForm\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Upps!</strong> Debe verificar los campos del formulario.\n  </div>\n  <div *ngIf=\"errorSendTxt\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Upps!</strong> No se pudo enviar el código de validación.\n  </div>\n  <div *ngIf=\"validForm && !errorSendTxt && frmSubmit\" class=\"alert alert-success\" role=\"alert\">\n    <strong>Ya casi!</strong> Se ha enviado un mensaje de validación al número de celular registrado.\n  </div>\n  <div *ngIf=\"errorvalidCode\" class=\"alert alert-danger\" role=\"alert\">\n    <strong>Upps!</strong> Error validando el código.\n  </div>\n  <app-loading *ngIf=\"loader\"></app-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, apiService, router) {
        var _this = this;
        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.alerts = [];
        this.frmSubmit = false;
        this.loader = false;
        this.errorSendTxt = false;
        this.countries = [{ code: 'co', ind: '+57', country: 'Colombia' }, { code: 'do', ind: +'+001', country: 'República Dominicana' }];
        this.gender = [];
        this.validForm = true;
        this.errorvalidCode = false;
        this.regUser = { email: "", password: "", name: "", phone: "", country: this.countries[0].ind, gender: 3 };
        this.repassword = "";
        this.weight = [];
        this.activeUser = null;
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.name),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.country),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.email),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.phone),
            'gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.gender),
            'height': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.height),
            'age': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.age),
            'weight': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.weight),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.password),
            'repassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.regUser.password),
        });
        this.getGender();
        this.getWeight();
    };
    RegisterComponent.prototype.getGender = function () {
        var _this = this;
        this.apiService.getGenderType()
            .then(function (data) {
            _this.gender = data;
        }).catch(function () {
            _this.gender.push({ id: 1, name: 'Hombre' });
            _this.gender.push({ id: 2, name: 'Mujer' });
            _this.gender.push({ id: 3, name: 'Otro' });
        });
    };
    RegisterComponent.prototype.getWeight = function () {
        var _this = this;
        this.apiService.getUnitWeight()
            .then(function (data) {
            _this.weight = data;
        }).catch(function () {
            _this.weight.push({ id: 1, name: 'LBS' });
            _this.weight.push({ id: 2, name: 'KGS' });
        });
    };
    RegisterComponent.prototype.initCaptcha = function () {
        var _this = this;
        this.authService.initCaptcha('frm-register-captcha')
            .then(function (captcha) {
            _this.recaptchaVerifier = captcha;
        });
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.initCaptcha();
    };
    RegisterComponent.prototype.validFrm = function () {
        if (!this.regUser.name)
            return false;
        if (!this.regUser.country)
            return false;
        if (!this.regUser.email)
            return false;
        if (!this.regUser.phone)
            return false;
        if (!this.regUser.gender)
            return false;
        if (!this.regUser.height)
            return false;
        if (!this.regUser.age)
            return false;
        if (!this.regUser.weight)
            return false;
        if (!this.regUser.password)
            return false;
        if (this.regUser.password != this.repassword)
            return false;
        return true;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.validFrm()) {
            this.loader = true;
            var completeNumber = this.registerForm.controls.country.value + this.regUser.phone;
            console.log(completeNumber);
            this.authService.sendLoginCode(this.recaptchaVerifier, completeNumber)
                .then(function (data) {
                _this.validForm = true;
                _this.errorSendTxt = false;
                _this.confirmationResult = data;
                _this.loader = false;
                _this.frmSubmit = true;
            })
                .catch(function (error) {
                _this.loader = false;
                _this.frmSubmit = false;
                _this.errorSendTxt = true;
            });
        }
        else {
            this.validForm = false;
        }
    };
    RegisterComponent.prototype.validateCode = function () {
        var _this = this;
        this.loader = true;
        this.authService.verifyLoginCode(this.confirmationResult, this.validCode, this.regUser.name, this.regUser.email, this.regUser.password)
            .then(function (userFire) {
            _this.errorvalidCode = false;
            _this.apiService.createUser(userFire['uid'], userFire['phoneNumber'], userFire['displayName'], userFire['email'], "", _this.regUser.gender, _this.regUser.weight, _this.regUser.height, true, 1, "website", 1, 1, 1, 0)
                .then(function (resultApi) {
                _this.loader = false;
                _this.router.navigate(['/my-account']);
            })
                .catch(function (errorApi) {
                _this.loader = false;
            });
        })
            .catch(function (error) {
            _this.errorvalidCode = true;
            _this.loader = false;
        });
    };
    RegisterComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.authService.linkFacebook()
            .then(function (userFire) {
            _this.loader = true;
            _this.apiService.createUser(userFire['uid'], userFire['phoneNumber'], userFire['displayName'], userFire['email'], "", _this.regUser.gender, _this.regUser.weight, _this.regUser.height, true, 0, "website", 1, 1, 1, 0)
                .then(function (resultApi) {
                _this.loader = false;
                _this.router.navigate(['/my-account']);
            })
                .catch(function (errorApi) {
                _this.loader = false;
            });
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routine-box/routine-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-dark text-white\">\n  <img class=\"card-img\" src=\"{{imgUrl}}\" alt=\"Plan image\">\n  <div class=\"card-img-overlay text-center pt-5\">\n    <h5 class=\"card-title\">{{title}}</h5>\n    <!--<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>-->\n    <button class=\"btn\" (click)=\"loadRutinePage()\"> Ver rutina</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routine-box/routine-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-card {\n  background-color: #fff; }\n\n.img-routine {\n  padding: 0; }\n\n.img-routine img {\n    width: 100%; }\n\n.content-card {\n  padding-top: 3em; }\n\n.content-card h3 {\n    font-weight: bold;\n    text-transform: uppercase; }\n\n.card-img-overlay {\n  background-color: rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routine-box/routine-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutineBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutineBoxComponent = /** @class */ (function () {
    function RoutineBoxComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    RoutineBoxComponent.prototype.validateDay = function () {
        var _this = this;
        this.apiService.getValidationRoutinesDay(this.uid, this.customerPlanId, this.routineId)
            .then(function (result) {
            var res = result;
            if (res.id == 1) {
                var url = "/plan/" + _this.planId + "/" + _this.planName.split(' ').join('-').toLowerCase() + "/routine/" + _this.routineId + "/" + _this.routineName.split(' ').join('-').toLowerCase();
                _this.router.navigate([url]);
            }
            else {
                alert(res.state);
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    RoutineBoxComponent.prototype.ngOnInit = function () {
    };
    RoutineBoxComponent.prototype.loadRutinePage = function () {
        if (!this.lock) {
            if (this.uid && this.customerPlanId && this.routineId && typeof this.uid != undefined) {
                this.validateDay();
            }
            else {
                var url = "/plan/" + this.planId + "/" + this.planName.split(' ').join('-').toLowerCase() + "/routine/" + this.routineId + "/" + this.routineName.split(' ').join('-').toLowerCase();
                this.router.navigate([url]);
            }
        }
        else {
            alert('No puedes acceder a este contenido aún');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RoutineBoxComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RoutineBoxComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], RoutineBoxComponent.prototype, "planId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RoutineBoxComponent.prototype, "planName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], RoutineBoxComponent.prototype, "routineId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RoutineBoxComponent.prototype, "routineName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RoutineBoxComponent.prototype, "lock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], RoutineBoxComponent.prototype, "uid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], RoutineBoxComponent.prototype, "customerPlanId", void 0);
    RoutineBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-routine-box',
            template: __webpack_require__("../../../../../src/app/routine-box/routine-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routine-box/routine-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], RoutineBoxComponent);
    return RoutineBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routine-page/routine-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"routine.name\" [image]=\"routine.urlImagen\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-4 mb-1\" *ngFor=\"let exercise of exercises; let i = index\">\n      <app-exercise-box [imgUrl]=\"exercise.urlImage\" [title]=\"exercise.name\" \n        [planId]=\"idPlan\" [planName]=\"namePlan\" [routineId]=\"routine.id\" [routineName]=\"routine.name\" [exerciseId]=\"exercise.id\" [exerciseName]=\"exercise.name\">\n      </app-exercise-box>\n    </div>\n  </div>\n  <div class=\"row justify-content-md-center mb-3 mpadding-20\">\n    <button class=\"btn p-4\" *ngIf=\"statusRoutine == 1\" (click)=\"initRoutine()\">INICIAR RUTINA</button>\n    <button class=\"btn p-4\" *ngIf=\"statusRoutine == 2\" (click)=\"endRoutine()\">FINALIZAR RUTINA</button>\n  </div>\n  <div *ngIf=\"showErrorAlert\" class=\"alert alert-danger col-12 mt-2\" role=\"alert\">\n    <strong>¡Ups!</strong> {{showAlert}}\n  </div>\n  <div *ngIf=\"showSuccessAlert\" class=\"alert alert-success col-12 mt-2\" role=\"alert\">\n    {{showAlertMail}}\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/routine-page/routine-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-exercise {\n  margin-bottom: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routine-page/routine-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoutinePageComponent = /** @class */ (function () {
    function RoutinePageComponent(route, apiService, authService, router) {
        var _this = this;
        this.route = route;
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.routine = { name: "", urlImagen: "" };
        this.activeUser = null;
        this.lockContent = true;
        this.activePlan = { idPlan: -1 };
        this.statusRoutine = 1;
        this.planState = { id: 0 };
        this.showErrorAlert = null;
        this.showSuccessAlert = null;
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
            if (_this.activeUser != null) {
                if (typeof _this.activeUser['uid'] != 'undefined') {
                    _this.getPlanUser();
                    _this.getPlanState();
                }
                else {
                    _this.activePlan = { idPlan: -1 };
                }
            }
            else {
                _this.activePlan = { idPlan: -1 };
            }
        });
    }
    RoutinePageComponent.prototype.getPlanUser = function () {
        var _this = this;
        this.apiService.getPlanProgressByUser(this.activeUser.uid)
            .then(function (result) {
            _this.activePlan = result;
        });
    };
    RoutinePageComponent.prototype.getPlanState = function () {
        var _this = this;
        this.apiService.getPlanByUser(this.activeUser.uid)
            .then(function (result) {
            _this.planState = result;
        });
    };
    RoutinePageComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getRoutine();
        this.getExercises();
    };
    RoutinePageComponent.prototype.ngAfterViewInit = function () {
        if (this.activeUser) {
            this.lockContent = !this.getUserstatus();
        }
    };
    RoutinePageComponent.prototype.getParams = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.idPlan = +params['idPlan'];
            _this.namePlan = params['namePlan'];
            _this.idRoutine = +params['idRoutine'];
        });
    };
    RoutinePageComponent.prototype.getExercises = function () {
        var _this = this;
        this.apiService.getExercisesByRoutine(this.idRoutine)
            .then(function (data) {
            _this.exercises = data;
            _this.exercises.forEach(function (exercise, index) {
                _this.apiService.getImg(exercise.urlImage)
                    .then(function (imageUrl) {
                    _this.exercises[index].urlImage = imageUrl;
                });
            });
        });
    };
    RoutinePageComponent.prototype.getRoutine = function () {
        var _this = this;
        this.apiService.getRoutineById(this.idRoutine)
            .then(function (data) {
            _this.routine = data;
            _this.apiService.getImg(_this.routine.urlImagen)
                .then(function (imageUrl) {
                _this.routine.urlImagen = imageUrl;
            });
        });
    };
    RoutinePageComponent.prototype.getUserstatus = function () {
        if (this.activeUser.uid) {
            this.apiService.getUserStatus(this.activeUser.uid)
                .then(function (result) {
                return result;
            })
                .catch(function () {
                return false;
            });
        }
        else {
            return false;
        }
    };
    RoutinePageComponent.prototype.initRoutine = function () {
        var _this = this;
        if (this.activeUser) {
            var start = { "Cus_Id": this.activeUser.uid, "Cup_Id": this.planState.id, "Rou_Id": this.idRoutine };
            this.apiService.postInitRoutine(start)
                .then(function (result) {
                _this.statusRoutine = 2;
                var routerLink = "./plan/" + _this.idPlan + "/myplan/routine/" + _this.idRoutine + "/current-routine/exercise/" + _this.exercises[0].id + "/" + _this.exercises[0].name.split(' ').join('-').toLowerCase();
                window.location.href = routerLink;
                return result;
            })
                .catch(function (error) {
                _this.showErrorAlert = error;
                return false;
            });
        }
        else {
            var routerLink = "./plan/" + this.idPlan + "/myplan/routine/" + this.idRoutine + "/current-routine/exercise/" + this.exercises[0].id + "/" + this.exercises[0].name.split(' ').join('-').toLowerCase();
            window.location.href = routerLink;
        }
    };
    RoutinePageComponent.prototype.endRoutine = function () {
        var _this = this;
        if (this.activeUser) {
            if (confirm("¿Desea finalizar la rutina?")) {
                var end = { "Cus_Id": this.activeUser.uid, "Cup_Id": this.planState.id, "Rou_Id": this.idRoutine };
                this.apiService.postEndRoutine(end)
                    .then(function (result) {
                    _this.router.navigate(['plan/' + _this.idPlan + '/' + _this.namePlan]);
                    return result;
                })
                    .catch(function (error) {
                    _this.showErrorAlert = error;
                    return false;
                });
            }
        }
        else {
            this.router.navigate(['plan/' + this.idPlan + '/' + this.namePlan]);
        }
    };
    RoutinePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-routine-page',
            template: __webpack_require__("../../../../../src/app/routine-page/routine-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routine-page/routine-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RoutinePageComponent);
    return RoutinePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routine; });
var Routine = /** @class */ (function () {
    function Routine() {
    }
    return Routine;
}());



/***/ }),

/***/ "../../../../../src/app/sidebarmenu/sidebarmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebarmenu works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/sidebarmenu/sidebarmenu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebarmenu/sidebarmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarmenuComponent = /** @class */ (function () {
    function SidebarmenuComponent() {
    }
    SidebarmenuComponent.prototype.ngOnInit = function () {
    };
    SidebarmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebarmenu',
            template: __webpack_require__("../../../../../src/app/sidebarmenu/sidebarmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebarmenu/sidebarmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarmenuComponent);
    return SidebarmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <div class=\"row text-center align-items-center\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"z-index: 10;\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"col-12\">\n      <h2>Ingresa tu código</h2>\n      <p><small>Revisa tu bandeja de mensajes, se te ha enviado un número<br>de 6 dígitos vía SMS al teléfono:</small></p>\n      <h4>{{telephone}}</h4>\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"form-group col-6\">\n          <input type=\"number\" class=\"form-control\" name=\"codeverification\" [(ngModel)]=\"codeverification\">\n        </div>\n      </div>\n      <!--<h4>No recibiste el código?</h4>\n      <h4 class=\"linkeable\" >Click acá y te lo reenviaremos</h4>-->\n      <button class=\"btn\" (click)=\"validateCode()\">Registrar</button>\n      <button class=\"btn\" (click)=\"openModalTelephone()\">USAR OTRO TELÉFONO</button>\n    </div>\n    <div *ngIf=\"showAlert\" class=\"alert alert-danger col-12 mt-2\" role=\"alert\">\n      <strong>¡Ups!</strong> {{showAlert}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  background-color: #000;\n  color: #fff; }\n\n.close {\n  position: absolute;\n  top: .5em;\n  right: .5em; }\n\n.linkeable {\n  color: orangered;\n  text-decoration: underline; }\n\n.linkeable:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelephoneConfirmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_data1_register_data1_component__ = __webpack_require__("../../../../../src/app/register-data1/register-data1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__telephone_modal_telephone_modal_component__ = __webpack_require__("../../../../../src/app/telephone-modal/telephone-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TelephoneConfirmModalComponent = /** @class */ (function () {
    function TelephoneConfirmModalComponent(activeModal, modalService, authService, apiService, router) {
        var _this = this;
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.activeUser = null;
        this.authService.afAuth.authState.subscribe(function (currentUser) {
            _this.activeUser = currentUser;
        });
    }
    TelephoneConfirmModalComponent.prototype.ngOnInit = function () {
    };
    TelephoneConfirmModalComponent.prototype.openModalRegister1 = function () {
        this.activeModal.close('Close click');
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__register_data1_register_data1_component__["a" /* RegisterData1Component */]);
        modalRef.componentInstance.setOperator(this.operator);
    };
    TelephoneConfirmModalComponent.prototype.openModalTelephone = function () {
        this.activeModal.close('Close click');
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__telephone_modal_telephone_modal_component__["a" /* TelephoneModalComponent */]);
    };
    /*sendMsm(){
      if(this.telephone != null){
        console.log(completeNumber);
        this.authService.sendLoginCode(this.recaptchaVerifier, completeNumber)
        .then(data => {
          this.confirmationResult = data;
          this.openModalTelephoneConfirm();
        })
        .catch(error => {
          console.error('Error send message');
        });
      }
    }*/
    TelephoneConfirmModalComponent.prototype.setConfirmationResult = function (data) {
        this.confirmationResult = data;
    };
    TelephoneConfirmModalComponent.prototype.setOperator = function (id) {
        this.operator = id;
    };
    TelephoneConfirmModalComponent.prototype.setTelephone = function (phone) {
        this.telephone = phone;
    };
    TelephoneConfirmModalComponent.prototype.validCode = function () {
        this.showAlert = null;
        var valid = true;
        if (this.codeverification.toString().length == 5) {
            this.codeverification = "0" + this.codeverification.toString();
        }
        if (this.codeverification.toString().length != 6) {
            this.showAlert = "Parece que el código esta erróneo. Debe ser de 6 dígitos, no " + this.codeverification.toString().length;
            valid = false;
        }
        return valid;
    };
    TelephoneConfirmModalComponent.prototype.validateCode = function () {
        var _this = this;
        if (this.validCode()) {
            if (this.codeverification.toString().length == 5) {
                this.codeverification = "0" + this.codeverification.toString();
            }
            this.authService.verifyLoginCode(this.confirmationResult, this.codeverification.toString(), "", "", "")
                .then(function (userFire) {
                if (userFire['isNewUser']) {
                    _this.openModalRegister1();
                }
                else {
                    _this.apiService.getUserStatus(userFire["uid"])
                        .then(function () {
                        _this.activeModal.close();
                        _this.router.navigate(['/my-account']);
                    })
                        .catch(function () {
                        _this.apiService.createUser(userFire['uid'], userFire['phoneNumber'], userFire['displayName'], userFire['email'], "", 1, 50, 150, true, 1, "http://influencemeapp.com/", 1, 1, 1, 0)
                            .then(function (resultApi) {
                            _this.activeModal.close();
                            _this.router.navigate(['/my-account']);
                        });
                    });
                }
            })
                .catch(function (error) {
                if (error.code == "auth/account-exists-with-different-credential") {
                    _this.showAlert = "Ya existe una cuenta con estos datos.";
                }
                else if (error.code == "auth/invalid-verification-code") {
                    _this.showAlert = "El código de validación es inválido, verifíquelo e intente de nuevo.";
                }
                else {
                    _this.showAlert = "Error: " + error.message;
                }
            });
        }
    };
    TelephoneConfirmModalComponent.prototype.changeFocus = function (e, toFocus) {
        toFocus.focus();
    };
    TelephoneConfirmModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-telephone-confirm-modal',
            template: __webpack_require__("../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], TelephoneConfirmModalComponent);
    return TelephoneConfirmModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/telephone-modal/telephone-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n  <div class=\"row text-center align-items-center\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"z-index: 10;\" (click)=\"activeModal.close('Close click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"col-12\">\n      <h2>Ingresa tu <br>número móvil</h2>\n      <p *ngIf=\"fromFacebook\"><small>Para Ingresar con Facebook debes proporcionar tu número móvil.</small></p>\n      <p><small>Te enviaremos un mensaje de texto con tu código de validación. Por favor<br>verifica que el teléfono este escrito correctamente.</small></p>\n      <div class=\"row\">\n        <div class=\"form-group col-12 col-md-3\">\n          <select class=\"form-control\" name=\"country\" [(ngModel)]=\"indCode\">\n            <option *ngFor=\"let country of countries; let i = index\" [ngValue]=\"country\" [attr.selected]='i == 0 ? \"selected\" : null'>\n              {{country.name}} (+{{country.code}})\n            </option>\n          </select>\n        </div>\n        <div class=\"form-group col-12 col-md-5\">\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Tu teléfono\" required>\n          <small *ngIf=\"indCode.id == 12\">Por ejemplo: 3101234567</small>\n          <small *ngIf=\"indCode.id == 18\">Por ejemplo: 809-123-1234</small>\n        </div>\n        <div class=\"form-group col-12 col-md-4\">\n          <select class=\"form-control\" name=\"operator\" [(ngModel)]=\"operator\">\n            <option value=\"0\" selected>Selecciona tu operador</option>\n            <ng-container *ngFor=\"let operatoritem of operators; let i = index\">\n              <option *ngIf=\"indCode.id == operatoritem.idCountry && operatoritem.state\" [ngValue]=\"operatoritem.id\">\n                {{operatoritem.name}}\n              </option>\n            </ng-container>\n          </select>\n        </div>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\" for=\"defaultCheck1\">\n          <small class=\"clicktos\" (click)=\"openTos()\">Acepto los términos y condiciones</small>\n        </label>\n        <input class=\"form-check-input mt-2 ml-2\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\" name=\"tos\" [(ngModel)]=\"tos\">\n      </div>\n      <button class=\"btn\" (click)=\"sendMsm()\" [disabled]=\"!tos\">ENVIAR SMS</button>\n    </div>\n    <div *ngIf=\"showAlert\" class=\"alert alert-danger col-12 mt-2\" role=\"alert\">\n      <strong>¡Ups!</strong> {{showAlert}}\n    </div>\n    <div class=\"mb-5\"></div>\n    <div class=\"col-12 mt-5\">\n      <div id=\"frm-register-captcha\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/telephone-modal/telephone-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body {\n  background-color: #000;\n  color: #fff; }\n\n.close {\n  position: absolute;\n  top: .5em;\n  right: .5em; }\n\n.clicktos:hover {\n  color: orangered;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/telephone-modal/telephone-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelephoneModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__telephone_confirm_modal_telephone_confirm_modal_component__ = __webpack_require__("../../../../../src/app/telephone-confirm-modal/telephone-confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TelephoneModalComponent = /** @class */ (function () {
    function TelephoneModalComponent(activeModal, modalService, authService, apiService) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.authService = authService;
        this.apiService = apiService;
        this.countries = [{ code: '57', name: "Colombia", id: 12 }];
        this.operators = [];
        this.operator = 0;
        this.fromFacebook = false;
    }
    TelephoneModalComponent.prototype.ngOnInit = function () {
        this.loadCountries();
        this.loadOperators();
    };
    TelephoneModalComponent.prototype.loadCountries = function () {
        var _this = this;
        this.apiService.getCountries()
            .then(function (data) {
            _this.countries = data;
            var tempCountries = [];
            _this.countries.forEach(function (element, index) {
                if (element.id == 18 || element.id == 12) {
                    tempCountries.push(element);
                }
            });
            _this.countries = tempCountries;
            _this.indCode = _this.countries[0];
        });
    };
    TelephoneModalComponent.prototype.callFromFacebook = function () {
        this.fromFacebook = true;
    };
    TelephoneModalComponent.prototype.initCaptcha = function () {
        var _this = this;
        this.authService.initCaptcha('frm-register-captcha')
            .then(function (captcha) {
            _this.recaptchaVerifier = captcha;
        });
    };
    TelephoneModalComponent.prototype.ngAfterViewInit = function () {
        this.initCaptcha();
    };
    TelephoneModalComponent.prototype.openModalTelephoneConfirm = function () {
        var completeNumber = "+" + this.indCode.code + this.phone;
        this.activeModal.close('Close click');
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__telephone_confirm_modal_telephone_confirm_modal_component__["a" /* TelephoneConfirmModalComponent */]);
        modalRef.componentInstance.setConfirmationResult(this.confirmationResult);
        modalRef.componentInstance.setOperator(this.operator);
        modalRef.componentInstance.setTelephone(completeNumber);
    };
    TelephoneModalComponent.prototype.loadOperators = function () {
        var _this = this;
        this.apiService.getOperators()
            .then(function (data) {
            _this.operators = data;
        });
    };
    TelephoneModalComponent.prototype.validateForm = function () {
        this.showAlert = null;
        var valid = true;
        if (!this.indCode.code || !this.phone || this.phone.length < 8 || !this.operator || this.operator == 0) {
            valid = false;
            this.showAlert = "Parece que hay campos vacíos o inválidos.";
        }
        return valid;
    };
    TelephoneModalComponent.prototype.sendMsm = function () {
        var _this = this;
        if (this.validateForm()) {
            var completeNumber = "+" + this.indCode.code + this.phone;
            if (this.fromFacebook) {
                this.authService.linkWithPhoneNumber(completeNumber, this.recaptchaVerifier)
                    .then(function (data) {
                    _this.confirmationResult = data;
                    _this.openModalTelephoneConfirm();
                })
                    .catch(function (error) {
                    console.error('Error send message from link');
                });
            }
            else {
                this.authService.sendLoginCode(this.recaptchaVerifier, completeNumber)
                    .then(function (data) {
                    _this.confirmationResult = data;
                    _this.openModalTelephoneConfirm();
                })
                    .catch(function (error) {
                    console.error('Error send message from primary');
                });
            }
        }
    };
    TelephoneModalComponent.prototype.openTos = function () {
        window.open('http://influencemeapp.com/tos', '_blank');
    };
    TelephoneModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-telephone-modal',
            template: __webpack_require__("../../../../../src/app/telephone-modal/telephone-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/telephone-modal/telephone-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], TelephoneModalComponent);
    return TelephoneModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tos/tos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-header-page [title]=\"'TÉRMINOS Y CONDICIONES'\" [image]=\"'../../assets/img/slice2.jpg'\"></app-header-page>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p>Los Términos y Condiciones Generales del presente documento y demás políticas y principios que lo rigen se aplican al uso de servicios ofrecidos por InfluenceME (Aplicación móvil) Responsabilidad de We Venture SRL. Con Domicilio  en Av. Winston Churchill 111, Local 205. Santo Domingo , República Dominicana. Como también la información y los servicios puestos a disposición en y a través de la Aplicación. Le pedimos que lea y comprenda estos Términos y Condiciones, ya que ellos establecen un Acuerdo que lo vincula a usted, el usuario, con InfluenceME.</p>\n      <h4>ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES</h4>\n      <p>Su uso de la Aplicación indica su aceptación de estos Términos y Condiciones. Si no acepta estos Términos y Condiciones, no podrá usar la Aplicación. Los Términos estarán sujetos a cambios, y estos se harán sin previo aviso. Cualquier cambio a estos Términos y Condiciones serán efectivos de manera inmediata luego de su publicación en la Aplicación. Le exhortamos a estar al tanto de ellos.</p>\n      <h4>SERVICIO DE SUSCRIPCIÓN</h4>\n      <p>Servicio de suscripcion proporcionado por WE VENTURE SRL a los operadores de telefonía móvil en el territorio de República Dominicana.</p>\n      <p>Si eres usuario de Compañía Dominicana de Telefonos, S.A (CLARO), CLARO no se hace responsable del contenido presentado por WE VENTURE SRL. El usuario debera hacer clic en el botón \"Aceptar\" en el portal para activar la suscripción ó enviar la palabra FIT al número corto 5004 para suscribirse. El usuario recibirá 1 SMS por dia con el contenido solicitado, así como también el acceso al día de entrenamiento según el plan seleccionado por el usuario. Costo del servicio: RD10+ Imp. x SMS recibido y día de acceso al entrenamiento dentro del portal. Para cancelar el servicio, el usuario deberá enviar un mensaje de texto SMS con la palabra SALIR al numero 5004 ó visitar la sección “Perfil” dentro del APP y seleccionar la opción “Cancelar suscripción” y dentro de esta opción escribir la palabra “Eliminar”.</p>\n      <p>Si eres usuario de Altice Dominicana, S.A (ALTICE), ALTICE no se hace responsable del contenido presentado por WE VENTURE SRL. El usuario debera hacer clic en el botón \"Aceptar\" en el portal para activar la suscripción ó enviar la palabra ENTRAR al número corto 3081 para suscribirse. El usuario recibirá 1 SMS por dia con el contenido solicitado, así como también el acceso al día de entrenamiento según el plan seleccionado por el usuario. Costo del servicio: RD12.5+ Imp. x SMS recibido y día de acceso al entrenamiento dentro del portal. Para cancelar el servicio, el usuario deberá enviar un mensaje de texto SMS con la palabra SALIR al numero 3081 o visitar la sección “Perfil” dentro del APP y seleccionar la opción “Cancelar suscripción” y dentro de esta opción escribir la palabra “Eliminar”.</p>\n      <h4>PROPIEDAD INTELECTUAL</h4>\n      <p>Los texto, gráficos, diseños, logotipos, iconos de botones, imágenes, clips de audio y video, recopilación de datos e información y contenidos en la Aplicación son propiedad o están sujetos a la protección de derechos de autor con regimiento Internacional. Cada producto digital y contenido en línea vendido tiene licencia solo para un usuario. Los clientes no pueden copiar, distribuir, compartir y / o transferir el / los producto / s (y / o sus nombres de usuario / contraseñas asociados) que compraron a un tercero o persona. En algunos casos We Venture SRL.; puede encriptar, forzar la contraseña y / o sellar los detalles de la licencia (incluyendo el nombre del cliente, dirección, etc.) en sus productos digitales para garantizar seguridad adicional.</p>\n      <p>En caso de que se produzca un error de compra, contáctenos a través de info@whopmobile.com para analizar una solución.</p>\n      <p>Ninguno de estos términos y condiciones afecta sus derechos legales.</p>\n      <h4>AL USUARIO</h4>\n      <p>El USUARIO se compromete a notificar a InfluenceME los elementos, datos e información correcta para el procesamiento de su pedido y la prestación de los servicios contratados, como se solicita.</p>\n      <p>El USUARIO es completamente responsable de las consecuencias derivadas de la transmisión de información falsa, incorrecta o imprecisa.</p>\n      <p>Todos los datos e información del USUARIO deberán ser actualizados en el registro del sitio siempre que haya algún cambio. Por lo tanto, el USUARIO debe conectarse al sitio indicando su nombre de usuario y contraseña, entrar a la sección \"perfil” y modificar la información deseada.</p>\n      <p>El USUARIO se compromete a no revender y a no utilizar los servicios con finalidad comercial.</p>\n      <p>El nombre de USUARIO y la contraseña respectiva registrados en el Sitio son responsabilidad exclusiva e integral del USUARIO. Por lo tanto el USUARIO responderá por cualquier acto realizado por terceros que haya cometido una conducta ilegal o indebida a través de los datos registrados.</p>\n      <p>El USUARIO deberá informar inmediatamente al InfluenceME, y por escrito, el extravío, pérdida o robo de su nombre de usuario o contraseña, para que se tomen las medidas necesarias.</p>\n      <p>EL USUARIO  acepta total responsabilidad, asume todo riesgo, y desliga y/o libera a InfluenceME de cualquier , lesión, reclamo o daños de manera directa o indirecta ocasionados por el uso de la Aplicación, con o sin supervisión adecuada del uso e independientemente si usted fue negligente en tal uso.</p>\n      <p>EL USUARIO confirma y verifica que es física y mentalmente capaz de usar la Aplicación, y acepta conscientemente y con conocimiento de causa de todos los riesgos asociados con su uso.</p>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/tos/tos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tos/tos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TosComponent = /** @class */ (function () {
    function TosComponent() {
    }
    TosComponent.prototype.ngOnInit = function () {
    };
    TosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tos',
            template: __webpack_require__("../../../../../src/app/tos/tos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tos/tos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TosComponent);
    return TosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trainer; });
var Trainer = /** @class */ (function () {
    function Trainer() {
    }
    return Trainer;
}());



/***/ }),

/***/ "../../../../../src/assets/img/Background2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Background2.d7c2b1331e03417fbc9d.png";

/***/ }),

/***/ "../../../../../src/assets/img/slice1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slice1.e7e30b6316e92986be42.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC1yE3Jft9NBOph7YFLnom8qZHJ-UMazuA",
        authDomain: "influenceme-bca7d.firebaseapp.com",
        databaseURL: "https://influenceme-bca7d.firebaseio.com",
        projectId: "influenceme-bca7d",
        storageBucket: "influenceme-bca7d.appspot.com",
        messagingSenderId: "460396177087"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
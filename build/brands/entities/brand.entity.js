"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSchema = exports.Brand = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Brand = /** @class */ (function (_super) {
    __extends(Brand, _super);
    function Brand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brand._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; } }, image: { required: true, type: function () { return String; } } };
    };
    __decorate([
        mongoose_1.Prop({ required: true, unique: true }),
        __metadata("design:type", String)
    ], Brand.prototype, "name", void 0);
    __decorate([
        mongoose_1.Prop({ required: true }),
        __metadata("design:type", String)
    ], Brand.prototype, "image", void 0);
    Brand = __decorate([
        mongoose_1.Schema()
    ], Brand);
    return Brand;
}(mongoose_2.Document));
exports.Brand = Brand;
exports.BrandSchema = mongoose_1.SchemaFactory.createForClass(Brand);
//# sourceMappingURL=brand.entity.js.map
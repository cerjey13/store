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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var create_brand_dto_1 = require("./create-brand.dto");
var UpdateBrandDto = /** @class */ (function (_super) {
    __extends(UpdateBrandDto, _super);
    function UpdateBrandDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateBrandDto._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: false, type: function () { return String; } }, image: { required: false, type: function () { return String; } } };
    };
    return UpdateBrandDto;
}(swagger_1.PartialType(create_brand_dto_1.CreateBrandDto)));
exports.UpdateBrandDto = UpdateBrandDto;
//# sourceMappingURL=update-brand.dto.js.map
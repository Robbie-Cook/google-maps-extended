"use strict";
/**
 *  A GoogleMapsExtended.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GoogleMapsExtended = /** @class */ (function () {
    function GoogleMapsExtended() {
    }
    /**
     * Get a vendors country from a Google Maps API code
     */
    GoogleMapsExtended.getVendorCountryCode = function (vendorLocationsData) {
        var _a;
        if (vendorLocationsData) {
            for (var _i = 0, _b = vendorLocationsData === null || vendorLocationsData === void 0 ? void 0 : vendorLocationsData.address_components; _i < _b.length; _i++) {
                var address_component = _b[_i];
                if ((_a = address_component === null || address_component === void 0 ? void 0 : address_component.types) === null || _a === void 0 ? void 0 : _a.includes("country")) {
                    return address_component.short_name;
                }
            }
        }
        return null;
    };
    /**
     * Get a vendors city from a Google Maps API code
     */
    GoogleMapsExtended.getVendorCity = function (vendorLocationsData) {
        var _a;
        if (vendorLocationsData) {
            for (var _i = 0, _b = vendorLocationsData === null || vendorLocationsData === void 0 ? void 0 : vendorLocationsData.address_components; _i < _b.length; _i++) {
                var address_component = _b[_i];
                if ((_a = address_component === null || address_component === void 0 ? void 0 : address_component.types) === null || _a === void 0 ? void 0 : _a.includes("locality")) {
                    return address_component.short_name;
                }
            }
        }
        return null;
    };
    return GoogleMapsExtended;
}());
exports.default = GoogleMapsExtended;
//# sourceMappingURL=index.js.map
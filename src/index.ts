type ResponseItem = {
  address_components: Array<{
    long_name: string;
    short_name: string; // Country code
    types: string[];
  }>;
};

type GoogleMapsResponse = Array<ResponseItem> | null;

export default class GoogleMapsExtended {
  /**
   * Get a vendors country from a Google Maps API code
   */
  static getVendorCountryCode(
    vendorLocationsData: ResponseItem
  ): string | null {
    if (vendorLocationsData) {
      for (const address_component of vendorLocationsData?.address_components) {
        if (address_component?.types?.includes("country")) {
          return address_component.short_name;
        }
      }
    }
    return null;
  }

  /**
   * Get a vendors city from a Google Maps API code
   */
  static getVendorCity(vendorLocationsData: ResponseItem): string | null {
    if (vendorLocationsData) {
      for (const address_component of vendorLocationsData?.address_components) {
        if (address_component?.types?.includes("locality")) {
          return address_component.short_name;
        }
      }
    }
    return null;
  }
}

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
   * Get a country from a Google Maps API code
   */
  static getCountryCode(LocationsData: ResponseItem): string | null {
    if (LocationsData) {
      for (const address_component of LocationsData?.address_components) {
        if (address_component?.types?.includes("country")) {
          return address_component.short_name;
        }
      }
    }
    return null;
  }

  /**
   * Get a city from a Google Maps API code
   */
  static getCity(LocationsData: ResponseItem): string | null {
    if (LocationsData) {
      for (const address_component of LocationsData?.address_components) {
        if (
          address_component?.types?.includes("locality")
        ) {
          return address_component.short_name;
        }
      }

      // Handle Tokyo
      for (const address_component of LocationsData?.address_components) {
        if (
          address_component?.types?.includes("administrative_area_level_1")
        ) {
          return address_component.short_name;
        }
      }
    }
    return null;
  }
}

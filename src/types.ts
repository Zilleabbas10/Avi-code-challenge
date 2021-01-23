
  export type SvgIconType = {
    fillColor?: string;
    scale?: number;
    height?: number;
    width?: number;
  };

  export type GeolocationType = {
    lat?: number;
    lon?: number;
    zoom?: number;
  };

  export type PracticeType = {
    name: string;
    id: number;
    state?: string;
    city?: string;
    postCode?: string;
    geolocation?: object
  };
  
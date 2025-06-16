
import { GeoJSON, Marker, Polygon, Polyline } from "leaflet";
export type LayerGraphic  = L.Marker | L.Polyline | L.Polygon
export type Geometry  = GeoJSON.Point | GeoJSON.Polygon | GeoJSON.LineString
export class GeometryProviderUtil {
 static toLayer(params: {
  shape: Geometry;
  properties?: any;
  options?: L.MarkerOptions | L.PolylineOptions | L.CircleMarkerOptions;
 }) {
  const { shape, properties } = params;
  let geometry: LayerGraphic | undefined;
  let latlngs;
  switch (shape.type) {
   case "Point":
    latlngs = GeoJSON.coordsToLatLng(shape.coordinates as [number,number]);
    geometry = new Marker(latlngs, params.options);
    break;
   case "LineString":
    latlngs = GeoJSON.coordsToLatLngs(
     shape.coordinates,
     0,
     GeoJSON.coordsToLatLng
    );
    geometry = new Polyline<GeoJSON.LineString>(latlngs, params.options);
    break;
  //  case "MultiLineString":
  //   latlngs = GeoJSON.coordsToLatLngs(
  //    shape.coordinates as [number,number][],
  //    1,
  //    GeoJSON.coordsToLatLng
  //   );
  //   geometry = new Polyline<GeoJSON.MultiLineString>(latlngs, params.options);
  //   break;
   case "Polygon":
    latlngs = GeoJSON.coordsToLatLngs(
     shape.coordinates,
     1,
     GeoJSON.coordsToLatLng
    );
    geometry = new Polygon(latlngs, params.options);
    break;
  //  case "MultiPolygon":
  //   latlngs = GeoJSON.coordsToLatLngs(
  //    shape.coordinates,
  //    2,
  //    GeoJSON.coordsToLatLng
  //   );
  //   geometry = new Polygon(latlngs, params.options);
  //   break;
  }
  if (geometry) {
   if (properties) {
    const tmproperties = { ...properties };
    delete tmproperties.shape;
    geometry.feature = {
     properties,
     geometry: shape as any,
     type: "Feature",
    };
   }
  } else {
   throw new Error("Không thể chuyển đổi");
  }
  return geometry;
 }
}

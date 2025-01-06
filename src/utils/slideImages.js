import { URL_BASE } from "../const/url";

export const imagesToSlideshow =(imagenes) => {

  return imagenes.map((a) => {
    const original = `${URL_BASE}/api/laminas/getImage${a.temaID}/${posicion}`;
    const thumbnail = original;
    return ({original, thumbnail});
  });
};
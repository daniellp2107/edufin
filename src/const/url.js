import pjson from "../../package.json";

export const ver = pjson.version;
export const nameProject = pjson.name;

export const { ambiente } = window["runConfig"];
export const { URL_BASE } = window["runConfig"];

export const _URL = `${URL_BASE}/api`;



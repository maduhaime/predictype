/**
 * Enums and types for URL predicate operations.
 *
 * @module urls/enums
 */
export enum UrlHrefEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlHrefOper = UrlHrefEnum | `${UrlHrefEnum}`;

export enum UrlOriginEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlOriginOper = UrlOriginEnum | `${UrlOriginEnum}`;

export enum UrlProtocolEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlProtocolOper = UrlProtocolEnum | `${UrlProtocolEnum}`;

export enum UrlHostEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlHostOper = UrlHostEnum | `${UrlHostEnum}`;

export enum UrlHostnameEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlHostnameOper = UrlHostnameEnum | `${UrlHostnameEnum}`;

export enum UrlPortEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlPortOper = UrlPortEnum | `${UrlPortEnum}`;

export enum UrlPathnameEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlPathnameOper = UrlPathnameEnum | `${UrlPathnameEnum}`;

export enum UrlSearchEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlSearchOper = UrlSearchEnum | `${UrlSearchEnum}`;

export enum UrlHashEnum {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  INCLUDES = 'includes',
  EXCLUDES = 'excludes',
}

export type UrlHashOper = UrlHashEnum | `${UrlHashEnum}`;

export enum UrlStateEnum {
  HAS_HASH = 'has_hash',
  HAS_SEARCH = 'has_search',
  HAS_PORT = 'has_port',
  HAS_USERNAME = 'has_username',
  HAS_PASSWORD = 'has_password',
  IS_HTTP = 'is_http',
  IS_HTTPS = 'is_https',
  IS_WS = 'is_ws',
  IS_WSS = 'is_wss',
}

export type UrlStateOper = UrlStateEnum | `${UrlStateEnum}`;

/**
 * Enums and types for object predicate operations.
 *
 * @module objects/enums
 */
export enum ObjectAttributesEnum {
  IS_ACCESSOR = 'is_accessor',
  IS_CONFIGURABLE = 'is_configurable',
  IS_DATA_PROPERTY = 'is_data_property',
  IS_ENUMERABLE = 'is_enumerable',
  IS_WRITABLE = 'is_writable',
}

export type ObjectAttributesOper = ObjectAttributesEnum | `${ObjectAttributesEnum}`;

export enum ObjectInstanceEnum {
  IS_CLASS = 'is_class',
  IS_CONSTRUCTOR = 'is_constructor',
  IS_FUNCTION_INSTANCE = 'is_function_instance',
  IS_INSTANCE_OF = 'is_instance_of',
  IS_OBJECT_INSTANCE = 'is_object_instance',
}

export type ObjectInstanceOper = ObjectInstanceEnum | `${ObjectInstanceEnum}`;

export enum ObjectKeyEnum {
  HAS_KEY = 'has_key',
  LACKS_KEY = 'lacks_key',
}

export type ObjectKeyOper = ObjectKeyEnum | `${ObjectKeyEnum}`;

export enum ObjectKeysEnum {
  HAS_ALL_KEYS = 'has_all_keys',
  HAS_ANY_KEY = 'has_any_key',
  HAS_ANY_PROPERTY = 'has_any_property',
  HAS_EXACT_KEYS = 'hasExactKeys',
  HAS_NO_KEYS = 'hasNoKeys',
  HAS_ONLY_KEYS = 'has_only_keys',
  HAS_SYMBOL_KEYS = 'has_symbol_keys',
  MATCHES_KEYS = 'matches_keys',
  ONLY_KEYS = 'only_keys',
}

export type ObjectKeysOper = ObjectKeysEnum | `${ObjectKeysEnum}`;

export enum ObjectMembershipEnum {
  HAS_PROPERTY = 'has_property', // inclut prototype chain
  NOT_HAS_PROPERTY = 'not_has_property',
  HAS_OWN_PROPERTY = 'has_own_property', // pas prototype
  NOT_HAS_OWN_PROPERTY = 'not_has_own_property',
}

export type ObjectMembershipOper = ObjectMembershipEnum | `${ObjectMembershipEnum}`;

export enum ObjectPrototypeEnum {
  HAS_PROTOTYPE = 'has_prototype', // ajout
  IS_PROTOTYPE_OF = 'is_prototype_of',
  PROTOTYPE_IS_NULL = 'prototype_is_null', // ajout
}

export type ObjectPrototypeOper = ObjectPrototypeEnum | `${ObjectPrototypeEnum}`;

export enum ObjectStateEnum {
  HAS_ARRAY_PROP = 'has_array_prop',
  HAS_CAMELCASE_KEYS = 'has_camelcase_keys',
  HAS_FUNCTION_PROP = 'has_function_prop', // ajout
  HAS_NESTED_OBJECT = 'has_nested_object',
  HAS_NO_KEYS = 'has_no_keys',
  HAS_NO_UNDEFINED = 'has_no_undefined',
  HAS_NULL_PROTO = 'has_null_proto',
  HAS_NUMERIC_KEYS = 'has_numeric_keys',
  HAS_SYMBOL_KEYS = 'has_symbol_keys',
  HAS_SYMBOLS = 'has_symbols', // ajout
  INHERITS_OBJECT = 'inherits_object',
  IS_CLONEABLE = 'is_cloneable', // ajout
  IS_EMPTY = 'is_empty',
  IS_EXTENSIBLE = 'is_extensible',
  IS_FROZEN = 'is_frozen',
  IS_HOMOGENEOUS = 'is_homogeneous',
  IS_ITERABLE = 'is_iterable',
  IS_JSON_SERIALIZABLE = 'is_json_serializable', // ajout
  IS_PLAIN = 'is_plain',
  IS_SEALED = 'is_sealed',
  IS_TYPED_OBJECT = 'is_typed_object', // ajout (Map, Set, Date…)
}

export type ObjectStateOper = ObjectStateEnum | `${ObjectStateEnum}`;

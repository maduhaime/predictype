/**
 * Enums and types for object predicate operations.
 *
 * @module objects/enums
 */
export enum ObjectAttributesEnum {
  ATTR_IS_ACCESSOR = 'attr_is_accessor',
  ATTR_IS_CONFIGURABLE = 'attr_is_configurable',
  ATTR_IS_DATA_PROPERTY = 'attr_is_data_property',
  ATTR_IS_ENUMERABLE = 'attr_is_enumerable',
  ATTR_IS_WRITABLE = 'attr_is_writable',
}

export type ObjectAttributesOper = ObjectAttributesEnum | `${ObjectAttributesEnum}`;

export enum ObjectInstanceRelationEnum {
  INSTANCE_OF = 'instance_of',
  PROTOTYPE_OF = 'prototype_of',
}

export type ObjectInstanceRelationOper = ObjectInstanceRelationEnum | `${ObjectInstanceRelationEnum}`;

export enum ObjectInstanceTypeEnum {
  INSTANCE_OF_CLASS = 'instance_of_class',
  INSTANCE_OF_CONSTRUCTOR = 'instance_of_constructor',
  INSTANCE_OF_FUNCTION = 'instance_of_function',
  INSTANCE_OF_OBJECT = 'instance_of_object',
}
export type ObjectInstanceTypeOper = ObjectInstanceTypeEnum | `${ObjectInstanceTypeEnum}`;

export enum ObjectKeyEnum {
  CONTAINS_KEY = 'contains_key',
  LACKS_KEY = 'lacks_key',
}

export type ObjectKeyOper = ObjectKeyEnum | `${ObjectKeyEnum}`;

export enum ObjectKeyMembershipEnum {
  IN = 'in',
  NOT_IN = 'not_in',
}

export type ObjectKeyMembershipOper = ObjectKeyMembershipEnum | `${ObjectKeyMembershipEnum}`;

export enum ObjectKeysEnum {
  CONTAINS_ALL_KEYS = 'contains_all_keys',
  CONTAINS_ANY_KEY = 'contains_any_key',
  CONTAINS_ONLY_KEYS = 'contains_only_keys',
  CONTAINS_SYMBOL_KEYS = 'contains_symbol_keys',
  EQUALS_KEYS = 'equals_keys',
  LACKS_ALL_KEYS = 'lacks_all_keys',
  ONLY_KEYS = 'only_keys',
  STRICT_EQUALS_KEYS = 'strict_equals_keys',
}

export type ObjectKeysOper = ObjectKeysEnum | `${ObjectKeysEnum}`;

export enum ObjectKeysStateEnum {
  HAS_CAMELCASE_KEYS = 'has_camelcase_keys',
  HAS_HOMOGENEOUS_KEYS = 'has_homogeneous_keys',
  HAS_NUMERIC_KEYS = 'has_numeric_keys',
  HAS_SYMBOL_KEYS = 'has_symbol_keys',
}
export type ObjectKeysStateOper = ObjectKeysStateEnum | `${ObjectKeysStateEnum}`;

export enum ObjectPropertyEnum {
  CONTAINS_OWN_PROPERTY = 'contains_own_property',
  CONTAINS_PROPERTY = 'contains_property',
  LACKS_OWN_PROPERTY = 'lacks_own_property',
  LACKS_PROPERTY = 'lacks_property',
}

export type ObjectPropertyOper = ObjectPropertyEnum | `${ObjectPropertyEnum}`;

export enum ObjectPrototypeRelationEnum {
  CONTAINS_PROTOTYPE = 'contains_prototype',
  IS_PROTOTYPE_OF = 'is_prototype_of',
}

export type ObjectPrototypeRelationOper = ObjectPrototypeRelationEnum | `${ObjectPrototypeRelationEnum}`;

export enum ObjectPrototypeStateEnum {
  PROTOTYPE_IS_NULL = 'prototype_is_null',
}

export type ObjectPrototypeStateOper = ObjectPrototypeStateEnum | `${ObjectPrototypeStateEnum}`;

export enum ObjectStateEnum {
  HAS_ARRAY_PROP = 'has_array_prop',
  HAS_CAMELCASE_KEYS = 'has_camelcase_keys',
  HAS_FUNCTION_PROP = 'has_function_prop',
  HAS_NESTED_OBJECT = 'has_nested_object',
  HAS_NO_KEYS = 'has_no_keys',
  HAS_NO_UNDEFINED = 'has_no_undefined',
  HAS_NULL_PROTO = 'has_null_proto',
  HAS_NUMERIC_KEYS = 'has_numeric_keys',
  HAS_SYMBOL_KEYS = 'has_symbol_keys',
  HAS_SYMBOLS = 'has_symbols',
  INHERITS_OBJECT = 'inherits_object',
  IS_CLONEABLE = 'is_cloneable',
  IS_EMPTY = 'is_empty',
  IS_EXTENSIBLE = 'is_extensible',
  IS_FROZEN = 'is_frozen',
  IS_HOMOGENEOUS = 'is_homogeneous',
  IS_ITERABLE = 'is_iterable',
  IS_JSON_SERIALIZABLE = 'is_json_serializable',
  IS_NOT_EMPTY = 'is_not_empty',
  IS_PLAIN = 'is_plain',
  IS_SEALED = 'is_sealed',
  IS_TYPED_OBJECT = 'is_typed_object',
}

export type ObjectStateOper = ObjectStateEnum | `${ObjectStateEnum}`;

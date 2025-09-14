import { ObjectInstanceEnum, ObjectInstanceOper } from '../../enums/objects.js';

/**
 * Checks object instance/type characteristics using the specified operation.
 *
 * @param value The value to check.
 * @param oper The instance operation to perform (e.g. 'is_class', 'is_instance_of').
 * @param other The second value to compare against (constructor for 'is_instance_of', object for 'is_prototype_of', etc.).
 * @returns True if the instance check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * class Foo {}
 * const foo = new Foo();
 * function Bar() {}
 *
 * objectInstance(foo, 'is_instance_of', Foo); // true
 * objectInstance(Bar, 'is_class'); // false (not a class)
 * objectInstance(Bar, 'is_constructor'); // true
 * objectInstance(Foo.prototype, 'is_prototype_of', foo); // true
 */
export function objectInstance(value: any, oper: ObjectInstanceOper, other?: any): boolean {
  const operators: Record<ObjectInstanceEnum, (v: any, c?: any) => boolean> = {
    [ObjectInstanceEnum.IS_CLASS]: (v) =>
      typeof v === 'function' && /^class\s/.test(Function.prototype.toString.call(v)),
    [ObjectInstanceEnum.IS_CONSTRUCTOR]: (v) => typeof v === 'function',
    [ObjectInstanceEnum.IS_FUNCTION_INSTANCE]: (v) => typeof v === 'function',
    [ObjectInstanceEnum.IS_INSTANCE_OF]: (v, c) => typeof c === 'function' && v instanceof c,
    [ObjectInstanceEnum.IS_OBJECT_INSTANCE]: (v) => v !== null && typeof v === 'object',
    [ObjectInstanceEnum.IS_PROTOTYPE_OF]: (v, c) => {
      // v.isPrototypeOf(c) where v is the prototype, c is the object
      if (v == null || (typeof v !== 'object' && typeof v !== 'function')) return false;
      if (c == null || (typeof c !== 'object' && typeof c !== 'function')) return false;
      return Object.prototype.isPrototypeOf.call(v, c);
    },
  };

  const enumOper = typeof oper === 'string' ? (oper as ObjectInstanceEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown ObjectInstance operation: ${oper}`);
  return fn(value, other);
}

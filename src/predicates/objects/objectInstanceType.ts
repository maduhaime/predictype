import { ObjectInstanceTypeEnum, ObjectInstanceTypeOper } from '../../enums/objects.js';

/**
 * Checks the type of an instance using the specified operation.
 *
 * @param source The value to check.
 * @param oper The type operation to perform.
 * @returns True if the type check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * class User {}
 * const classCtor = User;
 * const plain = { id: 1 };
 *
 * objectInstanceType(classCtor, 'instance_of_class'); // true
 * objectInstanceType(classCtor, 'instance_of_function'); // true
 * objectInstanceType(plain, 'instance_of_object'); // true
 *
 * @remarks
 * Supported Operators:
 * - **instance_of_class**: value is a class constructor
 * - **instance_of_constructor**: value is a constructor/function
 * - **instance_of_function**: value is a function
 * - **instance_of_object**: value is a non-null object
 */
export function objectInstanceType(source: any, oper: ObjectInstanceTypeOper): boolean {
  const operators: Record<ObjectInstanceTypeEnum, (v: any) => boolean> = {
    // eslint-disable-next-line arrow-body-style
    [ObjectInstanceTypeEnum.INSTANCE_OF_CLASS]: (v) => {
      return typeof v === 'function' && /^class\s/.test(Function.prototype.toString.call(v));
    },
    [ObjectInstanceTypeEnum.INSTANCE_OF_CONSTRUCTOR]: (v) => typeof v === 'function',
    [ObjectInstanceTypeEnum.INSTANCE_OF_FUNCTION]: (v) => typeof v === 'function',
    [ObjectInstanceTypeEnum.INSTANCE_OF_OBJECT]: (v) => v !== null && typeof v === 'object',
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown ObjectInstanceType operation: ${oper}`);
  return fn(source);
}

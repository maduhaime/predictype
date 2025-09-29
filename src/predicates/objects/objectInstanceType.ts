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
 * @remarks
 * Supported Operators:
 * - **INSTANCE_OF_CLASS**: Is a class constructor
 * - **INSTANCE_OF_CONSTRUCTOR**: Is a constructor function
 * - **INSTANCE_OF_FUNCTION**: Is a function
 * - **INSTANCE_OF_OBJECT**: Is an object
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

  const enumOper = typeof oper === 'string' ? (oper as ObjectInstanceTypeEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown ObjectInstanceType operation: ${oper}`);
  return fn(source);
}

import { BigIntMembershipEnum, BigIntMembershipOper } from '../../enums/bigints.js';

/**
 * Checks if a bigint value is (or is not) a member of a set of bigints using the specified operation.
 *
 * @param source The source bigint value.
 * @param oper The membership operation to perform (e.g. 'is_one_of', 'is_not_one_of').
 * @param set The array of bigints to check membership against.
 * @returns True if the membership check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const value1 = BigInt(5);
 * const value2 = BigInt(3);
 * const arr = [BigInt(1), BigInt(2), BigInt(5)];
 *
 * bigintMembership(value1, 'is_one_of', arr); // true
 * bigintMembership(value2, 'is_not_one_of', arr); // true
 *
 * @remarks
 * Supported Operators
 * | Operator   | Description                        |
 * |------------|------------------------------------|
 * | IN         | value is in the set                |
 * | NOT_IN     | value is not in the set            |
 */
export function bigintMembership(source: bigint, oper: BigIntMembershipOper, set: bigint[]): boolean {
  const operators: Record<BigIntMembershipEnum, (a: bigint, b: bigint[]) => boolean> = {
    [BigIntMembershipEnum.IN]: (a, b) => b.includes(a),
    [BigIntMembershipEnum.NOT_IN]: (a, b) => !b.includes(a),
  };

  const enumOper = typeof oper === 'string' ? (oper as BigIntMembershipEnum) : oper;
  const fn = operators[enumOper];

  if (!fn) throw new Error(`Unknown BigIntMembership operation: ${oper}`);
  return fn(source, set);
}

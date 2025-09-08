import { FunctionStateEnum, FunctionStateOper } from './enums';

/**
 * Checks the state of a function (e.g. async, generator, constructor, arrow, anonymous, has name) using the specified operation.
 *
 * @param source The function to check.
 * @param oper The state operation to perform (e.g. 'is_async', 'is_arrow').
 * @returns True if the state check is valid according to the operator, otherwise false.
 *
 * @throws {Error} If the operation is not recognized.
 *
 * @example
 * const asyncFn = async function foo() {};
 * const genFn = function* gen() {};
 *
 * functionState(asyncFn, 'is_async'); // true
 * functionState(genFn, 'is_generator'); // true
 * functionState(() => {}, 'is_arrow'); // true
 * functionState(function() {}, 'is_anonymous'); // true
 * functionState(function named() {}, 'has_name'); // true
 */
export function functionState(source: Function, oper: FunctionStateOper): boolean {
  const operators: Record<FunctionStateEnum, (a: Function) => boolean> = {
    [FunctionStateEnum.HAS_NAME]: (a) => typeof a.name === 'string' && a.name.length > 0,
    [FunctionStateEnum.IS_ASYNC]: (a) => a.constructor.name === 'AsyncFunction',
    [FunctionStateEnum.IS_GENERATOR]: (a) => a.constructor.name === 'GeneratorFunction',
    [FunctionStateEnum.IS_CONSTRUCTOR]: (a) => a.prototype !== undefined,
    [FunctionStateEnum.IS_ARROW]: (a) => !a.prototype && !a.hasOwnProperty('prototype'),
    [FunctionStateEnum.IS_ANONYMOUS]: (a) => !a.name || a.name === '',
  };
  const enumOper = typeof oper === 'string' ? (oper as FunctionStateEnum) : oper;
  const fn = operators[enumOper];
  if (!fn) throw new Error(`Unknown FunctionState operation: ${oper}`);
  return fn(source);
}

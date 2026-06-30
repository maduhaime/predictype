import { UrlPortEnum, UrlPortOper } from '../../enums/urls.js';

/**
 * Checks the port string of a URL using the specified operation.
 */
export function urlPort(source: URL, oper: UrlPortOper, target: string): boolean {
  const operators: Record<UrlPortEnum, (a: URL, b: string) => boolean> = {
    [UrlPortEnum.EQUALS]: (a, b) => a.port === b,
    [UrlPortEnum.NOT_EQUALS]: (a, b) => a.port !== b,
    [UrlPortEnum.STARTS_WITH]: (a, b) => a.port.startsWith(b),
    [UrlPortEnum.ENDS_WITH]: (a, b) => a.port.endsWith(b),
    [UrlPortEnum.INCLUDES]: (a, b) => a.port.includes(b),
    [UrlPortEnum.EXCLUDES]: (a, b) => !a.port.includes(b),
  };

  const fn = operators[oper];

  if (!fn) throw new Error(`Unknown UrlPort operation: ${oper}`);
  return fn(source, target);
}

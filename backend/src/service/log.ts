import log, { Debugger } from 'debug';

export function debug(message: string): Debugger {
    return log('crud-backend').extend(message);
}
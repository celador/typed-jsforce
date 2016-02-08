declare function jsforce (namespace: string): jsforce.Debugger;

declare module jsforce {
  export interface Debugger {
    (message: any, ...args: any[]): void;
    enabled: boolean;
    namespace: string;
  }

  export function coerce (value: any): any;
  export function disable (): void;
  export function enable (namespaces: string): void;
  export function enabled (namespace: string): boolean;
  export var humanize: typeof ms;
}

export = jsforce;

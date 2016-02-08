// Type definitions for jsforce v1.5.1
// Project: https://github.com/jsforce/jsforce
// Definitions by: JohnAaronNelson <https://github.com/celador>
/// <reference path="./typings/main/ambient/node/node.d.ts" />

declare module 'jsforce' {
    namespace jsforce {

        interface jsforce extends NodeJS.EventEmitter {

        }

        interface Connection {
            tooling: any;
            request: any;
            query: any;
            login(name: string, password: string): any;
        }

        interface UserInfo {
            id: string; // User ID
            organizationId: string; // Organization ID
            url: string; // Identity URL of the user
        }

    }

    var jsforce: jsforce.jsforce;

    export = jsforce;
}

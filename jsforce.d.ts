// Type definitions for jsforce v1.5.1
// Project: https://github.com/jsforce/jsforce
// Definitions by: JohnAaronNelson <https://github.com/celador>
/// <reference path="./typings/main/ambient/node/node.d.ts" />
    
declare module 'jsforce' {

    interface jsforce {
        Connection: Connection;
        OAuth2: OAuth2;// require('./oauth2');
        Promise: Promise;// require('./promise');
        registry: FileRegistry;
        RecordStream: RecordStream;// require('./record-stream');
        SfDate: SfDate;// require("./date");
        VERSION: string;// pkg.version;
    }

    interface Connection extends NodeJS.EventEmitter {
        new (options: ConnectionOptions);
        analytics: Analytics;
        apex: Apex;
        bulk: Bulk;
        cache: Cache;
        chatter: Chatter;
        metadata: Metadata;
        oauth2: OAuth2;
        process: Process;
        soap: SoapApi;
        streaming: Streaming;
        tooling: Tooling;
        authorize(authCode: string, callback?: () => {}): PromiseLike<UserInfo>;
        create(type: string, records: any | Array<any>, options?: {}, callback?: () => {}): PromiseLike<(RecordResult | Array<RecordResult>)>;
        del(type: string, ids: string | Array<string>, options?: {}, callback?: () => {}): PromiseLike<(RecordResult | Array<RecordResult>)>;
        delete(type: string, ids: string | Array<string>, options?: {}, callback?: () => {}): PromiseLike<(RecordResult | Array<RecordResult>)>;
        destroy(type: string, ids: string | Array<string>, options?: {}, callback?: () => {}): PromiseLike<(RecordResult | Array<RecordResult>)>;
        deleted(type: string, start: string | Date, end: string | Date, callback?: () => {}): PromiseLike<DeletedRecordsInfo>;
        describe(type: string, callback?: () => {}): PromiseLike<DescribeSObjectResult>;
        request(): any;
        query(): any;
        login(name: string, password: string): any;
    }

    interface OAuth2 {
        new (options: OAuthConfigOptions);
        loginUrl?: string; // Salesforce login server URL
        authzServiceUrl?: string; // OAuth2 authorization service URL. If not specified, it generates from default by adding to login server URL.
        tokenServiceUrl?: string; // OAuth2 token service URL. If not specified it generates from default by adding to login server URL.
        clientId: string; // OAuth2 client ID.
        clientSecret: string; // OAuth2 client secret.
        redirectUri: string;  // URI to be callbacked from Salesforce OAuth2 authorization service.
    }

    interface FileRegistry {

    }

    interface SfDate {
        new ();
        toString(): Date;
        toJSON(): Date;
        parseDate(str: string): Date;
        toDateLiteral(date: Date): SfDate
        toDateTimeLiteral(date: Date): SfDate
    }

    interface RecordStream extends NodeJS.ReadableStream {
        new ();
        filter(fn): {}; // RecordStream.Serializable;
        map(fn): {}; // {RecordStream.Serializable}
        recordMapStream(record, noeval?): {}; // {RecordStream.Serializable}
    }

    interface Promise {
        new ();
        all(promises): PromiseLike<Array<any>>;// {Promise.<Array.<*>>}
        defer(): PromiseLike<any>;// {Deferred}
        reject(reason): PromiseLike<any>;// {Promise}
        resolve(result): PromiseLike<any>;// {Promise}
        catch(onRejected): PromiseLike<{}>;// {Promise.<S>}
        fail(onRejected): PromiseLike<{}>;// {Promise.<S>}
        then(onFulfilled?): PromiseLike<{}>;// {Promise.<(S1)>}
        then(onFulfilled?, onRejected?): PromiseLike<{}>;// {Promise.<(S1|S2)>}
        thenCall(callback?): PromiseLike<any>;// {Promise}
    }

    interface OAuthConfigOptions {
        loginUrl?: string;// loginUrl	string	<optional>
        authzServiceUrl?: string;// authzServiceUrl	string	<optional>
        tokenServiceUrl?: string;// tokenServiceUrl	string	<optional>
        clientId?: string;// clientId	string		OAuth2 client ID.
        clientSecret?: string;// clientSecret	string		OAuth2 client secret.
        redirectUri?: string;// redirectUri	string		URI to be callbacked from Salesforce OAuth2 authorization service.
    }

    interface ConnectionOptions {
        oauth2?: OAuth2 | {}; // OAuth2 instance or options to be passed to OAuth2 constructor
        logLevel?: string; // Output logging level (DEBUG|INFO|WARN|ERROR|FATAL)
        version?: string; // Salesforce API Version (without "v" prefix)
        maxRequest?: number; // Max number of requests allowed in parallel call
        loginUrl?: string; // Salesforce Login Server URL (e.g. https://login.salesforce.com/)
        instanceUrl?: string; // Salesforce Instance URL (e.g. https://na1.salesforce.com/)
        serverUrl?: string; // Salesforce SOAP service endpoint URL (e.g. https://na1.salesforce.com/services/Soap/u/28.0)
        accessToken?: string; // Salesforce OAuth2 access token
        sessionId?: string; // Salesforce session ID
        refreshToken?: string; // Salesforce OAuth2 refresh token
        signedRequest?: string | {}; // Salesforce Canvas signed request (Raw Base64 string, JSON string, or deserialized JSON)
        proxyUrl?: string; // Cross-domain proxy server URL, used in browser client, non Visualforce app.
        callOptions?: {}; // Call options used in each SOAP/REST API request. See manual.
    }

    interface UserInfo {
        id: string; // User ID
        organizationId: string; // Organization ID
        url: string; // Identity URL of the user
    }
    interface RecordResult {

    }

    interface Analytics {

    }
    interface Apex {

    }
    interface Bulk {

    }
    interface Cache {

    }
    interface Chatter {

    }
    interface Metadata {

    }
    interface OAuth2 {

    }
    interface Process {

    }
    interface SoapApi {

    }
    interface Streaming {

    }
    interface Tooling {

    }
    interface DeletedRecordsInfo {
        earliestDateAvailable: string; // The timestamp of the earliest date available
        latestDateCovered: string; // The timestamp of the last date covered
        deletedRecords: Array<DeletedRecord> // Updated records
    }
    interface DeletedRecord {
        id: string; //  Record ID
        deletedDate: string; //  The timestamp when this record was deleted
    }
    interface DescribeSObjectResult {

    }

    export = jsforce;
}

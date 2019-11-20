// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
// Then we find all the tests.
// const context = require.context('./app', true, /\.spec\.ts$/);

// MILE: if you want to only to run your test files do something like this
const context = require.context('./app', true, /\.m-spec\.ts$/);

// And load the modules.
context.keys().map(context);

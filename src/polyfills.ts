/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Buffer from '../node_modules/buffer/index';
(window as any).global = window;
(window as any).process = {};
(window as any).process = window;
(window as any).process.browser = true;
(window as any).process.version = '';
(window as any).process.versions = { node: false };
(window as any).global.Buffer = Buffer.Buffer;
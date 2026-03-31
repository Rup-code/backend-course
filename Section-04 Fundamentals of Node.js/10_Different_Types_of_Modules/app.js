// Native Module or Core Modules
// import fs from 'fs';
import fs from 'node:fs'; // better practice
import net from 'node:net';
import dgram from 'node:dgram';
import http from 'node:http';
import https from 'node:https';
import child_process from 'node:child_process';
import cluster from 'node:child_process';
import zlib from 'node:zlib';
import worker_threads from 'node:worker_threads';
import crypto from 'node:crypto';

// User module
import { num } from "./math.js";

// NPM Modules
import axios from 'axios';

console.log(typeof fs);


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var dotenv = require("dotenv");
var express = require("express");
var cow_1 = require("./controller/cow/cow");
var graph_1 = require("./controller/cow/graph");
var milkCow_1 = require("./controller/cow/milkCow");
var report_1 = require("./controller/cow/report");
var driver_1 = require("./controller/driver/driver");
var toDo_1 = require("./controller/to-do/toDo");
var data_source_1 = require("./data-source");
var login_1 = require("./login/login");
var app = express();
var port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
dotenv === null || dotenv === void 0 ? void 0 : dotenv.config({ path: './.env' });
data_source_1.AppDataSource.initialize()
    .then(function (resp) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Here you can setup and run express / fastify / any other framework.');
        return [2 /*return*/];
    });
}); })
    .catch(function (err) {
    console.error('Error during Data Source initialization:', err);
});
app.use(function (req, resp, next) {
    console.log(req.body);
    next();
});
app.use(login_1.default);
app.use('/driver', driver_1.default);
app.use('/cow/meat', cow_1.default);
app.use('/cow/milk', milkCow_1.default);
app.use('/cow/milk/reporting', report_1.default);
app.use('/cow/milk/graph', graph_1.default);
app.use('/to-do', toDo_1.default);
app.get('/app', login_1.authenticationToken, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(req.body.message);
        return [2 /*return*/];
    });
}); });
app.get('', function (reqest, response) {
    response.status(200)
        .send('Please feel free to contribute here https://github.com/Vorkurt/flow-ring');
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
//# sourceMappingURL=server.js.map
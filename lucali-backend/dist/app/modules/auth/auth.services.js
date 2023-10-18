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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const auth_utils_1 = require("./auth.utils");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { number: phoneNumber, password } = payload;
    //check user exists
    const checkUserExist = yield prisma_1.default.user.findFirst({
        where: {
            number: phoneNumber,
        },
    });
    if (!checkUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exists');
    }
    //match password
    if (checkUserExist.password &&
        !(0, auth_utils_1.isPasswordMatched)(password, checkUserExist === null || checkUserExist === void 0 ? void 0 : checkUserExist.password)) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    const { name, number, role } = checkUserExist;
    // create access token(shortlife), refresh token(longlife)
    //access token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ name, number, role }, config_1.default.jwt.secret, { expiresIn: config_1.default.jwt.expires_in });
    //refresh token
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ name, number, role }, config_1.default.jwt.refresh_secret, { expiresIn: config_1.default.jwt.refresh_expires_in });
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    //verify token
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
        //in verifiedToken, we get user id, role, timestamps
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid refresh token');
    }
    const { number } = verifiedToken;
    //checking deleted user using refresh token
    //check user exists
    const checkUserExist = yield prisma_1.default.user.findFirst({
        where: {
            number,
        },
    });
    if (!checkUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exists');
    }
    //generate new token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({
        name: checkUserExist === null || checkUserExist === void 0 ? void 0 : checkUserExist.name,
        number: checkUserExist === null || checkUserExist === void 0 ? void 0 : checkUserExist.number,
        role: checkUserExist === null || checkUserExist === void 0 ? void 0 : checkUserExist.role,
    }, config_1.default.jwt.secret, { expiresIn: config_1.default.jwt.expires_in });
    return {
        accessToken,
    };
});
exports.AuthService = {
    loginUser,
    refreshToken,
};

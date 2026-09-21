const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const nativewindConfig = withNativewind(config);

nativewindConfig.transformerPath = require.resolve("./metro.transformer.js");
nativewindConfig.resolver.assetExts = nativewindConfig.resolver.assetExts.filter(
    (ext) => ext !== "svg"
);
if (!nativewindConfig.resolver.sourceExts.includes("svg")) {
    nativewindConfig.resolver.sourceExts.push("svg");
}

module.exports = nativewindConfig;

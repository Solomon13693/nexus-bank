const { createRequire } = require("node:module");
const { transform: svgrTransform } = require("@svgr/core");

const cssRequire = createRequire(require.resolve("react-native-css/metro"));
const cssTransformer = cssRequire("./metro-transformer");

const svgrConfig = {
    native: true,
    plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
    svgoConfig: {
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        removeViewBox: false,
                        convertColors: false,
                    },
                },
            },
        ],
    },
    replaceAttrValues: {
        "#fff": "{props.color}",
        "#FFF": "{props.color}",
        "#ffffff": "{props.color}",
        "#FFFFFF": "{props.color}",
        white: "{props.color}",
        "#CBD5E1": "{props.color}",
        "#cbd5e1": "{props.color}",
        currentColor: "{props.color}",
    },
};

module.exports.transform = async function transform(
    config,
    projectRoot,
    filename,
    data,
    options
) {
    if (filename.endsWith(".svg")) {
        const jsx = await svgrTransform(data.toString("utf8"), svgrConfig, {
            filePath: filename,
        });

        return cssTransformer.transform(
            config,
            projectRoot,
            `${filename}.js`,
            Buffer.from(jsx),
            options
        );
    }

    return cssTransformer.transform(config, projectRoot, filename, data, options);
};

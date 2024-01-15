module.exports = {
    extends: './eslint-preset.js',
    rules: {
        'eqeqeq': 'error', // require === and !==
        'require-jsdoc': [
            0,
            {
                'require': {
                    'FunctionDeclaration': true,
                    'MethodDefinition': true,
                    'ClassDeclaration': true,
                    'ArrowFunctionExpression': true,
                    'FunctionExpression': true,
                },
            },
        ],
        // React
        // Use typescript
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
    },
};

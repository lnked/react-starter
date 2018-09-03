module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.{js,jsx,ts,tsx}',
        ],
        tests: [
            'src/**/__tests__/**/*.(ts|tsx|js|jsx)',
            'src/**/?(*.)(spec|test).(ts|tsx|js|jsx)',
        ],
    }
}

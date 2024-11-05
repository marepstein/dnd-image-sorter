/* eslint-disable @typescript-eslint/no-require-imports */
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const ignoreFolders = [
  "/build/",
  "node_modules/(?!(@tanstack)/)",
  "/.next",
  "/.open-next",
];

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
});

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ignoreFolders,
  transformIgnorePatterns: ignoreFolders,
  modulePaths: ["<rootDir>"],
  roots: ["<rootDir>"],
  moduleNameMapper,
};

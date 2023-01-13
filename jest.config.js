module.exports = {
  preset: "ts-jest",
  testEnvironment: 'jsdom',
  testMatch:[
    "**/?(*.)+(spec|test|unit).[jt]s?(x)"
  ],
  transform: {
    "^.+\\.[j|t]sx?$": "babel-jest",
    "^.+\\.vue?$": "@vue/vue3-jest",
    "^.+\\.tsx$": "ts-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "vue", "ts"],
}

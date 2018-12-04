TO RUN WITH CLI
================
jest sum --notify

JEST cli
========
https://jestjs.io/docs/en/cli.html

DEMO API
=========
https://reqres.in/api/users?page=1


REQUEST-PROMISE
===============
https://www.npmjs.com/package/request-promise


JEST Cheatsheet
===============
https://github.com/sapegin/jest-cheat-sheet


JEST CONFIG
===========

"jest": {
    "testRegex": "(__tests__/).*\\.(test|spec)\\.ts$",
    "testEnvironment": "node",
    "transform": {
      ".(ts|tsx)": "<rootDir>/preprocessor.js"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx"
    ],
    "coverageDirectory": "coverage",
    "coveragePathIgnorePatterns": [
      "src/.*.d.ts"
    ],
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx,js,jsx}",
      "!src/**/*.d.ts",
      "!src/**/i*.ts",
      "!**/*.d.ts"
    ]
  }

MOCK
======

// const literallyJustDateNow = () => Date.now();

// test('It should call and return Date.now()', () => {
//   const realDateNow = Date.now.bind(global.Date);
//   const dateNowStub = jest.fn(() => 1530518207007);
//   global.Date.now = dateNowStub;

//   expect(literallyJustDateNow()).toBe(1530518207007);
//   expect(dateNowStub).toHaveBeenCalled();

//   global.Date.now = realDateNow;
// });



TODO
=======
- Add security (api gateway)
- Asserations
- ENVOIRMENTS



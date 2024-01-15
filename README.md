# Tests for Tool Shop Demo application

## Tool Shop Demo Application

Repository: https://github.com/testsmith-io/practice-software-testing

Website: https://practicesoftwaretesting.com/#/

Follow instructions in app README

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- setup husky with: `npx husky install`
- prepare local env file: `cp .env-template .env`
- copy application main URL as value of `BASE_URL` variable in `.env` file

## Use

Run all tests:

```
npx playwright test
```

For more usage cases look in `package.json` scripts section.

## Test Cases

All test cases that have been automated are described in the docs/TEST_CASES.md

# AngularJS Phone Catalog Tutorial Application

This application has been upgraded using
[Phonecat Upgrade Tutorial](https://v6.angular.io/guide/upgrade#phonecat-upgrade-tutorial). Starting
application uses `1.5-snapshot` branch as a base.

## Upgrade steps

Steps executed and what necessary modifications have been made along the way. Some instructions are
sparse to avoid unnecessary copying of instructions from the official Upgrade Guide.

### Step 1 - Installing TypeScript

1. Installed following NPM packages:

- `@types/angular`: ^1.8.9
- `@types/angular-animate`: ^1.5.14
- `@types/angular-cookies`: ^1.8.4
- `@types/angular-mocks`: ^1.7.4
- `@types/angular-resource`: ^1.5.20
- `@types/angular-route`: ^1.7.6
- `@types/angular-sanitize`: ^1.8.4
- `@types/jasmine`: ^5.1.12
- `typescript`: 3.9.10

with following commands:

```bash
npm install @types/jasmine @types/angular @types/angular-animate @types/angular-cookies @types/angular-mocks @types/angular-resource @types/angular-route @types/angular-sanitize --save-dev
```

and

```bash
npm install typescript@3.9.10 --save-dev
```

The TypeScript version used is the oldest one that is able to compile the application.

2. Added two scripts to the `package.json`:

```json
{
  "tsc": "tsc",
  "tsc:w": "tsc -w",
  "..."
}
```

3. Added `tsconfig.json` file
  - Copied from here (github.com/angular/quickstart/blob/master/src/tsconfig.json)
4. Converted all JavaScript files to TypeScript by changing file extension
5. Converted component controller functions to TypeScript classes
6. Added TypeScript typing to:
  - `checkmark.filter.ts`
  - `phone.service.ts`
  - `phone-detail.component.ts`
  - `app.config.ts`
7. Added `app/**/*.js` to the [.gitignore](.gitignore) file to exclude built JavaScript files from
  version control.

When application is built, JavaScript files are emitted next to the TypeScript files to keep things
backwards compatible.

Note: upgrade guide doesn't contain `tsconfig.json` file.


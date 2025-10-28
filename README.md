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

### Step 2 - Installing Angular

1. Installed following NPM packages:

- `@angular/common`: 6.1.10
- `@angular/compiler`: 6.1.10
- `@angular/core`: 6.1.10
- `@angular/forms`: 6.1.10
- `@angular/http`: 6.1.10
- `@angular/platform-browser`: 6.1.10
- `@angular/platform-browser-dynamic`: 6.1.10
- `@angular/router`: 6.1.10
- `@angular/upgrade`: 6.1.10
- `angular-in-memory-web-api`: 0.6.1
- `systemjs`: 0.19.40
- `core-js`: 2.6.12
- `rxjs`: 6.6.7
- `zone.js`: 0.8.26

2. Added `systemjs.config.js` file
  - Copied from [here](https://github.com/angular/quickstart/blob/master/src/systemjs.config.js)
  - Modified by adding following packages:
    ```js
    packages: {
      app: { defaultExtension: 'js' },
      'rxjs/ajax': { main: 'index.js', defaultExtension: 'js' },
      'rxjs/operators': { main: 'index.js', defaultExtension: 'js' },
      'rxjs/testing': { main: 'index.js', defaultExtension: 'js' },
      'rxjs/websocket': { main: 'index.js', defaultExtension: 'js' },
      'rxjs': { main: 'index.js', defaultExtension: 'js' },
    }
    ```
  - Modified by changing `npm:` path to `/node_modules/` (was `node_modules/`)
  - Modified by changing `app` mapping to `/app` (was `app`)
  - Added `@angular/upgrade/static` mapping

Source: https://www.jeffryhouser.com/index.cfm/2018/5/16/Using-Angular-RXJS-and-SystemJS
Source: https://github.com/angular/angular/blob/6.1.10/integration/hello_world__systemjs_umd/src/systemjs.config.js

3. Moved `/app/index.html` to project root and added following tags to the `<head>` element:
```html
<head>@angular/upgrade/static
  <base href="/app/">
  <!-- Existing tags in between new ones -->
  <script src="/node_modules/core-js/client/shim.min.js"></script>
  <script src="/node_modules/zone.js/dist/zone.js"></script>
  <script src="/node_modules/systemjs/dist/system.src.js"></script>
  <script src="/systemjs.config.js"></script>
  <script>
    System.import('main.js').catch((err) => console.error(err));
  </script>
</head>
```

Note: Upgrade guide says to call `System.import('/app')`. It doesn't work because SystemJS cannot
find `/app` or `/app/index.js` file.

### Step 3 - Creating the AppModule

1. Renamed `app/app.module.ts` as `app/app.module.ajs.ts` (AngularJS version) and fixed file
  reference in `index.html`
2. Added `app/app.module.ts` file (Angular version)

### Step 4 - Bootstrapping a hybrid PhoneCat

1. Added `app/main.ts` file
2. Imported `UpgradeModule` to the `app/app.module.ts`
3. Removed `ng-app` HTML attribute from the `index.html` file's `<html>` tag

### Step 5 - Upgrading the Phone service

1. Imported `HttpModule` to the `app/app.module.ts`
2. Upgraded `Phone` service to use Angular's `Http` and have better typings
3. Marked `Phone` service as a provider to the `app/app.module.ts`
4. Modified components to use updated service together with RxJS and updated typings
5. Removed reference to the service file from the `index.html` file

### Step 6 - Upgrading Components

1. Imported `FormsModule` to the `app/app.module.ts`
2. Upgraded checkmark filter to pipe
3. Upgraded phone detail and list components to Angular
4. Added `app/ajs-upgraded-providers.ts` file and added it to the `app/app.module.ts`'s providers list
5. Removed reference to filter and component files from the `index.html` file

Note: minor difference between upgraded application and the guide; `templateUrl`s need to have full
path to the template file. So instead of path being `./phone-list.template.html`, it needs to be
`./phone-list/phone-list.template.html`. Without this change application will fail to initialize and
print out "http://localhost:8000/app/phone-list.template.html 404 Not Found" errors.

### Step 7 - AOT compile the hybrid app

Nothing to do here. We don't use AOT.


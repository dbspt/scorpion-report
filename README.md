# Scorpion Report
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Scorpion-core support pack.

### Installation

```console
$ npm install @dbservices/scorpion-report
```

### Example of use:
```typescript
import * as Report from "@dbservices/scorpion-report";

setTimeout(async function () {
  await Report.generate({
    jsonFile: "reports/cucumber_report.json",
    output: "reports/report.html",
  });
}, 1000);
```
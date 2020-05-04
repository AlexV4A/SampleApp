const coverage = require('protractor-e2e-coverage');
const path = require('path'); 

coverage.outdir = path.resolve(process.cwd(), '../test/e2e-stats/report');

var coveragePlugin = new coverage.CoveragePlugin();
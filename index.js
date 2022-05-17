const sass = require('sass');

const scssFilename = 'a.scss'
const result = sass.renderSync({
    file: scssFilename,
    includePaths:  ['/mnt/c/Users/patrick/IdeaProjects/test-sass', ''],
    sourceMapRoot: '.'
});

console.log('result', result)

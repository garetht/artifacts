var ghpages = require('gh-pages');

ghpages.publish('dist', {
        repo: 'git@github.com:garetht/artifacts.git'
    }, () => {
    console.log("successful")
});
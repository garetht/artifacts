var ghpages = require('gh-pages');

ghpages.publish('dist', {
        branch: 'main',
        repo: 'git@github.com:garetht/artifacts.git'
    }, () => {
    console.log("successful")
});
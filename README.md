A quick example of end-to-end testing with Protractor for use with and without AngularJS sites.

> Official Protractor documentation is here: [http://protractortest.org](http://protractortest.org).

## Getting Started
This example requires NodeJs `~0.10.x` install from here [NodeJs.org](http://nodejs.org/) 

Clone this repository and install dependencies, from the shell  
```
git clone https://github.com/bassman5/quick-protractor.git
cd quick-protractor
npm install
```

## Running tests
From the shell   
```
npm test 
```  
or  
```
./node_modules/protractor/bin/protractor test/protractor.conf.js
```

## Writing tests
The page pattern is used, see test/e2e/pages for the page definitions.  
test/e2e/spec/google_search_spec.js tests http://www.google.co.uk search (no Angular)  
test/e2e/spec/angularjs_homepage_spec.js and test/e2e/spec/todos_list_spec.js test http://www.angularjs.org

see node_modules/protractor/docs/referenceConf.js for the full set of Protractor configuration options


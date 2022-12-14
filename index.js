function receivesAFunction(cb) {
    console.log(cb());
}
receivesAFunction;



function returnsANamedFunction(name,cb) {
    return function cb(name) {

    }
}
returnsANamedFunction('Zach', function(name) {return 'Hello there, ' + name;});

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello World")
    }
}
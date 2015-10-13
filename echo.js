// echo should take a collection of strings and log each of them to the console independently.

// For example:

// echo();

// // Does not log anything.

// echo(['one']);

// // Logs:
// // 'one'

// echo(['one', 'two', 'three']);

// // Logs:
// // 'one'
// // 'two'
// // 'three'

function echo(input) {
  input ? iterate(arguments) : console.log("Logs:", '')
};

function iterate(args) {
  console.log("Logs:");
  Array.prototype.map.call(args, function(el) {
    console.log(el);
  });
}

echo('one', 'two', 'three');
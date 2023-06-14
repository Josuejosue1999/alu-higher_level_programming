#!/usr/bin/node
const args = process.argv.slice(2);
const firstArgument = args[0];

if (firstArgument !== undefined) {
  console.log(`${firstArgument} is ${args[1] !== undefined ? args[1] : 'undefined'}`);
} else {
  console.log(`undefined is undefined`);
}

#!/bin/env node
let time = new Date();

process.on('SIGINT', () => {process.exit(2);});
process.on('SIGQUIT', () => {process.exit(1);});
 
main();

async function main () {
  await wait(250);
  console.error(`  backend:server Listening on port 3002 ${stamp()}`);
  console.error(`  more stuff`);
  await wait(10000);
  console.error(`  done ${stamp()}`);
}

function wait (milliseconds) {
  return new Promise((accept, reject) => {
    setTimeout(() => accept(milliseconds), milliseconds);
  });
}

function stamp () {
  const t2 = new Date();
  const ret = t2 - time;
  time = t2;
  return '+' + ret + 'ms';
}

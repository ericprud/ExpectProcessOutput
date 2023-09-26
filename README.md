# ExpectProcessOutput
await specific output from ChildProcess's stdout and stderr; basically expect(1) for node

## debugging

It can be a pain to match std{out,err} in the `App.expect{Out,Err}` (e.g. `epxect(await Server.expectErr(/more stuff\n/)).toEqual(/more stuff\n/)`. Enabling debug can help but you don't want to see all the noise from babel:
[[
(base) PS1=09:21:38-eric@touchy:~/checkouts/LdHost/LdHostManager$ DEBUG=\*,-babel\* ./node_modules/.bin/jest test/LdHostManager-curl.test.js 
  test:LdHostManager-curl stderr has 1 expectors to match [[
  test:LdHostManager-curl 2023-09-26T07:21:44.414Z backend:server Listening on port 3002
  test:LdHostManager-curl 
  test:LdHostManager-curl ]] +0ms
  test:LdHostManager-curl   0: /(backend:server Listening on port (\d+).*\n)/ +1ms
]]

This shows the expecters and what they're expected to match.

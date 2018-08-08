'use strict'

const RuleTester = require('eslint').RuleTester

const tester = new RuleTester()
tester.run('no-literal-call', require('../rule/no-literal-call'), {
  valid: [],
  invalid: [],
})

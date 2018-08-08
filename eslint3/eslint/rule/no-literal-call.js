'use strict'

module.exports = function(context) {
  return {
    'ArrayExpression'() {
      console.log('配列リテラルを発見')
    }
  }
}

module.exports.schema = []

'use strict'

const LITERAL_TYPE = /^(?:Literal|ArrayExpression|ObjectExpression|TemplateLiteral)$/

module.exports = function(context) {
  return {
    'CallExpression'(node) {
      const callee = node.callee
      let message = null

      if (LITERAL_TYPE.test(callee.type)) {
        message = 'This is not a function.'
      }
      if (callee.type === 'ClassExpression') {
        message = 'Class constructors cannot be invoked without "new".'
      }

      if (message) {
        context.report({node: node, message: message})
      }
    }
  }
}

module.exports.schema = []

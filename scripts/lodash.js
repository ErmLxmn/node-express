const _ = require('lodash')

const lodash = {}

lodash.items = [1, [2, [3 , [4]]]]
lodash.newItems = _.flattenDeep(lodash.items)

module.exports = lodash
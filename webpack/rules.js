module.exports.config = [
...require('./rules/files').config,
...require('./rules/media').config,
...require('./rules/images').config,
...require('./rules/styles').config,
...require('./rules/fonts').config,
...require('./rules/scripts').config,
...require('./rules/template').config,
...require('./rules/markdown').config
]

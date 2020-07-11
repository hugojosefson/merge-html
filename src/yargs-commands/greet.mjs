const noop = () => {}

export default ({ generateGreeting, identity }) => ({
  command: 'greet <whom>',

  description: 'This command greets the person or entity <whom>.',

  builder: argv =>
    argv
      .option('l', {
        alias: 'language',
        default: 'en',
        description: 'Language of the greeting.',
        type: 'string',
      })
      .option('n', {
        alias: 'dry-run',
        description: "Don't actually greet.",
        type: 'boolean',
      }),

  handler: ({ whom, language, dryRun }) =>
    generateGreeting({ whom, language })
      .then(identity)
      .then(dryRun ? noop : console.log)
      .catch(err => {
        console.error('Caught error:', err.stack)
        process.exit(1)
      }),
})

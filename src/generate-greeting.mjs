import i18n from './i18n.mjs'

/**
 * Generates a greeting.
 *
 * @param {Object} options
 * @param {string} options.whom - Whom to greet.
 * @param {string} options.language - Optional. Language of greeting, `en` or `sv`. Default `en`.
 * @returns {Promise<string>} A Promise of a greeting.
 * @name generateGreeting
 */
export default async ({ whom, language } = {}) => {
  if (typeof whom === 'undefined') {
    throw new Error('You must specify who the greeting is for.')
  }

  const t = i18n(language)
  return t('greeting', { whom })
}

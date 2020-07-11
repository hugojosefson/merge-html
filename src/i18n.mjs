export default (language = 'en') => (key, data = {}) =>
  ({
    en: {
      greeting: `Hello, ${data.whom}!`,
    },
    sv: {
      greeting: `Hej, ${data.whom}!`,
    },
  }[language][key])

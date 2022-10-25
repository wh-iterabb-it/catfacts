const requireDir = require("require-dir");

const localization = requireDir("./localization");

/**
 *
 * @param {String} langName - ISO 639-2 Code
 * @returns {String} fact localized to the language
 */
function getLanguageFacts(langName) {
  for (const language in localization) {
    if (
      localization[language].ISO_LANG === langName ||
      localization[language].SHORT_LANG === langName
    ) {
      return localization[language].facts;
    }
  }

  return localization["eng-US"].facts;
}

/**
 * getSingle
 * @description A simple function to return a random catfact
 * @param {Number} ID - the specific index / unique id of a fact starting at 1
 * @param {String} lang
 * @returns {String} - a single fact about cats
 **/
function getSingle(ID = null, lang) {
  const facts = getLanguageFacts(lang);
  if (ID) {
    const id = ID - 1;
    return facts[id];
  }

  return facts[Math.floor(Math.random() * facts.length)];
}

/**
 * getSingle
 * @description A simple function to return multiple random catfacts
 * @param {Number} count is a required param the number of catfacts to return in an array
 * @param {String} lang
 * @returns {Array[String]} many facts returned
 **/
function getMany(count, lang) {
  const facts = getLanguageFacts(lang);
  return [...Array(facts.length).keys()]
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map((index) => facts[index]);
}

module.exports = { getSingle, getMany, getLanguageFacts };

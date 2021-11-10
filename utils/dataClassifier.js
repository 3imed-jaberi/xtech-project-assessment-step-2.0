import { dataNormalizer } from './dataNormalizer'

export function dataClassifier(data, i18nTitles) {
  // cleanup the comming data.
  const normalizedData = dataNormalizer(data)

  // 3 is a majic number for who read this code ...
  // so, 3 is the number of keys for Featured Destinations (id, title, imgSrcPath)

  // classifier
  const justBooked = normalizedData.filter((item) => Object.keys(item).length !== 3)
  const featuredDestinations = normalizedData.filter((item) => Object.keys(item).length === 3)

  return [
    {
      title: i18nTitles[0], // not the best way.
      data: justBooked
    }, {
      title: i18nTitles[1],
      data: featuredDestinations
    }
  ]
}

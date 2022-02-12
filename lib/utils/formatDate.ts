import siteMetadata from '@/data/siteMetadata'

const longDateTimeFormat: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

// const shortDateTimeFormat: Intl.DateTimeFormatOptions = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// }

const formatDate = (date: string) => {
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, longDateTimeFormat)

  return now
}

export default formatDate

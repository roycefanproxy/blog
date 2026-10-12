import siteMetadata from '@/data/siteMetadata'

const longDateTimeFormat: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

// Same as v1: show the weekday, e.g. "Thursday, 14 April 2022"
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(siteMetadata.locale, longDateTimeFormat)

export default formatDate

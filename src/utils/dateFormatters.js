const MONTHS_ES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

function getIsoDateParts(isoDate) {
  if (!isoDate) return null

  const [yearRaw, monthRaw, dayRaw] = isoDate.split('-')
  const year = Number(yearRaw)
  const month = Number(monthRaw)
  const day = Number(dayRaw)

  if (!year || !month || !day || month < 1 || month > 12) return null

  return { year, month, day }
}

export function formatLongDateEs(isoDate) {
  const parts = getIsoDateParts(isoDate)
  if (!parts) return '--'

  const { year, month, day } = parts
  return `${day} de ${MONTHS_ES[month - 1]} de ${year}`
}

export function formatShortDate(isoDate) {
  const parts = getIsoDateParts(isoDate)
  if (!parts) return '--'

  const { year, month, day } = parts
  const dd = String(day).padStart(2, '0')
  const mm = String(month).padStart(2, '0')
  return `${dd}/${mm}/${year}`
}

export function formatDateTimeEs(isoDate, time) {
  const parts = getIsoDateParts(isoDate)
  if (!parts) return '--'

  const { year, month, day } = parts
  return `${day} de ${MONTHS_ES[month - 1]} ${year}  ${time}`
}

export function formatRentalRangeEs(startDate, endDate) {
  const start = getIsoDateParts(startDate)
  const end = getIsoDateParts(endDate)

  if (!start || !end) return '--'

  if (start.year === end.year && start.month === end.month) {
    return `${start.day}-${end.day} de ${MONTHS_ES[start.month - 1]} de ${start.year}`
  }

  return `${formatLongDateEs(startDate)} - ${formatLongDateEs(endDate)}`
}

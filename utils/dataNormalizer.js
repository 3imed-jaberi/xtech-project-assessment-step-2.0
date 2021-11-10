export function dataNormalizer(data) {
  // cleanup the comming data.
  const cleanData = data.map(({ fields, sys: { id } }) => ({
    id,
    ...fields
  }))

  return cleanData
}

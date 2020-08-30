export const requestResponse = (res, err) => {
  if (err) {
    return { success: false, error: err, data: null }
  }
  return { success: true, error: null, data: res.data.slice(0, 20) || res }
}

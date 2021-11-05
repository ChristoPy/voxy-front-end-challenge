module.exports = (items, key, value) => items.filter(
    (item) => {
      const itemValue = item[key]

      if (!itemValue) return false
      const normalized = itemValue.toLowerCase()
      return normalized.includes(value.toLowerCase())
    },
  )

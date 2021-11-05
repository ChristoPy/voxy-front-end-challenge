const highest = (items, key) => [...items].sort((first, second) => second[key] - first[key])

const alphabetically = (items, key) => [...items].sort((first, second) => {
  if(first[key] < second[key]) return -1
  if(first[key] > second[key]) return 1
  return 0;
})

module.exports = {
  highest,
  alphabetically
}

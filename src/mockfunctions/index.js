export const breakfastItems = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 1,
        name: 'Muffin',
      },
      {
        id: 2,
        name: 'Omlette',
      },
    ])
  })
}

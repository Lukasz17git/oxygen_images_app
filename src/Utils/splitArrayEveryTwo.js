
const splitArrayEveryTwo = (arrayToConvert) => {
   const output = []
   for (let i = 0; i < arrayToConvert.length; i += 2) {
      const holder = [arrayToConvert[i]]
      if (i + 1 < arrayToConvert.length) holder.push(arrayToConvert[i + 1])
      output.push(holder)
   }
   return output
}

export default splitArrayEveryTwo

const splitArrayEveryTwo = (arrayToConvert) => {
   const output = []
   for (let i = 0; i < arrayToConvert.length; i += 2) {
      output.push([arrayToConvert[i], arrayToConvert[i + 1]])
   }
   return output
}

export default splitArrayEveryTwo
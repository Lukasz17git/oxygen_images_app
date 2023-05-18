const fs = require('fs')
const basePath = 'oxygen_images_app/'
/*

"critical": "node critical/generateCritical.cjs"

*/

const generateCritical = generateCriticalFonts
generateCritical()
const scriptStart = '<script>document.body.innerHTML+= `<div id="critical">'
const scriptEnd = '</div>`</script>\n'

function generateCriticalAssets(critical) {
   const imagesPath = basePath + 'CriticalImages'
   const iconsPath = basePath + 'CriticalIcons'
   const imagesCurrentPath = './public/CriticalImages'
   const iconsCurrentPath = './public/CriticalIcons'
   critical = critical + `<style>#critical>img[src^='/${imagesPath}/'],#critical>img[src^='/${iconsPath}/']{display:none;}</style>`
   const lastText = scriptEnd
   const txtOutputPath = './critical/critical.txt'
   fs.readdir(imagesCurrentPath, (err, files) => {
      files.forEach(file => critical += `<img src="/${imagesPath}/${file}" alt='${file}'>`)
      fs.readdir(iconsCurrentPath, (err, files) => {
         files.forEach(file => critical += `<img src="/${iconsPath}/${file}" alt='${file}'>`)
         critical += lastText
         fs.writeFile(txtOutputPath, critical, (error) => error && console.log(error))
      })
   })
}

function generateCriticalFonts() {
   const fontsPath = basePath + 'Fonts'
   const fontsCurrentPath = './public/Fonts'
   const formatsPriority = ['woff2', 'woff', 'ttf']
   fs.readdir(fontsCurrentPath, (err, files) => {
      const fonts = {}
      files.forEach(file => {
         const fontName = file.slice(0, file.lastIndexOf('.'))
         const extension = file.slice(file.lastIndexOf('.') + 1)
         if (!fonts[fontName]) fonts[fontName] = {}
         fonts[fontName][extension] = file
      })
      const bestSuportedFonts = Object.values(fonts).map(font => font[formatsPriority.find(fmt => font[fmt])])
      let critical = bestSuportedFonts.reduce((c, font) => c + `<link rel="preload" href="/${fontsPath}/${font}" as="font" type="font/${font.slice(font.lastIndexOf('.') + 1)}" crossorigin>`, scriptStart)
      critical = '\n' + critical
      generateCriticalAssets(critical)
   })
}

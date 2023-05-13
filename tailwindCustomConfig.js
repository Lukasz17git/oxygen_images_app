import { parseBoxShadowValue, formatBoxShadowValue } from 'tailwindcss/src/util/parseBoxShadowValue'
import flattenColorPalette from 'tailwindcss/src/util/flattenColorPalette'
import colors from 'tailwindcss/colors'

export const defaultColors = ((twColors) => {
   const mergedColors = {}

   for (const colorName in twColors) {
      const color = twColors[colorName]
      if (typeof color === 'string') {
         mergedColors[colorName] = color
         continue
      }
      for (let brightness in color) {
         const colorCode = color[brightness]
         mergedColors[`${colorName}-${brightness}`] = colorCode
         if (brightness === "50") brightness = "0"
         if (brightness === "950") brightness = "10"
         else brightness = brightness[0]
         mergedColors[`${colorName}-${brightness}`] = colorCode
      }
   }
   return mergedColors
})(colors)


export function addShadowAbbreviation({ matchUtilities, theme }) {
   // Used for shadow
   const transformValue = (value) => {
      if (typeof value === 'function') value = value({})
      if (Array.isArray(value)) value = value.join(', ')
      return value
   }

   matchUtilities(
      {
         s: (value) => {

            value = transformValue(value)
            let ast = parseBoxShadowValue(value)

            for (let shadow of ast) {
               if (!shadow.valid) continue;
               shadow.color = 'var(--tw-shadow-color)'
            }

            return {
               '--tw-shadow': value === 'none' ? '0 0 #0000' : value,
               '--tw-shadow-colored': value === 'none' ? '0 0 #0000' : formatBoxShadowValue(ast),
               'box-shadow': [`var(--tw-ring-offset-shadow, 0 0 #0000)`, `var(--tw-ring-shadow, 0 0 #0000)`, `var(--tw-shadow)`,].join(', '),
            }
         }
      },
      { values: theme('boxShadow'), type: ['shadow'] }
   )

   matchUtilities(
      {
         s: (value) => ({
            '--tw-shadow-color': typeof value === 'function' ? value({}) : value,
            '--tw-shadow': 'var(--tw-shadow-colored)',
         })
      },
      { values: flattenColorPalette(theme('boxShadowColor')), type: ['color', 'any'] }
   )
}

export function renameModifiers({ addVariant }) {
   addVariant('h', '&:hover')
   addVariant('f', '&:focus')
   addVariant('hf', ['&:hover', '&:focus'])
}

export function addAbbreviations({ addUtilities, matchUtilities, theme }) {

   matchUtilities(
      { o: (value) => ({ opacity: value }) },
      { values: theme('opacity') }
   )

   matchUtilities(
      { bgo: (value) => ({ "--tw-bg-opacity": value }) },
      { values: theme('opacity') }
   )
   matchUtilities(
      { g: (value) => ({ gap: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { gx: (value) => ({ columnGap: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { gy: (value) => ({ rowGap: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { t: (value) => ({ top: value }) },
      { values: theme('spacing'), supportsNegativeValues: true }
   );
   matchUtilities(
      { r: (value) => ({ right: value }) },
      { values: theme('spacing'), supportsNegativeValues: true }
   );
   matchUtilities(
      { b: (value) => ({ bottom: value }) },
      { values: theme('spacing'), supportsNegativeValues: true }
   );
   matchUtilities(
      { l: (value) => ({ left: value }) },
      { values: theme('spacing'), supportsNegativeValues: true }
   );
   matchUtilities(
      { br: (value) => ({ borderRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { btr: (value) => ({ borderTopLeftRadius: value, borderTopRightRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { brr: (value) => ({ borderTopRightRadius: value, borderBottomRightRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { bbr: (value) => ({ borderBottomRightRadius: value, borderBottomLeftRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { blr: (value) => ({ borderTopLeftRadius: value, borderBottomLeftRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { btlr: (value) => ({ borderTopLeftRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { btrr: (value) => ({ borderTopRightRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { bbrr: (value) => ({ borderBottomRightRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { bblr: (value) => ({ borderBottomLeftRadius: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { bw: (value) => ({ borderWidth: value, borderStyle: "solid" }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { btw: (value) => ({ borderTopWidth: value, borderStyle: "solid" }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { brw: (value) => ({ borderRightWidth: value, borderStyle: "solid" }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { blw: (value) => ({ borderLeftWidth: value, borderStyle: "solid" }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { bbw: (value) => ({ borderBottomWidth: value, borderStyle: "solid" }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { bc: (value) => ({ "--tw-b-opacity": "1", color: value }) },
      {
         type: ['color'],
         values: Object.fromEntries(Object.entries(theme('colors')).map(([k, v]) => [k, v.replace('<alpha-value>', 'var(--tw-b-opacity)')])),
      }
   );
   matchUtilities(
      { bo: (value) => ({ "--tw-b-opacity": value }) },
      { values: theme('opacity') }
   );
   addUtilities({
      ".bnone": { borderStyle: "none" },
      ".bdotted": { borderStyle: "dotted" },
      ".bdashed": { borderStyle: "dashed" },
      ".bdouble": { borderStyle: "double" }
   })
}

export function addCustomUtilities({ addUtilities }) {
   addUtilities({
      ".i": { display: "inline" },
      ".iblock": { display: "inline-block" },
      ".iflex": { display: "inline-flex" },
      ".igrid": { display: "inline-grid" },
      ".none": { display: "none" },
      ".hide": { visibility: "hidden" },
      ".pos-a": { position: "absolute" },
      ".pos-r": { position: "relative" },
      ".pos-f": { position: "fixed" },
      ".pos-s": { position: "sticky" },
      ".oh": { overflow: "hidden" },
      ".oyh": { overflowY: "hidden" },
      ".oyv": { overflowY: "visible" },
      ".oya": { overflowY: "auto" },
      ".oxh": { overflowX: "hidden" },
      ".oxa": { overflowX: "auto" },
      ".oxv": { overflowX: "visible" },
      ".pointer": { cursor: 'pointer', userSelect: 'none' },
      ".cover": { objectFit: "cover" },
      ".contain": { objectFit: "contain" },
      ".fill": { objectFit: "fill" },
   })
}

export function addTextUtilities({ addUtilities, matchUtilities, theme }) {
   addUtilities({
      ".tc": { textAlign: "center" },
      ".te": { textAlign: "end" },
      ".tl": { textAlign: "left" },
      ".tr": { textAlign: "right" },
      ".tw": { whiteSpace: "nowrap" },
      ".tcap": { textTransform: "capitalize" },
      ".tlower": { textTransform: "lowercase" },
      ".tupper": { textTransform: "uppercase" },
   });
   matchUtilities(
      { ts: (value) => ({ fontSize: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { tc: (value) => ({ "--tw-t-opacity": "1", color: value }) },
      {
         type: ['color'],
         values: Object.fromEntries(Object.entries(theme('colors')).map(([k, v]) => [k, v.replace('<alpha-value>', 'var(--tw-t-opacity)')])),
      }
   );
   matchUtilities(
      { to: (value) => ({ "--tw-t-opacity": value }) },
      { values: theme('opacity') }
   );
   matchUtilities(
      { tf: (value) => ({ fontFamily: value }) },
      { values: theme('fontFamily') }
   );
   matchUtilities(
      { lh: (value) => ({ lineHeight: value }) },
      { values: theme('spacing') }
   );
   matchUtilities(
      { ls: (value) => ({ letterSpacing: value }) },
      { values: theme('spacing') }
   );

}

export function addFlexUtilities({ addUtilities }) {
   addUtilities({
      ".fw": {
         display: "flex",
         flexWrap: "wrap"
      },
      ".fwc": {
         display: "flex",
         flexWrap: "wrap",
         alignItems: "center"
      },
      ".fwnc": {
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "center"
      },
      ".fwcc": {
         display: "flex",
         flexWrap: "wrap",
         alignItems: "center",
         justifyContent: "center"
      },
      ".fr": {
         display: "flex",
         flexDirection: "row"
      },
      ".frc": {
         display: "flex",
         flexDirection: "row",
         alignItems: "center"
      },
      ".frcc": {
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "center"
      },
      ".frcb": {
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between"
      },
      ".frca": {
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-around"
      },
      ".frce": {
         display: "flex",
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-evenly"
      },
      ".fc": {
         display: "flex",
         flexDirection: "column"
      },
      ".fcc": {
         display: "flex",
         flexDirection: "column",
         alignItems: "center"
      },
      ".fcnc": {
         display: "flex",
         flexDirection: "column",
         justifyContent: "center"
      },
      ".fcnb": {
         display: "flex",
         flexDirection: "column",
         justifyContent: "space-between"
      },
      ".fcna": {
         display: "flex",
         flexDirection: "column",
         justifyContent: "space-around"
      },
      ".fcne": {
         display: "flex",
         flexDirection: "column",
         justifyContent: "space-evenly"
      },
      ".fccc": {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center"
      },
      '.ffix': {
         flexShrink: 0
      },
      '.fgrow': {
         flex: '1'
      },
      '.fshrink': {
         flex: '1 1'
      }
   })
}

//add more values
export const pixelSpacing = {
   a: 'auto',
   '25p': '25%',
   '50p': '50%',
   '75p': '75%',
   '100p': '100%',
   0: '0px',
   1: '0.0625rem',
   2: '0.125rem',
   3: '0.1875rem',
   4: '0.25rem',
   5: '0.3125rem',
   6: '0.375rem',
   7: '0.4375rem',
   8: '0.5rem',
   9: '0.5625rem',
   10: '0.625rem',
   11: '0.6875rem',
   12: '0.75rem',
   13: '0.8125rem',
   14: '0.875rem',
   15: '0.9375rem',
   16: '1rem',
   17: '1.0625rem',
   18: '1.125rem',
   19: '1.1875rem',
   20: '1.25rem',
   21: '1.3125rem',
   22: '1.375rem',
   23: '1.4375rem',
   24: '1.5rem',
   25: '1.5625rem',
   26: '1.625rem',
   27: '1.6875rem',
   28: '1.75rem',
   29: '1.8125rem',
   30: '1.875rem',
   31: '1.9375rem',
   32: '2rem',
   34: '2.125rem',
   36: '2.25rem',
   38: '2.375rem',
   40: '2.5rem',
   42: '2.625rem',
   44: '2.75rem',
   46: '2.875rem',
   48: '3rem',
   50: '3.125rem',
   52: '3.25rem',
   54: '3.375rem',
   56: '3.5rem',
   58: '3.625rem',
   60: '3.75rem',
   62: '3.875rem',
   64: '4rem',
   66: '4.125rem',
   68: '4.25rem',
   70: '4.375rem',
   72: '4.5rem',
   74: '4.625rem',
   76: '4.75rem',
   78: '4.875rem',
   80: '5rem',
   82: '5.125rem',
   84: '5.25rem',
   86: '5.375rem',
   88: '5.5rem',
   90: '5.625rem',
   92: '5.75rem',
   94: '5.875rem',
   96: '6rem',
   98: '6.125rem',
   100: '6.25rem',
   102: '6.375rem',
   104: '6.5rem',
   106: '6.625rem',
   108: '6.75rem',
   110: '6.875rem',
   112: '7rem',
   120: '7.5rem',
   128: '8rem',
   136: '8.5rem',
   144: '9rem',
   152: '9.5rem',
   160: '10rem',
   168: '10.5rem',
   176: '11rem',
   184: '11.5rem',
   192: '12rem',
};

export const heightSpacing = ({ theme }) => ({
   ...theme('spacing'),
   '100h': '100vh',
   min: 'min-content',
   max: 'max-content',
   fit: 'fit-content',
})

export const widthSpacing = ({ theme }) => ({
   ...theme('spacing'),
   '100w': '100vw',
   min: 'min-content',
   max: 'max-content',
   fit: 'fit-content',
})

export const extendScreens = {
   'xsm': '372px'
}

export const extendOpacity = {
   1: '0.01',
   2: '0.02',
   3: '0.03',
   4: '0.04',
   6: '0.06',
   7: '0.07',
   8: '0.08',
   9: '0.09',
   11: '0.11',
   12: '0.12',
   13: '0.13',
   14: '0.14',
   15: '0.15',
   16: '0.16',
   17: '0.17',
   18: '0.18',
   19: '0.19',
};

export const extendZIndex = {
   60: '60',
   70: '70',
   80: '80',
   90: '90',
   99: '99',
   100: '100',
   101: '101',
   102: '102',
   999: '999',
   1000: '1000',
   1001: '1001',
   9999: '9999',
}
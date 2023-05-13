/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

import {
   defaultColors,
   addAbbreviations, addFlexUtilities, addTextUtilities, addCustomUtilities, addShadowAbbreviation,
   renameModifiers, pixelSpacing, heightSpacing, widthSpacing, extendOpacity, extendZIndex, extendScreens
} from './tailwindCustomConfig.js'

export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            'main': 'rgb(var(--tw-main) / <alpha-value>)',
            'main-dark': 'rgb(var(--tw-main-dark) / <alpha-value>)',
            'main-light': 'rgb(var(--tw-main-light) / <alpha-value>)',
            'main-extralight': 'rgb(var(--tw-main-extralight) / <alpha-value>)',
            'complementary': 'rgb(var(--tw-complementary) / <alpha-value>)',
            'grey-dark': 'rgb(var(--tw-grey-dark) / <alpha-value>)',
            'grey-light': 'rgb(var(--tw-grey-light) / <alpha-value>)',
            'white': 'rgb(var(--tw-white) / <alpha-value>)',
            'overlay': 'rgba(var(--tw-overlay))',
            'red': 'rgb(var(--tw-red) / <alpha-value>)',
         },
         boxShadow: {
            // '1': 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            // '2': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
            // '3': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            '4': 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            'modal': 'rgba(50, 50, 93, 0.25) 0px 0px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px 0px'
         },
         fontFamily: {
            "regular": 'var(--text-regular)',
            "semibold": 'var(--text-semibold)',
            "bold": 'var(--text-bold)',
            /*Fonts*/
         },
         screens: extendScreens,
         opacity: extendOpacity,
         zIndex: extendZIndex
      },
      colors: defaultColors,
      spacing: pixelSpacing,
      height: heightSpacing,
      maxHeight: heightSpacing,
      minHeight: heightSpacing,
      width: widthSpacing,
      maxWidth: widthSpacing,
      minWidth: widthSpacing,
   },
   plugins: [
      plugin(addShadowAbbreviation),
      plugin(addAbbreviations),
      plugin(addFlexUtilities),
      plugin(addTextUtilities),
      plugin(addCustomUtilities),
      plugin(renameModifiers),
   ],
}


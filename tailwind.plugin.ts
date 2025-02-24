const plugin = require('tailwindcss/plugin')

// @ts-ignore
module.exports = plugin(({ addComponents }) => {
  addComponents({
    '.row-center': {
      display: 'flex',
      gap: '1.25rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.col-center': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.basic-padding': {
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      paddingTop: '1.25rem',
      paddingBottom: '1.25rem',
      margin: '2.5rem',
    },
    '.title': {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: '700',
      color: '#212121',
    },
    '.subtitle': {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: '700',
      color: '#212121',
    },
    '.paragraph': {
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#212121',
    },
    '.description': {
      fontSize: '0.875rem',
      fontWeight: '400',
      lineHeight: '1rem',
      color: '#515151',
    },
    '.test': {
      border: '2px solid #f00',
    },
    '.test2': {
      border: '2px solid #285eff',
    },
  })
})

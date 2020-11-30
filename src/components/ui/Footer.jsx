import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.warna02,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '18em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '15em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '12em'
    },
  }
}))

export default function Footer() {
  const classes = useStyles()

  return <footer className={classes.footer}>
    <img alt="footer adornment" src={footerAdornment} className={classes.adornment} />
  </footer>
}
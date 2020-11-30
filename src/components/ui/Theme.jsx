import { createMuiTheme } from '@material-ui/core/styles';

const paperon01 = "#c49c82"
const paperon02 = "#a45430"
const paperon03 = "#bc7348"
const paperon04 = "#815d55"
const paperon05 = "#371110"

export default createMuiTheme({
  palette: {
    common: {
      warna01: `${paperon01}`,
      warna02: `${paperon02}`,
      warna03: `${paperon03}`,
      warna04: `${paperon04}`,
      warna05: `${paperon05}`,
    },
    primary: {
      main: `${paperon02}`
    },
    secondary: {
      main: `${paperon01}`
    }
  }
})
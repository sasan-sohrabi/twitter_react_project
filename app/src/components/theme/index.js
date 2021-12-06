const {createMuiTheme} = require("@material-ui/core");
const colorPrimary = "#5ea9dd"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colorPrimary,
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: "shabnam !important"
            }
        },
        MuiButton: {
            label: {
                fontFamily: "shabnam !important"
            }
        }
    }
})
export default theme;
const {createMuiTheme} = require("@material-ui/core");
const theme = createMuiTheme({
    overrides: {
        MuiTypography:{
            root:{
                fontFamily: "shabnam !important"
            }
        }
    }
})
export default theme;
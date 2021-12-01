import {makeStyles} from '@mui/styles';
// import theme from "../../theme";

const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: 'white',
        width: "25%",
        padding: '1.7rem 1rem'
    },
    userImg: {
        width: '50px !important',
        height: '50px !important',
        borderRadius: '50%'
    },
    profText: {
        marginLeft: '0.5rem !important',
        marginRight: '0.5rem !important',
        width: 'max-content !important',
        direction: 'ltr !important'
    },
    profName:{
        flex: 1,
    },
    profId:{
        flex: 1,
        color: theme.palette.text.hint,
        fontSize:'0.78rem'
    },
    twitterRoot: {
        backgroundColor: "#f5f8fa",
        marginTop: "3rem !important",
        borderRadius: "2.5rem",
        padding: "11px 24px"
    },
    twitterTitle: {
        fontSize: '1.1rem !important',
        fontWeight: "600 !important",
        marginBottom: '11px'

    }
}));

export default useStyles;
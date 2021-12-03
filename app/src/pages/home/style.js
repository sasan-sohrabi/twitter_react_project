import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: '#e6e6e6',
    },
    header: {
        padding: 18,
        backgroundColor: "white",
        display: 'flex'
    },
    divider: {
        backgroundColor: "#7EBAFF",
        filter: 'opacity(0.18)'

    },
    newTwitt: {
        padding: 18,
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column'
    },
    userImg: {
        width: '50px !important',
        height: '50px !important',
        borderRadius: '50%'
    },
    input: {
        marginTop: 25,
        marginRight: "1rem",
        border: "none",
        flex: 1,
        "&:focus": {
            outline: 'unset'
        }
    },
    newTwittBtn: {
        color: 'white !important',
        borderRadius: "1rem !important",
        minHeight: "30px !important",
        height: "30px !important",
        fontFamily: "shabnam !important",
        lineHeight: "1rem !important",
        minWidth: "5rem !important"
    },
    newTweetImg: {
        border: "0.5px solid #3337",
        padding: "0.5rem",
        borderRadius: "50%"
    },
    TwittItem: {
        padding: 18,
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem'
    },
    TwittItemName: {
        fontWeight: 600,
    },
    TwittItemId: {
        fontSize: "0.9rem !important",
        color: theme.palette.text.hint,
        marginRight: '0.5rem !important',
        paddingTop: '0.1rem'
    },
    TwittText: {
        fontSize: "0.9rem !important",
        marginTop: "1rem !important"
    },
    LikeCount: {
        fontSize: "0.8rem !important",
        color: theme.palette.text.hint
    }
}));

export default useStyles;
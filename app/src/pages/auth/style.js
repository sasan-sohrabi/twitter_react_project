import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container: {
        backgroundColor: 'white',
        width: '30rem',
        margin: '10rem auto',
        display: 'flex',
        flexDirection: 'column'
    },
    headerText: {
        margin: '1rem !important',
        alignSelf: 'center !important'
    },
    tab:{
        flex: 1,
        fontFamily: 'shabnam !important'
    },
    containerInput: {
        padding: '1rem 0.8rem !important',
        display: 'flex !important',
        flexDirection: 'column !important'
    }
}));

export default useStyles;
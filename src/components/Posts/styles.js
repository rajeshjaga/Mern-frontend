import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() =>
    createStyles({
        cardContainer: {
            marginTop: '5rem',
            marginBottom: '5rem',
            paddingTop: '2rem',
            paddingBottom: '5rem',
            display: 'flex',
            justifyContent: ' space-between',
            flexWrap: 'wrap',
        },
    })
)

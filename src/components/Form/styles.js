import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() =>
    createStyles({
        spacing: {
            marginBottom: '1rem',
            marginTop: '1rem',
        },
        btnSpacing: {
            marginBottom: '0.5rem',
            marginTop: '0.5rem',
        },
        heading: {
            marginBottom: '2rem',
            marginTop: '10rem',
        },
        container: {
            marginTop: '5rem',
            marginBottom: '5rem',
        },
    })
)

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useMedia } from '../Posts/post/styles'

export const useStyles = makeStyles(() => {
    createStyles({
        icon: {
            marginRight: '0.5rem',
            fontSize: '2rem',
        },
    })
})

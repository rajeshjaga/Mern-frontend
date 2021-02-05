import { makeStyles, createStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
export const useMedia = () => {
    const matches = useMediaQuery('(max-width:800px)')
    return matches
}
export const useStyles = makeStyles(() =>
    createStyles({
        cardBottom: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            borderRadius: '0px 5px',
            padding: '1rem 2rem',
            backgroundImage:
                'linear-gradient(rgba(250,250,250,0.3), rgba(255,2555,255,1))',
        },
        Head3: {
            color: ' #fff',
            fontSize: '1.5rem',
            textTransform: 'capitalize',
        },
        card: {
            height: '30rem',
            margin: '1rem 1rem',
            position: 'relative',
            width: 'clamp(20rem, 23vw, 40rem)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            background: '#ffe',
            filter: 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.3))',
            transition: 'all 0.5s ease-in-out ',
        },

        img: {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
        },

        cardBottom: {
            position: 'inherit',
            zIndex: '1',
            minHeight: '5rem',
            maxHeight: '100%',
            marginTop: '-6rem',
            padding: '1rem 0.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: 'auto',
            flexWrap: 'wrap',
            color: '#fff',
            //prettier-ignore
            background: "linear-gradient(rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.35),rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 1))",
        },

        button: {
            background: 'transparent',
            border: 'none',
            fontWeight: '600',
            padding: ' 0.5rem 1rem',
            cursor: 'pointer',
            outline: 'none',
            color: '#eee',
        },
        modalImg: {
            background: '#eee',
            height: '35rem',
            width: 'auto',
            outline: 'none',
            borderRadius: '0.5rem',
        },
        modal: {
            display: 'grid',
            placeItems: 'center',
        },
    })
)

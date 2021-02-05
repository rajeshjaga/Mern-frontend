import React from 'react'
import Post from './post/Post'
import { Container, LinearProgress } from '@material-ui/core'
import { useStyles } from './styles'
import { useFetch, API } from '../../api'

const Posts = ({ setCurrentId }) => {
    const classes = useStyles({})
    const [data, loading] = useFetch()

    return (
        <Container className={classes.cardContainer}>
            {loading ? (
                <LinearProgress style={{ width: '100%' }} />
            ) : (
                data.map((info) => {
                    return (
                        <Post
                            setCurrentId={setCurrentId}
                            info={info}
                            key={info._id}
                        />
                    )
                })
            )}
        </Container>
    )
}

export default Posts

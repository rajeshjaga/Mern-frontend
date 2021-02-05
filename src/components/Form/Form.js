import React, { useState, useEffect } from 'react'
import { Typography, TextField, Button, Container } from '@material-ui/core'
import { useStyles } from './styles'
import FileBase from 'react-file-base64'
import { posttoapi, updatePost, useFetch } from '../../api/index'
import { useHistory } from 'react-router-dom'

//form-controls
const Form = ({ currentId, setCurrentID }) => {
    const classes = useStyles({})
    const history = useHistory()

    // prettier-ignore
    const [PostData, setPostData] = useState({title: '',selectedFile: '',creatorName: '',message: ''})
    //prettier-ignore
    const editPostdata = (currentId) => {
    const [data,loading] = useFetch()
    data.map((info) =>currentId ? info.find((e) => e._id === currentId) : null)}
    // prettier-ignore
    const clearAll = () =>PostData.title||PostData.selectedFile||PostData.creatorName||PostData.message? setPostData({title: '',selectedFile: '',creatorName: '',message: ''}): alert('nothing to clear')

    const handleEvent = (e) => {
        e.preventDefault()
        if (currentId) {
            updatePost(currentId)
        } else {
            posttoapi(PostData)
            clearAll()
            history.push('/')
        }
    }
    useEffect(() => {
        if (editPostdata) {
            setPostData(editPostdata)
        }
    }, [editPostdata])

    return (
        <Container maxWidth="sm" className={classes.container}>
            <form onSubmit={handleEvent}>
                <Typography
                    variant="h3"
                    align="center"
                    className={classes.heading}
                >
                    Create new post
                </Typography>
                <TextField
                    className={classes.spacing}
                    name="title"
                    variant="outlined"
                    label="Title"
                    value={PostData.title}
                    onChange={(e) => {
                        setPostData({ ...PostData, title: e.target.value })
                    }}
                    fullWidth
                />
                <TextField
                    className={classes.spacing}
                    name="creatorName"
                    label="Author"
                    variant="outlined"
                    value={PostData.creatorName}
                    onChange={(e) => {
                        setPostData({
                            ...PostData,
                            creatorName: e.target.value,
                        })
                    }}
                    fullWidth
                />
                <TextField
                    className={classes.spacing}
                    name="message"
                    label="Message"
                    variant="outlined"
                    value={PostData.message}
                    onChange={(e) => {
                        setPostData({ ...PostData, message: e.target.value })
                    }}
                    fullWidth
                />
                <FileBase
                    type="file"
                    className={classes.spacing}
                    multiple={false}
                    onDone={({ base64 }) =>
                        setPostData({ ...PostData, selectedFile: base64 })
                    }
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.btnSpacing}
                    fullWidth
                >
                    Upload
                </Button>
                <Button
                    onClick={clearAll}
                    variant="contained"
                    color="secondary"
                    className={classes.btnSpacing}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Container>
    )
}

export default Form

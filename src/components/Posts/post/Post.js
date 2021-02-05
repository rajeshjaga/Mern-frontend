import React, { useState, useEffect } from 'react'
import { useStyles, useMedia } from './styles'
import { Modal } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Post = ({ info, setCurrentId }) => {
    const classes = useStyles({})
    const media = useMedia()
    const [picture, setPicture] = useState(info.selectedFile)
    const [open, setOpen] = useState(false)
    const history = useHistory()
    useEffect(() => {
        info.selectedFile
            ? picture
                ? console.log('')
                : setPicture('picture was never added ')
            : setPicture((_) => 'picture unavailable')
    }, [])

    return (
        <div className={classes.card} style={media ? { width: '100%' } : {}}>
            <img
                src={info.selectedFile}
                className={classes.img}
                onClick={(_) => setOpen(true)}
            />
            <Modal
                open={open}
                onClose={(_) => setOpen(false)}
                className={classes.modal}
            >
                <img src={info.selectedFile} className={classes.modalImg} />
            </Modal>
            <div className={classes.cardBottom}>
                <div>
                    <h3 className={classes.Head3}>{info.creatorName}</h3>
                    {<p>{info.title}</p> || <p>No title</p>}
                </div>
                <div>
                    <button
                        className={classes.button}
                        onClick={() => {
                            setCurrentId(info._id)
                            history.push('/Mern-frontend/add')
                        }}
                    >
                        Edit
                    </button>
                    <button className={classes.button}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post

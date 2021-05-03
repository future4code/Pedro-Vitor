import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useRequestData from "../../hooks/useRequestedData";
import {BASE_URL} from "../../constants/urls";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import styled from "styled-components"
import {useHistory} from "react-router-dom";
import {goToPostPage} from "../../routes/coordinator";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(3),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Container = styled.div`
margin-left: 40%;
`

export default function FeedPostStyles() {
    const classes = useStyles();
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onClickPost = (id) => {
        goToPostPage(history, id)
    }

    const postsCard = posts.posts && posts.posts.map((post) => {
        return (
            <Card className={classes.root} key={post.id}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings" onClick={onClickPost}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.title}
                    subheader={post.username}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="up-vote">
                        <ThumbDownIcon/>
                    </IconButton>
                    <IconButton aria-label="down-vote">
                        <ThumbUpIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.votesCount}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.commentsCount} comentários
                    </Typography>
                </CardActions>
            </Card>
        )
    })

    return (
        <Container>
            {postsCard}
        </Container>
    );
}
import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function Astronomy(props) {
    return (
        <div className="astronomy-cards">
            <ul>
                {props && props.data.map(pod => (
                    <li>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={pod.url}
                                alt={pod.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {pod.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" maxHeight="350px" sx={{ display: 'block', overflow: 'auto'}}>
                                {pod.explanation}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton size="small"><FavoriteBorderIcon>Like</FavoriteBorderIcon></IconButton>
                            </CardActions>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Astronomy

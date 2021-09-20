import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import Checkbox from '@mui/material/Checkbox'

function Astronomy(props) {

    return (
        <div className="astronomy-cards">
            <ul>
                {props && props.data.map((pod, index) => (
                    <li key={index}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                component="img"
                                height="140"
                                image={pod.url}
                                alt={pod.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                {pod.title}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div">
                                Date: {pod.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" maxHeight="250px" sx={{ display: 'block', overflow: 'auto'}}>
                                {pod.explanation}
                                </Typography>
                            </CardContent>
                            <Checkbox  icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Astronomy

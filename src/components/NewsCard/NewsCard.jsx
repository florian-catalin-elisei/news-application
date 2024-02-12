import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import "./NewsCard.css";

const NewsCard = ({ article, id }) => {
  const { description, publishedAt, source, title, url, urlToImage } = article;

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia className="image" image={urlToImage} />

        <div className="cardInfo">
          <Typography variant="body2">{new Date(publishedAt).toDateString()}</Typography>
          <Typography variant="body2">{source.name}</Typography>
        </div>

        <Typography className="cardTitle" gutterBottom variant="h6">
          {title}
        </Typography>

        <CardContent>
          <Typography className="cardDescription" variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className="cardFooter">
        <Button href={url} target="_blank" size="small">
          Learn More
        </Button>

        <Typography variant="h6">{id + 1}</Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;

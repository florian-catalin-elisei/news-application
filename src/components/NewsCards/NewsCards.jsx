import { Grow, Grid } from "@mui/material";
import NewsCard from "../../components/NewsCard/NewsCard";
import "./NewsCards.css";

const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid className="container" container spacing={2}>
        {articles.map((article, id) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <NewsCard article={article} id={id} />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default NewsCards;

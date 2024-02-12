import { Grow, Grid, Typography } from "@mui/material";
import "./InfoCards.css";

const InfoCards = () => {
  const infoCards = [
    {
      color: "#00838f",
      title: "Latest News",
      text: "What are the top headlines at the moment",
    },
    {
      color: "#1565c0",
      title: "News by Categories",
      by: "Categories: ",
      info: "Business, Entertainment, Science, Sports, Technology",
      text: "Provide me with the latest technology news",
    },
    {
      color: "#4527a0",
      title: "News by Terms",
      by: "Terms: ",
      info: "Bitcoin, PlayStation 5, Smartphones, Tesla, Donald Trump etc.",
      text: "What's happening in the world of smartphones",
    },
    {
      color: "#283593",
      title: "News by Sources",
      by: "Sources: ",
      info: "CNN, Wired, BBC News, Time, Axios, IGN, Buzzfeed, ABC News etc.",
      text: "Tell me about recent articles from BBC News",
    },
  ];

  return (
    <Grow in className="infoCardsContainer">
      <Grid container spacing={2}>
        {infoCards.map((infoCard, id) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <div className="infoCard" style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h6" className="infoCardTitle">
                  {infoCard.title}
                </Typography>

                <Typography variant="body2">
                  {infoCard.info ? (
                    <p>
                      <span className="infoCardInfo">{infoCard.by}</span>
                      {infoCard.info}
                    </p>
                  ) : null}
                </Typography>

                <Typography variant="h6">
                  Try saying: <span className="infoCardText">{infoCard.text}</span>
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default InfoCards;

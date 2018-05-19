import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  onSelect,
  category,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the left"
  }
}) => (
  <Grid spacing={16} container>
    <Grid item md>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>

                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem 
                      key={id} 
                      button 
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>

    <Grid item md>
      <Paper style={styles.Paper}>
        <Typography variant="display1" style={{ marginTop: 20 }}>
          {title}
        </Typography>
        <Typography variant="subheading">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);

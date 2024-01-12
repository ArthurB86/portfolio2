import React from 'react';
import {Box, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, useTheme } from '@mui/material';
import Avatar from '@mui/material/Avatar';


export default function ActionAreaCard({ project }) {
  const { title, image, link, description, category, } = project;
  const theme = useTheme();
const styleCard ={
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.accent : theme.palette.light.background,
  color: theme.palette[theme.palette.mode].text,
  backgroundImage:'none',
}

  return (
    <Card style={styleCard}>
      <CardActionArea href={link} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <CardActions sx={{ position: 'absolute', bottom: 200, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <Button sx={{
              color: theme.palette.mode === 'dark' ? theme.palette.dark.primary : theme.palette.light.primary,
              padding:'0px'
            }}>
              {category}
            </Button>
          </CardActions>
          <Box>
          <Typography variant="body2" color="text.secondary" sx={{marginBottom:'10px'}}>
            {description}
          </Typography>
          <Box display="flex" justifyContent="space-between">
          {[1, 2, 3, 4, 5].map((index) => {
  const logoKey = `Logo${index}`;
  // Vérifiez si la propriété Logo correspondante existe dans votre objet project
  // (Assurez-vous d'ajuster ces vérifications en fonction de votre structure de données)
  return project[logoKey] ? (
    <Avatar
      key={index}
      alt={`Logo ${index}`}
      src={`/${project[logoKey]}`}
      sx={{ width: 40, height: 40, objectFit: 'cover' }}
    />
  ) : null;
})}
</Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

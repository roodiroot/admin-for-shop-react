import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { DeleteButton, EditButton, ShowButton, useCreatePath } from 'react-admin';

interface TypeCardProps {
  id: number;
  img: string;
  name: string;
  description: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ id, img, name, description }) => {
  const createPath = useCreatePath();
  console.log(
    createPath({
      resource: 'type',
      id: id,
      type: 'show',
    }),
  );
  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={2} item>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={process.env.REACT_APP_IMG + '/' + img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Показать</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default TypeCard;

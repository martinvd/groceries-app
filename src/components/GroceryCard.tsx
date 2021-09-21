import {
  Card,
  CardContent,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { Grocery } from '../types';

export interface GroceryCardProps {
  item: Grocery;
}

export const GroceryCard = ({ item }: GroceryCardProps) => {
  return (
    <Card sx={{ mb: 2 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" pb={1}>
          {item.description}
        </Typography>
        {item.additionalInformation && (
          <>
            <Divider sx={{ my: 1 }} />
            <Typography variant="h6" component="div">
              Additional information
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
              {item.additionalInformation}
            </Typography>
          </>
        )}
        {item.images && (
          <>
            <Divider sx={{ my: 1 }} />
            <ImageList cols={3}>
              {item.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt={item.name} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </>
        )}
      </CardContent>
    </Card>
  );
};

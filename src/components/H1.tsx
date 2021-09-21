import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/system';

export type H1Props = TypographyProps & {
  children?: React.ReactNode;
};

export const H1 = ({ children, ...restProps }: H1Props) => (
  <Typography variant="h1" textAlign="center" mb={3} {...restProps}>
    {children}
  </Typography>
);

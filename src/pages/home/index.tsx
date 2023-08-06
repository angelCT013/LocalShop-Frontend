// ** MUI Imports
import { useContext } from 'react';
import { AbilityContext } from 'src/layouts/components/acl/Can';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Home = () => {
  const ability = useContext(AbilityContext);

  return (
    <Grid container spacing={6}>
      {ability?.can('read', 'analytics') ? (
        <Grid item md={6} xs={12}>
          <Card>
            <CardHeader title="Backups para la base de datos" />
            <CardContent>
              <Typography sx={{ color: 'error.main' }}>Importante! Backups</Typography>
              <Button variant="tonal" color="success">
                Backups
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
      {ability?.can('read', 'analytics') ? (
        <Grid item md={6} xs={12}>
          <Card>
            <CardHeader title="Restore para la base de datos" />
            <CardContent>
              <Typography sx={{ color: 'error.main' }}>Importante! Restore</Typography>
              <Button variant="tonal" color="success">
                Restore
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
    </Grid>
  );
};

Home.home = {
  action: 'read',
  subject: 'home-page',
};
export default Home;

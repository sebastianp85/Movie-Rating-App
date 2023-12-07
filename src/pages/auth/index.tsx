import { Grid, Header, Form, Segment, Button, GridColumn } from 'semantic-ui-react';
import { useMutation } from '@tanstack/react-query';
import { mutationLogin } from './mutation';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const { data, mutate } = useMutation({ mutationKey: ['login'], mutationFn: mutationLogin });

  const navigate = useNavigate();

  const handleLogin = async () => {
    await mutate();
    localStorage.setItem('guest_session_id', data.guest_session_id);
    navigate('/');
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Welcome! Login by register as a Guest below.
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="blue" size="large" fluid onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

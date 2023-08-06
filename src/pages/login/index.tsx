// ** React Imports
import { useState, ReactNode /*MouseEvent*/ } from 'react';

// ** Next Imports
import Link from 'next/link';

// ** MUI Components
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Third Party Imports
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// ** Hooks
import { useAuth } from 'src/hooks/useAuth';
import useBgColor from 'src/@core/hooks/useBgColor';

/*import { useSettings } from 'src/@core/hooks/useSettings'*/

// ** Configs
//import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout';

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2';

// ** Styled Components
/*const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))*/

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600,
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750,
  },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary,
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  password: 'admin',
  email: 'admin@vuexy.com',
};

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // ** Hooks
  const auth = useAuth();
  const theme = useTheme();
  const bgColors = useBgColor();

  /*const { settings } = useSettings()*/
  const hidden = useMediaQuery(theme.breakpoints.down('md'));

  // ** Vars
  /*const { skin } = settings*/

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Correo o contraseña incorrectas!',
      });
    });
  };

  /* const imageSource = skin === 'bordered' ? '' : ''*/

  return (
    <Box className="content-center" /*sx={{ backgroundColor: 'background.paper' }}*/>
      {!hidden ? (
        <Box

        /* sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: (theme) => theme.spacing(8, 0, 8, 8),
          }}*/
        >
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box

        /*sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}*/
        >
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="120.000000pt"
              height="100.000000pt"
              viewBox="0 0 180.000000 50.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path
                  d="M88 787 l-77 -62 -1 -68 c0 -63 3 -71 29 -98 35 -35 89 -39 136 -11
29 18 31 18 60 0 41 -24 97 -23 126 3 l24 21 -25 -16 c-37 -24 -93 -20 -127 8
l-28 24 -28 -24 c-39 -34 -96 -33 -131 2 -22 23 -26 35 -26 89 l0 62 76 61 76
62 222 0 222 0 30 -32 29 -33 -31 28 -30 27 -218 0 -218 0 -62 -52 c-33 -28
-65 -56 -71 -60 -5 -5 153 -7 353 -6 l362 3 0 -58 c0 -51 -4 -62 -29 -88 -38
-38 -96 -40 -133 -6 l-25 23 -28 -24 c-24 -20 -36 -23 -72 -19 -46 5 -98 41
-86 60 3 5 12 -2 20 -16 26 -51 127 -45 152 9 6 14 11 43 11 64 l0 40 -180 0
-180 0 0 -34 c0 -94 65 -143 139 -102 21 12 28 11 59 -10 44 -30 109 -32 143
-5 24 19 25 19 48 0 15 -12 39 -19 68 -19 36 0 50 6 74 29 26 26 29 36 29 92
0 55 -4 67 -27 91 -15 15 -31 28 -37 28 -5 0 1 -11 14 -25 13 -14 21 -25 19
-25 -3 0 -18 14 -35 32 -16 17 -22 28 -14 24 8 -4 -5 11 -29 33 l-44 41 -226
0 -226 -1 -77 -62z m547 -17 l29 -30 -270 0 -269 1 33 29 32 30 208 0 208 0
29 -30z m-265 -125 c0 -43 -29 -75 -69 -75 -41 0 -61 24 -61 71 l0 39 65 0 65
0 0 -35z m168 -12 c-3 -42 -6 -49 -30 -57 -18 -6 -38 -6 -55 0 -25 8 -28 15
-31 57 l-3 47 61 0 61 0 -3 -47z"
                />
                <path
                  d="M30 650 c0 -41 5 -56 25 -75 30 -31 82 -33 119 -4 22 18 26 28 26 75
l0 54 -85 0 -85 0 0 -50z m150 -9 c0 -62 -57 -91 -108 -55 -16 11 -22 25 -22
55 l0 39 65 0 65 0 0 -39z"
                />
                <path
                  d="M580 646 c0 -48 4 -57 28 -76 21 -17 36 -21 67 -17 53 8 75 36 75 98
l0 49 -85 0 -85 0 0 -54z m150 -1 c0 -42 -29 -75 -67 -75 -39 0 -63 27 -63 72
l0 38 65 0 65 0 0 -35z"
                />
                <path
                  d="M315 506 c-38 -17 -80 -63 -91 -98 -5 -16 -12 -28 -16 -28 -5 0 -19
0 -33 0 -23 0 -24 4 -27 63 -2 47 -7 62 -18 62 -17 0 -25 -68 -15 -123 6 -33
7 -34 51 -30 43 3 44 2 44 -27 0 -46 49 -131 117 -204 l61 -66 75 76 c61 61
78 86 91 129 9 30 16 63 16 74 0 19 5 21 45 18 l45 -4 0 82 c0 61 -3 81 -12
78 -8 -3 -14 -28 -16 -66 -3 -58 -4 -61 -30 -64 -23 -3 -30 3 -48 43 -30 65
-73 93 -149 96 -36 2 -72 -2 -90 -11z m166 -30 c40 -28 69 -79 69 -123 0 -70
-29 -132 -96 -201 l-64 -67 -53 57 c-29 31 -66 82 -81 113 -46 89 -26 168 54
223 47 31 123 30 171 -2z"
                />
                <path
                  d="M345 428 c-31 -18 -44 -40 -45 -76 0 -46 16 -71 56 -88 95 -40 172
84 93 150 -32 28 -71 33 -104 14z m92 -30 c27 -25 30 -64 7 -96 -21 -31 -87
-31 -108 0 -22 31 -20 68 6 95 27 29 65 29 95 1z"
                />
                <path
                  d="M67 503 c-4 -3 -7 -91 -7 -195 0 -239 -7 -228 155 -228 96 0 115 3
115 15 0 12 -19 15 -110 15 -98 0 -110 2 -120 19 -6 12 -10 95 -10 200 0 165
-4 194 -23 174z"
                />
                <path
                  d="M689 498 c-1 -7 -4 -96 -8 -198 l-6 -185 -112 -3 c-91 -2 -113 -5
-113 -17 0 -12 21 -15 120 -15 159 0 151 -12 148 235 -2 140 -6 189 -15 193
-7 2 -14 -2 -14 -10z"
                />
                <path
                  d="M754 277 c-10 -28 1 -200 14 -205 9 -3 12 23 12 107 0 70 -4 111 -10
111 -6 0 -13 -6 -16 -13z"
                />
                <path
                  d="M1234 277 c-10 -28 1 -200 14 -205 9 -3 12 23 12 107 0 70 -4 111
-10 111 -6 0 -13 -6 -16 -13z"
                />
                <path
                  d="M1424 277 c-10 -28 1 -200 14 -205 8 -3 12 12 12 51 0 37 5 59 15 67
23 19 33 2 37 -59 2 -33 8 -56 16 -59 10 -3 12 13 10 68 -3 82 -20 106 -58 82
-19 -11 -20 -10 -20 28 0 38 -15 54 -26 27z"
                />
                <path
                  d="M836 214 c-21 -20 -30 -58 -22 -88 21 -86 116 -66 116 24 0 65 -56
103 -94 64z m62 -62 c2 -31 -1 -44 -13 -48 -36 -14 -63 54 -33 84 24 24 43 9
46 -36z"
                />
                <path
                  d="M977 212 c-34 -37 -30 -110 7 -134 30 -20 86 7 86 40 0 17 -27 15
-34 -3 -9 -23 -35 -18 -48 10 -22 48 26 102 51 58 7 -14 13 -15 21 -6 9 8 7
16 -9 32 -26 26 -53 27 -74 3z"
                />
                <path
                  d="M1112 218 c-13 -13 -17 -48 -6 -48 4 0 12 7 19 17 7 9 19 14 29 10
26 -10 19 -26 -21 -44 -28 -14 -38 -24 -38 -42 0 -33 29 -50 56 -33 18 11 23
12 30 1 15 -25 24 3 21 64 -4 66 -18 87 -57 87 -12 0 -26 -5 -33 -12z m58 -93
c0 -21 -28 -31 -43 -16 -9 9 -8 14 3 21 22 14 40 12 40 -5z"
                />
                <path
                  d="M1306 214 c-28 -27 -17 -56 27 -73 15 -6 27 -17 27 -26 0 -19 -24
-19 -40 0 -17 21 -30 19 -30 -5 0 -29 42 -47 75 -32 18 9 25 19 25 41 0 25 -6
32 -35 42 -19 7 -35 19 -35 26 0 15 26 18 35 3 8 -13 35 -13 35 -1 0 16 -31
41 -50 41 -10 0 -26 -7 -34 -16z"
                />
                <path
                  d="M1580 210 c-42 -42 -15 -140 39 -140 26 0 61 46 61 80 0 34 -35 80
-61 80 -10 0 -28 -9 -39 -20z m62 -35 c15 -32 -4 -78 -30 -73 -17 3 -29 56
-18 84 9 22 35 16 48 -11z"
                />
                <path
                  d="M1704 217 c-10 -28 1 -200 14 -205 8 -2 12 9 12 39 0 33 3 40 12 31
33 -33 78 6 78 68 0 62 -45 101 -78 68 -9 -9 -12 -9 -12 0 0 16 -19 15 -26 -1z
m84 -46 c9 -62 -27 -96 -50 -46 -8 19 -8 31 1 51 14 31 45 29 49 -5z"
                />
              </g>
            </svg>

            <Box sx={{ my: 6 }}>
              <Typography sx={{ color: 'text.secondary' }}>Ingresa tu correo y contraseña</Typography>
            </Box>
            <Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant="body2" sx={{ mb: 2, color: 'primary.main' }}>
                Admin: <strong>admin@vuexy.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main' }}>
                Client: <strong>client@vuexy.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert>
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label="Correo"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder="admin@vuexy.com"
                      error={Boolean(errors.email)}
                      {...(errors.email && { helperText: errors.email.message })}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label="Contraseña"
                      onChange={onChange}
                      id="auth-login-v2-password"
                      error={Boolean(errors.password)}
                      {...(errors.password && { helperText: errors.password.message })}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon fontSize="1.25rem" icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <FormControlLabel
                  label="Rercordarme"
                  control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                />
                <Typography component={LinkStyled} href="/forgot-password">
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Box>
              <Button fullWidth type="submit" variant="contained" sx={{ mb: 4 }}>
                Entrar
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>¿Nuevo en el sitio?</Typography>
                <Typography href="/register" component={LinkStyled}>
                  Crear una cuenta
                </Typography>
              </Box>
              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: (theme) => `${theme.spacing(6)} !important`,
                }}
              ></Divider>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

LoginPage.guestGuard = true;

export default LoginPage;

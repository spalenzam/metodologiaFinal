import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height: '100%',
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
    backgroundSize: 'contain',
    backgorundPosition: 'center center',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  textoButton: {
    fontSize: '16px',
    fontWeight: '600',
    paddingLeft: '10px',
    textTransform: 'uppercase',
  },
  IconButton: {
    color: '#fff',
  },
  ButtonBase: {
    backgroundColor: '#76353B',
    borderRadius: '8px !important',
    marginBottom: '10px !important',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#76353B',
    textAlign: 'center',
  },
    TypographyBody2: {
      lineHeight: '1 !important',
      fontSize: '1rem !important',
    },
}));


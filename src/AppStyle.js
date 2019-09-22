import { createMuiTheme } from '@material-ui/core/styles';
import { brown, deepOrange } from '@material-ui/core/colors';

const theme = {
  palette: {
    type: 'light',
    primary: brown,
    secondary: deepOrange,
  }
};  
const AppTheme = createMuiTheme(theme);

  
export default AppTheme;
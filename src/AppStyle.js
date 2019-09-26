import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, deepOrange, green } from '@material-ui/core/colors';

const theme = {
  palette: {
    type: 'light',
    primary: deepPurple,
    secondary: deepOrange
  }
};  
const AppTheme = createMuiTheme(theme);

  
export default AppTheme;
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from './components/Navbar';
//import Home from './containers/Home';
import theme from './themes/theme';
import UpcomingMovie from './containers/UpcomingList';
import MovieList from './containers/MovieList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">        
        <Navbar />
        <UpcomingMovie />
        <MovieList title={"Upcoming Movie"}/>
        <MovieList title={"Trending Movie"}/>
        {/*(<Home />*/}
      </div>
    </ThemeProvider>    
  );
}

export default App;
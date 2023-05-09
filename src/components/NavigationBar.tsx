import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase
  } from '../themes/navigationBarTheme'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { List, ListItem } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedinIn, faGithub, faWhatsapp,faTwitter } from '@fortawesome/free-brands-svg-icons'


const NavigationBar = ({handleSearch}:{handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
    const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'teal' }}>
      <AppBar position="static" sx={{backgroundColor: 'secondary.main'}}>
        <Toolbar>          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <Link to='/' style={{ color: theme.palette.primary.light,textDecoration: 'none'}}>
            MyApp
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              type='string'
              onChange={handleSearch}
              inputProps={{ 'aria-label': 'search' }}              
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export const BottomNavigationBar = () => {
    const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'teal' }}>
      <AppBar position="static" sx={{backgroundColor: 'secondary.main'}}>
        <Toolbar>          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            <Link to='/' style={{ color: theme.palette.primary.light,textDecoration: 'none'}}>
            Home
            </Link>
          </Typography>
          <List>
            <ListItem>
                <FontAwesomeIcon style={{width: '4vw',padding: '1em 0'}} color='white' icon={faFacebookSquare} beat />
                <FontAwesomeIcon style={{width: '4vw',padding: '1em 0'}} color='white' icon={faLinkedinIn} beat />
                <FontAwesomeIcon style={{width: '4vw',padding: '1em 0'}} color='white' icon={faGithub} beat />
                <FontAwesomeIcon style={{width: '4vw',padding: '1em 0'}} color='white' icon={faWhatsapp} beat />
                <FontAwesomeIcon style={{width: '4vw',padding: '1em 0'}} color='white' icon={faTwitter} beat />                
            </ListItem>
          </List>        
        </Toolbar>
      </AppBar>
    </Box>
  )

}

export default NavigationBar

                    
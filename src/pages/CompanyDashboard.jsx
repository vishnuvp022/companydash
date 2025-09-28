import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { alpha, styled } from '@mui/material/styles';
import './dashboard.css';

// Icons
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';

// Styled search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.grey[500], 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.grey[500], 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1.2, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '35ch',
    },
  },
}));

// AppBar
const pages = ['Dashboard', 'Job Posts', 'Applicants', 'Settings'];
const settings = ['Profile', 'Account', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState('Dashboard');

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCloseNavMenu = (page) => {
    if (typeof page === 'string') {
      setActivePage(page);
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" elevation={0} 
      sx={{ backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', color: 'text.primary', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WorkIcon sx={{ color: 'primary.main', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="#" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>
            EmployerConnect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit"><MenuIcon /></IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={() => handleCloseNavMenu()} sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}><Typography>{page}</Typography></MenuItem>
              ))}
            </Menu>
          </Box>

          <WorkIcon sx={{ color: 'primary.main', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography variant="h5" noWrap component="a" href="#" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>
            EmployerConnect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleCloseNavMenu(page)} sx={{
                my: 2, color: 'text.secondary', fontWeight: 500, fontSize: '1rem',
                textTransform: 'none', position: 'relative',
                '&:after': { content: '""', position: 'absolute', width: activePage === page ? '60%' : '0', height: '2px', bottom: '6px', left: '20%', backgroundColor: 'primary.main', transition: 'width 0.3s ease-in-out' },
                '&:hover:after': { width: '60%' }
              }}>{page}</Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Search>
              <SearchIconWrapper><SearchIcon sx={{ color: 'text.secondary' }} /></SearchIconWrapper>
              <StyledInputBase placeholder="Search applicants, jobs..." />
            </Search>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}><Avatar alt="Admin" sx={{ bgcolor: '#DBEAFE', color: '#2563EB' }}>A</Avatar></IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map((setting) => (<MenuItem key={setting} onClick={handleCloseUserMenu}><Typography>{setting}</Typography></MenuItem>))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// Theme
const modernTheme = createTheme({
  palette: {
    primary: { main: '#2563EB' },
    background: { default: '#F8F9FA', paper: '#FFFFFF' },
    text: { primary: '#1F2937', secondary: '#6B7280' },
    divider: '#E5E7EB',
  },
  typography: { fontFamily: '"Inter","Roboto","Arial",sans-serif', h4: { fontWeight: 700 }, h5: { fontWeight: 600 } },
  components: {
    MuiPaper: { styleOverrides: { root: { borderRadius: 12, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', '&:hover': { boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' } } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 8 } } }
  }
});

// Main Company Dashboard
export default function CompanyDashboard() {
  const statsData = [
    { title: 'Total Job Posts', value: '8', icon: WorkIcon, iconColor: 'primary.main', iconBg: '#DBEAFE' },
    { title: 'Active Listings', value: '5', icon: StarIcon, iconColor: '#F59E0B', iconBg: '#FEF3C7' },
    { title: 'Applicants', value: '120', icon: PeopleIcon, iconColor: '#10B981', iconBg: '#D1FAE5' },
    { title: 'Hires', value: '3', icon: AssignmentTurnedInIcon, iconColor: '#6366F1', iconBg: '#E0E7FF' },
  ];

  const jobPosts = [
    { title: 'Frontend Developer', date: '2024-07-01', applicants: 35, status: 'Active' },
    { title: 'Backend Engineer', date: '2024-06-25', applicants: 22, status: 'Closed' },
    { title: 'Data Scientist', date: '2024-06-20', applicants: 18, status: 'Active' },
  ];

  return (
    <ThemeProvider theme={modernTheme}>
      <CssBaseline />
      <div className="dashboard-container">
        <ResponsiveAppBar />
        <div className="dashboard-content">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4">Welcome back, Employer!</Typography>
            <Typography variant="body1" color="text.secondary">Here’s an overview of your company’s hiring activity.</Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }} sx={{ mb: 4 }}>
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Paper className="stat-card">
                    <Avatar sx={{ bgcolor: stat.iconBg, mr: 2, width: 56, height: 56 }}>
                      <Icon sx={{ color: stat.iconColor, fontSize: 32 }} />
                    </Avatar>
                    <Box>
                      <Typography variant="h5" className="stat-value">{stat.value}</Typography>
                      <Typography variant="body2" className="stat-title">{stat.title}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>

          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h5">Job Posts</Typography>
              <Link href="#" underline="hover" sx={{ fontWeight: 500 }}>View all posts</Link>
            </Box>
            <Paper>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>JOB TITLE</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>DATE POSTED</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>APPLICANTS</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>STATUS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {jobPosts.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell sx={{ fontWeight: 500 }}>{row.title}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.applicants}</TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}

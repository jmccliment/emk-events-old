import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import TitleBar from './TitleBar';
import { openMenu, closeMenu } from '../../store/actions/menuActions';
import MenuDrawer from './MenuDrawer';

const Main = ({ children }) => (
  <main>{children}</main>
)

const Shell = ({ children, menu, openMenu, closeMenu }) => (
  <div>
    <CssBaseline />
    <TitleBar />
    <MenuDrawer open={menu.isOpen} openMenu={openMenu} closeMenu={closeMenu} />
    <Main>
      {children}
    </Main>
  </div>
);



const mapStateToProps = ({ menu }) => ({ menu });
const mapDispatchToProps = (dispatch) => ({
  openMenu: () => dispatch(openMenu()),
  closeMenu: () => dispatch(closeMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shell);

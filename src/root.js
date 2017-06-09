import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from './routerConfig.js';
class AppWithNavigationState extends Component {
  render() {
    var { dispatch, nav } = this.props;
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
  }
}
const mapStateToProps = state => ({
  nav: state.nav,
});
const mapDispatchToProps = dispatch => ({
  dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
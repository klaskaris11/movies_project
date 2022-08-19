import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import * as actions from './Store/Actions/index';
import Spinner from './Components/UI/Spinner/Spinner';
import ListMovies from './Views/ListMovies/ListMovies';

function App(props) {

  useEffect(() => {
    document.title = `Movies Propject`;
    props.fetchAllMovies();
  }, []);

  return (
    <div className="App container my-5">
      {
        props.loading
          ? <Spinner
            text="Φόρτωση Εφαρμογής..."
          />
          : <ListMovies />
      }
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  fetchAllMovies: PropTypes.func
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllMovies: () => dispatch(actions.fetchAllMovies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
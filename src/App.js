import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import * as actions from './Store/Actions/index';
import Spinner from './Components/UI/Spinner/Spinner';
import ListMovies from './Views/ListMovies/ListMovies';
import ListMovieDetails from './Views/ListMovieDetails/ListMovieDetails';
import { Row, Col } from './Components/UI/Grid/Grid';

function App(props) {

  const listMoviesStandardClasses = ["pt-3", "pt-lg-0", "my-auto"];

  useEffect(() => {
    document.title = `Movies Propject`;
    props.fetchAllMovies();
  }, []);

  return (
    <div className="App container my-5">
      {
        props.loading
          ? <Spinner
            text="Loading application..."
          />
          : <Row>
            <Col sm={12} md={12} lg={6} xl={6} classes={["border", "border-2", "border-primary", "position-relative", "pt-4", "pb-2"]}>
              <div className='grid-title bg-primary text-white rounded p-2 text-center w-75 mx-auto'>Star Wars Episodes</div>
              <ListMovies />
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} classes={props.selectedMovie === null ? listMoviesStandardClasses.concat(["text-center"]) : listMoviesStandardClasses}>
              <ListMovieDetails />
            </Col>
          </Row>
      }
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  fetchAllMovies: PropTypes.func,
  selectedMovie: PropTypes.number
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    selectedMovie: state.selectedMovie
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllMovies: () => dispatch(actions.fetchAllMovies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
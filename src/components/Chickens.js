import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChickens } from '../actions';
import './chickens.css';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Nav from './Nav';

class Chickens extends Component {
  componentDidMount() {
    this.props.fetchChickens();
  }

  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
        <div className="container chickens_box">
          <div className="row">
            {_.map(this.props.chickens).map(chicken => {
              return (
                <div className="col s12 m4" key={chicken.recipe_id}>
                  <div className="card">
                    <div className="card-image">
                      <img src={chicken.image_url} alt={chicken.title} />
                      <a class="btn-floating halfway-fab waves-effect waves-light orange">
                        <i class="shopping cart icon" />
                      </a>
                    </div>
                    <div className="card-content">
                      <span className="card-title">
                        {chicken.title.length < 20
                          ? `${chicken.title}`
                          : `${chicken.title.substring(0, 15)}...`}
                      </span>
                      <p>Publisher: {chicken.publisher}</p>
                    </div>
                    <div className="card-action">
                      <Link
                        class="ui orange basic button btn-text"
                        to={`/chickens/${chicken.recipe_id}`}>
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { chickens: state.chickens };
};

export default connect(
  mapStateToProps,
  { fetchChickens }
)(Chickens);
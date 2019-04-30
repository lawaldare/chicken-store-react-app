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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.chicken) {
  //     this.props.chickens.unshift(nextProps.chicken);
  //   }
  // }

  render() {
    const chickens = this.props.chickens || [];
    const price = Math.floor(Math.random() * 10 + 1).toFixed(2);
    return (
      <div>
        <Nav />
        <LandingPage />
        <div className="container chickens_box">
          <div className="row">
            {chickens.map(chicken => {
              return (
                <div className="col s12 m4" key={chicken.id}>
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
                          : `${chicken.title.substring(0, 20)}...`}
                      </span>
                      <p className="flow-text">{`$${price}`}</p>
                    </div>
                    <div className="card-action">
                      <Link
                        className="ui orange basic button btn-text"
                        to={`/chickens/${chicken.id}`}>
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
  return {
    chickens: state.chickens.allChicken
    //chicken: state.chickens.chicken
  };
};

export default connect(
  mapStateToProps,
  { fetchChickens }
)(Chickens);

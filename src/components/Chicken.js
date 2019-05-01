import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchChicken, deleteChicken } from '../actions';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Nav from './Nav';

class Chicken extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchChicken(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deleteChicken(id, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { chicken } = this.props;
    const { id } = this.props.match.params;
    //const { id } = this.props.chicken;

    if (!chicken) {
      return <Loading />;
    }

    return (
      <React.Fragment>
        <Nav />
        <div className="container box">
          <div className="card">
            <div className="card-image">
              <img
                src={chicken.image_url}
                alt={chicken.title}
                style={{ height: '60vh' }}
              />
            </div>
            <div className="card-content">
              <span className="card-title">{chicken.title}</span>
              <h6>Publisher: {chicken.publisher}</h6>
              <p>
                Website:{' '}
                <span>
                  <a href={chicken.publisher_url}>{chicken.publisher_url}</a>
                </span>
              </p>
            </div>
            <div className="card-action">
              <Link class="ui orange basic button btn-text" to="/">
                Go Home
              </Link>
              <button
                className="ui red basic button btn-text right"
                onClick={this.onDeleteClick}>
                Delete Chicken
              </button>
              <Link
                className="ui green basic button btn-text"
                to={`/chickens/edit/${id}`}>
                Update Chicken
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ chickens }, ownProps) => {
  return { chicken: chickens.chicken };
};

export default connect(
  mapStateToProps,
  { fetchChicken, deleteChicken }
)(Chicken);

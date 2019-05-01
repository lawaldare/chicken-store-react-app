import React, { Component } from 'react';
import Nav from './Nav';
import './Add.css';
import { connect } from 'react-redux';
import { fetchChicken, updateChicken } from '../actions';
//import chickensReducer from '../reducers/chickensReducer';
class UpdateChicken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      publisher_url: '',
      publisher: ''
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { image_url, title, publisher_url, publisher } = nextProps.chicken;
    this.setState({
      image_url,
      title,
      publisher_url,
      publisher
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchChicken(id);
  }

  onFormSubmit = e => {
    e.preventDefault();

    const { image_url, title, publisher_url, publisher } = this.state;

    const { id } = this.props.match.params;

    const updatedChicken = {
      id,
      image_url,
      title,
      publisher_url,
      publisher
    };

    this.props.updateChicken(updatedChicken);

    this.setState({
      image_url: '',
      title: '',
      publisher_url: '',
      publisher: ''
    });

    // alert('Chicken Updated!');
    //this.props.history.push('/');
  };

  onFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.onFormSubmit}>
          <div className="row center add">
            <div className="col s12 m6 offset-m3">
              <div>
                <span className="flow-text">Update Chicken</span>
              </div>
              <div class="card-panel z-depth-5">
                <div class="input-field">
                  <input
                    type="text"
                    name="image_url"
                    placeholder="Image Url"
                    onChange={this.onFormChange}
                    value={this.state.image_url}
                  />
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={this.onFormChange}
                    value={this.state.title}
                  />
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="publisher_url"
                    placeholder="Publisher Url"
                    onChange={this.onFormChange}
                    value={this.state.publisher_url}
                  />
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="publisher"
                    placeholder="Publisher"
                    onChange={this.onFormChange}
                    value={this.state.publisher}
                  />
                </div>
                <input
                  type="submit"
                  value="Update Chicken"
                  class="ui orange center basic button btn-text"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ chickens }, ownProps) => ({
  chicken: chickens.chicken
});

export default connect(
  mapStateToProps,
  { fetchChicken, updateChicken }
)(UpdateChicken);

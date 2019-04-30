import React, { Component } from 'react';
import Nav from './Nav';
import './Add.css';
import { connect } from 'react-redux';
import { addChicken } from '../actions';
class AddChicken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      title: '',
      publisher_url: '',
      publisher: ''
    };
  }

  onFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const chicken = {
      image_url: this.state.image_url,
      title: this.state.title,
      publisher_url: this.state.publisher_url,
      publisher: this.state.publisher
    };

    this.props.addChicken(chicken);

    this.setState({
      image_url: '',
      title: '',
      publisher_url: '',
      publisher: ''
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.onFormSubmit}>
          <div className="row center add">
            <div className="col s12 m6 offset-m3">
              <div class="card-panel z-depth-5">
                <div class="input-field">
                  <input
                    type="text"
                    name="image_url"
                    onChange={this.onFormChange}
                    value={this.state.image_url}
                  />
                  <label for="image_url">Image Url</label>
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="title"
                    onChange={this.onFormChange}
                    value={this.state.title}
                  />
                  <label for="title">Title</label>
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="publisher_url"
                    onChange={this.onFormChange}
                    value={this.state.publisher_url}
                  />
                  <label for="publisher_url">Publisher_Url</label>
                </div>
                <div class="input-field">
                  <input
                    type="text"
                    name="publisher"
                    onChange={this.onFormChange}
                    value={this.state.publisher}
                  />
                  <label for="publisher">Publisher</label>
                </div>
                <input type="submit" value="Submit" class="btn tomato" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addChicken }
)(AddChicken);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import profileActions from '../../../Redux/Actions/profile';

const { getProfile } = profileActions;
export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Alain',
      lastName: 'Burindi',
      email: 'alainburindi@gmail.com'
    };
  }

  componentDidMount() {
    const { getProfile: getProfileData } = this.props;
    getProfileData();
  }

  render() {
    const { data } = this.props;
    const { email, firstName, lastName } = this.state;
    return (
      <div className="container" id="resume">
        <div className="colums">
          <div className="column is-6 is-offset-3">
            <h1 className="title is-1 has-text-centered">My Resume</h1>
            <hr />
            <div className="content">
              <h3 className="title is-3">Personal details</h3>
              <hr />

              <ul>
                <li>
                  <span className="has-text-weight-bold">First Name : </span>
                  {firstName}
                </li>
                <li>
                  <span className="has-text-weight-bold">Last Name : </span>
                  {lastName}
                </li>
                <li>
                  <span className="has-text-weight-bold">Email : </span>
                  {email}
                </li>
              </ul>
            </div>

            <div className="content">
              <h3 className="title is-3">Github</h3>

              <hr />
              {data ? (
                <ul>
                  <li>
                    <span className="has-text-weight-bold">Username : </span>
                    {data.login}
                  </li>
                  <li>
                    <span className="has-text-weight-bold">Location : </span>
                    {data.location}
                  </li>
                  <li>
                    <span className="has-text-weight-bold">Followers : </span>
                    {data.followers}
                  </li>
                  <li>
                    <span className="has-text-weight-bold">Following : </span>
                    {data.following}
                  </li>
                  <li>
                    <span className="has-text-weight-bold">Repositories : </span>
                    {data.public_repos}
                  </li>
                </ul>
              ) : (
                <i className="fas fa-spinner fa-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Resume.propTypes = { data: propTypes.object, getProfile: propTypes.func.isRequired };
export const mapStateToProps = state => ({ data: state.profile.data });
export default connect(mapStateToProps,
  { getProfile })(Resume);

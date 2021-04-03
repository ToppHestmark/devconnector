import isEmpty from "../../validation/is-empty";
import PropTypes from "prop-types";

const ProfileAbout = ({ profile }) => {
  const firstName = profile.user.name.trim().split(" ")[0];

  const skills = profile.skills.map((skill, index) => (
    <div key={index} className="p-3">
      <i className="fa fa-certificate pr-1 skillset" /> {skill}
    </div>
  ));

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h5 className="text-center text-dark">{firstName}'s Bio</h5>
          <p className="lead">
            {isEmpty(profile.bio) ? (
              <span>{firstName} does not have a bio.</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
          <hr />
          <h5 className="text-center text-dark">Skill Set</h5>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {skills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;

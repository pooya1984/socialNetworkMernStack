import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.company}</td>
      <td className="hide-sm">{edu.title}</td>
      <td>
        <Moment format="YYY/MM/DD">{edu.form}</Moment> -{" "}
        {edu.to === null ? (
          "now"
        ) : (
          <Moment format="YYY/MM/DD">{edu.form}</Moment>
        )}
      </td>
      <td onClick={() => deleteEducation(edu._id)} className="btn btn-danger">
        Delete
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Education Credential</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);

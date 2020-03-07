import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);

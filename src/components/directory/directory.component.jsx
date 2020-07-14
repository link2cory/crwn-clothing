import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import { sections } from "./directory.data";

import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;

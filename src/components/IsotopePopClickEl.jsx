import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import Rating from '@material-ui/lab/Rating';

//import parse from 'html-react-parser';

import "../css/IsotopePopClickEl.css";

class IsotopePopClickEl extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { expanded: false };
    this.onClick = this.onClick.bind(this);
  }

  expand() {
    this.setState({
      expanded: true
    });
  }

  collapse(event) {
    this.setState({
      expanded: false
    });
  }

  onClick() {
    if (this.state.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  render() {
    return (
      <div
        className={
          "isotope-pop-click " +
          (this.state.expanded ? "is-expanded" : "is-collapsed")
        }
        onClick={this.onClick}
      >
        <div className="frontFace">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12}>
              <div className="image-wrapper">
                <img
                  className="image-item"
                  src={this.props.item.image}
                  alt=""
                />
              </div>
              <h3>{this.props.item.label}</h3>
            </Grid>
          </Grid>
        </div>

        <div className="backFace">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={5}>
              <div className="image-wrapper">
                <img
                  className="image-item"
                  src={this.props.item.image}
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <h3>{this.props.item.label}</h3>
              <div>
                <p>some body text text text text</p>
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Read more
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default IsotopePopClickEl;

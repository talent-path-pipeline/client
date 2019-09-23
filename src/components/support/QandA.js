import React from 'react';
import classes from '../../css/support/support.scss';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div
          className={classes.title}
          onClick={e => this.togglePanel(e)}
          className="header"
        >
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className={classes.content}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
class QandA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Collapsible title="What do I need to start my journey as a Dungeon Master V">
          <div>
            <p>Content of Collapsible</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo
              accusantium hic pariatur est. Repellat corporis eos adipisci blanditiis?
              Cupiditate, quo! Ipsum voluptates illum unde odit libero voluptate, suscipit
              aspernatur.
            </p>
          </div>
        </Collapsible>
        <br />
        <Collapsible title="How do I get started on .... V">
          <div>
            <p>Content of Collapsible</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo
              accusantium hic pariatur est. Repellat corporis eos adipisci blanditiis?
              Cupiditate, quo! Ipsum voluptates illum unde odit libero voluptate, suscipit
              aspernatur.
            </p>
          </div>
        </Collapsible>
        <br />
        <Collapsible title="Where am I? V">
          <div>
            <p>Content of Collapsible</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo
              accusantium hic pariatur est. Repellat corporis eos adipisci blanditiis?
              Cupiditate, quo! Ipsum voluptates illum unde odit libero voluptate, suscipit
              aspernatur.
            </p>
          </div>
        </Collapsible>
      </div>
    );
  }
}
export default QandA;

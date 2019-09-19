import React from 'react';
/* 
const QandA = () => {
  return (
    <div>
      <h1>Fequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repudiandae!
        Assumenda distinctio facere labore. Neque porro unde voluptates, cupiditate
        explicabo modi, recusandae veniam iure dolore, blanditiis asperiores impedit
        adipisci accusamus.
      </p>
    </div>
  );
};
*/

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
  componentDidUpdate() {
    // this props.onToggle(this.props.index);
  }
  render() {
    return (
      <div>
        <div onClick={e => this.togglePanel(e)} className="header">
          {this.props.title}
        </div>
        {this.state.open ? <div className="content">{this.props.children}</div> : null}
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

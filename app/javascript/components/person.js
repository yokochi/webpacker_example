class Person extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

Person.propTypes = {
  name: React.PropTypes.node
};

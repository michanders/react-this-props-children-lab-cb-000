import React from 'react';


export default class ThemedDecorations extends React.Component {
  render() {
    return(
      const childrenProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
      });
    });

    return (
      <div className=this.props.them>{childrenProp}</div>
    );
  }
}

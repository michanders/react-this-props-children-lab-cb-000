// Code Invitation Component Here

export default class Invitation extends React.Component {
  render() {
    return(
      <h1>"You've been invited!"</h1>
      React.Children.map(this.props.children, child => {
        return React.cloneElement(child)

        })
      })

    )
  }
}

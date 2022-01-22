
import react from "react";

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      something: 'hey'
    }
  }

  render() {
    return (
      <Provider value={{ state: this.state }}>{this.props.children}</Provider>
    )
  }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <Container>
        <Button />
      </Container>
    )
  }
}

export default Container

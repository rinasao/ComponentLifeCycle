import { Component } from "react";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//https://reactjs.org/docs/components-and-props.html#function-and-class-components

class App extends Component {
  state = {
    num: 0,
    name: "rina"
  };

  handleClick = () => {
    this.setState((prev) => ({ ...prev, num: prev.num + 1 }));
  };

  shouldComponentUpdate() {
    return this.state.num < 5;
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate() {
    toast("YAY Update " + this.state.num);
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    return (
      <>
        <ToastContainer />
        <button onClick={this.handleClick}>{this.state.num}</button>
      </>
    );
  }
}

export default App;

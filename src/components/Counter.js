import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';
import { 
  // INCREMENT,
  // DECREMENT,
  // RESET,
  increment,
  decrement,
  reset
} from '../actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Local state approach
     */
    // this.state = {
    //   counter: 0
    // }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    /**
     * Local state approach
     */
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    /**
     * Global state approach
     */
    // this.props.dispatch({type: INCREMENT});
    // this.props.dispatch(increment());
    this.props.increment();
  }

  decrement() {
    /**
     * Local state approach
     */
    // this.setState({
    //   counter: this.state.counter - 1
    // })
    
    /**
     * Global state approach
     */
    // this.props.dispatch({type: DECREMENT});
    // this.props.dispatch(decrement());
    this.props.decrement();
  }

  reset() {
    /**
     * Local state approach
     */
    // this.setState({
    //   counter: 0
    // });

    /**
     * Global state approach
     */
    // this.props.dispatch({type: RESET});
    // this.props.dispatch(reset());
    this.props.reset();
  }



  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div className="counter--number">
          {
            /**
             * Local state approach
             */
            // this.state.counter
          }
          {
            /**
             * Global state approach
             */
            this.props.counter
          }
        </div>
        <div className="button--wrapper">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>R</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

/**
 * Version 1: mapDispatchToProps
 */
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

/**
 * Version 2 mapDispatchToProps
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset())
//   }
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
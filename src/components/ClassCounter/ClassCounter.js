import { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default ClassCounter
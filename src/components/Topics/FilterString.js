import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['hi', 'bye', 'tom', 'tanner', 'carter', 'john'],
            userInput: '',
            filteredArray: [],
        }
    }

    updateInput = (val) => {
        this.setState({userInput: val});
    }

    filterNames = (val) => {
        let before = this.state.unFilteredArray;
        let filtered = [];
    
        for (let i = 0; i < before.length; i++) {
            if (before[i].startsWith(val)) {
                filtered.push(before[i]);
            }
        }

        this.setState({filteredArray: filtered})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFiltered Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange = {(e) => this.updateInput(e.target.value)}/>
                <button className="confirmationButton" onClick = {() => {this.filterNames(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString
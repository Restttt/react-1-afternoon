import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: "Tanner",
                    age: 23,
                }, {
                    name: "Carter",
                    job: "none"
                }, {
                    name: "Taylor",
                    ocupation: "Sam's Club",
                }
            ],
            userInput: '',
            filteredArray: [],
        }
    }

    updateInput = (val) => {
        this.setState({userInput: val});
    }

    filterArray = (val) => {
        let unfiltered = this.state.unFilteredArray;
        let filtered = [];

        for (let i in unfiltered) {
            if (unfiltered[i].hasOwnProperty(val)) {
                filtered.push(unfiltered[i])
            }
        }
        this.setState({filteredArray: filtered})
    }

    render() {
        return (
            <div className = "puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className = "puzzleText">unFiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className = "inputLine" onChange = {(e) => this.updateInput(e.target.value)}/>
                <button className = "confirmationButton" onClick = {() => {this.filterArray(this.state.userInput)}}>Filter</button>
                <span className = "resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject
import React from 'react';

class SearchBar extends React.Component {
    state = { term: ' Wpisz wyszukiwaną frazę '};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Wyszukiwarka zdjęć</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onClick={() =>
                                this.setState({term: ''})}
                            onChange={(event) =>
                                this.setState({term: event.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
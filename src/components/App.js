import React from 'react';
import unsplash from '../api/unsplash';
import SerachBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: [],
        date: new Date().toDateString()
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash
            .get('/search/photos', {
            params: {
                query: term
            },

        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SerachBar
                    onSubmit ={this.onSearchSubmit}
                />
                <div className="ui two column grid">
                    <div className="row">
                        <div className="column">
                            Aktualna data: {this.state.time}
                        </div>
                        <div className="column">
                            Data: {this.state.date}
                        </div>
                    </div>
                </div>
                <ImageList
                    images = {this.state.images}
                />
            </div>
        )
    }
}

export default App;
import React from 'react';
import { ErrorComponent, ToursContainer } from '../styles/Element.style';
import Tour from './Tour';

// Tours API
const API = 'https://course-api.com/react-tours-project';

export default class Tours extends React.Component {
    state = {
        loading: true,
        tours: [],
        error: '',
    };

    componentDidMount() {
        this.fetchTours = async () => {
            this.setState({ loading: true });
            try {
                const response = await fetch(API);
                const data = await response.json();
                this.setState({ loading: false, tours: data });
            } catch (err) {
                this.setState({ loading: false, error: 'Data not Found!' });
            }
        };

        this.fetchTours();
    }

    handleNoInterested = (id) => {
        this.setState({
            tours: this.state.tours.filter((item) => item.id !== id),
        });
    };

    render() {
        const { tours, error, loading } = this.state;

        if (loading) {
            return (
                <h1 style={{ textAlign: 'center', marginTop: 50 }}>
                    Loading...
                </h1>
            );
        }

        return (
            <ToursContainer>
                {tours.length ? (
                    <div>
                        <h2>Our Tours</h2>
                        {tours.map((item) => (
                            <Tour
                                {...item}
                                handleNoInterested={this.handleNoInterested}
                                key={item.id}
                            />
                        ))}
                    </div>
                ) : (
                    <ErrorComponent>
                        <h1>Sorry!</h1>
                        <h1>{error ? error : 'No Tour Available!'}</h1>
                        {!error && (
                            <button type="button" onClick={this.fetchTours}>
                                Refresh
                            </button>
                        )}
                    </ErrorComponent>
                )}
            </ToursContainer>
        );
    }
}

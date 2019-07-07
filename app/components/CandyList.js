import React from 'react';
import {connect} from 'react-redux';
import SingleCandy from './SingleCandy';
import {getCandiesThunk} from '../reducers';

class CandyList extends React.Component {

  componentDidMount() {
    this.props.fetchCandies();
  }

  render() {
    const {candies} = this.props;
    console.log('stuffffffffff', candies);
    return (
    <div>
      <h1>Candies</h1>
      {
        candies.map(candy => {
          return <SingleCandy key={candy.id} name={candy.name} description={candy.description} quantity={candy.quantity} imageUrl={candy.imageUrl} />
        })
      }
    </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    candies: state.candies,
    currentCandy: state.currentCandy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCandies: () => {dispatch(getCandiesThunk());}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandyList);

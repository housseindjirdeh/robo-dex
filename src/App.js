import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { connect }  from 'react-redux';
import { setSearchTerm, getRobots } from './actions';

const mapStateToProps = state => (
  {
    searchTerm: state.search.searchTerm,
    robots: state.robotData.robots,
    isPending: state.robotData.isPending,
  }
)

const mapDispatchToProps = dispatch => (
  {
    onSearchChange: (evt) => dispatch(setSearchTerm(evt.target.value)),
    getRobots: () => dispatch(getRobots()),
  }
)

class App extends Component {
  componentDidMount() {
    this.props.getRobots();
  }

  render() {
    const { robots, isPending, onSearchChange, searchTerm } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>...Loading</h1> :<CardList robots={filteredRobots} />}
        </Scroll>
      </div>
    )
  }
}

// App.propTypes = {
//   isPending: React.propTypes.bool.isRequired,
//   robots: React.propTypes.array.isRequired,
//   searchTerm: React.propTypes.string.isRequired,
//   onSearchChange: React.propTypes.bool.isRequired,
//   getRobots: React.propTypes.bool.isRequired,
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);

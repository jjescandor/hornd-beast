
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import BeastsArr from './data.json';
import SearchBeastForm from './SearchBeastForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beastName: null,
      beastDescription: null,
      beastImgUrl: null,
      beastData: BeastsArr
    };
    this.searchBeast = this.searchBeast.bind(this);
    this.showModal = this.showModal.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  showModal = (name, description, url) => {
    this.setState({
      show: true,
      beastName: name,
      beastDescription: description,
      beastImgUrl: url,
    });
    console.log(this.state.beastImgUrl);
  };
  onHide = () => {
    this.setState({
      show: false
    });
  }
  searchBeast = (keyWord) => {
    let re = new RegExp(keyWord, 'i')
    this.setState({
      beastData: BeastsArr.filter(beast => beast.title.match(re) || beast.description.match(re))
    })
  }

  filterHorns = (numHorns) => {
    numHorns !== 'all' ? this.setState({ beastData: BeastsArr.filter(beast => beast.horns === parseInt(numHorns)) })
      : this.setState({ beastData: BeastsArr })
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#B0C4DE", marginTop: '-20px' }}>
        <Header />
        <SearchBeastForm search={this.searchBeast} filterHorns={this.filterHorns} />
        <SelectedBeast handleClose={this.onHide} show={this.state.show} name={this.state.beastName} description={this.state.beastDescription} url={this.state.beastImgUrl} />
        <Main showModal={this.showModal} beastArr={this.state.beastData} />
        <Footer />
      </div >
    );
  }
}

export default App;


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
    this.newData = this.newData.bind(this);
  }

  showModal = (name, description, url) => {
    this.setState({
      show: true,
      beastName: name,
      beastDescription: description,
      beastImgUrl: url

    });
    console.log(this.state.beastImgUrl);
  };
  onHide = () => {
    this.setState({
      show: false
    });
  }
  searchBeast = (searchKeyword) => {
    let lower = searchKeyword.toLowerCase()
    let searchedData = this.newData(lower)
    this.setState({
      beastData: searchedData
    })
    console.log(searchedData);
  }

  newData = (keyWord) => {
    return BeastsArr.filter(value => {
      let lowerCaseValueTitle = value.title.toLowerCase();
      let lowerCaseValueDescription = value.description.toLowerCase();
      return lowerCaseValueTitle.includes(keyWord) || lowerCaseValueDescription.includes(keyWord);
    })
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#F0F8FF", marginTop: '-20px' }}>
        <Header />
        <SearchBeastForm search={this.searchBeast} style={{ backgroundColor: "#F0F8FF" }} />
        <SelectedBeast handleClose={this.onHide} show={this.state.show} name={this.state.beastName} description={this.state.beastDescription} url={this.state.beastImgUrl} />
        <Main showModal={this.showModal} beastArr={this.state.beastData} />
        <Footer />
      </div >
    );
  }
}

export default App;

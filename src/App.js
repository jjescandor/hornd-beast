
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import BeastsArrJSON from './data.json';
import SearchBeastForm from './SearchBeastForm';
import CreateBeast from './CreateBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showCreate: false,
      beastName: null,
      beastDescription: null,
      beastImgUrl: null,
      newBeastArr: [],
      beastArr: JSON.parse(localStorage.getItem('beast')) ? [...BeastsArrJSON, ...JSON.parse(localStorage.getItem('beast'))] : BeastsArrJSON
    };
    this.searchBeast = this.searchBeast.bind(this);
    this.showModal = this.showModal.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  showBuildModal = () => {
    this.setState({ showCreate: true });
    console.log(this.state.newBeastArr);
  }

  buildBeast = (newBeast) => {
    this.state.newBeastArr.push(newBeast);
    this.setState({ beastArr: [...this.state.beastArr, ...this.state.newBeastArr] });
    localStorage.setItem('beast', JSON.stringify(this.state.newBeastArr))

  }

  showModal = (name, description, url) => {
    this.setState({
      show: true,
      beastName: name,
      beastDescription: description,
      beastImgUrl: url,
    });
  };

  onHide = () => {
    this.setState({
      show: false
    });
  }

  hideBuildBeastModal = () => {
    this.setState({ showCreate: false });

  }

  searchBeast = (keyWord) => {
    let re = new RegExp(keyWord, 'i')
    this.setState({
      beastArr: this.beastArr.filter(beast => beast.title.match(re) || beast.description.match(re))
    })
  }

  filterHorns = (numHorns) => {
    numHorns !== 'all' ? this.setState({ beastArr: this.state.beastArr.filter(beast => beast.horns === parseInt(numHorns)) })
      : this.setState({ beastArr: this.state.beastArr })
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#B0C4DE", marginTop: '-20px' }}>
        <Header showBuildModal={this.showBuildModal} />
        <CreateBeast showCreate={this.state.showCreate} hideBuildBeastModal={this.hideBuildBeastModal} buildBeast={this.buildBeast} />
        <SearchBeastForm search={this.searchBeast} filterHorns={this.filterHorns} />
        <SelectedBeast handleClose={this.onHide} show={this.state.show} name={this.state.beastName} description={this.state.beastDescription} url={this.state.beastImgUrl} />
        <Main showModal={this.showModal} beastArr={this.state.beastArr} />
        <Footer />
      </div >
    );
  }
}

export default App;

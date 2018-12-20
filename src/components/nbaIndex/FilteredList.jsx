import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button, Grid, Row, Col, Jumbotron, PageHeader, ButtonGroup } from 'react-bootstrap';
import List from './List';

const divConfMap = {
  "Atlantic" : "E",
  "Southeast" : "E",
  "Central" : "E",
  "Pacific" : "W",
  "Northwest" : "W",
  "Southwest" : "W",
  "all" : "all"
}

const confMap = {
  "E" : "Eastern Conference",
  "W" : "Western Conference",
  "all" : "All Conferences"
}

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.initial = this.props.items;

    this.state = {
      search: "",
      conf: "all",
      div: "all",
      teams: this.props.items
    };

    this.nameSort(0);
  }

  getConf = (val) =>
  {
    return confMap[val];
  }

  getDiv = (val) =>
  {
    if (val === 'all') {
      return 'All Divisions'
    } else {
      return val + ' Division'
    }
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  reset = (event) => {
    this.setState({search: "", conf: "all", div: "all"});
    this.nameSort(0);
  }

  onConfFilter = (event) => {
    this.setState({conf: event, div: 'all'});
  }

  winSort = (event) => {
    this.setState({teams: this.state.teams.sort((a, b) => b.WL - a.WL)});
  }

  champSort = (event) => {
    this.setState({teams: this.state.teams.sort((a, b) => b.Champ - a.Champ)});
  }

  confSort = (event) => {
    this.setState({teams: this.state.teams.sort((a, b) => b.CTitles - a.CTitles)});
  }

  divSort = (event) => {
    this.setState({teams: this.state.teams.sort((a, b) => b.DTitles - a.DTitles)});
  }

  foundedSort = (event) => {
    this.setState({teams: this.state.teams.sort((a, b) => b.From - a.From)});
  }

  nameSort = (event) => {
    this.setState({teams: this.state.teams.sort((a,b) => {
      if (a.Franchise < b.Franchise) { return -1;}
      if (a.Franchise > b.Franchise) { return 1; }
      return 0;
    })
  });
}


  onDivFilter = (event) => {
    console.log(event);
    this.setState({div: event, conf: divConfMap[event]});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    console.table(this.state);
    return ((item.Franchise.toLowerCase().search(this.state.search) !== -1) &&
    ((item.Conf === this.state.conf) || (this.state.conf === 'all')) &&
    ((item.Div === this.state.div) || (this.state.div === 'all')));
  }

  render(){
    let style = {
      margin: 5,
    }
    return (
      <div className="filter-list">
      <PageHeader>
        <h1>NBA Index</h1>

        </PageHeader>

          <h4> A tool to sort and filter your favorite NBA teams using React and Bootstrap! </h4>

        <Grid>

        <input type = "text" placeholder = "Search" onChange = {this.onSearch} style={{width: 500}}/>

          <Row>

          <DropdownButton bsSize="large" style={style} id="divDropdown" title={"Division"}>
            <MenuItem eventKey="all" onSelect={this.onDivFilter}>All</MenuItem>
            <MenuItem eventKey="Atlantic" onSelect={this.onDivFilter}>Atlantic</MenuItem>
            <MenuItem eventKey="Central" onSelect={this.onDivFilter}>Central</MenuItem>
            <MenuItem eventKey="Southeast" onSelect={this.onDivFilter}>Southeast</MenuItem>
            <MenuItem eventKey="Pacific" onSelect={this.onDivFilter}>Pacific</MenuItem>
            <MenuItem eventKey="Southwest" onSelect={this.onDivFilter}>Southwest</MenuItem>
            <MenuItem eventKey="Northwest" onSelect={this.onDivFilter}>Northwest</MenuItem>
          </DropdownButton>

            <DropdownButton bsSize="large" style={style} id="confDropdown" title={"Conference"}>
              <MenuItem eventKey="all" onSelect={this.onConfFilter}>All</MenuItem>
              <MenuItem eventKey="E" onSelect={this.onConfFilter}>Eastern</MenuItem>
              <MenuItem eventKey="W" onSelect={this.onConfFilter}>Western</MenuItem>
            </DropdownButton>

            <Button style={style} bsSize="large" bsStyle="danger" onClick={this.reset}>Reset to Original</Button>

            </Row>
          <Row>
            <Button style={style} bsStyle="primary" id="nameSort" onClick={this.nameSort}>Sort Name</Button>
            <Button style={style} bsStyle="info" onClick={this.foundedSort}>Sort Year Founded</Button>
            <Button style={style} bsStyle="success" onClick={this.winSort}>Sort Win %</Button>
            <Button style={style} bsStyle="primary" onClick={this.divSort}>Sort Division Titles</Button>
            <Button style={style} bsStyle="info" onClick={this.confSort}>Sort Conference Titles</Button>
            <Button style={style} bsStyle="success" onClick={this.champSort} >Sort Championships</Button>
          </Row>

       </Grid>

       <h4>Number of team(s): {this.state.teams.filter(this.filterItem).length} | {this.getConf(this.state.conf)} | {this.getDiv(this.state.div)}  </h4>

        <List items={this.state.teams.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;

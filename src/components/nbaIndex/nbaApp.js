import React, { Component } from 'react';
import './index.css';
import FilteredList from "./FilteredList"
import NavBar from '../navbar';


const produce = [
  {name: "Apple", type: "Fruit"},
  {name: "Pineapple", type: "Fruit"},
  {name: "Banana", type: "Fruit"},
  {name: "Pear", type: "Fruit"},
  {name: "Strawberry", type: "Fruit"},
  {name: "Orange", type: "Fruit"},
  {name: "Lettuce", type: "Vegetable"},
  {name: "Cucumber", type: "Vegetable"},
  {name: "Eggplant", type: "Vegetable"},
  {name: "Squash", type: "Vegetable"},
  {name: "Bell pepper", type: "Vegetable"},
  {name: "Onion", type: "Vegetable"},
]

const teams = [
{ CTitles :  0 ,  From :  1950 ,  Conf :  'E' ,  WL :  0.496 ,  Franchise :  'Atlanta Hawks' ,  Champ :  1 ,  Div :  'Southeast' ,  Image :  'http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif' ,  DTitles :  11 },
{ CTitles :  9 ,  From :  1947 ,  Conf :  'E' ,  WL :  0.59 ,  Franchise :  'Boston Celtics',  Champ :  17 ,  Div :  'Atlantic' ,  Image :  'http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif' ,  DTitles :  31 },
{ CTitles :  2 ,  From :  1968 ,  Conf :  'E' ,  WL :  0.43 ,  Franchise :  'Brooklyn Nets' ,  Champ :  2 ,  Div :  'Atlantic' ,  Image :  'http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif' ,  DTitles :  5 },
{ CTitles :  0 ,  From :  1989 ,  Conf :  'E' ,  WL :  0.44 ,  Franchise :  'Charlotte Hornets' ,  Champ :  0 ,  Div :  'Southeast' ,  Image :  'http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif' ,  DTitles :  0 },
{ CTitles :  6 ,  From :  1967 ,  Conf :  'E' ,  WL :  0.516 ,  Franchise :  'Chicago Bulls' ,  Champ :  6 ,  Div :  'Central' ,  Image :  'http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif' ,  DTitles :  9 },
{ CTitles :  5 ,  From :  1971 ,  Conf :  'E' ,  WL :  0.469 ,  Franchise :  'Cleveland Cavaliers' ,  Champ :  1 ,  Div :  'Central' ,  Image :  'http://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif' ,  DTitles :  7 },
{ CTitles :  5 ,  From :  1949 ,  Conf :  'E' ,  WL :  0.487 ,  Franchise :  'Detroit Pistons',  Champ :  3 ,  Div :  'Central' ,  Image :  'http://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif' ,  DTitles :  11 },
{ CTitles :  1 ,  From :  1968 ,  Conf :  'E' ,  WL :  0.513 ,  Franchise :  'Indiana Pacers',  Champ :  3 ,  Div :  'Central' ,  Image :  'http://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif' ,  DTitles :  9 },
{ CTitles :  5 ,  From :  1989 ,  Conf :  'E' ,  WL :  0.519 ,  Franchise :  'Miami Heat',  Champ :  3 ,  Div :  'Southeast' ,  Image :  'http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif' ,  DTitles :  13 },
{ CTitles :  2 ,  From :  1969 ,  Conf :  'E' ,  WL :  0.512 ,  Franchise :  'Milwaukee Bucks',  Champ :  1 ,  Div :  'Central' ,  Image :  'http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif' ,  DTitles :  13 },
{ CTitles :  4 ,  From :  1947 ,  Conf :  'E' ,  WL :  0.489 ,  Franchise :  'New York Knicks' ,  Champ :  2 ,  Div :  'Atlantic' ,  Image :  'http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif' ,  DTitles :  8 },
{ CTitles :  2 ,  From :  1990 ,  Conf :  'E' ,  WL :  0.479 ,  Franchise :  'Orlando Magic' ,  Champ :  0 ,  Div :  'Southeast' ,  Image :  'http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif' ,  DTitles :  5 },
{ CTitles :  5 ,  From :  1950 ,  Conf :  'E' ,  WL :  0.514 ,  Franchise :  'Philadelphia 76ers' ,  Champ :  3 ,  Div :  'Atlantic' ,  Image :  'http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif' ,  DTitles :  11 },
{ CTitles :  0 ,  From :  1996 ,  Conf :  'E' ,  WL :  0.464 ,  Franchise :  'Toronto Raptors' ,  Champ :  0 ,  Div :  'Atlantic' ,  Image :  'http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif' ,  DTitles :  5 },
{ CTitles :  4 ,  From :  1962 ,  Conf :  'E' ,  WL :  0.454 ,  Franchise :  'Washington Wizards',  Champ :  1 ,  Div :  'Southeast' ,  Image :  'http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif' ,  DTitles :  8 },
{ CTitles :  2 ,  From :  1981 ,  Conf :  'W' ,  WL :  0.502 ,  Franchise :  'Dallas Mavericks' ,  Champ :  1 ,  Div :  'Southwest' ,  Image :  'http://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif' ,  DTitles :  3 },
{ CTitles :  0 ,  From :  1968 ,  Conf :  'W' ,  WL :  0.499 ,  Franchise :  'Denver Nuggets' ,  Champ :  0 ,  Div :  'Northwest' ,  Image :  'http://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif' ,  DTitles :  10 },
{ CTitles :  5 ,  From :  1947 ,  Conf :  'W' ,  WL :  0.482 ,  Franchise :  'Golden State Warriors',  Champ :  6 ,  Div :  'Pacific' ,  Image :  'http://content.sportslogos.net/logos/6/235/thumbs/qhhir6fj8zp30f33s7sfb4yw0.gif' ,  DTitles :  11 },
{ CTitles :  4 ,  From :  1968 ,  Conf :  'W' ,  WL :  0.525 ,  Franchise :  'Houston Rockets' ,  Champ :  2 ,  Div :  'Southwest' ,  Image :  'http://content.sportslogos.net/logos/6/230/thumbs/8xe4813lzybfhfl14axgzzqeq.gif' ,  DTitles :  6 },
{ CTitles :  0 ,  From :  1971 ,  Conf :  'W' ,  WL :  0.403 ,  Franchise :  'Los Angeles Clippers' ,  Champ :  0 ,  Div :  'Pacific' ,  Image :  'http://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif' ,  DTitles :  2 },
{ CTitles :  18,  From :  1949 ,  Conf :  'W' ,  WL :  0.596 ,  Franchise : 'Los Angeles Lakers' ,  Champ :  16 ,  Div :  'Pacific' ,  Image :  'http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif' ,  DTitles :  32 },
{ CTitles :  0 ,  From :  1996 ,  Conf :  'W' ,  WL :  0.415 ,  Franchise :  'Memphis Grizzlies' ,  Champ :  0 ,  Div :  'Southwest' ,  Image :  'http://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif' ,  DTitles :  0 },
{ CTitles :  0 ,  From :  1990 ,  Conf :  'W' ,  WL :  0.398 ,  Franchise :  'Minnesota Timberwolves' ,  Champ :  0 ,  Div :  'Northwest' ,  Image :  'http://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif' ,  DTitles :  1 },
{ CTitles :  0 ,  From :  2003 ,  Conf :  'W' ,  WL :  0.471 ,  Franchise :  'New Orleans Pelicans' ,  Champ :  0 ,  Div :  'Southwest' ,  Image :  'http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif' ,  DTitles :  1 },
{ CTitles :  4 ,  From :  1968 ,  Conf :  'W' ,  WL :  0.541 ,  Franchise :  'Oklahoma City Thunder' ,  Champ :  1 ,  Div :  'Northwest' ,  Image :  'http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif' ,  DTitles :  11 },
{ CTitles :  2 ,  From :  1969 ,  Conf :  'W' ,  WL :  0.533 ,  Franchise :  'Phoenix Suns' ,  Champ :  0 ,  Div :  'Pacific' ,  Image :  'http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif' ,  DTitles :  6 },
{ CTitles :  3 ,  From :  1971 ,  Conf :  'W' ,  WL :  0.536 ,  Franchise :  'Portland Trail Blazers' ,  Champ :  1 ,  Div :  'Northwest' ,  Image :  'http://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif' ,  DTitles :  6 },
{ CTitles :  0 ,  From :  1949 ,  Conf :  'W' ,  WL :  0.456 ,  Franchise :  'Sacramento Kings' ,  Champ :  1 ,  Div :  'Pacific' ,  Image :  'http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif' ,  DTitles :  5 },
{ CTitles :  6 ,  From :  1968 ,  Conf :  'W' ,  WL :  0.601 ,  Franchise :  'San Antonio Spurs' ,  Champ :  5 ,  Div :  'Southwest' ,  Image :  'http://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif' ,  DTitles :  22 },
{ CTitles :  2 ,  From :  1975 ,  Conf :  'W' ,  WL :  0.537 ,  Franchise :  'Utah Jazz',  Champ :  0 ,  Div :  'Northwest' ,  Image :  'http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif' ,  DTitles :  9 }
]

class NbaApp extends Component {
  render() {
    return (
      <div className = "App">
      <NavBar/>
        <FilteredList items={teams}/>
      </div>
    );
  }
}

export default NbaApp;

import React, {useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/de';
import {Section} from './Section';
import ReactFullpage from "@fullpage/react-fullpage";
import i18n from 'i18next';
import k from "./i18n/keys";

import "./css/App.css";
import "./css/Section.css";

function App(props) {
  useEffect(() => {
    moment.locale(localStorage.getItem("lng") || "de")
    sessionStorage.setItem("timestamp", moment());
  });

  const colors = [
    "#12131D",
    "#12131D",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#E4E5F2",
    "#223970",
    "#333",
    "#333"
  ];

  const toolTips = [
    i18n.t(k['HEROTITLE']),
    i18n.t(k['SPACETITLE']),
    i18n.t(k['OZONETITLE']),
    i18n.t(k['POLLUTIONTITLE']),
    i18n.t(k['MOUNTAINSTITLE']),
    i18n.t(k['WEATHERTITLE']),
    i18n.t(k['ANIMALSTITLE']),
    i18n.t(k['ICETITLE']),
    i18n.t(k['PLASTICTITLE']),
    i18n.t(k['TIMETITLE']),
    "Team"
  ];

  return (
    <ReactFullpage
    sectionsColor={colors}
    verticalCentered = {false}
    fitToSection = {false}
    showActiveTooltip = {true}
    navigation
    navigationPosition = "left"
    navigationTooltips={toolTips}
    render = {({ state, fullpageApi }) => {
      return (
      <div className="App">
        <Section className="hero" button="button call-to-action" action = {() => scrollTo("space")} symbol="arrow_down"/>
        <Section className="space" texts = {["space"]} src={["Planet"]} />
        <Section className="ozone" texts = {["ozone"]} src={["Rocket"]}/>
        <Section className="pollution" texts = {["air", "pollution"]} src={["Plane", "Car"]}/>
        <Section className="mountains" texts = {["mountains"]} src={["Mountain"]}/>
        <Section className="weather"/>
        <Section className="animals"/>
        <Section className="ice" texts = {["ice"]}/>
        <Section className="plastic" texts = {["plastic", "coral"]}/>
        <Section className="time" texts = {["time"]}/>
        <Section className="team" texts = {["team"]}/>
      </div>);
    }}
    />
  );
}

function scrollTo(target) {
  let element = document.getElementsByClassName(target)[0];

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default App;

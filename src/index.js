import "./styles.css";
import { pageLoadElements } from "./pageload.js";
import { getMenu } from "./menu.js";
import { home } from "./pageload.js";
import { aboutUs } from "./aboutus.js";

const menuTab = document.querySelector('#menu')
menuTab.addEventListener('click', getMenu)

const aboutUsTab = document.querySelector('#about');
aboutUsTab.addEventListener('click', aboutUs)

const homeTab = document.querySelector('#home')
homeTab.addEventListener('click', home)




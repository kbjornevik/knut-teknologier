import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.57,
   'Bergen':0.47,
   'Oslo':0.47,
   'Tromsø':0.23,
   'Molde':0.42,
   'Tr_heim':0.42,
   'Dato':'06-05'}
,
 { 'Kr_sand':0.55,
   'Bergen':0.46,
   'Oslo':0.46,
   'Tromsø':0.22,
   'Molde':0.41,
   'Tr_heim':0.41,
   'Dato':'06-06'}
,
 { 'Kr_sand':0.58,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.21,
   'Molde':0.56,
   'Tr_heim':0.56,
   'Dato':'06-07'}
,
 { 'Kr_sand':0.58,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.20,
   'Molde':0.54,
   'Tr_heim':0.54,
   'Dato':'06-08'}
,
 { 'Kr_sand':0.58,
   'Bergen':0.55,
   'Oslo':0.55,
   'Tromsø':0.21,
   'Molde':0.54,
   'Tr_heim':0.54,
   'Dato':'06-09'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.54,
   'Oslo':0.55,
   'Tromsø':0.19,
   'Molde':0.52,
   'Tr_heim':0.52,
   'Dato':'06-10'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.51,
   'Oslo':0.52,
   'Tromsø':0.21,
   'Molde':0.38,
   'Tr_heim':0.38,
   'Dato':'06-11'}
,
 { 'Kr_sand':0.39,
   'Bergen':0.36,
   'Oslo':0.36,
   'Tromsø':0.15,
   'Molde':0.17,
   'Tr_heim':0.17,
   'Dato':'06-12'}
,
 { 'Kr_sand':0.21,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.10,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'06-13'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.47,
   'Oslo':0.47,
   'Tromsø':0.21,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'06-14'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.47,
   'Oslo':0.47,
   'Tromsø':0.19,
   'Molde':0.21,
   'Tr_heim':0.21,
   'Dato':'06-15'}
,
 { 'Kr_sand':0.51,
   'Bergen':0.46,
   'Oslo':0.46,
   'Tromsø':0.22,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'06-16'}
,
 { 'Kr_sand':0.51,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.22,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'06-17'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.42,
   'Oslo':0.42,
   'Tromsø':0.22,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'06-18'}
,
 { 'Kr_sand':0.54,
   'Bergen':0.41,
   'Oslo':0.41,
   'Tromsø':0.21,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'06-19'}
 ] 
    const LineChartPris = ({ }) =>
    {   return ( < LineChart width ={ 700}   height ={ 250} data ={ linedata} 
      margin ={ { top: 5, right: 30, left: 20, bottom: 5 } }>
      < CartesianGrid strokeDasharray = '3 3' /> 
      < XAxis  tick={{fontSize: 8}} dataKey = 'Dato' />  < YAxis datakey = 'Bergen' />  < Tooltip /> < Legend />
      < Line type = 'monotone' dataKey = 'Bergen' stroke = '#8884d8' />
      < Line type = 'monotone' dataKey = 'Kr_sand' stroke = '#82ca9d' />
      < Line type = 'monotone' dataKey = 'Oslo' stroke = '#ab3322' />
      < Line type = 'monotone' dataKey = 'Tr_heim' stroke = '#ffed00' />
      < Line type = 'monotone' dataKey = 'Molde' stroke = '#00254a' />
      < Line type = 'monotone' dataKey = 'Tromsø' stroke = '#038d05' />
      </ LineChart >) }
  export default LineChartPris;

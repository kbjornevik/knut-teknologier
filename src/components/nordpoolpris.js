import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.53,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.27,
   'Molde':0.36,
   'Tr_heim':0.36,
   'Dato':'05-17'}
,
 { 'Kr_sand':0.55,
   'Bergen':0.55,
   'Oslo':0.55,
   'Tromsø':0.30,
   'Molde':0.34,
   'Tr_heim':0.34,
   'Dato':'05-18'}
,
 { 'Kr_sand':0.54,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.28,
   'Molde':0.52,
   'Tr_heim':0.52,
   'Dato':'05-19'}
,
 { 'Kr_sand':0.53,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.30,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'05-20'}
,
 { 'Kr_sand':0.36,
   'Bergen':0.36,
   'Oslo':0.36,
   'Tromsø':0.25,
   'Molde':0.25,
   'Tr_heim':0.25,
   'Dato':'05-21'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.19,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'05-22'}
,
 { 'Kr_sand':0.26,
   'Bergen':0.26,
   'Oslo':0.26,
   'Tromsø':0.18,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'05-23'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.23,
   'Molde':0.32,
   'Tr_heim':0.32,
   'Dato':'05-24'}
,
 { 'Kr_sand':0.50,
   'Bergen':0.50,
   'Oslo':0.50,
   'Tromsø':0.25,
   'Molde':0.35,
   'Tr_heim':0.35,
   'Dato':'05-25'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.52,
   'Oslo':0.52,
   'Tromsø':0.23,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'05-26'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.52,
   'Oslo':0.52,
   'Tromsø':0.24,
   'Molde':0.32,
   'Tr_heim':0.32,
   'Dato':'05-27'}
,
 { 'Kr_sand':0.53,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.24,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'05-28'}
,
 { 'Kr_sand':0.48,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.23,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'05-29'}
,
 { 'Kr_sand':0.38,
   'Bergen':0.38,
   'Oslo':0.38,
   'Tromsø':0.22,
   'Molde':0.28,
   'Tr_heim':0.28,
   'Dato':'05-30'}
,
 { 'Kr_sand':0.55,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.23,
   'Molde':0.36,
   'Tr_heim':0.36,
   'Dato':'05-31'}
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

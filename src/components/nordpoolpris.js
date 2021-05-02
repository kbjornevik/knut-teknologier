import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.48,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.25,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'04-19'}
,
 { 'Kr_sand':0.46,
   'Bergen':0.46,
   'Oslo':0.46,
   'Tromsø':0.25,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'04-20'}
,
 { 'Kr_sand':0.42,
   'Bergen':0.42,
   'Oslo':0.42,
   'Tromsø':0.26,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'04-21'}
,
 { 'Kr_sand':0.41,
   'Bergen':0.41,
   'Oslo':0.41,
   'Tromsø':0.22,
   'Molde':0.22,
   'Tr_heim':0.22,
   'Dato':'04-22'}
,
 { 'Kr_sand':0.45,
   'Bergen':0.45,
   'Oslo':0.45,
   'Tromsø':0.23,
   'Molde':0.25,
   'Tr_heim':0.25,
   'Dato':'04-23'}
,
 { 'Kr_sand':0.46,
   'Bergen':0.46,
   'Oslo':0.46,
   'Tromsø':0.24,
   'Molde':0.24,
   'Tr_heim':0.24,
   'Dato':'04-24'}
,
 { 'Kr_sand':0.44,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.24,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'04-25'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.50,
   'Molde':0.56,
   'Tr_heim':0.56,
   'Dato':'04-26'}
,
 { 'Kr_sand':0.54,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.54,
   'Molde':0.54,
   'Tr_heim':0.54,
   'Dato':'04-27'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.58,
   'Molde':0.58,
   'Tr_heim':0.58,
   'Dato':'04-28'}
,
 { 'Kr_sand':0.53,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.51,
   'Molde':0.53,
   'Tr_heim':0.53,
   'Dato':'04-29'}
,
 { 'Kr_sand':0.55,
   'Bergen':0.55,
   'Oslo':0.55,
   'Tromsø':0.42,
   'Molde':0.42,
   'Tr_heim':0.42,
   'Dato':'04-30'}
,
 { 'Kr_sand':0.51,
   'Bergen':0.51,
   'Oslo':0.51,
   'Tromsø':0.46,
   'Molde':0.46,
   'Tr_heim':0.46,
   'Dato':'05-01'}
,
 { 'Kr_sand':0.46,
   'Bergen':0.46,
   'Oslo':0.46,
   'Tromsø':0.45,
   'Molde':0.45,
   'Tr_heim':0.45,
   'Dato':'05-02'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.60,
   'Oslo':0.60,
   'Tromsø':0.60,
   'Molde':0.60,
   'Tr_heim':0.60,
   'Dato':'05-03'}
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

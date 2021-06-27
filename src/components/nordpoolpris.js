import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
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
,
 { 'Kr_sand':0.50,
   'Bergen':0.39,
   'Oslo':0.39,
   'Tromsø':0.21,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'06-20'}
,
 { 'Kr_sand':0.00,
   'Bergen':0.00,
   'Oslo':0.00,
   'Tromsø':0.00,
   'Molde':0.00,
   'Tr_heim':0.00,
   'Dato':'06-21'}
,
 { 'Kr_sand':0.56,
   'Bergen':0.45,
   'Oslo':0.45,
   'Tromsø':0.22,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'06-22'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.47,
   'Oslo':0.47,
   'Tromsø':0.22,
   'Molde':0.32,
   'Tr_heim':0.32,
   'Dato':'06-23'}
,
 { 'Kr_sand':0.62,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.22,
   'Molde':0.36,
   'Tr_heim':0.36,
   'Dato':'06-24'}
,
 { 'Kr_sand':0.62,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.22,
   'Molde':0.34,
   'Tr_heim':0.34,
   'Dato':'06-25'}
,
 { 'Kr_sand':0.63,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.23,
   'Molde':0.34,
   'Tr_heim':0.34,
   'Dato':'06-26'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.23,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'06-27'}
,
 { 'Kr_sand':0.63,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.23,
   'Molde':0.36,
   'Tr_heim':0.36,
   'Dato':'06-28'}
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

import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.75,
   'Bergen':0.75,
   'Oslo':0.75,
   'Tromsø':0.40,
   'Molde':0.44,
   'Tr_heim':0.44,
   'Dato':'01-15'}
,
 { 'Kr_sand':0.56,
   'Bergen':0.56,
   'Oslo':0.56,
   'Tromsø':0.41,
   'Molde':0.42,
   'Tr_heim':0.42,
   'Dato':'01-16'}
,
 { 'Kr_sand':0.54,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.44,
   'Molde':0.44,
   'Tr_heim':0.44,
   'Dato':'01-17'}
,
 { 'Kr_sand':0.56,
   'Bergen':0.56,
   'Oslo':0.56,
   'Tromsø':0.50,
   'Molde':0.50,
   'Tr_heim':0.50,
   'Dato':'01-18'}
,
 { 'Kr_sand':0.47,
   'Bergen':0.47,
   'Oslo':0.47,
   'Tromsø':0.43,
   'Molde':0.43,
   'Tr_heim':0.43,
   'Dato':'01-19'}
,
 { 'Kr_sand':0.36,
   'Bergen':0.36,
   'Oslo':0.36,
   'Tromsø':0.35,
   'Molde':0.35,
   'Tr_heim':0.35,
   'Dato':'01-20'}
,
 { 'Kr_sand':0.32,
   'Bergen':0.32,
   'Oslo':0.32,
   'Tromsø':0.28,
   'Molde':0.28,
   'Tr_heim':0.28,
   'Dato':'01-21'}
,
 { 'Kr_sand':0.32,
   'Bergen':0.32,
   'Oslo':0.32,
   'Tromsø':0.27,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'01-22'}
,
 { 'Kr_sand':0.41,
   'Bergen':0.41,
   'Oslo':0.41,
   'Tromsø':0.34,
   'Molde':0.34,
   'Tr_heim':0.34,
   'Dato':'01-23'}
,
 { 'Kr_sand':0.49,
   'Bergen':0.49,
   'Oslo':0.49,
   'Tromsø':0.32,
   'Molde':0.47,
   'Tr_heim':0.47,
   'Dato':'01-24'}
,
 { 'Kr_sand':0.62,
   'Bergen':0.62,
   'Oslo':0.62,
   'Tromsø':0.40,
   'Molde':0.53,
   'Tr_heim':0.53,
   'Dato':'01-25'}
,
 { 'Kr_sand':0.62,
   'Bergen':0.62,
   'Oslo':0.62,
   'Tromsø':0.40,
   'Molde':0.51,
   'Tr_heim':0.51,
   'Dato':'01-26'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.60,
   'Oslo':0.60,
   'Tromsø':0.52,
   'Molde':0.55,
   'Tr_heim':0.55,
   'Dato':'01-27'}
,
 { 'Kr_sand':0.58,
   'Bergen':0.58,
   'Oslo':0.59,
   'Tromsø':0.58,
   'Molde':0.58,
   'Tr_heim':0.58,
   'Dato':'01-28'}
,
 { 'Kr_sand':0.53,
   'Bergen':0.55,
   'Oslo':0.56,
   'Tromsø':0.53,
   'Molde':0.53,
   'Tr_heim':0.53,
   'Dato':'01-29'}
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

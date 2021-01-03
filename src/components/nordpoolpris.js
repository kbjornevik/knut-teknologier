import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12-21'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.13,
   'Molde':0.13,
   'Tr_heim':0.13,
   'Dato':'12-22'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12-23'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12-24'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12-25'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12-26'}
,
 { 'Kr_sand':0.08,
   'Bergen':0.08,
   'Oslo':0.08,
   'Tromsø':0.08,
   'Molde':0.08,
   'Tr_heim':0.08,
   'Dato':'12-27'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.13,
   'Molde':0.13,
   'Tr_heim':0.13,
   'Dato':'12-28'}
,
 { 'Kr_sand':0.23,
   'Bergen':0.23,
   'Oslo':0.23,
   'Tromsø':0.16,
   'Molde':0.17,
   'Tr_heim':0.17,
   'Dato':'12-29'}
,
 { 'Kr_sand':0.25,
   'Bergen':0.25,
   'Oslo':0.25,
   'Tromsø':0.18,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'12-30'}
,
 { 'Kr_sand':0.26,
   'Bergen':0.26,
   'Oslo':0.26,
   'Tromsø':0.19,
   'Molde':0.25,
   'Tr_heim':0.25,
   'Dato':'12-31'}
,
 { 'Kr_sand':0.27,
   'Bergen':0.27,
   'Oslo':0.27,
   'Tromsø':0.24,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'01-01'}
,
 { 'Kr_sand':0.28,
   'Bergen':0.28,
   'Oslo':0.28,
   'Tromsø':0.26,
   'Molde':0.32,
   'Tr_heim':0.32,
   'Dato':'01-02'}
,
 { 'Kr_sand':0.27,
   'Bergen':0.27,
   'Oslo':0.27,
   'Tromsø':0.23,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'01-03'}
,
 { 'Kr_sand':0.44,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.21,
   'Molde':0.44,
   'Tr_heim':0.44,
   'Dato':'01-04'}
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

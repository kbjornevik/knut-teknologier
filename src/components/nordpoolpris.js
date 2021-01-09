import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
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
,
 { 'Kr_sand':0.48,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.21,
   'Molde':0.49,
   'Tr_heim':0.49,
   'Dato':'01-05'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.25,
   'Molde':0.43,
   'Tr_heim':0.43,
   'Dato':'01-06'}
,
 { 'Kr_sand':0.70,
   'Bergen':0.70,
   'Oslo':0.70,
   'Tromsø':0.29,
   'Molde':0.70,
   'Tr_heim':0.70,
   'Dato':'01-07'}
,
 { 'Kr_sand':0.79,
   'Bergen':0.79,
   'Oslo':0.79,
   'Tromsø':0.34,
   'Molde':0.80,
   'Tr_heim':0.80,
   'Dato':'01-08'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.57,
   'Oslo':0.57,
   'Tromsø':0.36,
   'Molde':0.43,
   'Tr_heim':0.43,
   'Dato':'01-09'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.37,
   'Molde':0.40,
   'Tr_heim':0.40,
   'Dato':'01-10'}
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

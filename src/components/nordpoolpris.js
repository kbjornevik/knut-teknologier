import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.28,
   'Bergen':0.31,
   'Oslo':0.28,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'04-04'}
,
 { 'Kr_sand':0.18,
   'Bergen':0.22,
   'Oslo':0.18,
   'Tromsø':0.10,
   'Molde':0.10,
   'Tr_heim':0.10,
   'Dato':'04-05'}
,
 { 'Kr_sand':0.33,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.19,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'04-06'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.41,
   'Oslo':0.48,
   'Tromsø':0.20,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'04-07'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.42,
   'Oslo':0.48,
   'Tromsø':0.29,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'04-08'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.20,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'04-09'}
,
 { 'Kr_sand':0.41,
   'Bergen':0.41,
   'Oslo':0.41,
   'Tromsø':0.20,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'04-10'}
,
 { 'Kr_sand':0.42,
   'Bergen':0.42,
   'Oslo':0.42,
   'Tromsø':0.23,
   'Molde':0.23,
   'Tr_heim':0.23,
   'Dato':'04-11'}
,
 { 'Kr_sand':0.45,
   'Bergen':0.45,
   'Oslo':0.45,
   'Tromsø':0.23,
   'Molde':0.23,
   'Tr_heim':0.23,
   'Dato':'04-12'}
,
 { 'Kr_sand':0.44,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.24,
   'Molde':0.24,
   'Tr_heim':0.24,
   'Dato':'04-13'}
,
 { 'Kr_sand':0.56,
   'Bergen':0.49,
   'Oslo':0.59,
   'Tromsø':0.24,
   'Molde':0.24,
   'Tr_heim':0.24,
   'Dato':'04-14'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.54,
   'Oslo':0.61,
   'Tromsø':0.27,
   'Molde':0.28,
   'Tr_heim':0.28,
   'Dato':'04-15'}
,
 { 'Kr_sand':0.05,
   'Bergen':0.05,
   'Oslo':0.05,
   'Tromsø':0.03,
   'Molde':0.03,
   'Tr_heim':0.03,
   'Dato':'04-16'}
,
 { 'Kr_sand':0.49,
   'Bergen':0.49,
   'Oslo':0.49,
   'Tromsø':0.26,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'04-17'}
,
 { 'Kr_sand':0.49,
   'Bergen':0.49,
   'Oslo':0.49,
   'Tromsø':0.25,
   'Molde':0.25,
   'Tr_heim':0.25,
   'Dato':'04-18'}
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

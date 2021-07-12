import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.62,
   'Bergen':0.52,
   'Oslo':0.52,
   'Tromsø':0.23,
   'Molde':0.38,
   'Tr_heim':0.38,
   'Dato':'06-29'}
,
 { 'Kr_sand':0.63,
   'Bergen':0.51,
   'Oslo':0.51,
   'Tromsø':0.23,
   'Molde':0.39,
   'Tr_heim':0.39,
   'Dato':'06-30'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.49,
   'Oslo':0.49,
   'Tromsø':0.21,
   'Molde':0.40,
   'Tr_heim':0.40,
   'Dato':'07-01'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.52,
   'Oslo':0.52,
   'Tromsø':0.21,
   'Molde':0.47,
   'Tr_heim':0.47,
   'Dato':'07-02'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.52,
   'Oslo':0.52,
   'Tromsø':0.22,
   'Molde':0.48,
   'Tr_heim':0.48,
   'Dato':'07-03'}
,
 { 'Kr_sand':0.61,
   'Bergen':0.55,
   'Oslo':0.55,
   'Tromsø':0.22,
   'Molde':0.46,
   'Tr_heim':0.46,
   'Dato':'07-04'}
,
 { 'Kr_sand':0.61,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.22,
   'Molde':0.49,
   'Tr_heim':0.49,
   'Dato':'07-05'}
,
 { 'Kr_sand':0.59,
   'Bergen':0.57,
   'Oslo':0.57,
   'Tromsø':0.22,
   'Molde':0.48,
   'Tr_heim':0.48,
   'Dato':'07-06'}
,
 { 'Kr_sand':0.59,
   'Bergen':0.57,
   'Oslo':0.57,
   'Tromsø':0.21,
   'Molde':0.48,
   'Tr_heim':0.48,
   'Dato':'07-07'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.59,
   'Oslo':0.59,
   'Tromsø':0.21,
   'Molde':0.73,
   'Tr_heim':0.73,
   'Dato':'07-08'}
,
 { 'Kr_sand':0.61,
   'Bergen':0.60,
   'Oslo':0.60,
   'Tromsø':0.26,
   'Molde':0.57,
   'Tr_heim':0.57,
   'Dato':'07-09'}
,
 { 'Kr_sand':0.59,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.23,
   'Molde':0.56,
   'Tr_heim':0.56,
   'Dato':'07-10'}
,
 { 'Kr_sand':0.60,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.22,
   'Molde':0.42,
   'Tr_heim':0.42,
   'Dato':'07-11'}
,
 { 'Kr_sand':0.61,
   'Bergen':0.60,
   'Oslo':0.60,
   'Tromsø':0.21,
   'Molde':0.51,
   'Tr_heim':0.51,
   'Dato':'07-12'}
,
 { 'Kr_sand':0.61,
   'Bergen':0.61,
   'Oslo':0.61,
   'Tromsø':0.20,
   'Molde':0.49,
   'Tr_heim':0.49,
   'Dato':'07-13'}
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

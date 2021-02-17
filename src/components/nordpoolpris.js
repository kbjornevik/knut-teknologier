import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.54,
   'Bergen':0.61,
   'Oslo':0.61,
   'Tromsø':0.42,
   'Molde':0.42,
   'Tr_heim':0.42,
   'Dato':'02-04'}
,
 { 'Kr_sand':0.53,
   'Bergen':0.81,
   'Oslo':0.81,
   'Tromsø':0.36,
   'Molde':0.47,
   'Tr_heim':0.47,
   'Dato':'02-05'}
,
 { 'Kr_sand':0.41,
   'Bergen':0.47,
   'Oslo':0.47,
   'Tromsø':0.34,
   'Molde':0.45,
   'Tr_heim':0.45,
   'Dato':'02-06'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.42,
   'Oslo':0.42,
   'Tromsø':0.37,
   'Molde':0.42,
   'Tr_heim':0.42,
   'Dato':'02-07'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.53,
   'Molde':0.53,
   'Tr_heim':0.53,
   'Dato':'02-08'}
,
 { 'Kr_sand':0.06,
   'Bergen':0.07,
   'Oslo':0.07,
   'Tromsø':0.06,
   'Molde':0.06,
   'Tr_heim':0.06,
   'Dato':'02-09'}
,
 { 'Kr_sand':0.07,
   'Bergen':0.07,
   'Oslo':0.07,
   'Tromsø':0.05,
   'Molde':0.05,
   'Tr_heim':0.05,
   'Dato':'02-10'}
,
 { 'Kr_sand':0.08,
   'Bergen':0.10,
   'Oslo':0.10,
   'Tromsø':0.05,
   'Molde':0.05,
   'Tr_heim':0.05,
   'Dato':'02-11'}
,
 { 'Kr_sand':0.06,
   'Bergen':0.08,
   'Oslo':0.08,
   'Tromsø':0.04,
   'Molde':0.04,
   'Tr_heim':0.04,
   'Dato':'02-12'}
,
 { 'Kr_sand':0.55,
   'Bergen':0.55,
   'Oslo':0.55,
   'Tromsø':0.38,
   'Molde':0.38,
   'Tr_heim':0.38,
   'Dato':'02-13'}
,
 { 'Kr_sand':0.47,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.44,
   'Molde':0.44,
   'Tr_heim':0.44,
   'Dato':'02-14'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.65,
   'Oslo':0.65,
   'Tromsø':0.46,
   'Molde':0.46,
   'Tr_heim':0.46,
   'Dato':'02-15'}
,
 { 'Kr_sand':0.53,
   'Bergen':0.56,
   'Oslo':0.56,
   'Tromsø':0.47,
   'Molde':0.47,
   'Tr_heim':0.47,
   'Dato':'02-16'}
,
 { 'Kr_sand':0.51,
   'Bergen':0.51,
   'Oslo':0.51,
   'Tromsø':0.41,
   'Molde':0.41,
   'Tr_heim':0.41,
   'Dato':'02-17'}
,
 { 'Kr_sand':0.45,
   'Bergen':0.46,
   'Oslo':0.46,
   'Tromsø':0.37,
   'Molde':0.39,
   'Tr_heim':0.39,
   'Dato':'02-18'}
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

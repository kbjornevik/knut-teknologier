import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
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
,
 { 'Kr_sand':0.48,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.40,
   'Molde':0.43,
   'Tr_heim':0.43,
   'Dato':'02-19'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.37,
   'Molde':0.37,
   'Tr_heim':0.37,
   'Dato':'02-20'}
,
 { 'Kr_sand':0.36,
   'Bergen':0.36,
   'Oslo':0.36,
   'Tromsø':0.34,
   'Molde':0.36,
   'Tr_heim':0.36,
   'Dato':'02-21'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.43,
   'Molde':0.43,
   'Tr_heim':0.43,
   'Dato':'02-22'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.40,
   'Oslo':0.40,
   'Tromsø':0.38,
   'Molde':0.38,
   'Tr_heim':0.38,
   'Dato':'02-23'}
,
 { 'Kr_sand':0.33,
   'Bergen':0.33,
   'Oslo':0.33,
   'Tromsø':0.31,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'02-24'}
,
 { 'Kr_sand':0.33,
   'Bergen':0.33,
   'Oslo':0.33,
   'Tromsø':0.29,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'02-25'}
,
 { 'Kr_sand':0.31,
   'Bergen':0.31,
   'Oslo':0.31,
   'Tromsø':0.26,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'02-26'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.27,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'02-27'}
,
 { 'Kr_sand':0.36,
   'Bergen':0.36,
   'Oslo':0.36,
   'Tromsø':0.25,
   'Molde':0.25,
   'Tr_heim':0.25,
   'Dato':'02-28'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.40,
   'Oslo':0.40,
   'Tromsø':0.25,
   'Molde':0.25,
   'Tr_heim':0.25,
   'Dato':'03-01'}
,
 { 'Kr_sand':0.44,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.27,
   'Molde':0.27,
   'Tr_heim':0.27,
   'Dato':'03-02'}
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

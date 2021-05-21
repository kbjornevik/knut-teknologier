import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.53,
   'Bergen':0.53,
   'Oslo':0.53,
   'Tromsø':0.48,
   'Molde':0.48,
   'Tr_heim':0.48,
   'Dato':'05-08'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.45,
   'Oslo':0.40,
   'Tromsø':0.28,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'05-09'}
,
 { 'Kr_sand':0.50,
   'Bergen':0.50,
   'Oslo':0.50,
   'Tromsø':0.43,
   'Molde':0.43,
   'Tr_heim':0.43,
   'Dato':'05-10'}
,
 { 'Kr_sand':0.54,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.40,
   'Molde':0.40,
   'Tr_heim':0.40,
   'Dato':'05-11'}
,
 { 'Kr_sand':0.54,
   'Bergen':0.54,
   'Oslo':0.54,
   'Tromsø':0.39,
   'Molde':0.39,
   'Tr_heim':0.39,
   'Dato':'05-12'}
,
 { 'Kr_sand':0.51,
   'Bergen':0.51,
   'Oslo':0.51,
   'Tromsø':0.26,
   'Molde':0.30,
   'Tr_heim':0.30,
   'Dato':'05-13'}
,
 { 'Kr_sand':0.52,
   'Bergen':0.52,
   'Oslo':0.52,
   'Tromsø':0.28,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'05-14'}
,
 { 'Kr_sand':0.50,
   'Bergen':0.50,
   'Oslo':0.50,
   'Tromsø':0.21,
   'Molde':0.22,
   'Tr_heim':0.22,
   'Dato':'05-15'}
,
 { 'Kr_sand':0.35,
   'Bergen':0.35,
   'Oslo':0.35,
   'Tromsø':0.23,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'05-16'}
,
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

import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.39,
   'Bergen':0.39,
   'Oslo':0.39,
   'Tromsø':0.22,
   'Molde':0.22,
   'Tr_heim':0.22,
   'Dato':'03-20'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.19,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'03-21'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.24,
   'Molde':0.24,
   'Tr_heim':0.24,
   'Dato':'03-22'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.23,
   'Molde':0.23,
   'Tr_heim':0.23,
   'Dato':'03-23'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.40,
   'Oslo':0.40,
   'Tromsø':0.21,
   'Molde':0.21,
   'Tr_heim':0.21,
   'Dato':'03-24'}
,
 { 'Kr_sand':0.41,
   'Bergen':0.41,
   'Oslo':0.41,
   'Tromsø':0.23,
   'Molde':0.23,
   'Tr_heim':0.23,
   'Dato':'03-25'}
,
 { 'Kr_sand':0.39,
   'Bergen':0.39,
   'Oslo':0.39,
   'Tromsø':0.22,
   'Molde':0.22,
   'Tr_heim':0.22,
   'Dato':'03-26'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.19,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'03-27'}
,
 { 'Kr_sand':0.38,
   'Bergen':0.38,
   'Oslo':0.38,
   'Tromsø':0.20,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'03-28'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.21,
   'Molde':0.21,
   'Tr_heim':0.21,
   'Dato':'03-29'}
,
 { 'Kr_sand':0.39,
   'Bergen':0.39,
   'Oslo':0.39,
   'Tromsø':0.19,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'03-30'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.40,
   'Oslo':0.40,
   'Tromsø':0.20,
   'Molde':0.20,
   'Tr_heim':0.20,
   'Dato':'03-31'}
,
 { 'Kr_sand':0.40,
   'Bergen':0.40,
   'Oslo':0.40,
   'Tromsø':0.19,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'04-01'}
,
 { 'Kr_sand':0.33,
   'Bergen':0.34,
   'Oslo':0.33,
   'Tromsø':0.16,
   'Molde':0.16,
   'Tr_heim':0.16,
   'Dato':'04-02'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.18,
   'Molde':0.18,
   'Tr_heim':0.18,
   'Dato':'04-03'}
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

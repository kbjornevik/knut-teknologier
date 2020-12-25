import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.21,
   'Bergen':0.21,
   'Oslo':0.21,
   'Tromsø':0.12,
   'Molde':0.16,
   'Tr_heim':0.16,
   'Dato':'12.05'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.12,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.06'}
,
 { 'Kr_sand':0.18,
   'Bergen':0.18,
   'Oslo':0.18,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.07'}
,
 { 'Kr_sand':0.22,
   'Bergen':0.22,
   'Oslo':0.22,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.08'}
,
 { 'Kr_sand':0.34,
   'Bergen':0.34,
   'Oslo':0.34,
   'Tromsø':0.13,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.09'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.26,
   'Oslo':0.43,
   'Tromsø':0.14,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.10'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.11'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.12'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.15,
   'Molde':0.17,
   'Tr_heim':0.17,
   'Dato':'12.13'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.15,
   'Molde':0.16,
   'Tr_heim':0.16,
   'Dato':'12.14'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.16,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'12.15'}
,
 { 'Kr_sand':0.25,
   'Bergen':0.25,
   'Oslo':0.25,
   'Tromsø':0.16,
   'Molde':0.21,
   'Tr_heim':0.21,
   'Dato':'12.16'}
,
 { 'Kr_sand':0.23,
   'Bergen':0.23,
   'Oslo':0.23,
   'Tromsø':0.16,
   'Molde':0.17,
   'Tr_heim':0.17,
   'Dato':'12.17'}
,
 { 'Kr_sand':0.21,
   'Bergen':0.21,
   'Oslo':0.21,
   'Tromsø':0.16,
   'Molde':0.17,
   'Tr_heim':0.17,
   'Dato':'12.18'}
,
 { 'Kr_sand':0.18,
   'Bergen':0.18,
   'Oslo':0.18,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.19'}
,
 { 'Kr_sand':0.16,
   'Bergen':0.16,
   'Oslo':0.16,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.20'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.21'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.13,
   'Molde':0.13,
   'Tr_heim':0.13,
   'Dato':'12.22'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.23'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.24'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'12.25'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'12.26'}
 ] 
    const LineChartPris = ({ }) =>
    {   return ( < LineChart width ={ 700}   height ={ 250} data ={ linedata} 
      margin ={ { top: 5, right: 30, left: 20, bottom: 5 } }>
      < CartesianGrid strokeDasharray = '3 3' />  < XAxis dataKey = 'Dato' />  < YAxis datakey = 'Bergen' />  < Tooltip /> < Legend />
      < Line type = 'monotone' dataKey = 'Bergen' stroke = '#8884d8' />
      < Line type = 'monotone' dataKey = 'Kr_sand' stroke = '#82ca9d' />
      < Line type = 'monotone' dataKey = 'Oslo' stroke = '#ab3322' />
      < Line type = 'monotone' dataKey = 'Tr_heim' stroke = '#ffed00' />
      < Line type = 'monotone' dataKey = 'Molde' stroke = '#00254a' />
      < Line type = 'monotone' dataKey = 'Tromsø' stroke = '#038d05' />
      </ LineChart >) }
  export default LineChartPris;

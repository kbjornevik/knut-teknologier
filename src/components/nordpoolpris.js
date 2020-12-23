import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.01,
   'Bergen':0.01,
   'Oslo':0.01,
   'Tromsø':0.04,
   'Molde':0.04,
   'Tr_heim':0.04,
   'Dato':'17.11'}
,
 { 'Kr_sand':0.01,
   'Bergen':0.01,
   'Oslo':0.01,
   'Tromsø':0.04,
   'Molde':0.04,
   'Tr_heim':0.04,
   'Dato':'18.11'}
,
 { 'Kr_sand':0.01,
   'Bergen':0.01,
   'Oslo':0.01,
   'Tromsø':0.03,
   'Molde':0.03,
   'Tr_heim':0.03,
   'Dato':'19.11'}
,
 { 'Kr_sand':0.02,
   'Bergen':0.02,
   'Oslo':0.02,
   'Tromsø':0.03,
   'Molde':0.03,
   'Tr_heim':0.03,
   'Dato':'20.11'}
,
 { 'Kr_sand':0.01,
   'Bergen':0.01,
   'Oslo':0.01,
   'Tromsø':0.03,
   'Molde':0.03,
   'Tr_heim':0.03,
   'Dato':'21.11'}
,
 { 'Kr_sand':0.01,
   'Bergen':0.01,
   'Oslo':0.01,
   'Tromsø':0.02,
   'Molde':0.02,
   'Tr_heim':0.02,
   'Dato':'22.11'}
,
 { 'Kr_sand':0.02,
   'Bergen':0.02,
   'Oslo':0.02,
   'Tromsø':0.04,
   'Molde':0.04,
   'Tr_heim':0.04,
   'Dato':'23.11'}
,
 { 'Kr_sand':0.03,
   'Bergen':0.03,
   'Oslo':0.03,
   'Tromsø':0.06,
   'Molde':0.06,
   'Tr_heim':0.06,
   'Dato':'24.11'}
,
 { 'Kr_sand':0.02,
   'Bergen':0.02,
   'Oslo':0.02,
   'Tromsø':0.06,
   'Molde':0.06,
   'Tr_heim':0.06,
   'Dato':'25.11'}
,
 { 'Kr_sand':0.04,
   'Bergen':0.04,
   'Oslo':0.04,
   'Tromsø':0.07,
   'Molde':0.07,
   'Tr_heim':0.07,
   'Dato':'26.11'}
,
 { 'Kr_sand':0.08,
   'Bergen':0.08,
   'Oslo':0.08,
   'Tromsø':0.09,
   'Molde':0.09,
   'Tr_heim':0.09,
   'Dato':'27.11'}
,
 { 'Kr_sand':0.12,
   'Bergen':0.12,
   'Oslo':0.12,
   'Tromsø':0.10,
   'Molde':0.10,
   'Tr_heim':0.10,
   'Dato':'28.11'}
,
 { 'Kr_sand':0.14,
   'Bergen':0.14,
   'Oslo':0.14,
   'Tromsø':0.11,
   'Molde':0.12,
   'Tr_heim':0.12,
   'Dato':'29.11'}
,
 { 'Kr_sand':0.14,
   'Bergen':0.14,
   'Oslo':0.14,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'30.11'}
,
 { 'Kr_sand':0.16,
   'Bergen':0.16,
   'Oslo':0.16,
   'Tromsø':0.12,
   'Molde':0.12,
   'Tr_heim':0.12,
   'Dato':'01.12'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'02.12'}
,
 { 'Kr_sand':0.18,
   'Bergen':0.18,
   'Oslo':0.18,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'03.12'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.13,
   'Molde':0.13,
   'Tr_heim':0.13,
   'Dato':'04.12'}
,
 { 'Kr_sand':0.21,
   'Bergen':0.21,
   'Oslo':0.21,
   'Tromsø':0.12,
   'Molde':0.16,
   'Tr_heim':0.16,
   'Dato':'05.12'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.12,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'06.12'}
,
 { 'Kr_sand':0.18,
   'Bergen':0.18,
   'Oslo':0.18,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'07.12'}
,
 { 'Kr_sand':0.22,
   'Bergen':0.22,
   'Oslo':0.22,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'08.12'}
,
 { 'Kr_sand':0.34,
   'Bergen':0.34,
   'Oslo':0.34,
   'Tromsø':0.13,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'09.12'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.26,
   'Oslo':0.43,
   'Tromsø':0.14,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'10.12'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'11.12'}
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
   'Dato':'13.12'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.15,
   'Molde':0.16,
   'Tr_heim':0.16,
   'Dato':'14.12'}
,
 { 'Kr_sand':0.24,
   'Bergen':0.24,
   'Oslo':0.24,
   'Tromsø':0.16,
   'Molde':0.19,
   'Tr_heim':0.19,
   'Dato':'15.12'}
,
 { 'Kr_sand':0.25,
   'Bergen':0.25,
   'Oslo':0.25,
   'Tromsø':0.16,
   'Molde':0.21,
   'Tr_heim':0.21,
   'Dato':'16.12'}
,
 { 'Kr_sand':0.23,
   'Bergen':0.23,
   'Oslo':0.23,
   'Tromsø':0.16,
   'Molde':0.17,
   'Tr_heim':0.17,
   'Dato':'17.12'}
 ] 
    const LineChartPris = ({ }) =>
    {   return ( < LineChart width ={ 630}   height ={ 250} data ={ linedata} 
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

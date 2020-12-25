import React, { PureComponent } from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.02,
   'Bergen':0.02,
   'Oslo':0.02,
   'Tromsø':0.06,
   'Molde':0.06,
   'Tr_heim':0.06,
   'Dato':'11.25'}
,
 { 'Kr_sand':0.04,
   'Bergen':0.04,
   'Oslo':0.04,
   'Tromsø':0.07,
   'Molde':0.07,
   'Tr_heim':0.07,
   'Dato':'11.26'}
,
 { 'Kr_sand':0.08,
   'Bergen':0.08,
   'Oslo':0.08,
   'Tromsø':0.09,
   'Molde':0.09,
   'Tr_heim':0.09,
   'Dato':'11.27'}
,
 { 'Kr_sand':0.12,
   'Bergen':0.12,
   'Oslo':0.12,
   'Tromsø':0.10,
   'Molde':0.10,
   'Tr_heim':0.10,
   'Dato':'11.28'}
,
 { 'Kr_sand':0.14,
   'Bergen':0.14,
   'Oslo':0.14,
   'Tromsø':0.11,
   'Molde':0.12,
   'Tr_heim':0.12,
   'Dato':'11.29'}
,
 { 'Kr_sand':0.14,
   'Bergen':0.14,
   'Oslo':0.14,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'11.30'}
,
 { 'Kr_sand':0.16,
   'Bergen':0.16,
   'Oslo':0.16,
   'Tromsø':0.12,
   'Molde':0.12,
   'Tr_heim':0.12,
   'Dato':'12.01'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'12.02'}
,
 { 'Kr_sand':0.18,
   'Bergen':0.18,
   'Oslo':0.18,
   'Tromsø':0.11,
   'Molde':0.11,
   'Tr_heim':0.11,
   'Dato':'12.03'}
,
 { 'Kr_sand':0.19,
   'Bergen':0.19,
   'Oslo':0.19,
   'Tromsø':0.13,
   'Molde':0.13,
   'Tr_heim':0.13,
   'Dato':'12.04'}
,
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
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'2020.12.21'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.50,
   'Oslo':0.20,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'2020.12.22'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'2020.12.23'}
,
 { 'Kr_sand':0.17,
   'Bergen':0.17,
   'Oslo':0.17,
   'Tromsø':0.14,
   'Molde':0.14,
   'Tr_heim':0.14,
   'Dato':'2020.12.24'}
,
 { 'Kr_sand':0.20,
   'Bergen':0.20,
   'Oslo':0.20,
   'Tromsø':0.15,
   'Molde':0.15,
   'Tr_heim':0.15,
   'Dato':'2020.12.25'}
 ] 
    const LineChartPris = ({ }) =>
    {   return ( 
    < LineChart width ={ 700}   height ={ 250} data ={ linedata} 
      margin ={ { top: 5, right: 30, left: 20, bottom: 5 } }>
      < CartesianGrid strokeDasharray = '3 3' />  
         < XAxis dataKey = 'Dato' Tyep="Date" fontSize={12}/>  
          < YAxis datakey = 'Bergen' fontSize={12} />  < Tooltip /> 
          < Legend  />
      < Line type = 'monotone' dataKey = 'Bergen' stroke = '#8884d8' />
      < Line type = 'monotone' dataKey = 'Kr_sand' stroke = '#82ca9d' />
      < Line type = 'monotone' dataKey = 'Oslo' stroke = '#ab3322' />
      < Line type = 'monotone' dataKey = 'Tr_heim' stroke = '#ffed00' />
      < Line type = 'monotone' dataKey = 'Molde' stroke = '#00254a' />
      < Line type = 'monotone' dataKey = 'Tromsø' stroke = '#038d05' />
      </ LineChart >) }
  export default LineChartPris;

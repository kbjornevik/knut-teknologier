import React from 'react'
import { render } from 'react-dom';
import { Tooltip,Legend,LineChart, Line, XAxis, YAxis,CartesianGrid } from 'recharts';
const styles = { fontFamily: 'sans - serif', textAlign: 'center'};
const linedata = [
 { 'Kr_sand':0.50,
   'Bergen':0.50,
   'Oslo':0.50,
   'Tromsø':0.29,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'03-05'}
,
 { 'Kr_sand':0.38,
   'Bergen':0.38,
   'Oslo':0.38,
   'Tromsø':0.23,
   'Molde':0.23,
   'Tr_heim':0.23,
   'Dato':'03-06'}
,
 { 'Kr_sand':0.38,
   'Bergen':0.38,
   'Oslo':0.38,
   'Tromsø':0.24,
   'Molde':0.24,
   'Tr_heim':0.24,
   'Dato':'03-07'}
,
 { 'Kr_sand':0.58,
   'Bergen':0.58,
   'Oslo':0.58,
   'Tromsø':0.29,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'03-08'}
,
 { 'Kr_sand':0.57,
   'Bergen':0.57,
   'Oslo':0.57,
   'Tromsø':0.29,
   'Molde':0.29,
   'Tr_heim':0.29,
   'Dato':'03-09'}
,
 { 'Kr_sand':0.44,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.26,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'03-10'}
,
 { 'Kr_sand':0.35,
   'Bergen':0.35,
   'Oslo':0.35,
   'Tromsø':0.23,
   'Molde':0.23,
   'Tr_heim':0.23,
   'Dato':'03-11'}
,
 { 'Kr_sand':0.36,
   'Bergen':0.36,
   'Oslo':0.36,
   'Tromsø':0.26,
   'Molde':0.26,
   'Tr_heim':0.26,
   'Dato':'03-12'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.28,
   'Molde':0.28,
   'Tr_heim':0.28,
   'Dato':'03-13'}
,
 { 'Kr_sand':0.37,
   'Bergen':0.37,
   'Oslo':0.37,
   'Tromsø':0.30,
   'Molde':0.30,
   'Tr_heim':0.30,
   'Dato':'03-14'}
,
 { 'Kr_sand':0.44,
   'Bergen':0.44,
   'Oslo':0.44,
   'Tromsø':0.33,
   'Molde':0.34,
   'Tr_heim':0.34,
   'Dato':'03-15'}
,
 { 'Kr_sand':0.48,
   'Bergen':0.48,
   'Oslo':0.48,
   'Tromsø':0.31,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'03-16'}
,
 { 'Kr_sand':0.51,
   'Bergen':0.51,
   'Oslo':0.51,
   'Tromsø':0.33,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'03-17'}
,
 { 'Kr_sand':0.45,
   'Bergen':0.45,
   'Oslo':0.45,
   'Tromsø':0.33,
   'Molde':0.33,
   'Tr_heim':0.33,
   'Dato':'03-18'}
,
 { 'Kr_sand':0.43,
   'Bergen':0.43,
   'Oslo':0.43,
   'Tromsø':0.27,
   'Molde':0.31,
   'Tr_heim':0.31,
   'Dato':'03-19'}
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

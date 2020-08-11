import React from 'react';
// import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './Widget.css';
import MySlider from '../../components/slider/slider';
import MyMap from '../../components/map/map';

export default function Widget() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 2, h: 1, static: false, minW: 2, maxW: 4},
    {i: 'b', x: 0, y: 1, w: 2, h: 2, },
    {i: 'c', x: 0, y: 2, w: 2, h: 1, minW: 2, maxW: 4}
  ];
const ResponsiveGridLayout = WidthProvider(Responsive);
  const layouts = {"lg":layout}

  return (
  //  <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
  //  <div key="a"><MySlider /></div>
  //  <div key="b"><MyMap /></div>
  //  <div key="c">c</div>
  //  </GridLayout>

  <ResponsiveGridLayout className="layout" layouts={layouts}
  breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
  cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
  <div key="a"><MySlider /></div>
  <div key="b"><MyMap /></div>
  <div key="c">c</div>
  </ResponsiveGridLayout>
   )
  }

import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Circle from './Circle';

describe('<Circle /> check all props are working', () => {
    it('Check props.size is working', () => {
        const circle = shallow(<Circle size={200}/>);
        expect(circle.find('svg').prop('viewBox')).toEqual('100 100 200 200');
    })
    
    it('Check props.fillColor is working', () => {
        const circle = shallow(<Circle fillColor={'#288feb'} />);
        expect(circle.find('circle').at(1).prop('stroke')).toEqual('#288feb')
    })

    it('Check props.emptyColor is working', () => {
        const circle = shallow(<Circle emptyColor={'#288feb'} />);
        expect(circle.find('circle').at(0).prop('stroke')).toEqual('#288feb')
    })

    it('Check props.background is working', () => {
        const circle = shallow(<Circle background={'#288feb'} />);
        expect(circle.find('circle').at(0).prop('fill')).toEqual('#288feb')
    })

    it('Check props.className is working', () => {
        const circle = shallow(<Circle className={'new-class'} />);
        expect(circle.find('div').prop('className')).toEqual('circle-progress-wrap new-class')
    })

    it('Check props.percent, props.strokeWidth, props.strokeWidthBg are working', () => {
        const size = 100,
            strokeWidth = 10,
            strokeWidthBg = 10,
            percent = 20;

        const circle = shallow(<Circle size={size} strokeWidthBg={strokeWidthBg} strokeWidth={strokeWidth} percent={percent} />);

        let circleRadiusBg = (size - strokeWidthBg) * .5;
        let circleRadiusFg = (size - strokeWidth) * .5;

        if (strokeWidth > strokeWidthBg) {
            circleRadiusBg -= (strokeWidth - strokeWidthBg) * .5;
        }

        if (strokeWidthBg > strokeWidth) {
            circleRadiusFg -= (strokeWidthBg - strokeWidth) * .5;
        }

        const circumference = 2 * Math.PI * circleRadiusFg;
        const offset = circumference - (circumference * percent / 100);
        expect(circle.find('circle').at(1).prop('strokeDashoffset')).toEqual(offset)
        expect(circle.find('circle').at(1).prop('r')).toEqual(circleRadiusFg)
        expect(circle.find('circle').at(0).prop('r')).toEqual(circleRadiusBg)
        expect(circle.find('circle').at(1).prop('strokeDasharray')).toEqual(circumference)
    
    })

    it('Check props.linecap is working', () => {
        const circle = shallow(<Circle linecap={'none'} />);
        expect(circle.find('circle').at(1).prop('strokeLinecap')).toEqual('none')
    })

});
import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Circle from './Circle';

describe('<Circle /> check all props are working', () => {
    it('Check props.size is working fine', () => {
        const circle = shallow(<Circle size={200}/>);
        expect(circle.find('svg').props().viewBox).toEqual('100 100 200 200');
    })

    it('Check props.strokeWidth is working fine', () => {
        const circle = shallow(<Circle strokeWidth={20} />);
        expect(circle.find('circle').at(1).props().strokeWidth).toEqual(20)
    })

    it('Check props.strokeWidthBg is working fine', () => {
        const circle = shallow(<Circle strokeWidthBg={20} />);
        expect(circle.find('circle').at(0).props().strokeWidth).toEqual(20)
    })
    
    it('Check props.fillColor is working fine', () => {
        const circle = shallow(<Circle fillColor={'#288feb'} />);
        expect(circle.find('circle').at(1).props().stroke).toEqual('#288feb')
    })

    it('Check props.emptyColor is working fine', () => {
        const circle = shallow(<Circle emptyColor={'#288feb'} />);
        expect(circle.find('circle').at(0).props().stroke).toEqual('#288feb')
    })

    it('Check props.background is working fine', () => {
        const circle = shallow(<Circle background={'#288feb'} />);
        expect(circle.find('circle').at(0).props().fill).toEqual('#288feb')
    })

    it('Check props.className is working fine', () => {
        const circle = shallow(<Circle className={'new-class'} />);
        expect(circle.find('div').props().className).toEqual('circle-progress-wrap new-class')
    })

});
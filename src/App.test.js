import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme,{ shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new  EnzymeAdapter() });

const setUp = () => shallow(<App/>)

test('renders learn react link', () => {
 const wrapper = setUp();
//  console.log(wrapper.debug());
//expect(wrapper).toBeTruthy();
const appComponent = wrapper.find("[data-test='component-app']");
expect(appComponent.length).toBe(1)

})

test('testing button',()=>{
  const wrapper = setUp();
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1)
})

test('counter to display',()=>{
  const wrapper = setUp();
  const counterToDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterToDisplay.length).toBe(1)
})

test('counter starts at zero',()=>{
  const wrapper = setUp();
  const count = wrapper.find("[data-test='count']").text();
  expect(count).toBe("0")
})



{/*Below code will follow the below points
*find the button
*click the button
*find the display & test that the number has incremented
*/}


test('clicking on button increments counter display',()=>{
  const wrapper = setUp();
  //find the button
  const button = wrapper.find("[data-test='increment-button']");
  //click the button
 button.simulate('click')
 //find the display & test that the number has incremented
 const count = wrapper.find("[data-test='count']").text();
 expect(count).toBe("1")
})
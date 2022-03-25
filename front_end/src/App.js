import Hello from './Component/Hello.js'; 
import './App.css';
import React,{Component} from 'react';
import Messages from './Component/Messages.js';
import Eventhandler from './Component/Eventhandler.js';
import Parent from './Component/Parent.js';
import UserGreeting from './Component/UserGreeting.js';
import List from './Component/List.js';
import Form from './Component/Form.js';
import ClickCounter from './Component/ClickCounter.js';
import HoverCounter from './Component/HoverCounter.js';
import User from './Component/User.js';
import ClickCountTwo from './Component/ClickCountTwo.js';
import Counter from './Component/Counter.js';
import HoverCountTwo from './Component/HoverCountTwo.js';
import ComponentC from './Component/ComponentC.js';
import { UserProvider } from './Component/User.js';
import Http from './Component/Http.js';
import PostHttp from './Component/PostHttp.js';
import Hooks from './Component/Hooks.js';
import HooksOne from './Component/HooksOne.js';
import HokFetchData from './Component/HokFetchData.js';
import UseStateRender from './Component/UseStateRender.js';
import { UseReduce } from './Component/UseReduce.js';
import { StateImmutable } from './Component/StateImmutable.js';
import { ParentOne } from './Component/ParentOne.js';
import { ChildrenOne } from './Component/ChildrenOne.js';
import { GrandParent } from './Component/GrandParent.js';

class  App extends Component {
  render() {
  return (
    <div className="App">
{/* 
      <Hello/>

      <Parent/> */}
      {/* <Eventhandler/>
      <Messages/> */}
      {/* <UserGreeting/>
      <List/>
      <Form/> */}
      {/* <ClickCounter/>
      <HoverCounter/>
      <User name={(islogin)=> islogin ? 'Welcome':'Guest'}/> */}
      {/* <Counter render={(count,increment)=>(
        <ClickCountTwo count={count} increment={increment} />

      )}/>
      <Counter render={(count,increment)=>(

<HoverCountTwo count={count} increment={increment}/>

      )}/> */}

{/* <UserProvider value="Ram">
<ComponentC/>

</UserProvider> */}
{/* <Http/> */}
{/* <PostHttp/> */}
{/* <Hooks/> */}
{/* <HooksOne/> */}
{/* <HokFetchData/> */}
{/* <UseStateRender/> */}
{/* <UseReduce/> */}
{/* <StateImmutable/> */}
<GrandParent/>

    </div>
  );
}
}

export default App;

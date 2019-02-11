import React from "react"
import { Link } from "gatsby"
import ParentComponent from '../components/parentComponent'
import Layout from "../components/layout"
import SEO from "../components/seo"

const UpButton = props => {
    const prevCounter = props.Content.counter ? props.Content.counter : 0;
    const counter = () => {
        props.storageParent({counter: prevCounter + 1 });
    };
  return( <button onClick={counter} >  {prevCounter} + 1 </button> )
};

const DownButton = props => {
    const prevCounter = props.Content.counter ? props.Content.counter : 0;
    const counter = () => {
        props.storageParent({counter: prevCounter + -1 });
    };
    return( <button onClick={counter} > {prevCounter} - 1</button> )
};

const StatelessUpButton = props => {
    const prevCounter = props.getStateLess().counter ? props.getStateLess().counter : 0;
    const counter = () => {
        props.storageStatelessParent({counter: prevCounter + 1 });
    };
    return( <button onClick={counter} > Stateless: {prevCounter} + 1 </button> )
};

const StatelessDownButton = props => {
    const prevCounter = props.getStateLess().counter ? props.getStateLess().counter : 0;
    const counter = () => {
        props.storageStatelessParent({counter: prevCounter + -1 });
    };
    return( <button onClick={counter} > Stateless: {prevCounter} - 1</button> )
};

const ForceUpdateButton = props => {
    return( <button onClick={props.forceUpdate} > Force Update</button> )
};

const ClearButton = props => {
    return( <button onClick={props.clearState} > Clear Common State</button> )
};

const DummyText = props => {
  return( <p>This is de counter in a P tag: {props.Content.counter}</p> )
};

const DummyTextStateLess = props => {
    return( <p>This is de stateless counter in a P tag: {props.getStateLess().counter}</p> )
};

const ParentComponentDOM = ParentComponent([
    UpButton,
    DownButton,
    ClearButton,
    StatelessUpButton,
    StatelessDownButton,
    ForceUpdateButton,
    DummyText,
    DummyTextStateLess
]);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ParentComponentDOM/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage

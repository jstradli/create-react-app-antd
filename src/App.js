import React from 'react';
import { Form } from 'antd';
import {SampleForm} from "./form/sample-form"
import './App.css';


const ProcessedForm = Form.create({})(SampleForm);

const App = () => (
  <>
    <section style={{textAlign: 'center'}}>
      <h1 style={{textAlign: 'center'}}>Ant Design</h1>
    </section>
    <ProcessedForm/>
  </>
);

export default App;

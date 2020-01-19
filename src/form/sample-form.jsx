import React from "react";
import { Form, Button } from "antd";
import {AutoTrimmingInput} from "../components/auto-trimming-input";

export class SampleForm extends React.Component {

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;

    const printFormValues = () =>
       console.log(JSON.stringify(this.props.form.getFieldsValue(), null, 2));

    return (
    <div>
      <AutoTrimmingInput defaultValue={"not in form"} />
      <Form>
        <Form.Item label="An input">
          {getFieldDecorator("meh", {
            initialValue: "in a form",
            rules: [
              {
                required: true,
                message: "This is a required field."
              },
            ]
          })(
            <AutoTrimmingInput form={this.props.form} />
          )}
        </Form.Item>
        <Button onClick={printFormValues}>
          Print Form Values
        </Button>
      </Form>
      </div>
    );
  }
}
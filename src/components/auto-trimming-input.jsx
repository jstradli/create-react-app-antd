import React from 'react';
import { Input } from 'antd';

/**
 * The ant design Input component provides no options to auto trim inputs.  This
 * wrapper around the Input component will trim leading and trailing whitespace when the
 * control loses focus.  When this component is placed within a form you must include
 * the form in the props and place the AutoTrimmingInput inside of a fieldDecorator
 */
export class AutoTrimmingInput extends React.Component {
    constructor(props) {
        super(props);
        // When inside of a form you may not mange values using state
        if(! this.props.form) {
            this.state = {
                value: (props.defaultValue || "").trim()
            }
        } else if(! this.props.id) {
            throw new Error("Form passed as prop, but no id found, this class must be used within getFieldDecorator()");
        }
    }

    onBlurForm(e) {
        // Forms requires the field to be programmatically set with form.setFieldsValue() instead of
        // performing a state update
        this.props.form.setFieldsValue({[this.props.id]: e.target.value.trim()});
    }

    onBlur(e) {
        this.setState({
            value: e.target.value.trim()
        });
    }

    onChange(e) {
        // When not using a form we use state to auto trim, because of this we have to manually
        // update the internal state when the input value changes.
        this.setState({
            value: e.target.value
        });
    }

    render() {
        var onChange = this.props.form ? this.props.onChange : this.onChange.bind(this);
        var value    = this.props.form ? this.props.value : this.state.value;
        var onBlur   = this.props.form ? this.onBlurForm.bind(this) : this.onBlur.bind(this);
        return (
            <Input {...this.props}
              value={value}
              onBlur={onBlur}  // when the input loses focus
              onChange={onChange} />
        );
    }
}
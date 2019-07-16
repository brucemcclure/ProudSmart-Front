import React, {Component} from "react";
import {connect} from "react-redux";
import {setAuthToken} from "./../../actions";
import LocalAPI from "./../../apis/Local";

import 'antd/dist/antd.css';
import './../../index.css';
import {
  Form,
  Input,
  Icon,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    interestTags: ["IoT", "ML", "AI", "Cloud", "Dev Op", "Infrastructure"]
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        // console.log(values.photo.file.uid);
        // console.log(process.env.REACT_APP_API_URL);
        LocalAPI.post(`/auth/register`, values)
          .then(response => {
              this.props.setAuthToken(response.data);
              this.props.history.push("/users/dashboard");
              })
          .catch(err => console.log(err))
      }
    });
  };

  componentDidMount = () => {
    console.log(this.props)
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  dummyRequest({file, onSuccess}) {
    setTimeout(() => {
      onSuccess("ok");
    },0);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="First Name" hasFeedback>
          {getFieldDecorator('firstName', {
            rules: [
              {
                required: true, 
                message: 'Please input your first name', whitespace: true 
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Last Name" hasFeedback>
          {getFieldDecorator('lastName', {
            rules: [
              {
                required: true, 
                message: 'Please input your last name', whitespace: true 
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Study Interests">
          {getFieldDecorator('interestTags', {
            initialValue: ['A', 'B'],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                {this.state.interestTags.map((option) => {
                  return (
                    <div key={option}>
                      <Col span={8} >
                        <Checkbox value={option}>{option}</Checkbox>
                      </Col>
                    </div>
                  )
                })}
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('photo', {
          })(
              <Upload customRequest={this.dummyRequest}>
                <Button>
                  <Icon type="upload" /> Please upload your Avatar photo
                </Button>
              </Upload>,
            )
          }
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default connect (null, {setAuthToken})(WrappedRegistrationForm);
import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import fetch from '../../services/fetch.js';
import { loginApi } from '../../config/api.js';
import './login.css'

const FormItem = Form.Item;

// const error = () => {
//   message.error('Please Check your login information and try again!');
// };

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        fetch.put(loginApi,values).then((res)=>{
          let parseRes = JSON.parse(res)
          if(parseRes.status === 200){
            //这里验证是否有登录状态
            window.sessionStorage.setItem('key','author');
            //进入agent页面
            this.props.history.push('/home/agent')
          }else{
            message.error('Please Check your login information and try again!');
          }

        })
      }
    });

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="#">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="#">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm

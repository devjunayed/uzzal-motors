
"use client"
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";

const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
      };
  return (
    <div className="h-[100vh] bg-federal_blue text-black w-full flex items-center justify-center">
    <div className="flex flex-col gap-2 size-96 p-4 bg-white border border-1  rounded-md">
      <h1 className="mx-auto text-2xl uppercase italic my-4">Uzzal Motor</h1>
    <Form
    name="login"
    initialValues={{ remember: true }}
    style={{ maxWidth: 360 }}
    onFinish={onFinish}
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: "Please input your Username!" }]}
    >
      <Input prefix={<UserOutlined />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: "Please input your Password!" }]}
    >
      <Input
        prefix={<LockOutlined />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    {/* <Form.Item>
      <Flex justify="space-between" align="center">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
         <a href="">Forgot password</a> 
      </Flex>
    </Form.Item> */}

    <Form.Item>
      <Button block type="primary" htmlType="submit">
        Log in
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
  )
}

export default LoginForm

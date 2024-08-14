"use client";
import { getCookie, setCookie } from "@/utils/lib";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, message, Form, Input, Flex } from "antd";
import { useRouter } from "next/navigation";
useRouter
const LoginForm = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          messageApi
            .open({
              type: "loading",
              content: "Logging...",
              duration: 2.5,
            })
            .then(() => {
              if (data.success) {
                message.success("Logged in successfully");
                setCookie(data.data);
                const token = getCookie();

                if (token) {
                 router.replace("/dashboard");
                }
              } else {
                message.error(data.message);
              }
            });
        });
    } catch (error) {
      console.log(error);
    }
    console.log("Received values of form: ", values);
  };
  return (
    <div className="h-[100vh] bg-federal_blue text-black w-full flex items-center justify-center">
      {contextHolder}
      <div className="flex flex-col gap-2  w-96 p-4 bg-white border border-1  rounded-md">
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
  );
};

export default LoginForm;

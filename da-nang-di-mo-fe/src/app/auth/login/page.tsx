"use client";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Form, Input, Typography} from "antd";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";
import styles from "./login.module.scss";

export default function Login() {
  const [slideLeft, setSlideLeft] = useState(false);
  const router = useRouter();
  const onFinish = (values: {password: string; username: string}) => {
    // Xử lý đăng nhập ở đây
    console.log("Login info:", values);
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSlideLeft(true);
    setTimeout(() => {
      router.push("/auth/register");
    }, 800); // match transition duration
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.left}>
        <Image
          src="@/assets/images/sales.svg"
          alt="Sales Illustration"
          width={400}
          height={400}
          priority
          style={{maxWidth: "100%", height: "auto"}}
        />
      </div>
      <div className={`${styles.right} ${slideLeft ? styles.slideLeft : ""}`}>
        <div className={styles.formCard}>
          <Typography.Title level={2} className={styles.helloTitle}>
            Hello!
          </Typography.Title>
          <Typography.Text className={styles.subTitle}>
            Sign Up to Get Started
          </Typography.Text>
          <Form
            name="login"
            initialValues={{remember: true}}
            onFinish={onFinish}
            layout="vertical"
            className={styles.loginForm}
          >
            <Form.Item
              name="username"
              rules={[
                {required: true, message: "Please enter your email address!"},
              ]}
              className={styles.formItem}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Email Address"
                size="large"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{required: true, message: "Please enter your password!"}]}
              className={styles.formItem}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item className={styles.formItem}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.roundButton}
                size="large"
                block
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.forgotPassword}>
            <a href="#" onClick={handleRegisterClick}>
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

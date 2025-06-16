"use client";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {Button, Card, Form, Input, Typography} from "antd";
import styles from "./register.module.scss";

export default function Register() {
  const onFinish = (values: {
    confirm: string;
    password: string;
    sdt: string;
    date: Date;
    email: string;
    username: string;
  }) => {
    // Xử lý đăng ký ở đây
    console.log("Register info:", values);
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.left}>
        <Card className={styles.formCard}>
          <Typography.Title level={2} className={styles.helloTitle}>
            Đăng ký
          </Typography.Title>
          <span className={styles.subTitle}>Tạo tài khoản mới</span>
          <Form
            name="register"
            onFinish={onFinish}
            layout="vertical"
            className={styles.loginForm}
          >
            <Form.Item
              name="username"
              label="Tên đăng nhập"
              className={styles.formItem}
              rules={[
                {required: true, message: "Vui lòng nhập tên đăng nhập!"},
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Tên đăng nhập"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              className={styles.formItem}
              rules={[
                {required: true, message: "Vui lòng nhập email!"},
                {type: "email", message: "Email không hợp lệ!"},
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item
              name="sdt"
              label="Số điện thoại"
              className={styles.formItem}
              rules={[
                {required: true, message: "Vui lòng nhập số điện thoại!"},
                {
                  pattern: /^0\d{9}$/,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Số điện thoại"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item
              name="date"
              label="Ngày sinh"
              className={styles.formItem}
              rules={[{required: true, message: "Vui lòng chọn ngày sinh!"}]}
            >
              <Input type="date" className={styles.roundInput} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu"
              className={styles.formItem}
              rules={[{required: true, message: "Vui lòng nhập mật khẩu!"}]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Mật khẩu"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Xác nhận mật khẩu"
              className={styles.formItem}
              dependencies={["password"]}
              rules={[
                {required: true, message: "Vui lòng xác nhận mật khẩu!"},
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu xác nhận không khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Xác nhận mật khẩu"
                className={styles.roundInput}
              />
            </Form.Item>
            <Form.Item className={styles.formItem}>
              <Button
                type="primary"
                htmlType="submit"
                block
                className={styles.roundButton}
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.forgotPassword}>
            Bạn đã có tài khoản?
            <a href="/auth/login">Đăng nhập</a>
          </div>
        </Card>
      </div>
      <div className={styles.right}>
        {/* You can add an image, illustration, or branding here if needed */}
      </div>
    </div>
  );
}

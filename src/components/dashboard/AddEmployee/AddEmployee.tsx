"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
  message,
} from "antd";
import withAuth from "@/utils/withAuth";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { TokenContext } from "@/app/providers";

// Types of file
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

// Main function
const AddEmployee: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const token = useContext(TokenContext);

  // handling image preview
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  // Button for uploading image
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  // onFinish function called upon submit
  const onFinish = async (values: any) => {
    const modifiedValues = { ...values };

    // Convert the date to string format
    modifiedValues.joiningDate = values.joiningDate.format("DD-MM-YYYY");
    modifiedValues.birthOfDate = values.birthOfDate.format("DD-MM-YYYY");

    // Create a FormData object
    const formData = new FormData();

    // Append other form values to formData
    Object.keys(modifiedValues).forEach((key) => {
      if (key === "address") {
        Object.keys(modifiedValues.address).forEach((addrKey) => {
          formData.append(
            `address[${addrKey}]`,
            modifiedValues.address[addrKey]
          );
        });
      } else {
        formData.append(key, modifiedValues[key]);
      }
    });

    // Append the image file
    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj as Blob);
    }

    // checking if image is selected
    if (fileList.length === 0) {
      messageApi.open({
        type: "error",
        content: "Please upload image!",
      });
    }

    if (token && fileList.length > 0) {
      console.log("fuck u");
      // Send form data to the backend
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/create-employee",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token?.token}`,
            },
            body: formData,
          }
        );

        if(!response.ok){
          throw new Error("Error while responding")
        }

        const result = await response.json();
        console.log(result);

        if (result.success) {
          messageApi.open({
            type: "success",
            content: `${result.message}`,
          });
        } else {
          messageApi.open({
            type: "error",
            content: `${result.message}`,
          });
        }
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Form
      className=" mx-auto"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      {contextHolder}
      {/* Image upload and preview */}
      <div className="mx-auto w-full flex justify-center mb-5">
        <Upload
          action=""
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            alt=""
            wrapperStyle={{ display: "none" }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </div>
      {/* Name */}
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      {/* Birth Certificate or NID Number */}
      <Form.Item
        name="birthCertificateNidNumber"
        label="NID or Birth Certificate Number"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      {/* Birth Date */}
      <Form.Item
        name="birthOfDate"
        label="Birth Date"
        rules={[{ required: true }]}
      >
        <DatePicker />
      </Form.Item>

      {/* Father's Name */}
      <Form.Item
        name="fatherName"
        label="Father's Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      {/* Mother's Name */}
      <Form.Item
        name="motherName"
        label="Mother's Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      {/* Address */}
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={["address", "district"]}
            rules={[{ required: true, message: "District is required" }]}
            style={{ width: "25%" }}
          >
            <Input placeholder="District" />
          </Form.Item>
          <Form.Item
            name={["address", "city"]}
            rules={[{ required: true, message: "City is required" }]}
            style={{ width: "25%" }}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name={["address", "upazila"]}
            rules={[{ required: true, message: "Upazila is required" }]}
            style={{ width: "25%" }}
          >
            <Input placeholder="Upazila" />
          </Form.Item>
          <Form.Item
            name={["address", "village"]}
            rules={[{ required: true, message: "Village is required" }]}
            style={{ width: "25%" }}
          >
            <Input placeholder="Village" />
          </Form.Item>
          <Form.Item
            name={["address", "houseNo"]}
            rules={[{ required: true, message: "House No is required" }]}
            style={{ width: "25%" }}
          >
            <Input placeholder="House No" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      {/* Contact Number */}
      <Form.Item
        name="contactNumber"
        label="Contact Number"
        rules={[
          { required: true, message: "Please input your contact number!" },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Emergency Contact Number */}
      <Form.Item
        name="emergencyContactNumber"
        label="Emergency Contact Number"
        rules={[
          {
            required: true,
            message: "Please input your emergency contact number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Martial Status */}
      <Form.Item
        name="martialStatus"
        label="Martial Status"
        rules={[{ required: true }]}
      >
        <Select>
          <Select.Option value="married">Married</Select.Option>
          <Select.Option value="single">Single</Select.Option>
          <Select.Option value="divorced">Divorced</Select.Option>
        </Select>
      </Form.Item>

      {/* Religion */}
      <Form.Item name="religion" label="Religion" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="islam">Islam</Select.Option>
          <Select.Option value="hindu">Hindu</Select.Option>
          <Select.Option value="christian">Christian</Select.Option>
        </Select>
      </Form.Item>

      {/* Designation */}
      <Form.Item
        name="designation"
        label="Designation"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      {/* Blood Group */}
      <Form.Item
        name="bloodGroup"
        label="Blood Group"
        rules={[{ required: true }]}
      >
        <Select>
          <Select.Option value="A+">A+</Select.Option>
          <Select.Option value="A-">A-</Select.Option>
          <Select.Option value="B+">B+</Select.Option>
          <Select.Option value="B-">B-</Select.Option>
          <Select.Option value="AB+">AB+</Select.Option>
          <Select.Option value="AB-">AB-</Select.Option>
          <Select.Option value="O+">O+</Select.Option>
          <Select.Option value="O-">O-</Select.Option>
        </Select>
      </Form.Item>

      {/* Joining Date */}
      <Form.Item
        name="joiningDate"
        label="Joining Date"
        rules={[{ required: true }]}
      >
        <DatePicker />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withAuth(AddEmployee);

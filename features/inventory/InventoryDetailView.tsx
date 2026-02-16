import { InventoryItem } from "./inventory.model";
import { Button, Checkbox, Form, Input, Card } from "antd";
import { useEffect } from "react";

type Props = {
  inventory: InventoryItem;
};

export default function InventoryDetailView({ inventory }: Props) {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  useEffect(() => {
    form.setFieldsValue(inventory);
  }, [inventory]);

  return (
    <div>
      <h1>Inventory Detail</h1>

      <Card>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          form={form}
          disabled
        >
          <Form.Item<InventoryItem>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<InventoryItem>
            label="Stock"
            name="stock"
            rules={[{ required: true, message: "Please input your stock!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<InventoryItem>
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

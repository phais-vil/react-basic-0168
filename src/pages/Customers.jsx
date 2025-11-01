import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Table,
  Image,
  Button,
  Modal,
  Form,
  ButtonGroup,
} from "react-bootstrap";

//9_01:04:00 listcustomers
export default function Customers() {
  //create state for get database customer
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //เตรียมข้อมูลสำหรับ create ฟอร์ม
  const [customer, setCustomer] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    avatar: "",
    birthday: "",
    address: "",
  });

  const handleInputChange = (field, value) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer, //คัดลอกค่าเดิม
      [field]: value, //อัพเดทเฉพาะ field ที่เปลี่ยน
    }));
  };

  function listCustomers() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.baserow.io/api/database/rows/table/723790/?user_field_names=true",
      headers: {
        Authorization: "Token iSGr0HHVUKHo1OSqjdyGwHzbIEk930rD",
      },
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // เก็บข้อมูลลูกค้นใน state
        setCustomers(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setLoading(false);
      });
  }
  //10_00:35:00 create cuttomer
  function createCustomers() {
    //เตรียม data set
    let data = {
      first_name: customer.first_name,
      last_name: customer.last_name,
      phone: customer.phone,
      email: customer.email,
      avatar: customer.avatar,
      birthday: customer.birthday,
      address: customer.address,
    };

    //การ เพิ่มข้อมูล api
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.baserow.io/api/database/rows/table/723790/?user_field_names=true",
      headers: {
        Authorization: "Token iSGr0HHVUKHo1OSqjdyGwHzbIEk930rD",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setShow(false); // ปิด modal
        listCustomers(); // โหลด Date ใหม่หลังจากบันทึกข้อมูลเสร็จ
      })
      .catch((error) => {
        console.log(error);
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
      });
  }

  //10_01:15:00 เพิ่มฟังก์ขันสำหรับการแก้ไขข้อมูลลูกค้า
  const handleEdit = (selectedCustomer) => {
    setCustomer({
      id: selectedCustomer.id,
      first_name: selectedCustomer.first_name || "",
      last_name: selectedCustomer.last_name || "",
      phone: selectedCustomer.phone || "",
      email: selectedCustomer.email || "",
      avatar: selectedCustomer.avatar || "",
      birthday: selectedCustomer.birthday || "",
      address: selectedCustomer.address || "",
    });
    setShow(true);
  };

  //10_01:33:00 update
  function updatedCustomers(row_id) {
    //เตรียม data set
    let data = {
      first_name: customer.first_name,
      last_name: customer.last_name,
      phone: customer.phone,
      email: customer.email,
      avatar: customer.avatar,
      birthday: customer.birthday,
      address: customer.address,
    };

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `https://api.baserow.io/api/database/rows/table/723790/${row_id}/?user_field_names=true`,
      headers: {
        Authorization: "Token iSGr0HHVUKHo1OSqjdyGwHzbIEk930rD",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //เก็บข้อมูล  state
        setShow(false); // ปิด modal
        listCustomers(); // โหลด Date ใหม่หลังจากบันทึกข้อมูลเสร็จ
      })
      .catch((error) => {
        console.log(error);
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
      });
  }

  //เรียกใช้พังก์ช้น listCustomers เมื่อคอมโพเนนถูกโหลด
  useEffect(() => {
    listCustomers();
  }, []);

  //

  return (
    <Container className="p-4">
      <Card>
        <Card.Header>
          <Button variant="primary" onClick={handleShow}>
            เพิ่มข้อมูล
          </Button>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <p>กำลังโหลดข้อมูล...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>รูปภาพ</th>
                  <th>ชื่อ - นามสกุล</th>
                  <th>เบอร์โทร</th>
                  <th>อีเมล</th>
                  <th>วันเกิด</th>
                  <th>ที่อยู่</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {customers.length > 0 ? (
                  customers.map((customer, index) => (
                    <tr key={customer.id || index}>
                      <td>{index + 1}</td>
                      <td align="center">
                        <Image
                          src={customer.avatar}
                          roundedCircle
                          style={{ width: 60, height: 60 }}
                        />
                      </td>
                      <td>
                        {customer.first_name || "-"} {customer.last_name || "-"}
                      </td>
                      <td>{customer.phone || "-"}</td>
                      <td>{customer.email || "-"}</td>
                      <td>{customer.birthday || "-"}</td>
                      <td>{customer.address || "-"}</td>
                      <td>
                        <ButtonGroup className="mb-2">
                          <Button
                            variant="warning"
                            onClick={(e) => handleEdit(customer)}
                          >
                            แก้ไข
                          </Button>
                          <Button variant="danger">ลบ</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center" colSpan="7">
                      ไม่พบข้อมุลลูกค้า
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ฟอร์มข้อมูลลูกค้า</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>ชื่อ {customer?.first_name}</Form.Label>
            <Form.Control
              type="text"
              placeholder="โปรดระบุชื่อ"
              value={customer?.first_name}
              onChange={(e) => handleInputChange("first_name", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>นามสกุล {customer?.last_name}</Form.Label>
            <Form.Control
              type="text"
              placeholder="ระบุนามสกุล"
              value={customer?.last_name}
              onChange={(e) => handleInputChange("last_name", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>เบอร์โทร {customer?.phone}</Form.Label>
            <Form.Control
              type="tel"
              placeholder="ระบุเบอร์ติดต่อ"
              value={customer?.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>อีเมล {customer?.email}</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={customer?.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>วันเกิด {customer?.birthday}</Form.Label>
            <Form.Control
              type="date"
              value={customer?.birthday}
              onChange={(e) => handleInputChange("birthday", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>ที่อยู่ {customer?.address}</Form.Label>
            <Form.Control
              type="text"
              placeholder="ที่อยู่"
              value={customer?.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>รูปลูกค้า </Form.Label>
            <Form.Control
              type="url"
              placeholder="ใส่URL"
              value={customer?.avatar}
              onChange={(e) => handleInputChange("avatar", e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              customer?.id > 0 ? updatedCustomers(customer.id) : createCustomers
            }
          >
            บันทึกเป็น
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

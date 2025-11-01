import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Table, Image } from "react-bootstrap";

//9_01:04:00 listcustomers
export default function Customers() {
  //create state for get database customer
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError("้เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setLoading(false);
      });
  }

  //เรียกใช้พังก์ช้น listCustomers เมื่อคอมโพเนนถูกโหลด
  useEffect(() => {
    listCustomers();
  }, []);

  return (
    <Container className="p-4">
      <Card>
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
                          style={{ width: 100, height: 100 }}
                        />
                      </td>
                      <td>
                        {customer.first_name || "-"} {customer.last_name || "-"}
                      </td>
                      <td>{customer.phone || "-"}</td>
                      <td>{customer.email || "-"}</td>
                      <td>{customer.birthday || "-"}</td>
                      <td>{customer.address || "-"}</td>
                      <td></td>
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
    </Container>
  );
}

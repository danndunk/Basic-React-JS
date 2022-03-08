import { Table, SplitButton, Dropdown, DropdownButton } from "react-bootstrap";

export default function TableTransaction() {
  return (
    <div style={{ width: "70%", margin: "180px auto 130px auto" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Bukti Transfer</th>
            <th>Remaining Active</th>
            <th>Status User</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>@26 / Hari</td>
            <td>Active</td>
            <td>Approve</td>
            <td>
              <DropdownButton id="input-group-dropdown-1">
                <Dropdown.Item href="#">Approved</Dropdown.Item>
                <Dropdown.Item href="#">Cancel</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Radif Ganteng</td>
            <td>bca.jpg</td>
            <td>@26 / Hari</td>
            <td>Active</td>
            <td>Approve</td>
            <td>
              <DropdownButton id="input-group-dropdown-1">
                <Dropdown.Item href="#">Approved</Dropdown.Item>
                <Dropdown.Item href="#">Cancel</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

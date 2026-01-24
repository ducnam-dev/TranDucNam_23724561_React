function StudentInfo(props) {
  return (
    <div>
      <h2>Thông tin sinh viên</h2>
      <p><b>Họ tên:</b> {props.name}</p>
      <p><b>MSSV:</b> {props.mssv}</p>
      <p><b>Lớp:</b> {props.className}</p>
    </div>
  );
}

export default StudentInfo;

import React from "react";
import '../HomePage/HomePage.css'



function Home() {
  return (
    <div className="dashboard-container">
      
      <div className="dashboard-header">
        <h1>Welcome to Smart Access Control Dashboard</h1>
        <p>Quản lý vào ra, bảo mật và giám sát hệ thống dễ dàng hơn bao giờ hết.</p>
      </div>
      <h2>Overview</h2>
     
      <div className="system-overview">
        
        <div className="overview-card">
          <h3>Số Người Dùng</h3>
          <p>1500</p>
        </div>
        <div className="overview-card">
          <h3>Số Lần Vào Ra</h3>
          <p>12000</p>
        </div>
        <div className="overview-card">
          <h3>Sự Kiện An Ninh</h3>
          <p>3 cảnh báo</p>
        </div>
        <div className="overview-card">
          <h3>Thiết Bị Kết Nối</h3>
          <p>10 thiết bị</p>
        </div>
      </div>

      <div className="security-alerts">
        <h2>Cảnh Báo An Ninh</h2>
        <ul>
          <li>Cảnh báo: Nhận diện vân tay thất bại của người dùng Nguyễn Văn A</li>
          <li>Cảnh báo: Cố gắng truy cập trái phép từ địa chỉ IP 192.168.1.100</li>
          <li>Cảnh báo: Nhận diện khuôn mặt thất bại từ người dùng Trần Văn B</li>
          <li>Null</li>
          
        </ul>
      </div>
    </div>
  );
}

export default Home;

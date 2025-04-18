import React from 'react';
import '../style/AboutPorsche.css'; 

function AboutPorsche() {
  return (
    <div className="about-porsche-container">
      <header className="about-porsche-header">
        <h1>Về Porsche</h1>
        <p className="tagline">Giấc mơ tốc độ và sự hoàn hảo kỹ thuật.</p>
      </header>

      <section className="history-section">
        <h2>Lịch Sử Hình Thành và Phát Triển</h2>
        <p>
          Porsche AG, được thành lập bởi Ferdinand Porsche vào năm 1931 tại Stuttgart, Đức, ban đầu là một công ty tư vấn kỹ thuật.
          Những dự án đầu tiên của hãng bao gồm việc phát triển chiếc Volkswagen Beetle huyền thoại. Chiếc xe mang tên Porsche đầu tiên,
          Porsche 356, ra đời năm 1948, đánh dấu bước chân vào thế giới sản xuất xe thể thao.
        </p>
        <p>
          Năm 1963, Porsche giới thiệu chiếc 911, một biểu tượng không thể nhầm lẫn và là trụ cột của thương hiệu cho đến ngày nay.
          Với thiết kế độc đáo, động cơ đặt sau và khả năng vận hành xuất sắc, 911 đã trở thành một huyền thoại trong làng xe hơi.
        </p>
      </section>

      <section className="philosophy-section">
        <h2>Triết Lý Thiết Kế và Công Nghệ</h2>
        <p>
          Triết lý "form follows function" luôn là kim chỉ nam trong thiết kế của Porsche. Mỗi đường nét trên xe không chỉ mang tính thẩm mỹ
          mà còn phục vụ mục đích khí động học và hiệu suất. Porsche luôn đi đầu trong việc ứng dụng công nghệ tiên tiến, từ động cơ Boxer
          đến hộp số PDK và hệ thống quản lý lực kéo PTM, mang lại trải nghiệm lái xe thể thao đích thực.
        </p>
      </section>

      <section className="product-range-section">
        <h2>Dòng Sản Phẩm Hiện Tại</h2>
        <ul>
          <li><strong>911:</strong> Biểu tượng xe thể thao với nhiều phiên bản khác nhau.</li>
          <li><strong>718 Cayman/Boxster:</strong> Xe thể thao động cơ đặt giữa mạnh mẽ và linh hoạt.</li>
          <li><strong>Macan:</strong> SUV thể thao nhỏ gọn, năng động.</li>
          <li><strong>Cayenne:</strong> SUV hạng sang mạnh mẽ và rộng rãi.</li>
          <li><strong>Panamera:</strong> Sedan hạng sang hiệu suất cao.</li>
          <li><strong>Taycan:</strong> Dòng xe điện thể thao tiên phong.</li>
        </ul>
      </section>

      <section className="motorsport-section">
        <h2>Di Sản Đua Xe</h2>
        <p>
          Porsche có một lịch sử đua xe vô cùng phong phú và thành công, với vô số chiến thắng tại các giải đua danh tiếng như Le Mans,
          Formula 1 và nhiều giải khác. Tinh thần đua xe và những kinh nghiệm từ đường đua luôn được Porsche truyền tải vào các mẫu xe thương mại.
        </p>
      </section>

      <footer className="about-porsche-footer">
        <p>&copy; {new Date().getFullYear()} Thông tin về Porsche - Niềm đam mê tốc độ và sự hoàn hảo.</p>
      </footer>
    </div>
  );
}

export default AboutPorsche;
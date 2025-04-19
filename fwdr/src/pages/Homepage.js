import Productlist from "../components/Productlist";
import CourseProgram from "../style/CourseProgram.css";

function Homepage(){
    return(
        <div>
            <div class="d-flex justify-content-center">
                <img src="../../images/backgr.jpg"
                    className="img-fluid shadow m-3 rounded-3"
                    style={{width:'80rem', height:"40rem"}}></img>
            </div>
            <h2>Welcome to Posrche Vietnam</h2>
            <Productlist></Productlist>
            <div className="course-program-container">
      <h2 className="main-title">Khám Phá Các Chương Trình Đặc Biệt từ Porsche</h2>
      <p className="introduction">
        Porsche mang đến không chỉ những chiếc xe thể thao hiệu suất cao mà còn cả một thế giới trải nghiệm và kiến thức sâu sắc.
        Khám phá các chương trình được thiết kế đặc biệt để bạn đắm chìm vào đam mê và hiểu rõ hơn về thương hiệu huyền thoại này.
      </p>

      <section className="program-card">
        <img src="../../images/porsche driving experience.jpg" alt="Trải Nghiệm Lái Xe Porsche" className="program-image" />
        <div className="program-details">
          <h3>Trải Nghiệm Lái Xe Porsche</h3>
          <p className="program-description">
            Cảm nhận sự phấn khích khi cầm lái những chiếc Porsche trên đường đua và trong nhiều điều kiện khác nhau.
            Từ những bài học cơ bản đến các khóa huấn luyện chuyên sâu, nâng cao kỹ năng lái xe của bạn lên một tầm cao mới.
          </p>
          <ul>
            <li>Trung tâm Trải nghiệm Porsche (PEC)</li>
            <li>Trải nghiệm Đường đua Porsche (Porsche Track Experience)</li>
            <li>Trải nghiệm Du lịch Porsche (Porsche Travel Experience)</li>
            <li>Trải nghiệm Lái xe trên Băng Porsche (Porsche Ice Experience)</li>
          </ul>
          <a href="/porsche-driving-experience" className="learn-more-button">Tìm hiểu thêm</a>
        </div>
      </section>

      <section className="program-card">
        <img src="../../images/car mechanic porsche.jpg" alt="Đào Tạo Kỹ Thuật Porsche" className="program-image" />
        <div className="program-details">
          <h3>Đào Tạo Kỹ Thuật Porsche</h3>
          <p className="program-description">
            Dành cho những ai đam mê kỹ thuật và muốn trở thành chuyên gia về xe Porsche. Các chương trình đào tạo
            chuyên sâu về chẩn đoán, bảo trì và sửa chữa các dòng xe Porsche hiện đại.
          </p>
          <ul>
            <li>Chương trình Đào tạo Kỹ thuật viên Dịch vụ Porsche</li>
            <li>Đào tạo Kỹ thuật chuyên sâu về các hệ thống điện, hybrid và công nghệ tiên tiến</li>
          </ul>
          <a href="/porsche-technical-training" className="learn-more-button">Tìm hiểu thêm</a>
        </div>
      </section>

      <section className="program-card">
        <img src="../../images/porsche museum stuttgart.jpg" alt="Khám Phá Thương Hiệu và Lịch Sử Porsche" className="program-image" />
        <div className="program-details">
          <h3>Khám Phá Thương Hiệu và Lịch Sử Porsche</h3>
          <p className="program-description">
            Hành trình khám phá câu chuyện huyền thoại đằng sau những chiếc xe Porsche. Từ những khởi đầu đầy đam mê
            đến những cột mốc lịch sử và triết lý thiết kế độc đáo.
          </p>
          <ul>
            <li>Tham quan Bảo tàng Porsche và Hội thảo Giáo dục</li>
            <li>Nội dung Trực tuyến và Hội thảo trên Web về lịch sử và văn hóa Porsche</li>
            <li>Sự kiện và giao lưu cùng cộng đồng Câu lạc bộ Porsche</li>
          </ul>
          <a href="/porsche-brand-history" className="learn-more-button">Tìm hiểu thêm</a>
        </div>
      </section>

      <section className="program-card">
        <img src="../../images/porsche car presentation.webp" alt="Đào Tạo Bán Hàng và Sản Phẩm Porsche" className="program-image" />
        <div className="program-details">
          <h3>Đào Tạo Bán Hàng và Sản Phẩm Porsche</h3>
          <p className="program-description">
            Trở thành chuyên gia tư vấn sản phẩm Porsche với kiến thức sâu rộng về từng dòng xe, công nghệ tiên tiến
            và kỹ năng giao tiếp khách hàng xuất sắc.
          </p>
          <ul>
            <li>Chương trình Đào tạo Sản phẩm chuyên sâu</li>
            <li>Đào tạo Kỹ năng Bán hàng chuyên nghiệp</li>
          </ul>
          <a href="/porsche-sales-training" className="learn-more-button">Tìm hiểu thêm</a>
        </div>
      </section>

      <p className="footer-note">
        Để biết thông tin chi tiết và lịch trình cụ thể của từng chương trình, vui lòng truy cập trang web chính thức của Porsche
        hoặc liên hệ với đại lý ủy quyền gần nhất.
      </p>
    </div>
        </div>
    )
}
export default Homepage;
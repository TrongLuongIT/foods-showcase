export default function StoreInfor() {

    return (
        <div className="contact-info py-3">
            {/* 1. Tiêu đề giờ mở cửa */}
            <h2 className="fw-bold text-uppercase fs-5 mb-4" style={{ letterSpacing: '1px' }}>
                Opening Hours:
            </h2>
            
            {/* 2. Chi tiết giờ làm việc */}
            <div className="mb-4 fs-6 shadow-none">
                <p className="mb-2">
                <span className="fw-bold">Mo-Fr:</span> 9:00 – 19:00
                </p>
                <p className="mb-2">
                <span className="fw-bold">Sa:</span> 11:00 – 16:00
                </p>
                <p className="mb-2 fw-bold text-uppercase">
                Su: CLOSED
                </p>
            </div>

            {/* 3. Đoạn văn mô tả */}
            <p className="text-secondary mb-5 lh-lg fs-7" style={{ maxWidth: '90%' }}>
                Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada 
                condimentum ultrices. Sed et mauris a purus fermentum elementum. 
                Sed tristique semper enim, et gravida orci iaculis et. Nulla facilisi.
            </p>

            {/* 4. Thông tin liên hệ với Icon */}
            <div className="contact-methods mb-5">
                <div className="d-flex align-items-center mb-4">
                <i className="bi bi-telephone-fill text-success fs-5 me-3"></i>
                <span className="fw-bold fs-6 text-dark">0(800) 809-3-614</span>
                </div>
                
                <div className="d-flex align-items-center mb-4">
                <i className="bi bi-skype text-info fs-3 me-3" style={{ color: '#00aff0' }}></i>
                <span className="fw-bold fs-6 text-dark text-uppercase">Companyskype</span>
                </div>

                <div className="d-flex align-items-center mb-4">
                <i className="bi bi-geo-alt-fill text-primary fs-3 me-3"></i>
                <span className="fw-bold fs-6 text-dark text-uppercase">
                    153 Montana Str, New York, 90844-053
                </span>
                </div>
            </div>

            {/* 5. Mạng xã hội */}
            <div className="social-section">
                <h3 className="fw-bold fs-5 mb-3">Social:</h3>
                <div className="d-flex gap-2">
                {/* Facebook */}
                <a href="#" className="btn p-0 rounded-circle d-flex align-items-center justify-content-center text-white" 
                    style={{ width: '45px', height: '45px', backgroundColor: '#4b71ab' }}>
                    <i className="bi bi-facebook fs-7"></i>
                </a>
                {/* Twitter */}
                <a href="#" className="btn p-0 rounded-circle d-flex align-items-center justify-content-center text-white" 
                    style={{ width: '45px', height: '45px', backgroundColor: '#56aced' }}>
                    <i className="bi bi-twitter fs-5"></i>
                </a>
                {/* YouTube */}
                <a href="#" className="btn p-0 rounded-circle d-flex align-items-center justify-content-center text-white" 
                    style={{ width: '45px', height: '45px', backgroundColor: '#cd332d' }}>
                    <i className="bi bi-youtube fs-5"></i>
                </a>
                {/* Instagram */}
                <a href="#" className="btn p-0 rounded-circle d-flex align-items-center justify-content-center text-white" 
                    style={{ width: '45px', height: '45px', backgroundColor: '#464646' }}>
                    <i className="bi bi-instagram fs-5"></i>
                </a>
                </div>
            </div>
            </div>
    )
}
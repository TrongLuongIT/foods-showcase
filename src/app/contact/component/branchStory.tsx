
import ImageMarquee from "@/src/components/common/ImageMarquee";
import { MOCK_BRANCH_IMAGES } from  "@/src/helper/mockData";

export default function BranchStory() {
  return (
    <div className="dark-mode py-5">
      <div className="title-category">
        Our story. <br/>
        Chúng tôi là ai ? <br/>
        Chúng tôi cung cấp những gì ?<br/>
      </div>
      <div className="text-white text-center pb-5">Hình ảnh cửa hàng</div>
      <ImageMarquee images={MOCK_BRANCH_IMAGES}/>
    </div>
  );
}

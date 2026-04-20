import ImageMarquee from '@/src/components/common/ImageMarquee';
import { getOurStoryData } from '@/src/services/contact-service';

export default async function BranchStory() {
  const ourStoryData = await getOurStoryData();
  return (
    <div className="dark-mode py-5">
      <div className="title-category">
        Our story. <br />
        Chúng tôi là ai ? <br />
        Chúng tôi cung cấp những gì ?<br />
      </div>
      <div className="text-white text-center pb-5">Hình ảnh cửa hàng</div>
      <ImageMarquee images={ourStoryData} />
    </div>
  );
}

import { getBanner } from '@/src/services/social-service';
import ImageSlider from './common/ImageSlider';

export default async function HomeBanner() {
  const banners = await getBanner();
  return (
    <div className="p-0">
      <ImageSlider images={banners} />
    </div>
  );
}

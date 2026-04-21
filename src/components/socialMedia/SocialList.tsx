import { getSocialMediaLinks } from '@/src/services/social-service';
import SocialListWrapper from './SocialListWrapper';

export default async function SocialList() {
  const socialList = await getSocialMediaLinks();
  return <SocialListWrapper socialList={socialList} />;
}

import { getSocialMediaLinks } from "@/src/services/social-service";
import SocialListWrapper from "./SocialListWrapper";

export default async function SocialList() {

  const socialList = await getSocialMediaLinks();
  console.log("21312312", socialList);
  return  <SocialListWrapper socialList={socialList} />;
}
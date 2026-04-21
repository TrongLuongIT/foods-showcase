import { getReasonData } from '@/src/services/contact-service';
import BrandReasonClient from './BrandReasonClient';

export default async function BrandReason() {
  const reasonData = await getReasonData();
  return <BrandReasonClient reasonData={reasonData} />;
}

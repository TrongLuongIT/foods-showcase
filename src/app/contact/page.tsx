import ContactForm from './components/ContactForm';
import StoreInfor from './components/StoreInfor';
import BrandReason from './components/BrandReason';
import BranchStory from './components/BranchStory';

export default function ContactPage() {
  return (
    <>
      <BranchStory />

      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <StoreInfor />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <BrandReason />
    </>
  );
}

import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 mt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 xl:px-20 lg:px-20">
        <h1 className="text-3xl font-bold text-center text-[#cb1d5c] mb-6">
          Terms and Conditions for Lotus Healing
        </h1>
        <p className="mb-6">
          Welcome to{" "}
          <strong className="text-[#cb1d5c] text-xl">Lotus Healing</strong>!
          These Terms of Use govern your use of our website, services and
          products. By accessing or using our services, you agree to comply with
          these terms. Please read them carefully and contact us if you have any
          questions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Using Our Services</h2>
        <p className="mb-6">
          By creating a Lotus Healing account or using our services, you agree
          to provide accurate and complete information and keep it updated. Any
          violation of these terms, our policies, or applicable laws may result
          in termination of access to our services. We reserve the right to
          suspend, disable, or terminate your access for any reason.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Licence to You</h2>
        <p className="mb-6">
          We grant you a limited, personal, non-exclusive, non-transferable and
          revocable licence to use our services for personal, non-commercial
          use. You may not share your account with others and you agree not to
          create more than one account unless permitted by Lotus Healing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by and construed in accordance with the laws
          of the State of Wyoming, United States, without regard to its conflict
          of laws principles. Any dispute arising under these Terms shall be
          resolved exclusively in the federal or state courts located in
          Wyoming, United States.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Commercial Use</h2>
        <p className="mb-6">
          Using our services for commercial purposes without our written
          permission is prohibited. Any commercial use of our services requires
          a separate agreement with Lotus Healing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Content</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Our Content</strong>: Lotus Healing provides wellness
            courses and healing sessions. We reserve the right to modify,
            reschedule, or cancel services at any time.
          </li>
          <li>
            <strong>Your Content</strong>: You retain intellectual property
            rights to any content you share with us, but you are responsible for
            it. Lotus Healing does not own any content you create unless
            explicitly agreed.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        <p className="mb-6">
          We welcome your suggestions and feedback about our services. By
          submitting feedback, you grant us the right to use it without
          restriction or compensation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Security</h2>
        <p className="mb-6">
          We care about your security. While we use security measures to protect
          your account, we cannot guarantee that unauthorized third parties will
          not breach our system. Notify us immediately if you notice any
          unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Payments</h2>
        <p className="mb-6">
          We offer paid services, including courses and healing sessions. Fees
          are quoted in local currency and you are responsible for paying all
          applicable fees on time. If your payment method fails, we reserve the
          right to use collection methods.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Pricing and Payment Options
        </h2>
        <p className="mb-6">
          Prices for services may vary depending on your location and other
          factors. Payments can be made in full or through a six-month payment
          plan. In case of failed payments, your access to courses may be
          suspended until the issue is resolved.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
        <p className="mb-6">
          Our Site may contain links to third-party websites. These links are
          provided for your convenience and we are not responsible for the
          content or policies of third-party websites. You agree that we are not
          liable for any loss or damage that may arise from your use of
          third-party services or websites.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Refunds and Cancellations
        </h2>
        <p className="mb-6">
          We offer refunds for eligible services/products, subject to our Refund
          Policy. Refund requests must be made within [X] days of purchase.
          After this period, no refunds will be issued. We reserve the right to
          deny any refund if we believe a refund request is being made
          fraudulently or in bad faith.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Changes to the Terms</h2>
        <p className="mb-6">
          We reserve the right to update these Terms at any time. Significant
          changes will be communicated to you through a banner on the website,
          email, or other communication methods. Your continued use of our
          services after any updates constitutes your acceptance of the revised
          terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contacting Us</h2>
        <div className="bg-gray-200 p-4 rounded-lg">
          <p>
            <strong>Lotus Healing International</strong>
          </p>
          <p>30 N Gould St Ste R, Sheridan, Wyoming, 82801, United States</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@lotushealingcenterllc.org"
              className="text-blue-500"
            >
              info@lotushealingcenterllc.org
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1 (646) 9804507" className="text-blue-500">
              +1 (646) 9804507
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;

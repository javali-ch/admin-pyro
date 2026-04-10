import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <main className="terms-page">
      <section className="terms-container">
        <h1>Legal Policies & Terms</h1>
        <p className="terms-updated">Effective Date: June 2025</p>

        <p>
          This page outlines how PyroSynergy handles your data, and the terms that
          govern service delivery, refunds, and cancellations. By engaging our services
          or using our website, you agree to the terms described below. For questions,
          contact us at <a href="mailto:py@pyrosynergy.com">py@pyrosynergy.com</a>.
        </p>

        <hr />

        <h2>SECTION 01: Privacy Policy</h2>
        <p>
          PyroSynergy ("we," "our," or "us") is committed to handling any information
          you share with us responsibly. This policy describes what we collect, how
          we use it, and your rights regarding that information.
        </p>

        <h3>Information We Collect</h3>
        <p>
          When you interact with us — through our website, contact forms, or during
          the course of a project engagement — we may collect the following:
        </p>
        <ul>
          <li>Basic identification details such as your name and email address</li>
          <li>Business information relevant to your project or inquiry</li>
          <li>Payment and billing information processed through our payment service providers</li>
          <li>Communication records including emails, briefs, and feedback</li>
          <li>General usage data collected automatically through our website (such as browser type and pages visited)</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <p>
          The information we collect is used solely for legitimate business purposes,
          including:
        </p>
        <ul>
          <li>Delivering the services you have engaged us for</li>
          <li>Communicating project updates, proposals, or support</li>
          <li>Processing payments and maintaining billing records</li>
          <li>Improving our website and service offerings</li>
          <li>Complying with applicable legal or regulatory obligations</li>
        </ul>

        <h3>Data Sharing</h3>
        <p>
          We do not sell, rent, or trade your personal information to third parties. We
          may share limited data with trusted service providers (such as payment
          processors or cloud infrastructure providers) strictly to facilitate service
          delivery. These parties are obligated to protect your information and may
          not use it for any other purpose.
        </p>

        <h3>Data Protection</h3>
        <p>
          We take reasonable technical and organizational measures to protect your
          information from unauthorized access, loss, or misuse. While no system is
          entirely risk-free, we maintain standard industry practices to keep your
          data secure.
        </p>
        <p>
          We do not sell your personal data. We do not use it for advertising. We
          collect only what is necessary to serve you effectively.
        </p>

        <h3>Data Retention</h3>
        <p>
          We retain your information for as long as is necessary to fulfill the purposes
          described above, or as required by applicable law. You may contact us at
          any time to request access to, correction of, or deletion of your personal
          data, subject to any legal obligations we may have to retain it.
        </p>

        <h3>Third-Party Links</h3>
        <p>
          Our website may contain links to external sites. We are not responsible for
          the privacy practices or content of those sites and encourage you to
          review their policies independently.
        </p>

        <h3>Policy Updates</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be
          reflected on this page with a revised effective date. Continued use of our
          services following any update constitutes acceptance of the revised terms.
        </p>

        <hr />

        <h2>SECTION 02: Refund Policy</h2>
        <p>
          All services offered by PyroSynergy are project-based and involve the
          allocation of time, resources, and expertise upon commencement. As such,
          our general policy is that payments made are non-refundable once work
          has begun.
        </p>

        <h3>General Terms</h3>
        <ul>
          <li>Payments made prior to project initiation are considered confirmation of engagement</li>
          <li>Once work has commenced on any deliverable, fees paid are non-refundable</li>
          <li>Partial refunds, if applicable, are determined solely at our discretion and based on the scope of work completed at the time of request</li>
        </ul>
        <p>
          We encourage all clients to review proposals, timelines, and
          deliverables carefully before making payment. Questions prior to
          engagement are always welcome.
        </p>

        <h3>Exceptions</h3>
        <p>
          Refund requests may be considered in cases where PyroSynergy is unable
          to deliver the agreed-upon service due to circumstances on our end. Such
          cases will be evaluated individually and resolved in good faith.
        </p>

        <h3>Disputes</h3>
        <p>
          Any payment disputes should be raised directly with us at
          <a href="mailto:py@pyrosynergy.com">py@pyrosynergy.com</a> before initiating a chargeback or dispute through a
          payment provider. We are committed to addressing concerns
          professionally and promptly.
        </p>

        <hr />

        <h2>SECTION 03: Cancellation Policy</h2>
        <p>
          We understand that circumstances can change. The following terms govern
          how project cancellations are handled.
        </p>

        <h3>Before Work Begins</h3>
        <p>
          If you wish to cancel an engagement before any work has commenced,
          please notify us in writing at the earliest opportunity. Cancellations made
          at this stage may be accommodated, subject to any administrative or
          preparation costs already incurred.
        </p>

        <h3>After Work Has Commenced</h3>
        <p>
          Once a project has been initiated — including but not limited to discovery,
          design, development, or strategy work — cancellation may not be possible,
          or may only be partial. In such cases:
        </p>
        <ul>
          <li>Fees for work completed up to the point of cancellation remain due and payable</li>
          <li>Deliverables produced may or may not be transferred, at our discretion, depending on payment status</li>
          <li>Any outstanding balances must be settled before project assets are released</li>
        </ul>
        <p>
          All cancellation requests must be submitted in writing. Verbal requests
          will not be considered official unless confirmed by our team in writing.
        </p>

        <h3>Ongoing Retainers</h3>
        <p>
          For retainer-based or recurring service agreements, cancellation terms are
          as specified in the individual agreement. Where not specified, a minimum
          notice period of 30 days applies. Fees for the active billing period are non-refundable.
        </p>

        <h3>Our Right to Cancel</h3>
        <p>
          PyroSynergy reserves the right to discontinue services at any time if a
          client is in breach of agreed terms, including failure to make timely
          payments or provide necessary inputs for project progression. In such
          cases, fees for completed work remain payable.
        </p>

        <hr />
        
        <p className="copyright">
          © 2025 PyroSynergy. All rights reserved. <br />
          <a href="mailto:py@pyrosynergy.com">py@pyrosynergy.com</a>
        </p>
      </section>
    </main>
  );
};

export default TermsAndConditions;

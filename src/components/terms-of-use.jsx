import React from "react";
import Layout from "./layout";

function TermsOfUse() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          {/* <p className="font-semibold mb-2">Legal</p> */}
          <p className="font-semibold mb-2">Copyright Issues</p>
          <p className="mb-4">
            When utilizing the Coachavo website, you may come across documents
            or information resources provided by individuals, companies, or
            organizations that may be protected by U.S. and international
            copyright laws. Any transmission or reproduction of these protected
            items beyond the scope of fair use as defined in copyright law
            requires the express written permission of the copyright holders.
            copyright owners.
          </p>
          <p className="font-semibold mb-2">Disclaimers</p>
          <p className="mb-4">
            The information presented on this website is gathered, maintained,
            and offered for the convenience of visitors. Although efforts are
            made to ensure the information is accurate and current, Coachavo
            cannot guarantee the accuracy or authenticity of information
            originating from third parties. Coachavo is not liable for any
            decisions, actions, or omissions made based on the information
            provided herein, nor for any consequences resulting from such
            reliance.
          </p>
          {/* <p className="mb-4">User Responsibility:</p>
          <p className="mb-4">
            The information presented here is intended for general informational
            purposes only. You are responsible for making informed decisions
            based on your specific circumstances and independent research.
            Coachavo is not liable for any actions or omissions resulting from
            your reliance on website content.
          </p> */}
          <p className="font-semibold mb-2">External Links</p>
          <p className="mb-4">
            This web portal may include hyperlinks to external websites and
            pages maintained by other public and private entities. These
            hyperlinks are created by Coachavo to provide relevant information
            to visitors. However, the inclusion of any link does not imply
            endorsement of the external site, its content, or the sponsoring
            organization. Coachavo reserves the right to remove or replace these
            links at any time without notice.
          </p>
          <p className="mb-4">
            If you encounter issues with linked external websites, please
            contact the respective organization. Coachavo is not responsible for
            the content or functionality of external websites.
          </p>
          {/* <p className="mb-4">
            Please note that inclusion of a hypertext link to an external
            website does not constitute an endorsement of any product, service,
            or organization referenced therein, nor does it imply agreement with
            any views expressed on the linked website. Hypertext links to
            external websites and pages may be removed or replaced at the
            discretion of Coachavo, without prior notice.
          </p>
          <p className="mb-4">
            If you encounter any issues regarding the format, accuracy,
            timeliness, or completeness of a linked external website, please
            contact the organization responsible for that website. Coachavo does
            not exercise control over, nor assume responsibility for, the
            content of linked external websites or pages.
          </p> */}
        </div>
      </div>
    </Layout>
  );
}

export default TermsOfUse;

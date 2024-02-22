import React from "react";
import { Layout } from "../../components";

const Privacy = () => {
  const prohibitedUsers = [
    "In any way that violates any applicable federal, state, local or international law or regulation.",
    "To impersonate or attempt to impersonate another user, or any other person or entity",
    "To contact XAMP offices or sales associates for purposes other than assisting you with your real estate needs.",
    "To infringe upon the rights of others or to engage in activity that violates the privacy rights of others.",
    "To remove or modify any copyright or other intellectual property notices that appear in the website.",
    "To upload invalid data, worms, viruses, or other software agent to the website.",
    "To use any software that intercepts, 'mines,' or otherwise collects information through or from the website.",
    "To use the information provided by the company through the website in making any loan-related decisions.",
    "To access password protected, secure, or non-public areas of the website.",
    "To create links from any website or webpage to any page within the website, and you agree that if XAMP, in its sole and unfettered discretion, requests in writing that you remove any link or links to the website, you will promptly do so.",
    "To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the website, or which, as determined by us, may harm XAMP or users of the website, or expose them to liability",
    "Additionally, you agree not to:",
    "Circumvent any restrictions on access to or availability of the website.",
    "Engage in activity that is harmful to you, the website, or others.",
    "Infringe upon the rights of others.",
    "Engage in activity that violates the privacy of others.",
    "Help others break these rules.",
    "Attempt to interfere with the proper working of the website",
  ];
  return (
    <Layout noAccess={true}>
      <div className="md:w-[718px] px-[16px] pb-[40px] md:pb-[96px] flex flex-col items-start mx-[auto]">
        <div className="md:py-[48px] py-[40px] flex flex-col gap-[12px]">
          <h1 className="font-semibold text-[24px] md:text-[48px] leading-[36px] md:leading-[60px] tracking-[0.02] text-black300">
            We care about your privacy
          </h1>
          <span className="font-normal text-[16px] leading-[18px] tracking-[0.02] text-black200">
            Last update: 12 January 2024
          </span>
        </div>
        <div className="flex flex-col gap-[32px] md:gap-[48px]">
          <span className="font-normal text-[18px] leading-[28px] text-grayText">
            Welcome to XAMP! This page describes the terms and conditions that
            govern your use of the family of XAMP website(s) and application(s).
            Please see XAMP’s Privacy Policy for information on how XAMP
            collects, uses, discloses and secures your data. 
          </span>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            ACCEPTANCE OF USE
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            This website is offered to you by XAMP ( or ‘WE’ or ‘US’ or ’OUR’)
            subject to your acceptance without modification of all of the terms
            and conditions set forth here. These terms and conditions ("Terms of
            Use") are entered into by and between you and XAMP and govern your
            access to and use of our website, including any content,
            information, features, and functionality available on or through the
            website. Please read the Terms of Use carefully before you use the
            Site.
            <br />
            <br /> By using the site, you;
            <br />
            <br /> 1. Acknowledge that you have read and understood these terms
            of use
            <br />
            <br /> 2. Accept these terms of use and agree that they are an
            agreement between YOU and US If you do not agree to these terms, do
            not use this website.
          </p>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            CHANGES TO THE TERMS OF USE
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            We may revise and update these Terms of Use from time to time in our
            sole discretion. All changes are effective immediately we post them
            and apply to all access to and use of the website from that moment
            onwards, pending the next review.
            <br />
            <br /> Your continued use of the website following the posting of
            revised Terms of Use means that you accept and agree to the changes.
            <br />
            <br /> You further waive any right you may have to receive specific
            notice of such changes to these Terms of Use. As a user of the
            website, it is your responsibility to regularly review these Terms
            of Use.
          </p>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            ACCESSING THE SITE AND ACCOUNT SECURITY
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            To create your XAMP account, you will be asked to provide certain
            registration details which include personal information such as your
            name and email address. By continuing to create an account with us,
            you affirm that every detail you provided is true, current and
            complete.
            <br />
            <br /> You also acknowledge that your account is personal to you and
            agree not to provide any other person with access to the website or
            portions of it using your user name, password, or other security
            information. You agree to notify us immediately of any unauthorized
            access to your account through the use of your user name or password
            or any other breach of security. You also agree to ensure that you
            exit from your account at the end of each session.
            <br />
            <br /> We have the right to disable any username, password, or other
            identifier, at any time in our sole discretion for any or no reason,
            including if, in our opinion, you have violated any provision of
            these Terms of Use. 
          </p>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            THIRD PARTY SERVICES
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            These Terms of Use and Privacy Policy only apply when you are on the
            website. Different terms, conditions, and privacy notices will apply
            when you access or use Third-Party Sites, so you should read the
            applicable terms of use and privacy notice before using any
            Third-Party Websites or disclosing any personal information.
            <br />
            <br /> When you access third-party resources on the internet, you do
            so at your own risk. Third-Party Websites are not under our control,
            and you acknowledge that XAMP is not responsible or liable for the
            content, functions, accuracy, legality, appropriateness or any other
            aspect of such websites or resources. The inclusion of any such link
            does not imply our endorsement or any association between us and
            their operators.
            <br />
            <br /> You further acknowledge and agree that we shall not be
            responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with the use
            of or reliance on any such content, goods or services available on
            or through any such Third-Party Website.
            <br />
            <br /> LICENSE GRANT AND RESTRICTIONS
            <br />
            <br />
            By complying with these Terms of Use, we hereby grant to you a
            limited, revocable, non-transferrable, non-exclusive and
            non-sublicensable license to use our website. All rights to use the
            website are granted on the condition that such rights are instantly
            forfeited if you fail to comply with the Terms of Use.
            <br />
            <br /> These Terms of Use provide only a license and not an
            assignment or sale. We transfer no ownership or intellectual
            property interest or title in and to the website to you or anyone
            else. We reserve all rights not expressly granted by these Terms of
            Use. You shall not enter into any contractual relationship or other
            legally binding obligation with any third party or person which
            shall have the purpose or effect of encumbering XAMP or any of its
            services. 
          </p>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            USER OBLIGATION
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            You agree to abide by all applicable local, state, national, and
            international laws and regulations regarding your use of the
            website. By accessing or using the website, you affirm that you are
            at least eighteen (18) years of age. You also acknowledge and agree
            that use of the internet and the website is solely at your own risk.
            We shall not be responsible for damages gotten from your use of our
            website or any third party website.
          </p>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            PROHIBITED USES 
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            You must use this website only for lawful purposes and in accordance
            with these Terms of Use. You agree not to use the website:
            <br />
            <br />
            <ul className="ml-[20px]">
              {prohibitedUsers?.map((user, i) => (
                <li key={i} className="list-disc">
                  {user}
                </li>
              ))}
            </ul>
          </p>
          <h5 className="font-semibold text-[20px] leading-[38px] md:text-[24px] md:leading-[32px] text-black300">
            TRADEMARK AND COPYRIGHT
          </h5>
          <p className="font-normal text-[18px] leading-[28px] text-grayText">
            XAMP’s name, logo, and all related names, logos, product and service
            names, designs, and slogans are trademarks of XAMP or its affiliates
            or licensors. You must not use such marks without getting our
            permission.
            <br />
            <br /> ARBITRATION AND WAIVER OF CLASS ARBITRATION
            <br />
            <br /> Any dispute, controversy or claim arising out of, relating to
            or in connection with these Terms of Use, shall be finally resolved
            by arbitration administered by _______ (arbitration body). The
            number of arbitrators shall be one (1), and the place of arbitration
            shall be ______. The arbitration shall be held, and the award shall
            be rendered, in English. The tribunal shall have the power to rule
            on any challenge to its own jurisdiction or to the validity or
            enforceability of any portion of the agreement to arbitrate.
            <br />
            <br /> The parties agree to arbitrate solely on an individual basis,
            and that this agreement does not permit class arbitration, or any
            claims brought as a plaintiff or class member in any class or
            representative arbitration proceeding. Notwithstanding the
            tribunal's power to rule on its own jurisdiction and the validity or
            enforceability of the agreement to arbitrate, the tribunal has no
            power to rule on the validity or enforceability of the agreement to
            arbitrate solely on an individual basis.
            <br />
            <br /> In the event the prohibition on class arbitration is deemed
            invalid or unenforceable, then the remaining portions of the
            arbitration agreement will remain in force.
            <br />
            <br /> FEEDBACK
            <br />
            <br /> If you provide input or suggestions regarding our website,
            you hereby grant us an unrestricted, perpetual, irrevocable,
            non-exclusive, fully paid, royalty free right to use the feedback
            for any purpose and in any manner we, in our sole discretion, deem
            proper.
            <br />
            <br /> ENTIRE AGREEMENT
            <br />
            <br /> The Terms of Use constitute the sole and entire agreement
            between you and XAMP regarding the website and supersedes every
            previous understanding, agreements, representations, and warranties,
            both written and oral, regarding the website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;

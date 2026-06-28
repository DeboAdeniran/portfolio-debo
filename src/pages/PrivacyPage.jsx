import { useEffect } from 'react'

const Section = ({ number, title, children }) => (
  <div style={{ marginBottom: '36px' }}>
    <h2 style={{
      fontFamily: "'Clash Display', sans-serif",
      fontWeight: 600,
      fontSize: '1.15rem',
      color: '#ffffff',
      marginBottom: '12px',
      letterSpacing: '-0.01em',
    }}>
      {number}. {title}
    </h2>
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '0.9rem',
      color: '#9ca3af',
      lineHeight: 1.85,
    }}>
      {children}
    </div>
  </div>
)

const Li = ({ children }) => (
  <li style={{ marginBottom: '6px', paddingLeft: '4px' }}>{children}</li>
)

const PrivacyPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{
      backgroundColor: '#0a0a0a',
      padding: '120px 8vw 80px',
      minHeight: '100vh',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <h1 style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          color: '#ffffff',
          letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          Privacy and Refund Policy
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.82rem',
          color: '#4b5563',
          marginBottom: '56px',
        }}>
          Last updated: June 2026
        </p>

        <Section number={1} title="Overview">
          This Privacy and Refund Policy describes how I collect, use, store, and protect personal and project-related information provided to me in the course of a freelance engagement. It also sets out the conditions under which refunds are granted. This policy is consistent with the Nigeria Data Protection Regulation (NDPR) 2019, issued under the authority of the National Information Technology Development Agency (NITDA). By engaging my services, you acknowledge and consent to the practices described in this document.
        </Section>

        <Section number={2} title="Data I Collect">
          I collect only the minimum personal and project-related information necessary to carry out the services you commission. This includes:
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>Your full name and business name (if applicable), used to identify you as a client and address communications correctly.</Li>
            <Li>Your email address and phone number, used for project correspondence, invoicing, and delivery notifications.</Li>
            <Li>Project briefs, functional requirements, and any written documentation you supply to define the scope of work.</Li>
            <Li>Design files, brand assets, content, and media you provide for use in the project.</Li>
            <Li>Access credentials (such as hosting login details or API keys) shared for the purpose of deployment or integration, handled strictly under confidentiality obligations.</Li>
            <Li>Payment records, including invoice amounts and confirmed payment receipts, retained for accounting and dispute resolution purposes.</Li>
          </ul>
          I do not collect sensitive personal data (such as government identification numbers, financial account details beyond what is needed for payment, or health information) unless you specifically provide it as part of a project requirement, in which case it is treated with heightened confidentiality.
        </Section>

        <Section number={3} title="How I Use Your Data">
          All information collected is used exclusively for the following purposes:
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>Delivering the agreed services and communicating project updates, feedback requests, and delivery milestones to you.</Li>
            <Li>Generating and issuing invoices and tracking payment status.</Li>
            <Li>Retaining a project reference record for post-delivery support, bug fixes, or future work you commission.</Li>
            <Li>Featuring completed, non-confidential work in my professional portfolio (subject to Section 5 of my Terms and Conditions).</Li>
          </ul>
          I will never use your information for unsolicited marketing, share it with third parties for commercial purposes, or transfer it to any external service outside of what is necessary to execute your project (such as a cloud hosting provider you have selected).
        </Section>

        <Section number={4} title="Data Storage and Protection">
          Project files and communications are stored on password-protected devices and, where applicable, encrypted cloud storage services. Access credentials and sensitive project materials shared with me are not stored in plain text and are deleted from my active systems upon project completion unless retention is required for ongoing support. I implement reasonable technical and organisational measures to prevent unauthorised access, loss, or alteration of your data. However, no digital storage system can guarantee absolute security. In the event of a data breach that affects your personal information, I will notify you within 72 hours of becoming aware of the incident, consistent with the NDPR's incident reporting obligations.
        </Section>

        <Section number={5} title="Confidentiality">
          All information you share during the course of a project is treated as confidential. I will not disclose your project details, business strategies, unpublished content, or proprietary processes to any third party without your prior written consent. This obligation continues beyond the conclusion of the project. If your project involves information that is particularly sensitive or commercially valuable, I am willing to enter into a formal Non-Disclosure Agreement (NDA) before work begins. Please request this before sharing any information you consider proprietary. Where a signed NDA is in place, its terms take precedence over this general confidentiality provision.
        </Section>

        <Section number={6} title="Your Data Rights">
          Under the NDPR, you have the right to request access to the personal data I hold about you, request a correction of any inaccurate data, and request deletion of your personal data at any time after project completion. To exercise any of these rights, contact me via the email address provided on this website. I will respond to all verified data requests within 30 days. Where I am legally or contractually required to retain certain records (such as payment records for tax purposes), I will inform you of the applicable retention period.
        </Section>

        <Section number={7} title="Third-Party Services">
          Where your project requires integration with or deployment on third-party platforms (such as cloud hosting providers, payment gateways, or email services), any data you provide for those integrations is also subject to those platforms' own privacy policies. I will identify all third-party services used in your project and bring any relevant data-handling implications to your attention before implementation.
        </Section>

        <Section number={8} title="Refund Policy">
          The following refund terms apply to all project engagements:
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>Full refund: A complete refund of all fees paid is available if the engagement is cancelled before any development work has commenced. "Commencement of development" means the point at which I have begun writing code, configuring environments, or executing any deliverable task specific to your project, beyond initial planning discussions.</Li>
            <Li>Partial refund: If the project is cancelled after development has begun but before 75% of the agreed deliverables have been completed and presented to you for review, a partial refund will be calculated. The refund amount will correspond to the proportion of the total project fee attributable to the deliverables not yet completed, minus the non-refundable deposit. The exact amount will be determined based on documented progress at the time of cancellation.</Li>
            <Li>No refund: Once 75% or more of the agreed deliverables have been completed and presented to you for review and approval, no refund will be issued. At this stage, a substantial portion of the project value has been delivered, and the investment in time and resources cannot be recovered.</Li>
            <Li>Refund requests must be submitted in writing to the email address provided on this website and must include the reason for cancellation. Approved refunds will be processed within 10 business days of confirmation.</Li>
            <Li>Refunds will not be granted on the basis of a change in business direction, budget revision, or dissatisfaction arising from a failure to communicate requirements that were not documented in the agreed scope.</Li>
          </ul>
        </Section>

        <Section number={9} title="Changes to This Policy">
          I may update this Privacy and Refund Policy from time to time to reflect changes in law, practice, or the nature of services I offer. The date at the top of this page reflects when the policy was last revised. Clients engaged in active projects at the time of any material change will be notified via the contact email on file. Continued engagement after notification constitutes acceptance of the updated terms.
        </Section>

        <Section number={10} title="Contact">
          For any questions, data requests, or concerns about this policy, please reach out through the contact form on this website or directly via the email address listed in my portfolio. I aim to respond to all enquiries within 2 business days.
        </Section>

      </div>
    </main>
  )
}

export default PrivacyPage

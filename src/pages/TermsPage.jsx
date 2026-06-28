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

const TermsPage = () => {
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
          Terms and Conditions
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.82rem',
          color: '#4b5563',
          marginBottom: '56px',
        }}>
          Last updated: June 2026
        </p>

        <Section number={1} title="Introduction and Acceptance">
          These Terms and Conditions govern the professional relationship between me (the freelance Full-Stack Developer) and you (the client) for any web development services rendered. By commissioning a project, making a deposit payment, or providing written confirmation of engagement, you accept these terms in full. These terms apply to every project, regardless of whether a separate contract has been signed, unless a separate written agreement explicitly supersedes a specific clause herein.
        </Section>

        <Section number={2} title="Project Engagement and Scope of Work">
          Every project begins with a defined scope of work, established through a written brief or agreed specification that identifies the deliverables, features, technologies, and timeline. I will not begin development until the scope is confirmed in writing by both parties. Any work that falls outside the agreed scope, including new features, redesigns, or additional pages, constitutes a change request and will be quoted and agreed upon separately before execution. Scope changes do not entitle you to a revised delivery date for previously agreed deliverables unless explicitly renegotiated.
        </Section>

        <Section number={3} title="Payment Terms">
          All fees are quoted and payable in Nigerian Naira (NGN) or an agreed foreign currency equivalent, confirmed in writing before the project commences.
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>A non-refundable deposit of 50% of the total project fee is required before any development work begins. This deposit secures your slot in my schedule and covers initial planning and setup.</Li>
            <Li>The remaining 50% balance is due upon project completion and before the final codebase, credentials, or deployment files are handed over to you.</Li>
            <Li>For projects structured on a monthly retainer, payment for each billing period is due on or before the agreed billing date. A grace period of 48 hours applies, after which the provisions of Section 6 take effect.</Li>
            <Li>Invoices unpaid beyond 14 days of the due date accrue a late payment fee of 5% of the outstanding balance per week, consistent with reasonable commercial practice under Nigerian contract law.</Li>
          </ul>
        </Section>

        <Section number={4} title="Timeline and Delivery">
          I will provide a delivery timeline as part of the agreed scope. This timeline is conditional on timely receipt of all client-supplied materials, including content, design assets, brand files, and feedback at each review stage. Where client delays cause a cumulative hold of more than 5 business days at any stage, I reserve the right to adjust the delivery date proportionally without penalty. I will notify you in writing of any such adjustment. Delivery dates are working estimates, not guarantees, unless a specific deadline is written into a separate binding contract between us.
        </Section>

        <Section number={5} title="Revisions Policy">
          Each project phase includes up to two rounds of revisions, defined as adjustments to existing agreed-upon deliverables. A revision is not the introduction of new functionality or a change in direction. Revisions must be submitted in a single consolidated list per round. Revisions requested after final delivery that fall within the original scope will be accommodated within 7 days of handover at no additional cost. Requests beyond that window, or requests that alter the original scope, will be scoped and quoted as a new engagement.
        </Section>

        <Section number={6} title="Suspension of Work for Non-Payment">
          In cases where payment is structured monthly or in instalments, failure to make payment on the agreed date will result in an immediate suspension of all active development work. During the suspension period:
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>No new features, updates, or fixes will be applied to the project.</Li>
            <Li>I reserve the right to temporarily disable, retract, or restrict access to any deliverables developed within the unpaid billing period, pending settlement of the outstanding balance.</Li>
            <Li>Development will resume within 2 business days of confirmed receipt of the full outstanding payment.</Li>
            <Li>Repeated non-payment constitutes grounds for termination of the engagement under Section 8.</Li>
          </ul>
        </Section>

        <Section number={7} title="Intellectual Property and Ownership Transfer">
          All custom code, components, and deliverables produced for your project remain my intellectual property until full and final payment has been received. Upon receipt of the final balance:
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>Full ownership of the delivered codebase and all project-specific assets is transferred to you.</Li>
            <Li>I retain the right to display the completed project in my professional portfolio, case studies, and social media profiles unless you notify me in writing before project completion that this is not acceptable, in which case we will agree on terms for a confidentiality arrangement.</Li>
            <Li>Third-party libraries, frameworks, or assets incorporated into the project remain subject to their respective open-source or commercial licences. I will notify you of any third-party assets that carry restrictions relevant to your intended use.</Li>
          </ul>
        </Section>

        <Section number={8} title="Termination">
          Either party may terminate the engagement by providing 7 days written notice. Upon termination:
          <ul style={{ paddingLeft: '16px', margin: '10px 0 0' }}>
            <Li>You are liable to pay for all work completed up to the date of termination, calculated on a pro-rata basis against the agreed project fee.</Li>
            <Li>If the termination is initiated by me due to a breach of these terms by you (including non-payment or abusive conduct), the deposit paid is non-refundable and any outstanding balance for work already delivered remains due.</Li>
            <Li>If I terminate without cause, I will refund any portion of fees paid that corresponds to work not yet delivered.</Li>
            <Li>Deliverables produced prior to termination will be handed over only after all outstanding fees have been settled.</Li>
          </ul>
        </Section>

        <Section number={9} title="Refund Policy">
          <ul style={{ paddingLeft: '16px', margin: 0 }}>
            <Li>A full refund of all amounts paid applies if the engagement is cancelled before any development work has commenced. The initial deposit becomes eligible for refund only in this scenario.</Li>
            <Li>If the project is cancelled after development has begun but before 75% of the agreed deliverables have been completed and presented to you for review, a partial refund will be issued. The refund will reflect the proportion of the project fee corresponding to the work not yet delivered, less the non-refundable deposit.</Li>
            <Li>No refund will be issued once 75% or more of the agreed deliverables have been completed and presented to you, regardless of whether you subsequently choose not to proceed with the project.</Li>
            <Li>Refund requests must be submitted in writing. Approved refunds will be processed within 10 business days.</Li>
          </ul>
        </Section>

        <Section number={10} title="Limitation of Liability">
          My liability in connection with any project is limited to the total fees paid by you for that specific project. I am not liable for any indirect, consequential, or incidental losses arising from the use or inability to use the delivered product, including but not limited to lost revenue, lost data, or reputational damage. I make reasonable efforts to deliver secure, functional code but do not warrant that the delivered product will be entirely free from defects or compatible with all future third-party systems, browsers, or platforms unless such compatibility is explicitly specified in the agreed scope.
        </Section>

        <Section number={11} title="Governing Law">
          These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, including but not limited to the Nigerian Law of Contract. Any dispute arising from or in connection with these terms that cannot be resolved amicably between the parties within 21 days of written notice of the dispute shall be submitted to mediation or arbitration in Lagos State, Nigeria, before any litigation is commenced.
        </Section>

      </div>
    </main>
  )
}

export default TermsPage

<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="legal-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Legal</span>
          <span aria-hidden="true">›</span>
          <span>Privacy Policy</span>
        </nav>
        <p class="eyebrow">Legal</p>
        <h1 id="legal-title">Privacy Policy</h1>
        <p class="lead">How lumentale.org collects, uses, and protects information when you use this unofficial community site.</p>
        <p class="legal-updated">Last updated: June 2, 2026</p>
      </div>
    </section>

    <section class="data-section">
      <div class="container">
        <article class="legal-document">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy describes how lumentale.org (“we”, “us”, or “the Site”) handles information when you
            visit or use our website. LumenTale Wiki is an unofficial community site for LumenTale: Memories of Trey. We
            are not affiliated with Beehive Studios, Team17, or any official publisher of the game.
          </p>
          <p>
            By accessing the Site, you agree to the collection and use of information in accordance with this policy. If
            you do not agree, please discontinue use of the Site.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li>
              <strong>Usage data</strong> — pages viewed, referring URLs, approximate region, browser type, device
              type, and timestamps collected through standard server logs or analytics tools.
            </li>
            <li>
              <strong>Technical data</strong> — IP address, cookie identifiers, and similar data needed to deliver the
              Site, prevent abuse, and measure performance.
            </li>
            <li>
              <strong>Communications</strong> — if you email us, we receive the content of your message, your email
              address, and any information you choose to include.
            </li>
          </ul>
          <p>
            We do not require account registration to browse the wiki. We do not knowingly collect personal information
            from children under 13. If you believe a child has provided us personal data, contact us and we will take
            reasonable steps to delete it.
          </p>

          <h2>Cookies and Similar Technologies</h2>
          <p>
            The Site may use cookies, local storage, or similar technologies to remember preferences, keep sessions
            stable, and understand aggregate traffic patterns. You can control cookies through your browser settings.
            Disabling cookies may affect certain features but should not prevent you from reading public wiki content.
          </p>
          <p>
            If we integrate third-party analytics or advertising services in the future, this policy will be updated to
            describe those providers and your choices.
          </p>

          <h2>How We Use Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Operate, maintain, and improve the Site and its reference pages;</li>
            <li>Monitor security, detect abuse, and troubleshoot errors;</li>
            <li>Understand which pages and features are most useful to visitors;</li>
            <li>Respond to inquiries sent to our contact email;</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>Sharing of Information</h2>
          <p>We may share information only in these limited circumstances:</p>
          <ul>
            <li>
              With service providers who host the Site, deliver analytics, or provide email — bound by confidentiality
              and data-processing obligations;
            </li>
            <li>When required by law, regulation, legal process, or enforceable governmental request;</li>
            <li>To protect the rights, property, or safety of the Site, our users, or the public;</li>
            <li>In connection with a merger, acquisition, or asset sale, with notice where required by law.</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            Server logs and analytics records are retained only as long as needed for security, troubleshooting, and
            aggregate reporting, then deleted or anonymized. Email correspondence is kept only as long as necessary to
            respond and maintain a reasonable record of communication.
          </p>

          <h2>International Visitors</h2>
          <p>
            The Site may be accessed from different countries. If you visit from outside the region where our servers
            are located, your information may be transferred to and processed in jurisdictions with different data
            protection laws. By using the Site, you consent to such transfer where permitted by applicable law.
          </p>

          <h2>Your Choices and Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict processing of your
            personal information. To exercise these rights, email
            <a href="mailto:wyong@lumentale.org">wyong@lumentale.org</a>. We will respond within a reasonable timeframe.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The Site may link to external websites such as official game stores, community resources, or social media.
            We are not responsible for the privacy practices of those sites. Review their policies before providing
            personal information.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the
            latest revision. Continued use of the Site after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy may be sent to
            <a href="mailto:wyong@lumentale.org">wyong@lumentale.org</a>.
          </p>
        </article>

        <nav class="legal-nav" aria-label="Legal pages">
          <RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink>
          <RouterLink to="/legal/copyright">Copyright</RouterLink>
          <RouterLink to="/legal/about-us">About Us</RouterLink>
          <RouterLink to="/legal/contact-us">Contact Us</RouterLink>
        </nav>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

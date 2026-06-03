<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="legal-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Legal</span>
          <span aria-hidden="true">›</span>
          <span>Contact Us</span>
        </nav>
        <p class="eyebrow">Legal</p>
        <h1 id="legal-title">Contact Us</h1>
        <p class="lead">How to reach the maintainers of lumentale.org.</p>
        <p class="legal-updated">Last updated: June 2, 2026</p>
      </div>
    </section>

    <section class="data-section">
      <div class="container">
        <article class="legal-document">
          <h2>General Inquiries</h2>
          <p>
            For questions about the wiki, data corrections, guide suggestions, or general feedback, email us at:
          </p>
          <p class="legal-contact-email">
            <a href="mailto:wyong@lumentale.org">wyong@lumentale.org</a>
          </p>
          <p>
            We read every message but cannot guarantee a reply time. Volunteer maintainers handle the inbox in their
            spare time. Please allow several business days for a response during busy periods or after major game patches.
          </p>

          <h2>What to Include in Your Email</h2>
          <p>Help us help you faster by including relevant details:</p>
          <ul>
            <li>
              <strong>Data corrections</strong> — the exact page URL, what is wrong, what it should say, and your game
              version or screenshot if possible;
            </li>
            <li>
              <strong>Broken links or bugs</strong> — browser, device, and steps to reproduce the issue on the Site;
            </li>
            <li>
              <strong>Guide ideas</strong> — a short description of the topic and any steps you have already tested in-game;
            </li>
            <li>
              <strong>Copyright or legal notices</strong> — see our <RouterLink to="/legal/copyright">Copyright</RouterLink>
              page and mark the subject line clearly (e.g. “DMCA Notice”).
            </li>
          </ul>

          <h2>What We Cannot Help With</h2>
          <p>
            This inbox does <strong>not</strong> provide official LumenTale or Memories of Trey support. We cannot restore
            lost save data, refund purchases, ban appeals, or account recovery. For those issues, contact Beehive Studios,
            Team17, or the platform where you bought the game (such as Steam or Nintendo support).
          </p>
          <p>
            We also do not accept unsolicited game keys, paid placement for wiki content, or requests to publish cheats
            that violate the game’s terms of use.
          </p>

          <h2>Privacy and Legal Contacts</h2>
          <p>
            Privacy-related requests under our <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink> and
            contractual questions under our <RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink> should
            also be sent to <a href="mailto:wyong@lumentale.org">wyong@lumentale.org</a> with a descriptive subject line.
          </p>

          <h2>Abuse and Security</h2>
          <p>
            If you discover a security vulnerability affecting the Site, please report it privately to the same address.
            Do not publicly disclose exploitable details before we have had a reasonable chance to investigate. We appreciate
            responsible disclosure.
          </p>

          <h2>No Phone or Postal Mail</h2>
          <p>
            At this time we support contact by email only. We do not list a phone number or mailing address. This keeps
            operating costs low and ensures requests are tracked in writing.
          </p>
        </article>

        <nav class="legal-nav" aria-label="Legal pages">
          <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink>
          <RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink>
          <RouterLink to="/legal/copyright">Copyright</RouterLink>
          <RouterLink to="/legal/about-us">About Us</RouterLink>
        </nav>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

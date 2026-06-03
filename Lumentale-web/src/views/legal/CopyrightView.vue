<template>
  <main class="page-main">
    <section class="page-hero-section" aria-labelledby="legal-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">›</span>
          <span>Legal</span>
          <span aria-hidden="true">›</span>
          <span>Copyright</span>
        </nav>
        <p class="eyebrow">Legal</p>
        <h1 id="legal-title">Copyright Notice</h1>
        <p class="lead">How intellectual property is handled on this unofficial LumenTale community site.</p>
        <p class="legal-updated">Last updated: June 2, 2026</p>
      </div>
    </section>

    <section class="data-section">
      <div class="container">
        <article class="legal-document">
          <h2>Trademarks and Game Content</h2>
          <p>
            <strong>LumenTale</strong>, <strong>Memories of Trey</strong>, and related game names, logos, characters,
            Animon designs, artwork, audio, and other assets referenced on this Site are trademarks or copyrighted works
            of Beehive Studios, Team17, and/or their respective licensors. All rights are reserved by the original
            rights holders.
          </p>
          <p>
            lumentale.org is an independent fan project. We do not claim ownership of official game intellectual
            property. This Site is not approved or sponsored by the copyright or trademark owners.
          </p>

          <h2>Wiki Compilation and Original Text</h2>
          <p>
            Original written content on the Site — including guide prose, page layout, and lookup tables — is owned
            by the Site operators or contributors who license it for use on the wiki, unless otherwise noted.
          </p>
          <p>
            Stat and item fields mirrored from the game are presented for informational purposes to help players
            understand Memories of Trey. We believe this use qualifies as a non-commercial fan reference in most
            jurisdictions, but rights holders may contact us with concerns.
          </p>

          <h2>Images and Media</h2>
          <p>
            Animon portraits, item icons, type symbols, and similar visuals displayed on the Site come from in-game
            assets or community reference pipelines. They are shown at sizes appropriate for identification, not as
            standalone commercial products.
          </p>

          <h2>User and Community Contributions</h2>
          <p>
            If we publish corrections, guides, or notes submitted by community members, contributors grant the Site a
            non-exclusive license to display and maintain that content. Contributors represent that their submissions do
            not violate third-party rights. We may edit, remove, or annotate submissions for clarity or legal compliance.
          </p>

          <h2>Permitted Fan Use</h2>
          <p>You may generally:</p>
          <ul>
            <li>Link to our pages with clear attribution to lumentale.org;</li>
            <li>Quote brief excerpts for discussion, review, or commentary;</li>
            <li>Use the wiki personally while playing Memories of Trey.</li>
          </ul>
          <p>You may not, without prior written permission:</p>
          <ul>
            <li>Republish the full wiki or bulk exports for paid products;</li>
            <li>Remove copyright or disclaimer notices from copied material;</li>
            <li>Imply official endorsement when redistributing our content.</li>
          </ul>

          <h2>DMCA and Takedown Requests</h2>
          <p>
            If you believe content on the Site infringes your copyright, send a detailed notice to
            <a href="mailto:wyong@lumentale.org">wyong@lumentale.org</a> including:
          </p>
          <ul>
            <li>Identification of the copyrighted work claimed to be infringed;</li>
            <li>Identification of the material on the Site and its URL;</li>
            <li>Your contact information and a statement of good-faith belief;</li>
            <li>A statement, under penalty of perjury where applicable, that the information is accurate and you are authorized to act.</li>
          </ul>
          <p>We will review valid notices and remove or disable access to disputed material where appropriate.</p>

          <h2>Contact</h2>
          <p>
            Copyright inquiries: <a href="mailto:wyong@lumentale.org">wyong@lumentale.org</a>.
          </p>
        </article>

        <nav class="legal-nav" aria-label="Legal pages">
          <RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink>
          <RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink>
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

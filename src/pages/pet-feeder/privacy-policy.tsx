import React from "react";

import { Layout, SEO } from "../../components";

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <h1>Politique de confidentialité relative à l'application Pet Feeder</h1>
    <h2>Utilisation de l'appareil photo</h2>
    <div style={{ maxWidth: 600 }}>
      <p>
        Afin de garantir une expérience plus interactive, l'application Pet
        Feeder vous demande une autorisation d'accès la galerie de votre
        appareil photo.
      </p>
      <p>
        Cet accès est nécessaire pour vous permettre de modifier votre photo de
        profil au sein de l'application.
      </p>
      <p>
        L'accès à la galerie de votre appareil photo est utilisé exclusivement à
        cette fin, et avec votre consentement.
      </p>
    </div>
  </Layout>
);

export default PrivacyPolicyPage;

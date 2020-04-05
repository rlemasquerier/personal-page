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
        Feeder demande à l'utilisateur une autorisation d'accès la galerie de
        l'appareil photo.
      </p>
      <p>
        Cet accès est nécessaire pour permettre à l'utilisateur de modifier sa
        photo de profil au sein de l'application Pet Feeder.
      </p>
      <p>
        L'accès à la galerie de l'appareil photo est utilisé exclusivement à
        cette fin d'affichage au sein de l'application, et avec le consentement
        de l'utilisateur. Aucune autre image personnelle autre que celle choisie
        par l'utilisateur ne sera utilisée.
      </p>
    </div>
  </Layout>
);

export default PrivacyPolicyPage;

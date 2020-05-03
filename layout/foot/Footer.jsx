import React from 'react';
import Link from 'next/link';

const links = [{ href: '/page/documentation', label: 'Documentation' }].map(
  link => ({
    ...link,
    key: `Footer-link-${link.href}-${link.label}`,
  }),
);

function Footer() {
  return (
    <footer className="footer-main">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <small className="text-muted">Copyright 2020</small>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <style jsx>
          {`
            .text-dark {
              text-decoration: none;
            }
          `}
        </style>
      </ul>
    </footer>
  );
}

export default Footer;

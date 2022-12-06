import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";


export const Header = ({ navigation, settings }) => {
  return (
      <div className="navbar">
        <PrismicLink href="/" className="logo">
        <PrismicText field={settings.data.siteTitle} />
        </PrismicLink>
        <nav>
          <ul>
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  );
};

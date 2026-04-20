'use client';
import styled from 'styled-components';

import { FooterCollectionInterface } from '@/src/helper/apiData/dataFormat';

export default function Footer({ data }: { data: FooterCollectionInterface[] }) {
  return (
    <FooterStyle>
      <div className="container p-0">
        <div className="row m-0">
          {data.map((collection, index) => (
            <div key={index} className="div-box p-3 col-md-6">
              {/* MOBILE VERSION */}
              <div
                className="d-flex d-md-none justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target={`#footerMenu${index}`}
                aria-expanded="false"
                aria-controls={`footerMenu${index}`}
              >
                <span>{collection.title}</span>
                <span className="arrow-collapse"></span>
              </div>
              <div className="collapse" id={`footerMenu${index}`}>
                {collection.rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="p-2 pb-0">
                    {row.name}
                  </div>
                ))}
              </div>

              {/* DESKTOP VERSION */}
              <div className="d-none d-md-block">
                {collection.rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="p-2 pb-0">
                    {row.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  background-color: #222;
  color: #fff;

  .div-box {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

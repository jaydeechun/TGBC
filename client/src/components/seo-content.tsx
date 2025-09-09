export default function SEOContent() {
  return (
    <>
      {/* Structured Data for Enhanced SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "TGB Contracting Group",
          "alternateName": "TGB Contracting",
          "url": "https://www.tgbcontracting.com",
          "logo": "https://www.tgbcontracting.com/attached_assets/TGB Logo-HIRES_1749358570931.png",
          "description": "Veteran-owned residential remodeling contractor serving Maryland and Washington DC since 2009",
          "foundingDate": "2009",
          "numberOfEmployees": "15-25",
          "knowsAbout": [
            "Kitchen Remodeling",
            "Bathroom Renovation", 
            "Home Additions",
            "IKEA Kitchen Installation",
            "Basement Finishing",
            "Home Renovation",
            "Residential Construction"
          ],
          "memberOf": [
            {
              "@type": "Organization",
              "name": "Maryland Home Improvement Commission",
              "url": "https://www.dllr.state.md.us/license/mhic/"
            },
            {
              "@type": "Organization", 
              "name": "Small Business Administration",
              "description": "Certified Veteran-Owned Small Business"
            }
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Professional License",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Maryland Home Improvement Commission"
              }
            }
          ],
          "award": [
            "5-Star Customer Rating",
            "Veteran-Owned Business Certification",
            "MHIC Licensed Contractor"
          ]
        })
      }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList", 
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.tgbcontracting.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "IKEA Kitchen Installation",
              "item": "https://www.tgbcontracting.com/ikea-kitchens"
            },
            {
              "@type": "ListItem", 
              "position": 3,
              "name": "Admin Portal",
              "item": "https://www.tgbcontracting.com/admin"
            }
          ]
        })
      }} />

      <div className="sr-only" role="complementary" aria-label="SEO Content">
        {/* Semantic HTML5 Structure for SEO */}
        <article itemScope itemType="https://schema.org/LocalBusiness">
          <header>
            <h1 itemProp="name">TGB Contracting Group - Premier Home Remodeling Contractor Maryland Washington DC</h1>
            <p itemProp="description">
              Veteran-owned residential remodeling contractor serving Maryland and Washington DC since 2009. 
              MHIC licensed (#156643) and DCRA licensed (#410525000646) with 5-star customer rating specializing in kitchen renovations, bathroom remodeling, 
              home additions, basement finishing, and IKEA kitchen installations.
            </p>
          </header>

          <section aria-labelledby="services-heading">
            <h2 id="services-heading">Comprehensive Home Remodeling Services</h2>
            
            <div itemScope itemType="https://schema.org/Service">
              <h3 itemProp="name">Kitchen Renovation Specialists Maryland DC</h3>
              <p itemProp="description">
                Expert kitchen remodeling including custom cabinet installation, granite and quartz countertops, 
                modern appliance integration, kitchen islands, open concept design, and professional IKEA kitchen 
                installation throughout Montgomery County MD, Prince George's County MD, and Washington DC.
              </p>
            </div>

            <div itemScope itemType="https://schema.org/Service">
              <h3 itemProp="name">Bathroom Remodeling Contractors Maryland Washington DC</h3>
              <p itemProp="description">
                Complete bathroom renovation expertise including walk-in showers, luxury soaking tubs, heated floors, 
                accessibility modifications, master bathroom remodels, and guest bathroom updates for Maryland 
                and DC homeowners seeking modern, functional bathroom designs.
              </p>
            </div>

            <div itemScope itemType="https://schema.org/Service">
              <h3 itemProp="name">Home Addition Contractors Washington DC Maryland</h3>
              <p itemProp="description">
                Professional home addition services including second story additions, in-law suites, sunrooms, 
                family room extensions, and room additions that seamlessly integrate with existing architecture 
                in Baltimore County MD, Anne Arundel County MD, Georgetown DC, and Capitol Hill.
              </p>
            </div>

            <div itemScope itemType="https://schema.org/Service">
              <h3 itemProp="name">IKEA Kitchen Installation Maryland DC - Official Referral Partner</h3>
              <p itemProp="description">
                TGB Contracting is an Official IKEA Referral Partner serving Maryland and Washington DC with over 
                2,500 completed IKEA kitchen projects. Expert IKEA SEKTION cabinet assembly, installation, 
                mechanical, electrical, and plumbing work, plus custom modifications for perfect kitchen transformations.
              </p>
            </div>

            <div itemScope itemType="https://schema.org/Service">
              <h3 itemProp="name">Basement Finishing Maryland Washington DC</h3>
              <p itemProp="description">
                Transform basements into functional living spaces with professional basement finishing services 
                including recreation rooms, home offices, guest suites, and entertainment areas throughout 
                Maryland and Washington DC with proper waterproofing and code compliance.
              </p>
            </div>
          </section>

          <section aria-labelledby="service-areas-heading">
            <h2 id="service-areas-heading">Service Areas - Maryland Washington DC</h2>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/State">
              <h3>Maryland Counties Served</h3>
              <ul>
                <li itemProp="name">Montgomery County MD - Bethesda, Rockville, Silver Spring, Gaithersburg</li>
                <li itemProp="name">Prince George's County MD - College Park, Bowie, Hyattsville</li>
                <li itemProp="name">Baltimore County MD - Towson, Catonsville, Dundalk</li>
                <li itemProp="name">Anne Arundel County MD - Annapolis, Glen Burnie, Severna Park</li>
                <li itemProp="name">Howard County MD - Columbia, Ellicott City</li>
                <li itemProp="name">Charles County MD - Waldorf, La Plata</li>
                <li itemProp="name">Calvert County MD - Prince Frederick, Solomons</li>
                <li itemProp="name">Eastern Shore MD - Ocean City, Salisbury, Cambridge</li>
                <li itemProp="name">Baltimore City MD - Downtown, Federal Hill, Fells Point</li>
              </ul>
            </div>

            <div itemProp="areaServed" itemScope itemType="https://schema.org/City">
              <h3>Washington DC Areas</h3>
              <ul>
                <li itemProp="name">Georgetown Washington DC</li>
                <li itemProp="name">Capitol Hill Washington DC</li>
                <li itemProp="name">Dupont Circle Washington DC</li>
                <li itemProp="name">Adams Morgan Washington DC</li>
                <li itemProp="name">Logan Circle Washington DC</li>
              </ul>
            </div>


          </section>

          <section aria-labelledby="credentials-heading">
            <h2 id="credentials-heading">Licensed & Certified Contractor Credentials</h2>
            <div itemScope itemType="https://schema.org/Organization">
              <p itemProp="description">
                MHIC Licensed Maryland contractor serving residential remodeling needs throughout the Mid-Atlantic region. 
                Fully insured with comprehensive 5-year warranty on all workmanship. SBA Certified Veteran-Owned Small Business 
                providing military-precision quality and reliability for every home improvement project.
              </p>
              
              <div itemProp="hasCredential">
                <span>Maryland Home Improvement Commission Licensed</span> • 
                <span>Washington DC Licensed Contractor</span> • 
                <span>Veteran-Owned Business Certified</span> • 
                <span>Fully Insured & Bonded</span>
              </div>
            </div>
          </section>

          <section aria-labelledby="keywords-heading" className="sr-only">
            <h2 id="keywords-heading">Keywords and Search Terms</h2>
            <p>
              home remodeling maryland, kitchen renovation dc, 
              home additions maryland, veteran owned contractor, MHIC licensed contractor, 
              residential remodeling, kitchen cabinets installation, IKEA kitchen installer, 
              basement finishing maryland, home improvement contractor dc, kitchen remodel bethesda, 
              bathroom renovation rockville, home additions silver spring, contractor montgomery county, 
              home remodeling prince georges county, kitchen renovation baltimore county, 
              contractor anne arundel county, home improvement washington dc
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
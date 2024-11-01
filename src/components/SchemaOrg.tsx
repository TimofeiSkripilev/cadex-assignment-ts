import { Organization, WebSite, WithContext } from 'schema-dts';
import { baseConfig } from '@/config/metadata'; 
interface SchemaOrgProps {
  type: 'Organization' | 'Website';
  customData?: Record<string, unknown>;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, customData = {} }) => {
  const schemas = {
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: baseConfig.companyName,
      url: baseConfig.baseUrl,
      logo: `${baseConfig.baseUrl}/logo.png`,
      sameAs: [
        'https://twitter.com/somecompany',
        'https://facebook.com/somecompany',
        'https://linkedin.com/company/somecompany',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7890',
        contactType: 'customer service',
        availableLanguage: ['English'],
      },
      ...customData,
    } as WithContext<Organization>,

    Website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: baseConfig.companyName,
      url: baseConfig.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseConfig.baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      ...customData,
    } as WithContext<WebSite>,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas[type]),
      }}
    />
  );
};

export default SchemaOrg;
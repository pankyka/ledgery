import type { Core } from '@strapi/strapi';

const apiTypes = [
  'api::invoice.invoice',
  'api::invoice-item.invoice-item',
  'api::partner.partner',
  'api::tenant.tenant',
  'api::tenant-activity.tenant-activity',
  'api::user-detail.user-detail',
];

export default async function enableContentTypes(strapi: Core.Strapi) {
  const { contentTypes } = await strapi
    .plugin('content-type-builder')
    .service('content-types')
    .getContentTypes();

  for (const ct of contentTypes.filter(ct => apiTypes.includes(ct.uid))) {
    if (!ct.visible) {
      await strapi
        .plugin('content-type-builder')
        .service('content-types')
        .updateContentType(ct.uid, {
          contentType: {
            ...ct,
            visible: true,
          },
        });

      strapi.log.info('UserDetail content type published programmatically.');
    }
  }
}

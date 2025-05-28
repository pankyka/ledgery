import { factories } from '@strapi/strapi';
import { v4 as uuidv4 } from 'uuid';

export default factories.createCoreController('plugin::users-permissions.user', ({ strapi }) => ({
  async afterCreate(event) {
    const { result } = event;

    const token = uuidv4();
    const confirmationUrl = `${process.env.EMAIL_CONFIRMATION_URL}?token=${token}`;

    // Mentjük a tokent a user rekordba
    await strapi.entityService.update('plugin::users-permissions.user', result.id, {
      data: { confirmation_token: token }
    });

    // Email kiküldés
    await strapi.plugins['email'].services.email.send({
      to: result.email,
      subject: 'Erősítsd meg az email címed',
      html: `<p>Kérlek kattints az alábbi linkre az email címed megerősítéséhez:</p>
             <a href="${confirmationUrl}">${confirmationUrl}</a>`
    });
  },
}));
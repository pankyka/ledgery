export default {
  routes: [
    {
      method: 'GET',
      path: '/tenant-activities/me',
      handler: 'api::tenant-activity.tenant-activity.findTenant',
      config: {},
    },
  ],
};

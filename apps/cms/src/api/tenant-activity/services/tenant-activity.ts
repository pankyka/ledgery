import { ActivityAction } from '../../../types/activity-action.enum';
import { ActivityType } from '../../../types/activity-type.enum';

export default {
  async log(
    user: number | { id: number },
    tenant: number | { id: number },
    activityType: ActivityType,
    activity: ActivityAction,
    ipAddress?: string,
  ) {
    const userId = typeof user === 'object' && user !== null ? user.id : user;
    const tenantId =
      typeof tenant === 'object' && tenant !== null ? tenant.id : tenant;

    const data: Record<string, any> = {
      timestamp: new Date(),
      user: userId,
      tenant: tenantId,
      activityType,
      activity,
    };

    if (ipAddress) {
      (data as any).ipAddress = ipAddress;
    }

    return strapi.entityService.create('api::tenant-activity.tenant-activity', {
      data,
    });
  },
};

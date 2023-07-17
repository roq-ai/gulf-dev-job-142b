interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: [],
  tenantRoles: ['Recruiter', 'HR Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'gulf dev job',
  addOns: ['chat', 'notifications', 'file'],
};

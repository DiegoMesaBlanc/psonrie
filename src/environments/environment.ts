// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const URI = 'https://vip-busintco-dev.co.xcd.net.intra:20310'
// const URI = 'https://vip-busintco-test.co.xcd.net.intra:20310'


export const environment = {
  production: false,


  customerId: '80',
  customer: 'Scotiabank Colpatria',


  personalInfo: {
    endpoint: `${URI}/personalInfo/v1/`,
    get: {
      headers: {
        serviceOperation: 'all_info',
        appVersion: '2.0',
        partnerDesc: 'Cardif- Desarrollo',
        userName: 'unitTest',
        serviceName: 'Customer - V2.0',
        userId: '1001',
        countryId: '1',
        countryDesc: 'Colombia',
        operationId: '8752123254',
        channelDesc: 'Colombia',
        partnerId: '0',
        channelId: '1',
        timestamp: new Date().toISOString().replace('Z', '')
      },
    },
  },
  servicesLiferay: {
    Authorization: 'Basic Y2FyZGlmQGF0ZW5jaW9uYWxjbGllbnRlLmNhcmRpZi5jb20uY286VHJhbnNmb3JtYWNpb24yMDE5Kg==',
    conditioned: {
      endpoint: `${URI}/liferay/conditioned`
    },
  },
};

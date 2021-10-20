// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const URI = 'https://www.psonrie.com/api/interview-test'


export const environment = {
  production: false,


  login: {
    endpoint: `${URI}/login`,
  },
  psychologist: {
    endpoint: `${URI}/psychologist`
  },
};

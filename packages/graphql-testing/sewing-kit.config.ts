import {createPackage} from '@sewing-kit/config';

import {quiltPackage} from '../../config/sewing-kit';

export default createPackage(pkg => {
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'matchers', root: './src/matchers'});
  pkg.use(quiltPackage());
});

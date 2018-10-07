import _ from 'lodash';
import faker from 'faker';

export default _.times(100, i => ({
  name: faker.name.firstName()
}));

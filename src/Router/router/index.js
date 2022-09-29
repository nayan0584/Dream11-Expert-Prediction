import Teamselectionscreen from '../../Screens/Teamselectionscreen';
import Homescreen from './../../Screens/Homescreem';
import Matchscreen from './../../Screens/Matchscreen';
import Policyscreen from './../../Screens/Policyscreen';

export default routes = [
  {key: 'Homescreen', name: 'Homescreen', component: Homescreen},
  {key: 'Matchscreen', name: 'Matchscreen', component: Matchscreen},
  {key: 'Policyscreen', name: 'Policyscreen', component: Policyscreen},
  {
    key: 'Teamselectionscreen',
    name: 'Teamselectionscreen',
    component: Teamselectionscreen,
  },
];

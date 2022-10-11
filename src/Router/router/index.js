import Teamselectionscreen from '../../Screens/Teamselectionscreen';
import Homescreen from './../../Screens/Homescreem';
import Matchscreen from './../../Screens/Matchscreen';
import Policyscreen from './../../Screens/Policyscreen';
import Teamscreen from '../../Screens/Teamscreen';
import Fullscreenteam from '../../Screens/Fullscreenteam';

export default routes = [
  {key: 'Homescreen', name: 'Homescreen', component: Homescreen},
  {key: 'Matchscreen', name: 'Matchscreen', component: Matchscreen},
  {key: 'Policyscreen', name: 'Policyscreen', component: Policyscreen},
  {
    key: 'Teamselectionscreen',
    name: 'Teamselectionscreen',
    component: Teamselectionscreen,
  },
  {key: 'Teamscreen', name: 'Teamscreen', component: Teamscreen},
  {key: 'Fullscreenteam', name: 'Fullscreenteam', component: Fullscreenteam},
];

import { Head } from './components/Head';
import { OfflineNotification } from './components/OfflineNotification';
import { Stories } from './components/Stories';
import { Body } from './styles/Body';

function App() {
  return (
    <Body>
      <Head />
      <Stories />
      <OfflineNotification />
    </Body>
  );
}

export default App;

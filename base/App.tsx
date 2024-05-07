import LoginNavigation from "./src/telas/navigator/Index.jsx";
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, Layout} from '@ui-kitten/components';

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <LoginNavigation />
    </ApplicationProvider>
  );
}
export default App;

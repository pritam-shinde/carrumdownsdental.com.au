import { useEffect, useState } from 'react';
import { Footer, Header, PPCFooter, PPCHeader } from './Components/Components';
import { useLocation } from 'react-router-dom'
import Routing from './Routing/Routing';

const App = () => {
  const [open, setopen] = useState(false);

  const location = useLocation()

  useEffect(() => {
    setopen(sessionStorage.getItem('open'))
  }, [open])

  return (
    <>
      {location.pathname !== '/dental-emergency/' ? location.pathname !== "/scale-and-clean/" ? location.pathname !== "/dentures/" ? location.pathname !== "/teeth-whitening/" ? location.pathname !== "/child-dental-benefit-schedule/" ? location.pathname !== "/tooth-fillings/" ? location.pathname !== "/veneers/" ? location.pathname ? "/root-canal/" ? location.pathname !== "/dental-implants/" ? location.pathname !== "/wisdom-teeth-removal/" ? location.pathname !== "/crowns-and-bridges/" ? <Header /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader /> : <PPCHeader />}
      <Routing />
      {location.pathname !== '/dental-emergency/' ? location.pathname !== "/scale-and-clean/" ? location.pathname !== "/dentures/" ? location.pathname !== "/teeth-whitening/" ? location.pathname !== "/child-dental-benefit-schedule/" ? location.pathname !== "/tooth-fillings/" ? location.pathname !== "/veneers/" ? location.pathname ? "/root-canal/" ? location.pathname !== "/dental-implants/" ? location.pathname !== "/wisdom-teeth-removal/" ? location.pathname !== "/crowns-and-bridges/" ? <Footer /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter /> : <PPCFooter />}
    </>
  )
}

export default App
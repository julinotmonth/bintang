import Bawaslu from "../component/Bawaslu";
import Breaking from "../component/Breaking";
import Footer from "../component/Footer";
import NavbarBawaslu from "../component/NavbarBawaslu";
import NavbarPertahanan from "../component/NavbarPertahanan";
import Pertahanan from "../component/Pertahanan";

function PagesPertahanan () {
    return (
        <>
            <Breaking />
            <NavbarPertahanan />
            <Pertahanan />
            <Footer />
        </>
    );
}

export default PagesPertahanan;
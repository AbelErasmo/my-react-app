import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div id="fundo">
                <h1 className="titulo">Blog de Tecnologia</h1>
                <p className="slogan">Aqui você encontra os melhores conteúdos sobre Tecnologia</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/portifólio">Meu Portfólio</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">Cadastrar</Link>
                    </li>
                    <li>
                       <div className="dropdown">
                            <div className="dropbtn">Categorias</div>
                            <div className="dropdown-content">
                                <Link to="/categoria/programação">Programação</Link>
                                <Link to="/categoria/redes-de-computadores">Redes de Computadores</Link>
                                <Link to="/categoria/inteligência-artificial">Inteligência Artificial</Link>
                                <Link to="/categoria/robótica">Robótica</Link>
                                <Link to="/categoria/segurança-cibernética">Segurança Cibernética</Link>
                                <Link to="/categoria/marketing-digital">Marketing Digital</Link>
                            </div>
                       </div>
                    </li>
                    <li class="about">
                        <Link to="/portfolio">Sobre Mim</Link>
                    </li>
                    <li class="about">
                    <Link to="/#">
                           
                        </Link>
                    </li>
                    <li class="about">
                        <Link to="/#">
                            
                        </Link>
                    </li>
                    <li class="about">
                        <Link to="/#">
                            
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="animacao">
                <p className="transicao_texto">
                    Aqui voce encontra novidades e promoções de Tecnologia |
                    Aqui voce encontra novidades e promoções de Tecnologia
                </p>
        
            </div>

            <Outlet />
        </>
    )
};
export default Layout;
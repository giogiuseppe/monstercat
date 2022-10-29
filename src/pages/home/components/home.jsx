import { useNavigate } from 'react-router-dom';

import HomeCSS from '../../home/styles/main.module.css';
import LogoMonstercat from '../../../assets/images/logo.png';

export default function RegisterComponent() {
    const navigate = useNavigate();

    return (
        <>
            <div className={HomeCSS.container}>
                <div className={HomeCSS.content}>
                    <div className={HomeCSS.grid}>
                        <img className={HomeCSS.logo} src={LogoMonstercat} alt="..." />
                        <h1 className={HomeCSS.title}>Monstercat</h1>
                    </div>
                    <span className={HomeCSS.subtitle}>É uma plataforma de streaming de música e gravadora.</span>
                </div>
            </div>
        </>
    );
}
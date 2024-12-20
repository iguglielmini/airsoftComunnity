import AresImg from '@/assets/empresas/ares.png';
import RossiImg from '@/assets/empresas/rossi.png';
import KwaImg from '@/assets/empresas/kwa.png';
import ClassicImg from '@/assets/empresas/classic-army.png';

// type
import FuzilImg from '@/assets/images/fuzil.png';
import PistolImg from '@/assets/images/pistol.png';
import SniperImg from '@/assets/images/sniper.png';
import SuporteImg from '@/assets/images/suporte.png';

export const gunsMock = [
  {
    gunName: 'AR-908',
    typeGun: 'Fuzil',
    brandImage: AresImg,
    gunImage: FuzilImg,
  },
  {
    gunName: 'T10 Ronnin',
    typeGun: 'Fuzil',
    brandImage: KwaImg,
    gunImage: FuzilImg,
  },
  {
    gunName: 'LMG 260',
    typeGun: 'Suporte',
    brandImage: ClassicImg,
    gunImage: SuporteImg,
  },
  {
    gunName: 'M40 Storm',
    typeGun: 'Sniper',
    brandImage: AresImg,
    gunImage: SniperImg,
  },
  {
    gunName: 'Glock v19',
    typeGun: 'Pistola',
    brandImage: RossiImg,
    gunImage: PistolImg,
  },
];
